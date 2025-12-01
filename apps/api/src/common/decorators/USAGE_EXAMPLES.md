# API 装饰器使用示例

## 🎯 快速开始

### 基础使用

```typescript
import { AuthController } from './decorators/authController.decorator';
import { ApiResponseJson } from './decorators/api-response.decorator';

@AuthController({
  url: 'api/sys/user',
  tag: '用户管理'
})
export class UserController {
  
  @Get()
  @ApiResponseJson([UserDto], '查询用户列表')
  findAll() {
    return this.userService.findAll();
  }
}
```

**效果**：
- ✅ 自动注册 `ApiInfoGuard`（开发环境）
- ✅ 每次请求输出详细信息
- ✅ 响应自动格式化

---

## 📋 鉴权配置示例

### 示例 1: 全局鉴权

```typescript
@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  auth: { required: true }  // 全局需要鉴权
})
export class UserController {
  
  // 继承全局配置，需要鉴权
  @Post()
  @ApiResponseJson(UserDto, '创建用户')
  create() { }

  // 也需要鉴权
  @Get()
  @ApiResponseJson([UserDto], '查询列表')
  findAll() { }
}
```

### 示例 2: 公开接口

```typescript
@AuthController({
  url: 'api/public',
  tag: '公开接口',
  auth: { ignore: true }  // 全局忽略鉴权
})
export class PublicController {
  
  // 不需要鉴权
  @Get('info')
  @ApiResponseJson(InfoDto, '获取信息')
  getInfo() { }
}
```

### 示例 3: 混合配置

```typescript
@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  auth: { required: true }  // 全局需要鉴权
})
export class UserController {
  
  // 需要鉴权
  @Post()
  @ApiResponseJson(UserDto, '创建用户')
  create() { }

  // 覆盖全局配置：公开接口
  @Get('public')
  @ApiResponseJson(UserDto, {
    summary: '公开用户列表',
    auth: { ignore: true }  // 方法级别覆盖
  })
  getPublicUsers() { }
}
```

---

## 🔐 权限配置示例

### 示例 4: 需要特定权限

```typescript
@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  perms: 'sys:user'
})
export class UserController {
  
  @Post()
  @ApiResponseJson(UserDto, {
    summary: '创建用户',
    permissions: { 
      permissions: ['sys:user:add']  // 需要此权限
    }
  })
  create() { }

  @Put(':id')
  @ApiResponseJson(UserDto, {
    summary: '更新用户',
    permissions: { 
      permissions: ['sys:user:update'] 
    }
  })
  update() { }
}
```

### 示例 5: 忽略权限检查

```typescript
@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  auth: { required: true },  // 需要鉴权
  permissions: { ignore: false }  // 全局需要权限检查
})
export class UserController {
  
  // 需要鉴权 + 权限检查
  @Delete(':id')
  @ApiResponseJson(UserDto, {
    summary: '删除用户',
    permissions: { permissions: ['sys:user:delete'] }
  })
  remove() { }

  // 需要鉴权，但忽略权限检查
  @Get()
  @ApiResponseJson([UserDto], {
    summary: '查询列表',
    permissions: { ignore: true }  // 忽略权限检查
  })
  findAll() { }
}
```

---

## 🎨 使用独立装饰器

### 示例 6: 分离的鉴权和权限

```typescript
import { ApiAuth, ApiPermissions, PublicApi } from './decorators/api-auth.decorator';

@Controller('api/sys/user')
export class UserController {
  
  // 需要鉴权 + 特定权限
  @Post()
  @ApiAuth({ required: true })
  @ApiPermissions({ permissions: ['sys:user:add'] })
  @ApiResponseJson(UserDto, '创建用户')
  create() { }

  // 公开接口
  @Get('public')
  @PublicApi()  // 便捷装饰器
  @ApiResponseJson([UserDto], '公开列表')
  getPublic() { }

  // 需要鉴权，但忽略权限
  @Get()
  @ApiAuth({ required: true })
  @ApiPermissions({ ignore: true })
  @ApiResponseJson([UserDto], '查询列表')
  findAll() { }
}
```

---

## 🛠️ InfoGuard 配置

### 示例 7: 禁用 InfoGuard

```typescript
@AuthController({
  url: 'api/sys/user',
  tag: '用户管理'
})
export class UserController {
  
  // 启用 InfoGuard（默认）
  @Get()
  @ApiResponseJson([UserDto], '查询列表')
  findAll() { }

  // 禁用 InfoGuard
  @Post()
  @ApiResponseJson(UserDto, {
    summary: '创建用户',
    enableInfoGuard: false  // 不输出信息
  })
  create() { }
}
```

---

## 🌟 完整示例

### 示例 8: CRUD 完整实现

