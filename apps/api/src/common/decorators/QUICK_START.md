# ApiResponseJson 快速开始

## 🎯 核心功能

`ApiResponseJson` 装饰器现在可以自动获取并打印 Controller 的完整信息！

## 📦 安装使用

无需额外安装，直接导入使用：

```typescript
import { AuthController } from './decorators/authController.decorator';
import { ApiResponseJson } from './decorators/api-response.decorator';
```

## ⚡ 快速示例

### 基础用法

```typescript
import { Get } from '@nestjs/common';
import { AuthController } from './decorators/authController.decorator';
import { ApiResponseJson } from './decorators/api-response.decorator';

@AuthController({
  url: 'app',
  tag: 'app'
})
export class AppController {
  
  @Get('test')
  @ApiResponseJson(TestDto, '测试接口')
  test() {
    return { message: 'Hello World' };
  }
}
```

**控制台输出：**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Controller Info:
  - Prefix: app
  - URL: app
  - Tag: app
  - Method: GET
  - Path: test
  - Full Path: app/test
  - Property Key: test
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 📋 获取的信息

| 字段 | 说明 | 示例 |
|-----|------|------|
| **Prefix** | 权限前缀 | `sys:user` |
| **URL** | Controller 路径 | `api/sys/user` |
| **Tag** | Swagger 标签 | `用户管理` |
| **Method** | HTTP 方法 | `GET`, `POST`, `PUT`, `DELETE` |
| **Path** | 方法路径 | `:id` |
| **Full Path** | 完整路径 | `api/sys/user/:id` |
| **Property Key** | 方法名 | `findOne` |

## 🔥 常用场景

### 1. CRUD 完整示例

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
    // Prefix: sys:user, Method: POST
    return this.userService.create(dto);
  }

  @Get()
  @ApiResponseJson([UserDto], '查询列表')
  findAll() {
    // Prefix: sys:user, Method: GET
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiResponseJson(UserDto, '查询详情')
  findOne(@Param('id') id: string) {
    // Prefix: sys:user, Method: GET
    // Full Path: api/sys/user/:id
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiResponseJson(UserDto, '更新用户')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    // Prefix: sys:user, Method: PUT
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @ApiResponseJson(UserDto, '删除用户')
  remove(@Param('id') id: string) {
    // Prefix: sys:user, Method: DELETE
    return this.userService.remove(id);
  }
}
```

### 2. 自定义权限前缀

```typescript
@AuthController({
  url: 'api/admin/settings',
  perms: 'admin:config',  // 自定义权限前缀
  tag: '管理员设置'
})
export class AdminController {
  @Get('system')
  @ApiResponseJson(SettingDto, '系统设置')
  getSettings() {
    // Prefix: admin:config  ← 使用自定义值
    return {};
  }
}
```

### 3. 返回数组

```typescript
@Get()
@ApiResponseJson([UserDto], '用户列表')
findAll() {
  return [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];
}
```

## 🎨 不同的配置方式

```typescript
// 方式 1: 简单字符串
@ApiResponseJson(UserDto, '创建用户')

// 方式 2: 配置对象
@ApiResponseJson(UserDto, {
  summary: '创建用户',
  description: '这是详细描述'
})

// 方式 3: 返回数组
@ApiResponseJson([UserDto], '用户列表')
```

## 📊 HTTP 方法支持

| 装饰器 | 输出 |
|--------|------|
| `@Get()` | GET |
| `@Post()` | POST |
| `@Put()` | PUT |
| `@Delete()` | DELETE |
| `@Patch()` | PATCH |
| `@Options()` | OPTIONS |
| `@Head()` | HEAD |

## 🔧 权限前缀生成规则

如果 `AuthController` 未指定 `perms`，会自动根据 `url` 生成：

```typescript
// URL → Prefix 转换规则
'api/sys/user'       → 'sys:user'
'/admin/role'        → 'admin:role'
'sys/menu/'          → 'sys:menu'
'user/:id'           → 'user'
'api/v1/products'    → 'v1:products'
```

**转换步骤：**
1. 移除前后斜杠
2. 移除 `api/` 前缀
3. 移除路径参数（`:id`）
4. 转小写
5. 将 `/` 替换为 `:`

## ✅ 最佳实践

### ✅ 推荐做法

```typescript
// 1. 始终使用 AuthController
@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  perms: 'sys:user'  // 明确指定权限
})

// 2. 为每个接口添加清晰的说明
@ApiResponseJson(UserDto, '创建用户')

// 3. 数组返回时使用数组语法
@ApiResponseJson([UserDto], '用户列表')
```

### ❌ 避免做法

```typescript
// ❌ 不要使用普通 @Controller
@Controller('api/sys/user')  // 缺少 prefix 等元数据

// ❌ 不要省略说明
@ApiResponseJson(UserDto)  // 缺少接口描述

// ❌ 返回数组时不要忘记数组语法
@ApiResponseJson(UserDto, '列表')  // 应该用 [UserDto]
```

## 🐛 调试技巧

### 查看输出信息

应用启动时，控制台会自动输出所有接口的信息：

```bash
# 启动应用
pnpm dev

# 查看输出
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

### 验证路由配置

通过输出的 `Full Path` 确认路由是否正确：

```typescript
@Get(':id/profile')
// Full Path 应该显示: api/sys/user/:id/profile
```

## 📚 完整示例

```typescript
import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { AuthController } from './decorators/authController.decorator';
import { ApiResponseJson } from './decorators/api-response.decorator';

@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  perms: 'sys:user'
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponseJson(UserDto, { summary: '创建用户' })
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get()
  @ApiResponseJson([UserDto], '查询用户列表')
  findAll(@Query() query: QueryDto) {
    return this.userService.findAll(query);
  }

  @Get(':id')
  @ApiResponseJson(UserDto, '查询用户详情')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiResponseJson(UserDto, { summary: '更新用户' })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @ApiResponseJson(UserDto, { summary: '删除用户' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
```

## 🔗 相关文档

- [完整文档](./README.md) - 详细使用说明
- [示例代码](./api-response.example.ts) - 更多示例
- [AuthController 文档](./authController.decorator.ts) - Controller 装饰器说明

## 💡 提示

- 控制台输出仅在应用**启动时**发生一次
- 不会影响运行时性能
- 输出信息用于**开发调试**和**路由验证**
- 可通过环境变量控制是否输出（需要自定义）

## 🎉 开始使用

现在就试试在你的 Controller 中使用 `ApiResponseJson` 装饰器，启动应用查看完整的接口信息！
