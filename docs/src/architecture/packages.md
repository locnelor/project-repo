# 共享包 (Packages)

共享包是 Qiyun 前端开发模板的核心组成部分，通过 `packages/` 目录统一管理可复用的代码、组件和工具。所有应用项目都可以引用这些共享包，实现代码复用和规范统一。

## 📦 包管理策略

### 命名规范

所有共享包都使用 `@repo/` 命名空间，确保包名的唯一性和一致性：

```json
{
  "name": "@repo/components",
  "name": "@repo/utils", 
  "name": "@repo/types"
}
```

### 版本管理

采用 `workspace:*` 协议，确保所有项目使用相同版本的共享包：

```json
{
  "dependencies": {
    "@repo/components": "workspace:*",
    "@repo/utils": "workspace:*"
  }
}
```

---

## 🎨 @repo/components - 通用组件库

### 功能概述

提供跨项目复用的 Vue 组件，包括基础组件、业务组件和复合组件。

**位置**: `packages/components/`

### 📁 目录结构

```
packages/components/
├── src/
│   ├── basic/                # 基础组件
│   │   ├── Button/           # 按钮组件
│   │   ├── Input/            # 输入框组件
│   │   ├── Modal/            # 弹窗组件
│   │   └── Table/            # 表格组件
│   ├── business/             # 业务组件
│   │   ├── UserSelect/       # 用户选择器
│   │   ├── RoleSelect/       # 角色选择器
│   │   └── PermissionTree/   # 权限树
│   ├── layout/               # 布局组件
│   │   ├── PageHeader/       # 页面头部
│   │   ├── PageFooter/       # 页面底部
│   │   └── Sidebar/          # 侧边栏
│   └── index.ts              # 组件导出
├── package.json
└── tsconfig.json
```

### 🔧 主要组件

#### 基础组件
- **QButton**: 增强的按钮组件，支持加载状态、权限控制
- **QInput**: 增强的输入框，支持验证、格式化
- **QModal**: 统一的弹窗组件，支持拖拽、全屏
- **QTable**: 功能丰富的表格组件，支持排序、筛选、分页

#### 业务组件
- **UserSelect**: 用户选择器，支持搜索、多选
- **RoleSelect**: 角色选择器，支持权限验证
- **PermissionTree**: 权限树组件，支持级联选择

### 使用示例

```vue
<template>
  <div>
    <QButton type="primary" :loading="loading" @click="handleClick">
      提交
    </QButton>
    
    <QTable 
      :columns="columns" 
      :data="tableData"
      :pagination="pagination"
      @change="handleTableChange"
    />
  </div>
</template>

<script setup lang="ts">
import { QButton, QTable } from '@repo/components'
</script>
```

---

## 🔧 @repo/utils - 工具函数库

### 功能概述

提供通用的工具函数，包括数据处理、时间处理、验证函数等。

**位置**: `packages/utils/`

### 📁 目录结构

```
packages/utils/
├── src/
│   ├── deep-copy.ts          # 深拷贝函数
│   ├── timer.ts              # 时间处理函数
│   ├── tree.ts               # 树形数据处理
│   ├── interface.ts          # 接口工具函数
│   ├── numberToChinese.ts    # 数字转中文
│   ├── merge-route-modules.ts # 路由合并工具
│   └── index.ts              # 工具函数导出
├── package.json
└── tsconfig.json
```

### 🔧 主要功能

#### 数据处理
```typescript
// 深拷贝
import { deepCopy } from '@repo/utils'
const newObj = deepCopy(originalObj)

// 树形数据处理
import { arrayToTree, treeToArray } from '@repo/utils'
const tree = arrayToTree(flatArray, 'id', 'parentId')
const flatArray = treeToArray(treeData)
```

#### 时间处理
```typescript
import { formatDate, getRelativeTime } from '@repo/utils'

const formatted = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')
const relative = getRelativeTime(date) // "2小时前"
```

#### 数字处理
```typescript
import { numberToChinese } from '@repo/utils'

const chinese = numberToChinese(12345) // "一万二千三百四十五"
```

---

## 🏷️ @repo/types - 类型定义

### 功能概述

提供 TypeScript 类型定义，确保项目间的类型一致性。

**位置**: `packages/types/`

### 📁 目录结构

```
packages/types/
├── src/
│   ├── api.ts                # API 相关类型
│   ├── user.ts               # 用户相关类型
│   ├── common.ts             # 通用类型
│   ├── router.ts             # 路由类型
│   └── index.ts              # 类型导出
├── index.ts                  # 主入口
├── package.json
└── tsconfig.json
```

### 🔧 主要类型

#### 用户类型
```typescript
export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  roles: Role[]
  createdAt: Date
  updatedAt: Date
}

export interface Role {
  id: string
  name: string
  permissions: Permission[]
}
```

#### API 类型
```typescript
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
  timestamp: number
}

export interface PaginationParams {
  page: number
  pageSize: number
  total?: number
}
```

---

## 🎨 @repo/styles - 样式库

### 功能概述

提供统一的样式系统，包括 TailwindCSS 配置、通用样式和主题变量。

**位置**: `packages/styles/`

### 📁 目录结构

```
packages/styles/
├── src/
│   ├── css/
│   │   ├── base.css          # 基础样式
│   │   ├── components.css    # 组件样式
│   │   ├── utilities.css     # 工具样式
│   │   └── themes/           # 主题样式
│   │       ├── light.css     # 亮色主题
│   │       └── dark.css      # 暗色主题
│   ├── cn.ts                 # 样式工具函数
│   └── index.ts              # 样式导出
├── package.json
└── vite.config.ts
```

