# 权限常量使用指南

## 概述

`permissions.constant.ts` 文件集中管理了系统中所有的权限前缀和相关常量，确保权限配置的一致性和可维护性。

## 文件位置

```
apps/api/src/common/constants/permissions.constant.ts
```

## 主要内容

### 1. PERMISSIONS 对象

包含所有模块的权限前缀常量：

```typescript
export const PERMISSIONS = {
  MENU: 'sys:menu',      // 菜单管理
  USER: 'sys:user',      // 用户管理
  ROLE: 'sys:role',      // 角色管理
  DICT: 'sys:dict',      // 字典管理
  DEPT: 'sys:dept',      // 部门管理
  LOG: 'sys:log',        // 日志管理
  CONFIG: 'sys:config',  // 系统配置
  NOTICE: 'sys:notice',  // 通知管理
  FILE: 'sys:file',      // 文件管理
  MONITOR: 'sys:monitor',// 监控管理
} as const;
```

### 2. PERMISSION_ACTIONS 对象

定义了常用的权限操作类型：

```typescript
export const PERMISSION_ACTIONS = {
  ADD: 'add',       // 添加
  UPDATE: 'update', // 更新
  DELETE: 'delete', // 删除
  QUERY: 'query',   // 查询
  EXPORT: 'export', // 导出
  IMPORT: 'import', // 导入
} as const;
```

### 3. PermissionHelper 辅助类

提供便捷的权限字符串构建方法。

### 4. PERMISSION_SETS 预定义权限集合

包含常用的权限组合，方便批量使用。

## 使用示例

### 基础使用 - Controller 中使用

在 MenuController 中的使用示例：

```typescript
import { PERMISSIONS } from '../../common/constants';
import { PreAuthorize } from '@app/auth-power/guards/pre-authorize.guard';
import { AuthPowerEnum } from '@app/auth-power';

const preAuthorizePrefix = PERMISSIONS.MENU;

@Controller('api/sys/menu')
export class MenuController {
  @Post()
  @PreAuthorize(preAuthorizePrefix, [AuthPowerEnum.add])
  create(@Body() body: CreateMenuDto) {
    // ...
  }

  @Put(':id')
  @PreAuthorize(preAuthorizePrefix, [AuthPowerEnum.update])
  update(@Param('id') id: string, @Body() body: CreateMenuDto) {
    // ...
  }

  @Delete(':id')
  @PreAuthorize(preAuthorizePrefix, [AuthPowerEnum.delete])
  delete(@Param('id') id: string) {
    // ...
  }

  @Get()
  @PreAuthorize(preAuthorizePrefix, [AuthPowerEnum.query])
  list(@Query() query: ListMenuQuery) {
    // ...
  }
}
```

### 使用 PermissionHelper 构建权限字符串

```typescript
import { PERMISSIONS, PERMISSION_ACTIONS, PermissionHelper } from '../../common/constants';

// 构建单个权限字符串
const addUserPerm = PermissionHelper.build(PERMISSIONS.USER, PERMISSION_ACTIONS.ADD);
// 结果: 'sys:user:add'

// 批量构建权限字符串
const userPerms = PermissionHelper.buildBatch(
  PERMISSIONS.USER, 
  [PERMISSION_ACTIONS.ADD, PERMISSION_ACTIONS.UPDATE, PERMISSION_ACTIONS.DELETE]
);
// 结果: ['sys:user:add', 'sys:user:update', 'sys:user:delete']

// 检查是否为超级管理员权限
const isSuperAdmin = PermissionHelper.isSuperAdmin('*:*:*'); // true
```

### 使用预定义权限集合

```typescript
import { PERMISSION_SETS } from '../../common/constants';

// 获取菜单管理的所有权限
const menuPermissions = PERMISSION_SETS.MENU_ALL;
// 结果: ['sys:menu:add', 'sys:menu:update', 'sys:menu:delete', 'sys:menu:query']

// 获取用户管理的所有权限
const userPermissions = PERMISSION_SETS.USER_ALL;
// 结果: ['sys:user:add', 'sys:user:update', 'sys:user:delete', 'sys:user:query', 'sys:user:export']
```

