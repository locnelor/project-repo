# 常量

## 概述

Qiyun-Repo 项目使用统一的常量管理系统，通过 `packages/constants` 包提供项目中所有的常量定义，确保数据的一致性和可维护性。

## 常量包结构

```
packages/constants/
├── src/
│   ├── api/               # API 相关常量
│   │   ├── endpoints.ts   # 接口端点
│   │   ├── status.ts      # HTTP 状态码
│   │   └── index.ts       # API 常量入口
│   ├── app/               # 应用相关常量
│   │   ├── config.ts      # 应用配置常量
│   │   ├── routes.ts      # 路由常量
│   │   ├── menus.ts       # 菜单常量
│   │   └── index.ts       # 应用常量入口
│   ├── business/          # 业务相关常量
│   │   ├── user.ts        # 用户相关常量
│   │   ├── system.ts      # 系统相关常量
│   │   ├── permissions.ts # 权限相关常量
│   │   └── index.ts       # 业务常量入口
│   ├── ui/                # UI 相关常量
│   │   ├── themes.ts      # 主题常量
│   │   ├── sizes.ts       # 尺寸常量
│   │   ├── colors.ts      # 颜色常量
│   │   └── index.ts       # UI 常量入口
│   └── index.ts           # 常量库总入口
├── package.json
└── tsconfig.json
```

## API 常量

### 接口端点 (endpoints.ts)

```typescript
// packages/constants/src/api/endpoints.ts

/**
 * API 基础配置
 */
export const API_BASE = {
  // 基础 URL
  BASE_URL: '/api/v1',
  
  // 超时时间
  TIMEOUT: 30000,
  
  // 重试次数
  RETRY_COUNT: 3,
} as const

/**
 * 认证相关接口
 */
export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  VERIFY_EMAIL: '/auth/verify-email',
} as const

/**
 * 用户相关接口
 */
export const USER_ENDPOINTS = {
  PROFILE: '/users/profile',
  UPDATE_PROFILE: '/users/profile',
  CHANGE_PASSWORD: '/users/change-password',
  UPLOAD_AVATAR: '/users/avatar',
  LIST: '/users',
  CREATE: '/users',
  UPDATE: '/users/:id',
  DELETE: '/users/:id',
  BATCH_DELETE: '/users/batch-delete',
} as const

/**
 * 系统管理接口
 */
export const SYSTEM_ENDPOINTS = {
  ROLES: '/system/roles',
  PERMISSIONS: '/system/permissions',
  MENUS: '/system/menus',
  SETTINGS: '/system/settings',
  LOGS: '/system/logs',
  DICTIONARIES: '/system/dictionaries',
} as const

/**
 * 文件管理接口
 */
export const FILE_ENDPOINTS = {
  UPLOAD: '/files/upload',
  DOWNLOAD: '/files/download/:id',
  DELETE: '/files/:id',
  LIST: '/files',
} as const

/**
 * 数据可视化接口
 */
export const DV_ENDPOINTS = {
  DASHBOARDS: '/dv/dashboards',
  CHARTS: '/dv/charts',
  DATA_SOURCES: '/dv/data-sources',
  REPORTS: '/dv/reports',
} as const
```

### HTTP 状态码 (status.ts)

```typescript
// packages/constants/src/api/status.ts

/**
 * HTTP 状态码常量
 */
export const HTTP_STATUS = {
  // 成功状态码
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  
  // 重定向状态码
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,
  
  // 客户端错误状态码
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  
  // 服务器错误状态码
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const

/**
 * 业务状态码
 */
export const BUSINESS_STATUS = {
  SUCCESS: 0,
  FAILED: 1,
  INVALID_PARAMS: 1001,
  UNAUTHORIZED: 1002,
  FORBIDDEN: 1003,
  NOT_FOUND: 1004,
  INTERNAL_ERROR: 1005,
} as const

/**
 * 状态码消息映射
 */
export const STATUS_MESSAGES = {
  [BUSINESS_STATUS.SUCCESS]: '操作成功',
  [BUSINESS_STATUS.FAILED]: '操作失败',
  [BUSINESS_STATUS.INVALID_PARAMS]: '参数错误',
  [BUSINESS_STATUS.UNAUTHORIZED]: '未授权',
  [BUSINESS_STATUS.FORBIDDEN]: '禁止访问',
  [BUSINESS_STATUS.NOT_FOUND]: '资源不存在',
  [BUSINESS_STATUS.INTERNAL_ERROR]: '服务器内部错误',
} as const
```