### 🔧 主要功能

#### 样式工具函数
```typescript
import { cn } from '@repo/styles'

// 条件样式合并
const className = cn(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' && 'primary-class'
)
```

#### 主题系统
```css
/* 亮色主题 */
:root {
  --color-primary: #1890ff;
  --color-success: #52c41a;
  --color-warning: #faad14;
  --color-error: #ff4d4f;
}

/* 暗色主题 */
[data-theme="dark"] {
  --color-primary: #177ddc;
  --color-success: #49aa19;
  --color-warning: #d89614;
  --color-error: #dc4446;
}
```

---

## 🗄️ @repo/stores - 状态管理

### 功能概述

基于 Pinia 的状态管理解决方案，提供全局状态和持久化存储。

**位置**: `packages/stores/`

### 📁 目录结构

```
packages/stores/
├── src/
│   ├── useAccess.ts          # 权限状态管理
│   ├── useUser.ts            # 用户状态管理
│   ├── useApp.ts             # 应用状态管理
│   └── index.ts              # Store 导出
├── package.json
└── tsconfig.json
```

### 🔧 主要 Store

#### 用户状态
```typescript
export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const token = ref<string>('')
  
  const login = async (credentials: LoginCredentials) => {
    // 登录逻辑
  }
  
  const logout = () => {
    user.value = null
    token.value = ''
  }
  
  return { user, token, login, logout }
}, {
  persist: true // 持久化存储
})
```

#### 权限状态
```typescript
export const useAccessStore = defineStore('access', () => {
  const permissions = ref<string[]>([])
  const roles = ref<Role[]>([])
  
  const hasPermission = (permission: string) => {
    return permissions.value.includes(permission)
  }
  
  const hasRole = (role: string) => {
    return roles.value.some(r => r.name === role)
  }
  
  return { permissions, roles, hasPermission, hasRole }
})
```

---

## 🗃️ @repo/database - 数据库配置

### 功能概述

基于 Prisma 的数据库配置和模型定义，支持多环境配置。

**位置**: `packages/database/`

### 📁 目录结构

```
packages/database/
├── prisma/
│   ├── schema.prisma         # 数据库模型
│   ├── migrations/           # 数据库迁移
│   └── seed.ts               # 数据种子
├── src/
│   └── index.ts              # 数据库客户端
├── .env                      # 环境配置
├── .env-example              # 配置示例
└── package.json
```

### 🔧 数据库模型

```prisma
// schema.prisma
model User {
  id        String   @id @default(cuid())
  username  String   @unique
  email     String   @unique
  password  String
  avatar    String?
  roles     Role[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@map("users")
}

model Role {
  id          String       @id @default(cuid())
  name        String       @unique
  description String?
  users       User[]
  permissions Permission[]
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  
  @@map("roles")
}
```

---

## 🎭 @repo/constants - 常量定义

### 功能概述

项目中使用的常量定义，确保数据一致性。

**位置**: `packages/constants/`

### 🔧 主要常量

```typescript
// 用户状态
export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  BANNED: 'banned'
} as const

// API 状态码
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const

// 权限常量
export const PERMISSIONS = {
  USER_READ: 'user:read',
  USER_WRITE: 'user:write',
  USER_DELETE: 'user:delete'
} as const
```

---

## 🎪 @repo/effects - 特效组件

### 功能概述

包含数据可视化特效组件、UI特效组件等。

**位置**: `packages/effects/`

### 📁 目录结构

```
packages/effects/
├── components/               # 通用特效组件
├── dv/                      # 数据可视化特效
├── hooks/                   # 特效相关钩子
├── request/                 # 请求相关特效
└── ui/                      # UI特效组件
    ├── dialog-ui/           # 对话框特效
    └── form-ui/             # 表单特效
```

---

## 🔗 包间依赖关系

```mermaid
graph TD
    A[Apps] --> B[@repo/components]
    A --> C[@repo/utils]
    A --> D[@repo/types]
    A --> E[@repo/stores]
    A --> F[@repo/styles]
    
    B --> C
    B --> D
    B --> F
    
    E --> D
    E --> C
    
    G[@repo/database] --> D
    H[@repo/constants] --> D
    I[@repo/effects] --> B
    I --> C
    I --> D
```

## 📚 使用指南

### 安装共享包

```bash
# 在应用项目中安装共享包
pnpm add @repo/components @repo/utils @repo/types
```

### 引用共享包

```typescript
// 引用组件
import { QButton, QTable } from '@repo/components'

// 引用工具函数
import { formatDate, deepCopy } from '@repo/utils'

// 引用类型
import type { User, ApiResponse } from '@repo/types'

// 引用状态管理
import { useUserStore } from '@repo/stores'

// 引用样式
import '@repo/styles'
```

### 开发新的共享包

1. 在 `packages/` 目录下创建新包
2. 配置 `package.json`，使用 `@repo/` 命名空间
3. 在需要使用的项目中添加依赖
4. 更新 `pnpm-workspace.yaml` 配置

## 📈 最佳实践

### 包设计原则

- **单一职责**: 每个包只负责一个特定功能
- **最小依赖**: 尽量减少包间的依赖关系
- **向后兼容**: 保持 API 的稳定性
- **文档完善**: 提供详细的使用文档

### 版本管理

- 使用语义化版本控制
- 重大变更需要升级主版本号
- 提供迁移指南

### 测试策略

- 为每个共享包编写单元测试
- 集成测试验证包间协作
- 自动化测试确保质量

## 🔗 相关文档

- [应用项目详解](./apps.md)
- [开发指南](../guide/getting-started.md)
- [组件库文档](../components/overview.md)