### UserController 使用示例

```typescript
import { PERMISSIONS } from '../../common/constants';
import { PreAuthorize } from '@app/auth-power/guards/pre-authorize.guard';
import { AuthPowerEnum } from '@app/auth-power';

const preAuthorizePrefix = PERMISSIONS.USER;

@Controller('api/sys/user')
@ApiTags('用户管理')
export class UserController {
  @Post()
  @PreAuthorize(preAuthorizePrefix, [AuthPowerEnum.add])
  @ApiOperation({ summary: '创建用户' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  @PreAuthorize(preAuthorizePrefix, [AuthPowerEnum.update])
  @ApiOperation({ summary: '更新用户' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @PreAuthorize(preAuthorizePrefix, [AuthPowerEnum.delete])
  @ApiOperation({ summary: '删除用户' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Get()
  @PreAuthorize(preAuthorizePrefix, [AuthPowerEnum.query])
  @ApiOperation({ summary: '查询用户列表' })
  findAll() {
    return this.userService.findAll();
  }
}
```

### RoleController 使用示例

```typescript
import { PERMISSIONS } from '../../common/constants';
import { PreAuthorize } from '@app/auth-power/guards/pre-authorize.guard';
import { AuthPowerEnum } from '@app/auth-power';

const preAuthorizePrefix = PERMISSIONS.ROLE;

@Controller('api/sys/role')
@ApiTags('角色管理')
export class RoleController {
  @Post()
  @PreAuthorize(preAuthorizePrefix, [AuthPowerEnum.add])
  @ApiOperation({ summary: '创建角色' })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  // ... 其他方法类似
}
```

## 权限格式说明

权限字符串遵循三段式格式：`模块:资源:操作`

- **模块**：通常为 `sys`（系统模块）
- **资源**：如 `menu`、`user`、`role` 等
- **操作**：如 `add`、`update`、`delete`、`query` 等

示例：
- `sys:menu:add` - 菜单添加权限
- `sys:user:update` - 用户更新权限
- `sys:role:delete` - 角色删除权限

## 特殊权限

- `*:*:*` - 超级管理员权限，拥有所有权限
- `role_admin` - 超级管理员角色标识

## 添加新权限

当需要添加新的模块权限时：

1. 在 `PERMISSIONS` 对象中添加新的权限前缀
2. 为新模块添加详细的注释说明
3. 如需要，在 `PERMISSION_SETS` 中添加预定义权限集合

示例：

```typescript
export const PERMISSIONS = {
  // ... 现有权限
  
  /**
   * 订单管理权限前缀
   * 使用示例：
   * - sys:order:add - 添加订单
   * - sys:order:update - 更新订单
   * - sys:order:delete - 删除订单
   * - sys:order:query - 查询订单
   */
  ORDER: 'sys:order',
} as const;
```

## 最佳实践

1. **统一使用常量**：不要在代码中硬编码权限字符串，始终使用 `PERMISSIONS` 常量
2. **类型安全**：使用 TypeScript 的类型系统确保权限配置正确
3. **清晰注释**：为每个权限前缀添加清晰的注释说明
4. **分组管理**：相关的权限可以通过 `PERMISSION_SETS` 进行分组
5. **命名规范**：遵循 `模块:资源:操作` 的命名规范

## 与前端配合

前端可以使用相同的权限字符串格式进行权限校验：

```typescript
// 前端 Vue 指令使用
<button v-hasPerm="['sys:user:add']">添加用户</button>
<button v-hasPerm="['sys:user:update']">编辑用户</button>
<button v-hasPerm="['sys:user:delete']">删除用户</button>

// 前端程序化检查
import has from '@/utils/has'

if (has.hasPerm('sys:user:add')) {
  // 显示添加按钮
}
```

## 注意事项

1. 权限字符串大小写敏感，确保前后端一致
2. 修改权限常量后，需要同步更新数据库中的权限配置
3. 删除权限前，确保没有角色或用户依赖该权限