## 应用常量

### 应用配置 (config.ts)

```typescript
// packages/constants/src/app/config.ts

/**
 * 应用基础配置
 */
export const APP_CONFIG = {
  // 应用名称
  NAME: 'Qiyun Repo',
  
  // 应用版本
  VERSION: '1.0.0',
  
  // 应用描述
  DESCRIPTION: '企业级 Monorepo 项目模板',
  
  // 默认语言
  DEFAULT_LOCALE: 'zh-CN',
  
  // 支持的语言
  SUPPORTED_LOCALES: ['zh-CN', 'en-US'],
  
  // 默认主题
  DEFAULT_THEME: 'light',
  
  // 支持的主题
  SUPPORTED_THEMES: ['light', 'dark'],
} as const

/**
 * 存储键名
 */
export const STORAGE_KEYS = {
  // 用户信息
  USER_INFO: 'user_info',
  
  // 访问令牌
  ACCESS_TOKEN: 'access_token',
  
  // 刷新令牌
  REFRESH_TOKEN: 'refresh_token',
  
  // 主题设置
  THEME: 'theme',
  
  // 语言设置
  LOCALE: 'locale',
  
  // 侧边栏折叠状态
  SIDEBAR_COLLAPSED: 'sidebar_collapsed',
  
  // 表格设置
  TABLE_SETTINGS: 'table_settings',
} as const

/**
 * 分页配置
 */
export const PAGINATION = {
  // 默认页码
  DEFAULT_PAGE: 1,
  
  // 默认每页大小
  DEFAULT_PAGE_SIZE: 20,
  
  // 每页大小选项
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
  
  // 显示快速跳转
  SHOW_QUICK_JUMPER: true,
  
  // 显示每页大小选择器
  SHOW_SIZE_CHANGER: true,
  
  // 显示总数
  SHOW_TOTAL: true,
} as const

/**
 * 上传配置
 */
export const UPLOAD_CONFIG = {
  // 最大文件大小 (MB)
  MAX_FILE_SIZE: 10,
  
  // 支持的图片格式
  IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  
  // 支持的文档格式
  DOCUMENT_TYPES: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
  
  // 支持的压缩包格式
  ARCHIVE_TYPES: ['application/zip', 'application/x-rar-compressed'],
} as const
```

### 路由常量 (routes.ts)

```typescript
// packages/constants/src/app/routes.ts

/**
 * 路由路径常量
 */
export const ROUTE_PATHS = {
  // 根路径
  ROOT: '/',
  
  // 认证相关
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  
  // 仪表板
  DASHBOARD: '/dashboard',
  
  // 用户管理
  USERS: '/users',
  USER_DETAIL: '/users/:id',
  
  // 系统管理
  SYSTEM: '/system',
  ROLES: '/system/roles',
  PERMISSIONS: '/system/permissions',
  MENUS: '/system/menus',
  SETTINGS: '/system/settings',
  
  // 数据可视化
  DV: '/dv',
  DV_DASHBOARD: '/dv/dashboard',
  DV_CHARTS: '/dv/charts',
  DV_REPORTS: '/dv/reports',
  
  // 个人中心
  PROFILE: '/profile',
  
  // 错误页面
  NOT_FOUND: '/404',
  FORBIDDEN: '/403',
  SERVER_ERROR: '/500',
} as const

/**
 * 路由名称常量
 */
export const ROUTE_NAMES = {
  LOGIN: 'Login',
  REGISTER: 'Register',
  DASHBOARD: 'Dashboard',
  USERS: 'Users',
  USER_DETAIL: 'UserDetail',
  SYSTEM: 'System',
  ROLES: 'Roles',
  PERMISSIONS: 'Permissions',
  MENUS: 'Menus',
  SETTINGS: 'Settings',
  DV: 'DataVisualization',
  DV_DASHBOARD: 'DVDashboard',
  DV_CHARTS: 'DVCharts',
  DV_REPORTS: 'DVReports',
  PROFILE: 'Profile',
  NOT_FOUND: 'NotFound',
  FORBIDDEN: 'Forbidden',
  SERVER_ERROR: 'ServerError',
} as const

/**
 * 路由元信息常量
 */
export const ROUTE_META = {
  // 需要认证
  REQUIRES_AUTH: 'requiresAuth',
  
  // 需要的权限
  PERMISSIONS: 'permissions',
  
  // 页面标题
  TITLE: 'title',
  
  // 面包屑
  BREADCRUMB: 'breadcrumb',
  
  // 是否缓存
  KEEP_ALIVE: 'keepAlive',
  
  // 是否隐藏在菜单中
  HIDDEN: 'hidden',
  
  // 图标
  ICON: 'icon',
  
  // 排序
  ORDER: 'order',
} as const
```

