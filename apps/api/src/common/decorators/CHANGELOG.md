# 更新日志

## 📦 ApiResponseJson 装饰器增强 (2024-12)

### ✨ 新增功能

#### 1. Controller 信息自动获取

现在 `ApiResponseJson` 装饰器可以自动获取并打印以下信息：

- ✅ **prefix**: 权限前缀（从 `AuthController` 获取）
- ✅ **url**: Controller 的 URL 路径
- ✅ **tag**: Swagger API 标签
- ✅ **method**: HTTP 请求方法（GET, POST, PUT, DELETE, PATCH 等）
- ✅ **path**: 方法级别的路径
- ✅ **fullPath**: 完整的请求路径（controller url + method path）
- ✅ **propertyKey**: 方法名

#### 2. 格式化控制台输出

添加了美观的控制台输出格式：

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Controller Info:
  - Prefix: sys:user
  - URL: api/sys/user
  - Tag: 用户管理
  - Method: POST
  - Path: 
  - Full Path: api/sys/user
  - Property Key: create
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

#### 3. HTTP 方法映射

自动识别并转换 NestJS 的请求方法：

| 方法枚举 | 输出字符串 |
|---------|-----------|
| 0 | GET |
| 1 | POST |
| 2 | PUT |
| 3 | DELETE |
| 4 | PATCH |
| 5 | ALL |
| 6 | OPTIONS |
| 7 | HEAD |

#### 4. 路径智能拼接

自动拼接 Controller URL 和方法路径，处理多余的斜杠：

```typescript
// Controller URL: 'api/sys/user'
// Method Path: ':id'
// Full Path: 'api/sys/user/:id'
```

### 🔧 技术实现

#### 1. AuthController 装饰器增强

新增元数据存储：

```typescript
// 存储所有controller相关的元数据
Reflect.defineMetadata("prefix", prefix, target);
Reflect.defineMetadata("controller:url", url, target);
Reflect.defineMetadata("controller:tag", options.tag || "default", target);
```

#### 2. ApiResponseJson 装饰器改进

使用 NestJS 内置常量获取路由信息：

```typescript
import { PATH_METADATA, METHOD_METADATA } from '@nestjs/common/constants';

// 获取方法上的路由元数据
const methodPath = Reflect.getMetadata(PATH_METADATA, descriptor.value) || "";
const requestMethod = Reflect.getMetadata(METHOD_METADATA, descriptor.value) || "UNKNOWN";
```

### 📝 新增接口

#### ControllerInfo 接口

```typescript
export interface ControllerInfo {
  /** 权限前缀 */
  prefix: string;
  /** Controller URL */
  url: string;
  /** API 标签 */
  tag: string;
  /** 请求方法 (GET, POST, PUT, DELETE 等) */
  method: string;
  /** 方法路径 */
  path: string;
  /** 完整路径 (controller url + method path) */
  fullPath: string;
}
```

### 📚 文档更新

新增以下文档：

1. **README.md** - 完整的使用文档
2. **QUICK_START.md** - 快速开始指南
3. **api-response.example.ts** - 丰富的示例代码
4. **CHANGELOG.md** - 本更新日志

### 🎯 使用示例

#### 基础使用

```typescript
@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  perms: 'sys:user'
})
export class UserController {
  
  @Post()
  @ApiResponseJson(UserDto, '创建用户')
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
```

#### 输出效果

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Controller Info:
  - Prefix: sys:user
  - URL: api/sys/user
  - Tag: 用户管理
  - Method: POST
  - Path: 
  - Full Path: api/sys/user
  - Property Key: create
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 🔄 兼容性

- ✅ 向后兼容原有功能
- ✅ 不影响现有代码
- ✅ 仅在应用启动时输出信息
- ✅ 无运行时性能影响

### 🐛 修复

- 修复了装饰器返回类型问题
- 优化了路径拼接逻辑
- 改进了错误处理

### 📊 影响范围

#### 修改的文件

1. `authController.decorator.ts` - 新增元数据存储
2. `api-response.decorator.ts` - 新增信息获取和输出逻辑

#### 新增的文件

1. `README.md` - 详细文档
2. `QUICK_START.md` - 快速指南
3. `api-response.example.ts` - 示例代码
4. `CHANGELOG.md` - 更新日志

### 🚀 后续计划

#### 可能的增强功能

1. **环境变量控制**
   ```typescript
   // 通过环境变量控制是否输出
   if (process.env.NODE_ENV === 'development') {
     console.log('Controller Info:', controllerInfo);
   }
   ```

2. **信息持久化**
   ```typescript
   // 将路由信息存储到全局注册表
   const ROUTE_REGISTRY = new Map<string, ControllerInfo>();
   ```

3. **自定义输出格式**
   ```typescript
   // 支持自定义输出格式
   @ApiResponseJson(UserDto, {
     summary: '创建用户',
     logFormat: 'json' // 或 'table', 'simple'
   })
   ```

4. **权限验证集成**
   ```typescript
   // 与权限系统更紧密集成
   @ApiResponseJson(UserDto, {
     summary: '创建用户',
     requiredPermissions: ['sys:user:add']
   })
   ```

### 💡 使用建议

1. **开发环境**
   - 启动应用时查看完整的路由信息
   - 验证权限前缀配置是否正确
   - 确认路由路径是否符合预期

2. **调试技巧**
   - 通过 `Full Path` 验证路由配置
   - 通过 `Prefix` 确认权限设置
   - 通过 `Method` 检查 HTTP 方法

3. **最佳实践**
   - 始终使用 `AuthController` 装饰器
   - 为每个接口添加清晰的说明
   - 返回数组时使用数组语法 `[UserDto]`

### 📞 联系方式

如有问题或建议，请联系开发团队。

### 🎉 总结

此次更新大大增强了 `ApiResponseJson` 装饰器的功能，使其不仅能够处理响应格式化，还能够提供完整的路由信息，极大地改善了开发体验和调试效率。

---

**更新时间**: 2024年12月
**版本**: v2.0.0