```typescript
import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { AuthController } from './decorators/authController.decorator';
import { ApiResponseJson } from './decorators/api-response.decorator';
import { ApiAuth, ApiPermissions } from './decorators/api-auth.decorator';

@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  perms: 'sys:user',
  auth: { required: true },  // 全局需要鉴权
  permissions: { ignore: false }  // 全局需要权限检查
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  // CREATE - 需要 add 权限
  @Post()
  @ApiResponseJson(UserDto, {
    summary: '创建用户',
    permissions: { permissions: ['sys:user:add'] }
  })
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  // READ - 列表（忽略权限）
  @Get()
  @ApiResponseJson([UserDto], {
    summary: '查询用户列表',
    permissions: { ignore: true }
  })
  findAll(@Query() query: QueryUserDto) {
    return this.userService.findAll(query);
  }

  // READ - 详情（忽略权限）
  @Get(':id')
  @ApiResponseJson(UserDto, {
    summary: '查询用户详情',
    permissions: { ignore: true }
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  // UPDATE - 需要 update 权限
  @Put(':id')
  @ApiResponseJson(UserDto, {
    summary: '更新用户',
    permissions: { permissions: ['sys:user:update'] }
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  // DELETE - 需要 delete 权限
  @Delete(':id')
  @ApiResponseJson(UserDto, {
    summary: '删除用户',
    permissions: { permissions: ['sys:user:delete'] }
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  // 特殊接口：公开的用户统计
  @Get('stats/public')
  @ApiResponseJson(StatsDto, {
    summary: '用户统计（公开）',
    auth: { ignore: true },  // 忽略鉴权
    permissions: { ignore: true }  // 忽略权限
  })
  getPublicStats() {
    return this.userService.getPublicStats();
  }
}
```

---

## 📊 InfoGuard 输出示例

当访问接口时，开发环境会输出：

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 API Request Info:
  ├─ Controller: UserController
  ├─ Handler: create
  ├─ Method: POST
  ├─ URL: /api/sys/user?debug=true
  ├─ Path: /api/sys/user
  └─ IP: ::1

🔧 Configuration:
  ├─ Prefix: sys:user
  ├─ Controller URL: api/sys/user
  ├─ Tag: 用户管理
  ├─ Auth Required: true
  ├─ Auth Ignore: false
  ├─ Permissions Check: true
  └─ Required Permissions: [ 'sys:user:add' ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🎯 配置优先级

```
方法级 auth > 方法级 permissions > 控制器级 auth > 控制器级 permissions
```

### 示例 9: 优先级演示

```typescript
@AuthController({
  url: 'api/test',
  auth: { required: true },      // 控制器级：需要鉴权
  permissions: { ignore: true }   // 控制器级：忽略权限
})
export class TestController {
  
  @Get('test1')
  @ApiResponseJson(TestDto, '测试1')
  test1() {
    // 使用：auth.required = true, permissions.ignore = true
  }

  @Get('test2')
  @ApiResponseJson(TestDto, {
    summary: '测试2',
    auth: { ignore: true }  // 方法级覆盖
  })
  test2() {
    // 使用：auth.ignore = true, permissions.ignore = true
  }

  @Get('test3')
  @ApiResponseJson(TestDto, {
    summary: '测试3',
    permissions: { permissions: ['test:view'] }  // 方法级覆盖
  })
  test3() {
    // 使用：auth.required = true, permissions = ['test:view']
  }

  @Get('test4')
  @ApiResponseJson(TestDto, {
    summary: '测试4',
    auth: { ignore: true },
    permissions: { permissions: ['test:view'] }
  })
  test4() {
    // 使用：auth.ignore = true, permissions = ['test:view']
  }
}
```

---

## 💡 最佳实践

### 1. 使用权限常量

```typescript
import { PERMISSIONS } from './constants/permissions.constant';

@AuthController({
  url: 'api/sys/user',
  perms: PERMISSIONS.USER  // 使用常量
})
export class UserController {
  
  @Post()
  @ApiResponseJson(UserDto, {
    summary: '创建用户',
    permissions: { 
      permissions: [`${PERMISSIONS.USER}:add`] 
    }
  })
  create() { }
}
```

### 2. 使用便捷装饰器

```typescript
import { PublicApi, IgnorePermissions } from './decorators/api-auth.decorator';

@AuthController({
  url: 'api/sys/user',
  tag: '用户管理'
})
export class UserController {
  
  // 公开接口
  @Get('public')
  @PublicApi()
  @ApiResponseJson([UserDto], '公开列表')
  getPublic() { }

  // 需要鉴权，但忽略权限
  @Get()
  @IgnorePermissions()
  @ApiResponseJson([UserDto], '查询列表')
  findAll() { }
}
```

### 3. 环境变量控制

```typescript
// .env.development
NODE_ENV=development
ENABLE_API_INFO_GUARD=true

// .env.production
NODE_ENV=production
ENABLE_API_INFO_GUARD=false
```

---

## 🔗 相关文档

- [设计评审](./DESIGN_REVIEW.md) - 详细的设计分析
- [API 鉴权装饰器](./api-auth.decorator.ts) - 鉴权装饰器源码
- [API 信息 Guard](../guards/api-info.guard.ts) - Guard 源码
- [权限常量](../constants/permissions.constant.ts) - 权限常量定义