### 菜单常量 (menus.ts)

```typescript
// packages/constants/src/app/menus.ts

/**
 * 菜单项类型
 */
export const MENU_TYPES = {
  DIRECTORY: 'directory',  // 目录
  MENU: 'menu',           // 菜单
  BUTTON: 'button',       // 按钮
} as const

/**
 * 菜单图标常量
 */
export const MENU_ICONS = {
  DASHBOARD: 'DashboardOutlined',
  USERS: 'UserOutlined',
  SYSTEM: 'SettingOutlined',
  ROLES: 'TeamOutlined',
  PERMISSIONS: 'SafetyOutlined',
  MENUS: 'MenuOutlined',
  SETTINGS: 'ToolOutlined',
  DV: 'BarChartOutlined',
  PROFILE: 'ProfileOutlined',
} as const

/**
 * 默认菜单配置
 */
export const DEFAULT_MENUS = [
  {
    id: 'dashboard',
    name: '仪表板',
    path: '/dashboard',
    icon: MENU_ICONS.DASHBOARD,
    type: MENU_TYPES.MENU,
    order: 1,
  },
  {
    id: 'users',
    name: '用户管理',
    path: '/users',
    icon: MENU_ICONS.USERS,
    type: MENU_TYPES.MENU,
    order: 2,
  },
  {
    id: 'system',
    name: '系统管理',
    path: '/system',
    icon: MENU_ICONS.SYSTEM,
    type: MENU_TYPES.DIRECTORY,
    order: 3,
    children: [
      {
        id: 'roles',
        name: '角色管理',
        path: '/system/roles',
        icon: MENU_ICONS.ROLES,
        type: MENU_TYPES.MENU,
        order: 1,
      },
      {
        id: 'permissions',
        name: '权限管理',
        path: '/system/permissions',
        icon: MENU_ICONS.PERMISSIONS,
        type: MENU_TYPES.MENU,
        order: 2,
      },
      {
        id: 'menus',
        name: '菜单管理',
        path: '/system/menus',
        icon: MENU_ICONS.MENUS,
        type: MENU_TYPES.MENU,
        order: 3,
      },
      {
        id: 'settings',
        name: '系统设置',
        path: '/system/settings',
        icon: MENU_ICONS.SETTINGS,
        type: MENU_TYPES.MENU,
        order: 4,
      },
    ],
  },
  {
    id: 'dv',
    name: '数据可视化',
    path: '/dv',
    icon: MENU_ICONS.DV,
    type: MENU_TYPES.DIRECTORY,
    order: 4,
    children: [
      {
        id: 'dv-dashboard',
        name: '数据仪表板',
        path: '/dv/dashboard',
        type: MENU_TYPES.MENU,
        order: 1,
      },
      {
        id: 'dv-charts',
        name: '图表管理',
        path: '/dv/charts',
        type: MENU_TYPES.MENU,
        order: 2,
      },
      {
        id: 'dv-reports',
        name: '报表管理',
        path: '/dv/reports',
        type: MENU_TYPES.MENU,
        order: 3,
      },
    ],
  },
] as const
```

## 业务常量

### 用户相关常量 (user.ts)

