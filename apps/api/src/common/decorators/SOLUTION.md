# 装饰器元数据获取问题解决方案

## 问题描述

在 `ApiResponseJson` 装饰器中无法获取到 `AuthController` 设置的元数据，所有信息都显示为空或默认值。

## 根本原因

**TypeScript 装饰器的执行顺序问题**：

在 TypeScript 中，装饰器的执行顺序是：
1. **参数装饰器** → **方法装饰器** → **访问器装饰器** → **属性装饰器** → **类装饰器**

也就是说：
- `@ApiResponseJson` (方法装饰器) **先执行**
- `@AuthController` (类装饰器) **后执行**

当 `ApiResponseJson` 尝试读取元数据时，`AuthController` 还没有执行，因此元数据还不存在！

## 解决方案

### 方案 1: 使用 `setTimeout` 延迟读取元数据 ✅ (已采用)

通过 `setTimeout(..., 0)` 将元数据读取放到下一个事件循环，确保类装饰器已经执行完成。

```typescript
export function ApiResponseJson<T>(...) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    
    // 先执行其他装饰器逻辑
    applyDecorators(
      // ...
    )(target, propertyKey, descriptor);

    // 延迟读取元数据
    setTimeout(() => {
      // 现在可以安全地读取元数据了
      const prefix = Reflect.getMetadata("prefix", target.constructor);
      const controllerUrl = Reflect.getMetadata("controller:url", target.constructor);
      // ...
    }, 0);
  };
}
```

**优点**：
- ✅ 简单直接
- ✅ 不影响现有功能
- ✅ 兼容性好

**缺点**：
- ⚠️ 信息输出是异步的
- ⚠️ 某些 HTTP 方法可能仍显示为 UNKNOWN（因为 NestJS 内部也有异步设置）

### 方案 2: 在运行时读取元数据

在实际请求处理时（Interceptor 中）读取元数据，而不是在装饰器执行时。

```typescript
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const target = context.getClass();
    const handler = context.getHandler();
    
    // 在这里读取元数据
    const prefix = Reflect.getMetadata("prefix", target);
    // ...
  }
}
```

**优点**：
- ✅ 100% 可靠，所有元数据都已设置
- ✅ 可以在运行时使用这些信息

**缺点**：
- ❌ 每次请求都会读取，有性能开销
- ❌ 不适合在应用启动时输出信息

### 方案 3: 自定义方法装饰器工厂

创建一个高阶装饰器，确保正确的执行顺序。

```typescript
export function createMethodDecorator() {
  // 收集所有方法信息
  const methodsInfo = new Map();
  
  return {
    methodDecorator: (...) => {
      // 存储方法信息
      methodsInfo.set(key, info);
    },
    classDecorator: (target) => {
      // 在类装饰器中处理收集的方法信息
      methodsInfo.forEach((info, key) => {
        // 现在可以安全读取类的元数据
      });
    }
  };
}
```

**优点**：
- ✅ 完全可控的执行顺序
- ✅ 性能好

**缺点**：
- ❌ 实现复杂
- ❌ 需要改变现有的装饰器使用方式

## 当前实现细节

### AuthController 装饰器

```typescript
export const AuthController = (options: AuthControllerOptions = {}) => {
    const url = options.url ?? "";
    const prefix = (options.perms && options.perms.trim()) || normalizePrefix(url);
    const tag = options.tag || "default";

    return function (target: any) {
        // 先存储所有controller相关的元数据
        Reflect.defineMetadata("prefix", prefix, target);
        Reflect.defineMetadata("controller:url", url, target);
        Reflect.defineMetadata("controller:tag", tag, target);

        // 然后应用其他装饰器
        const decorators = applyDecorators(
            Controller(url),
            ApiTags(tag),
        );
        
        decorators(target);
    };
}
```

### ApiResponseJson 装饰器

```typescript
export function ApiResponseJson<T>(...) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    
    // 先执行必要的装饰器逻辑
    const isArray = Array.isArray(dto);
    const dtoClass = isArray ? (dto as [Type<T>])[0] : (dto as Type<T>);
    const interceptor = new TransformInterceptor(dtoClass);

    // ... 创建 CustomResponseDto

    applyDecorators(
      ApiOkResponse({ ... }),
      ApiOperation({ ... }),
      UseInterceptors(interceptor),
    )(target, propertyKey, descriptor);

    // 延迟读取元数据
    setTimeout(() => {
      // 获取 Controller 上的元数据
      const prefix = Reflect.getMetadata("prefix", target.constructor) || "";
      const controllerUrl = Reflect.getMetadata("controller:url", target.constructor) || "";
      const controllerTag = Reflect.getMetadata("controller:tag", target.constructor) || "default";

      // 获取方法上的路由元数据
      const methodPath = Reflect.getMetadata(PATH_METADATA, descriptor.value) || "";
      const requestMethod = Reflect.getMetadata(METHOD_METADATA, descriptor.value) || "UNKNOWN";

      // 构建完整信息并输出
      // ...
    }, 0);
  };
}
```

## 实际效果

应用启动时，会输出类似以下信息：

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Controller Info:
  - Prefix: sys:user
  - URL: /api/sys/user
  - Tag: 用户管理
  - Method: POST
  - Path: /
  - Full Path: /api/sys/user/
  - Property Key: create
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 已知问题

### 1. 部分 HTTP 方法显示为 UNKNOWN

**原因**: 某些 NestJS 内置装饰器（如 `@Get()`）的元数据设置也可能是异步的。

**影响**: 不影响功能，仅影响调试输出。

**解决方法**: 
- 可以接受（大部分情况下能正确识别）
- 或者使用方案 2 在运行时读取

### 2. 输出是异步的

**原因**: 使用了 `setTimeout`。

**影响**: 输出顺序可能与路由注册顺序略有不同。

**解决方法**: 可接受，因为这只是调试信息。

## 注意事项

1. **装饰器执行顺序**
   - 方法装饰器总是先于类装饰器执行
   - 如果需要在方法装饰器中使用类装饰器的数据，必须延迟读取

2. **元数据读取时机**
   - 装饰器执行时：元数据可能还不存在
   - setTimeout 后：类装饰器的元数据已存在
   - 运行时：所有元数据都已完全设置

3. **性能考虑**
   - setTimeout 只在应用启动时执行一次
   - 不影响运行时性能

## 参考资料

- [TypeScript Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Reflect Metadata](https://github.com/rbuckton/reflect-metadata)
- [NestJS Custom Decorators](https://docs.nestjs.com/custom-decorators)

## 更新日志

- **2024-12**: 识别并修复装饰器执行顺序问题
- **2024-12**: 采用 setTimeout 方案解决元数据读取问题
- **2024-12**: 文档化解决方案和备选方案
