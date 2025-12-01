# ApiResponseJson 装饰器使用文档

## 概述

`ApiResponseJson` 装饰器已增强，现在可以自动获取并打印 Controller 的完整信息，包括：

- **prefix**: 权限前缀（从 `AuthController` 装饰器获取）
- **url**: Controller 的 URL 路径
- **tag**: Swagger API 标签
- **method**: HTTP 请求方法（GET, POST, PUT, DELETE 等）
- **path**: 方法级别的路径
- **fullPath**: 完整路径（controller url + method path）

## 功能特性

### 1. 自动获取 Controller 信息

装饰器会自动从以下位置提取信息：

- **Controller 级别元数据**（通过 `AuthController` 装饰器设置）
  - `prefix`: 权限前缀
  - `controller:url`: Controller URL
  - `controller:tag`: API 标签

- **方法级别元数据**（通过 NestJS 路由装饰器设置）
  - `PATH_METADATA`: 方法路径
  - `METHOD_METADATA`: HTTP 方法类型

### 2. 控制台输出

每次使用 `ApiResponseJson` 装饰器时，会在控制台输出格式化的 Controller 信息：

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Controller Info:
  - Prefix: app
  - URL: app
  - Tag: app
  - Method: GET
  - Path: test2
  - Full Path: app/test2
  - Property Key: test2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 使用示例

### 基础使用

```typescript
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AuthController } from '../decorators/authController.decorator';
import { ApiResponseJson } from '../decorators/api-response.decorator';

@AuthController({
  url: 'app',
  tag: 'app',
  perms: 'app:custom'  // 可选，不指定则根据 url 自动生成
})
export class AppController {
  
  @Get('test2')
  @ApiResponseJson(TestResult1, {
    description: '测试接口2',
  })
  test2() {
    return {
      result: '123',
      rest: '00',
    };
  }
}
```

**输出信息：**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Controller Info:
  - Prefix: app:custom         // 使用自定义 perms
  - URL: app
  - Tag: app
  - Method: GET
  - Path: test2
  - Full Path: app/test2
  - Property Key: test2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 完整的 CRUD 示例

```typescript
import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { AuthController } from '../decorators/authController.decorator';
import { ApiResponseJson } from '../decorators/api-response.decorator';
import { UserDto, CreateUserDto, UpdateUserDto } from './dto';

@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  perms: 'sys:user'
})
export class UserController {
  
  // POST 请求示例
  @Post()
  @ApiResponseJson(UserDto, { summary: '创建用户' })
  create(@Body() dto: CreateUserDto) {
    // 控制台会输出:
    // Prefix: sys:user
    // Method: POST
    // Full Path: api/sys/user
    return this.userService.create(dto);
  }

  // GET 请求示例
  @Get()
  @ApiResponseJson([UserDto], '查询用户列表')
  findAll(@Query() query: any) {
    // 控制台会输出:
    // Prefix: sys:user
    // Method: GET
    // Full Path: api/sys/user
    return this.userService.findAll(query);
  }

  // GET 带参数示例
  @Get(':id')
  @ApiResponseJson(UserDto, { summary: '查询用户详情' })
  findOne(@Param('id') id: string) {
    // 控制台会输出:
    // Prefix: sys:user
    // Method: GET
    // Path: :id
    // Full Path: api/sys/user/:id
    return this.userService.findOne(id);
  }

  // PUT 请求示例
  @Put(':id')
  @ApiResponseJson(UserDto, { summary: '更新用户' })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    // 控制台会输出:
    // Prefix: sys:user
    // Method: PUT
    // Path: :id
    // Full Path: api/sys/user/:id
    return this.userService.update(id, dto);
  }

  // DELETE 请求示例
  @Delete(':id')
  @ApiResponseJson(UserDto, { summary: '删除用户' })
  remove(@Param('id') id: string) {
    // 控制台会输出:
    // Prefix: sys:user
    // Method: DELETE
    // Path: :id
    // Full Path: api/sys/user/:id
    return this.userService.remove(id);
  }

  // PATCH 请求示例
  @Patch(':id/status')
  @ApiResponseJson(UserDto, '更新用户状态')
  updateStatus(@Param('id') id: string) {
    // 控制台会输出:
    // Prefix: sys:user
    // Method: PATCH
    // Path: :id/status
    // Full Path: api/sys/user/:id/status
    return this.userService.updateStatus(id);
  }
}
```

### 嵌套路径示例