```typescript
// packages/constants/src/business/user.ts

/**
 * 用户状态
 */
export const USER_STATUS = {
  ACTIVE: 1,      // 激活
  INACTIVE: 0,    // 未激活
  DISABLED: -1,   // 禁用
} as const

/**
 * 用户状态标签
 */
export const USER_STATUS_LABELS = {
  [USER_STATUS.ACTIVE]: '正常',
  [USER_STATUS.INACTIVE]: '未激活',
  [USER_STATUS.DISABLED]: '禁用',
} as const

/**
 * 用户性别
 */
export const USER_GENDER = {
  MALE: 1,        // 男
  FEMALE: 2,      // 女
  UNKNOWN: 0,     // 未知
} as const

/**
 * 用户性别标签
 */
export const USER_GENDER_LABELS = {
  [USER_GENDER.MALE]: '男',
  [USER_GENDER.FEMALE]: '女',
  [USER_GENDER.UNKNOWN]: '未知',
} as const

/**
 * 用户类型
 */
export const USER_TYPES = {
  ADMIN: 'admin',         // 管理员
  USER: 'user',           // 普通用户
  GUEST: 'guest',         // 访客
} as const

/**
 * 用户类型标签
 */
export const USER_TYPE_LABELS = {
  [USER_TYPES.ADMIN]: '管理员',
  [USER_TYPES.USER]: '普通用户',
  [USER_TYPES.GUEST]: '访客',
} as const

/**
 * 默认用户配置
 */
export const DEFAULT_USER_CONFIG = {
  AVATAR: '/images/default-avatar.png',
  PASSWORD: '123456',
  ROLE: 'user',
  STATUS: USER_STATUS.ACTIVE,
  GENDER: USER_GENDER.UNKNOWN,
} as const
```

### 权限相关常量 (permissions.ts)

```typescript
// packages/constants/src/business/permissions.ts

/**
 * 权限操作类型
 */
export const PERMISSION_ACTIONS = {
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
  EXPORT: 'export',
  IMPORT: 'import',
} as const

/**
 * 权限资源类型
 */
export const PERMISSION_RESOURCES = {
  USER: 'user',
  ROLE: 'role',
  PERMISSION: 'permission',
  MENU: 'menu',
  SYSTEM: 'system',
  DV: 'dv',
} as const

/**
 * 预定义权限
 */
export const PREDEFINED_PERMISSIONS = {
  // 用户管理权限
  USER_CREATE: 'user:create',
  USER_READ: 'user:read',
  USER_UPDATE: 'user:update',
  USER_DELETE: 'user:delete',
  USER_EXPORT: 'user:export',
  
  // 角色管理权限
  ROLE_CREATE: 'role:create',
  ROLE_READ: 'role:read',
  ROLE_UPDATE: 'role:update',
  ROLE_DELETE: 'role:delete',
  
  // 权限管理权限
  PERMISSION_CREATE: 'permission:create',
  PERMISSION_READ: 'permission:read',
  PERMISSION_UPDATE: 'permission:update',
  PERMISSION_DELETE: 'permission:delete',
  
  // 菜单管理权限
  MENU_CREATE: 'menu:create',
  MENU_READ: 'menu:read',
  MENU_UPDATE: 'menu:update',
  MENU_DELETE: 'menu:delete',
  
  // 系统管理权限
  SYSTEM_READ: 'system:read',
  SYSTEM_UPDATE: 'system:update',
  
  // 数据可视化权限
  DV_CREATE: 'dv:create',
  DV_READ: 'dv:read',
  DV_UPDATE: 'dv:update',
  DV_DELETE: 'dv:delete',
} as const

/**
 * 超级管理员权限
 */
export const SUPER_ADMIN_PERMISSIONS = Object.values(PREDEFINED_PERMISSIONS)
```

## UI 常量

### 主题常量 (themes.ts)

```typescript
// packages/constants/src/ui/themes.ts

/**
 * 主题类型
 */
export const THEME_TYPES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto',
} as const

/**
 * 主题颜色
 */
export const THEME_COLORS = {
  PRIMARY: '#1890ff',
  SUCCESS: '#52c41a',
  WARNING: '#faad14',
  ERROR: '#ff4d4f',
  INFO: '#1890ff',
} as const

/**
 * 浅色主题配置
 */
export const LIGHT_THEME = {
  type: THEME_TYPES.LIGHT,
  colors: {
    primary: THEME_COLORS.PRIMARY,
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#000000',
    textSecondary: '#666666',
    border: '#d9d9d9',
  },
} as const

/**
 * 深色主题配置
 */
export const DARK_THEME = {
  type: THEME_TYPES.DARK,
  colors: {
    primary: THEME_COLORS.PRIMARY,
    background: '#141414',
    surface: '#1f1f1f',
    text: '#ffffff',
    textSecondary: '#a6a6a6',
    border: '#434343',
  },
} as const
```

### 尺寸常量 (sizes.ts)

```typescript
// packages/constants/src/ui/sizes.ts

/**
 * 组件尺寸
 */
export const COMPONENT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

/**
 * 断点尺寸
 */
export const BREAKPOINTS = {
  XS: 480,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1600,
} as const

/**
 * 间距尺寸
 */
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 48,
} as const

/**
 * 字体尺寸
 */
export const FONT_SIZES = {
  XS: 12,
  SM: 14,
  MD: 16,
  LG: 18,
  XL: 20,
  XXL: 24,
} as const
```

## 使用方法

### 1. 安装依赖

```bash
# 在应用中安装常量包
pnpm add @qiyun/constants
```

### 2. 导入使用

```typescript
// 导入所有常量
import { API_ENDPOINTS, USER_STATUS, THEME_COLORS } from '@qiyun/constants'

// 按模块导入
import { AUTH_ENDPOINTS } from '@qiyun/constants/api'
import { USER_STATUS } from '@qiyun/constants/business'
import { THEME_COLORS } from '@qiyun/constants/ui'

// 使用常量
const loginUrl = AUTH_ENDPOINTS.LOGIN
const activeStatus = USER_STATUS.ACTIVE
const primaryColor = THEME_COLORS.PRIMARY
```

### 3. 在组件中使用

```vue
<template>
  <div>
    <a-button 
      :type="COMPONENT_SIZES.LARGE"
      :style="{ color: THEME_COLORS.PRIMARY }"
    >
      登录
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { COMPONENT_SIZES, THEME_COLORS } from '@qiyun/constants'
</script>
```

### 4. 在 API 调用中使用

```typescript
import { AUTH_ENDPOINTS, HTTP_STATUS } from '@qiyun/constants'
import { apiClient } from '@/utils/request'

// 登录接口
export const login = async (credentials: LoginCredentials) => {
  const response = await apiClient.post(AUTH_ENDPOINTS.LOGIN, credentials)
  
  if (response.status === HTTP_STATUS.OK) {
    return response.data
  }
  
  throw new Error('登录失败')
}
```

## 常量管理最佳实践

### 1. 命名规范

- 使用 SCREAMING_SNAKE_CASE 命名常量
- 使用描述性的名称
- 避免使用缩写

```typescript
// 好的命名
export const USER_STATUS_ACTIVE = 1
export const API_TIMEOUT_DURATION = 30000
export const MAX_FILE_SIZE_MB = 10

// 不好的命名
export const USR_STS_ACT = 1
export const API_TO = 30000
export const MAX_SZ = 10
```

### 2. 分组组织

- 按功能模块分组
- 使用命名空间避免冲突
- 提供统一的导出入口

```typescript
// 按模块分组
export const USER_CONSTANTS = {
  STATUS: {
    ACTIVE: 1,
    INACTIVE: 0,
  },
  TYPES: {
    ADMIN: 'admin',
    USER: 'user',
  },
} as const

// 使用 as const 确保类型推断
export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
} as const
```

### 3. 类型安全

- 使用 TypeScript 的 const assertions
- 定义常量的类型
- 提供类型导出

```typescript
// 定义常量类型
export type UserStatus = typeof USER_STATUS[keyof typeof USER_STATUS]
export type ApiEndpoint = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS]

// 使用常量类型
interface User {
  id: string
  name: string
  status: UserStatus
}
```

### 4. 文档说明

- 为每个常量添加注释
- 说明常量的用途和含义
- 提供使用示例

```typescript
/**
 * 用户状态常量
 * 用于标识用户的激活状态
 */
export const USER_STATUS = {
  /** 激活状态 - 用户可以正常使用系统 */
  ACTIVE: 1,
  
  /** 未激活状态 - 用户需要激活后才能使用 */
  INACTIVE: 0,
  
  /** 禁用状态 - 用户被管理员禁用 */
  DISABLED: -1,
} as const
```

## 相关资源

- [TypeScript 常量断言](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)
- [API 接口文档](/guide/basics/api)
- [类型定义](/guide/modules/types)
- [工程规范](/guide/engineering/standards)