```typescript
@AuthController({
  url: 'api/v1/admin/users',
  tag: '管理员用户',
})
export class AdminUserController {
  
  @Get('active')
  @ApiResponseJson([UserDto], '获取活跃用户')
  getActiveUsers() {
    // 控制台会输出:
    // Prefix: api:v1:admin:users  // 自动根据 URL 生成
    // URL: api/v1/admin/users
    // Method: GET
    // Path: active
    // Full Path: api/v1/admin/users/active
    return this.userService.getActiveUsers();
  }
}
```

## ControllerInfo 接口

装饰器内部使用的接口定义：

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

## HTTP 方法映射

装饰器支持以下 HTTP 方法的自动识别：

| 装饰器 | 输出方法名 |
|--------|-----------|
| `@Get()` | GET |
| `@Post()` | POST |
| `@Put()` | PUT |
| `@Delete()` | DELETE |
| `@Patch()` | PATCH |
| `@Options()` | OPTIONS |
| `@Head()` | HEAD |
| `@All()` | ALL |

## 权限前缀生成规则

当 `AuthController` 的 `perms` 选项未指定时，会根据 `url` 自动生成：

| URL 示例 | 生成的 Prefix |
|---------|--------------|
| `api/sys/user` | `sys:user` |
| `/admin/role` | `admin:role` |
| `sys/menu/` | `sys:menu` |
| `user/:id` | `user` |
| `api/v1/products` | `v1:products` |

生成规则：
1. 移除前后的斜杠
2. 移除 `api/` 前缀（不区分大小写）
3. 移除路径参数（如 `:id`）
4. 转换为小写
5. 将 `/` 替换为 `:`

## 应用场景

### 1. 调试和日志记录

在开发环境中，可以清晰地看到每个 API 端点的完整信息，便于调试：

```typescript
@Get('test')
@ApiResponseJson(TestDto, '测试接口')
test() {
  // 启动时会输出完整的路由信息
  // 帮助验证路由配置是否正确
  return { message: 'test' };
}
```

### 2. 权限管理

结合 `prefix` 信息，可以轻松追踪每个端点需要的权限：

```typescript
@AuthController({
  url: 'api/sys/menu',
  perms: 'sys:menu'
})
export class MenuController {
  
  @Post()
  @ApiResponseJson(MenuDto, '创建菜单')
  create() {
    // 控制台输出: Prefix: sys:menu
    // 实际权限: sys:menu:add
  }
}
```

### 3. API 文档生成

配合 Swagger，自动生成完整的 API 文档，`tag` 信息用于文档分组：

```typescript
@AuthController({
  url: 'api/products',
  tag: '商品管理'  // 会在 Swagger 中分组显示
})
export class ProductController {
  // ...
}
```

## 注意事项

1. **必须使用 `AuthController` 装饰器**
   - `ApiResponseJson` 依赖 `AuthController` 设置的元数据
   - 如果使用普通的 `@Controller()` 装饰器，部分信息可能无法获取

2. **控制台输出**
   - 输出仅在应用启动时发生（装饰器执行时）
   - 不会在每次请求时输出

3. **性能影响**
   - 元数据读取和控制台输出仅在应用启动时执行一次
   - 对运行时性能无影响

4. **生产环境**
   - 如果不希望在生产环境输出调试信息，可以通过环境变量控制

## 扩展建议

如果需要在运行时使用 Controller 信息，可以将信息存储到全局注册表：

```typescript
// 创建全局注册表
const ROUTE_REGISTRY = new Map<string, ControllerInfo>();

// 在装饰器中注册
export function ApiResponseJson<T>(...) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // ... 获取信息的代码 ...
    
    // 注册到全局
    const key = `${target.constructor.name}.${propertyKey}`;
    ROUTE_REGISTRY.set(key, controllerInfo);
    
    // ... 其余代码 ...
  };
}

// 在其他地方使用
export function getControllerInfo(className: string, methodName: string) {
  return ROUTE_REGISTRY.get(`${className}.${methodName}`);
}
```

## 相关文件

- `authController.decorator.ts` - AuthController 装饰器定义
- `api-response.decorator.ts` - ApiResponseJson 装饰器定义
- `app.controller.ts` - 使用示例

## 更新日志

- **v2.0** - 添加完整 Controller 信息获取功能
  - 新增 `ControllerInfo` 接口
  - 支持获取 HTTP 方法类型
  - 支持获取完整路径
  - 优化控制台输出格式

- **v1.0** - 基础版本
  - 仅支持获取 prefix 信息
