# 类型

## 概述

`packages/types` 是项目的 TypeScript 类型定义中心，提供了统一的类型系统，包括基础类型、业务类型、API 类型、组件类型等。确保整个项目的类型安全和开发体验。

## 架构

### 技术栈

- **TypeScript**: 类型系统核心
- **Zod**: 运行时类型验证
- **Type-fest**: 实用类型工具
- **Vite**: 构建工具
- **Vitest**: 类型测试

### 项目结构

```
packages/types/
├── src/
│   ├── base/               # 基础类型
│   │   ├── common.ts      # 通用类型
│   │   ├── utility.ts     # 工具类型
│   │   ├── primitive.ts   # 原始类型
│   │   └── generic.ts     # 泛型类型
│   ├── api/               # API 相关类型
│   │   ├── request.ts     # 请求类型
│   │   ├── response.ts    # 响应类型
│   │   ├── error.ts       # 错误类型
│   │   └── pagination.ts  # 分页类型
│   ├── business/          # 业务类型
│   │   ├── user.ts        # 用户类型
│   │   ├── auth.ts        # 认证类型
│   │   ├── permission.ts  # 权限类型
│   │   ├── menu.ts        # 菜单类型
│   │   └── system.ts      # 系统类型
│   ├── components/        # 组件类型
│   │   ├── props.ts       # 组件属性类型
│   │   ├── events.ts      # 事件类型
│   │   ├── slots.ts       # 插槽类型
│   │   └── refs.ts        # 引用类型
│   ├── store/             # 状态管理类型
│   │   ├── state.ts       # 状态类型
│   │   ├── actions.ts     # 动作类型
│   │   ├── getters.ts     # 获取器类型
│   │   └── mutations.ts   # 变更类型
│   ├── router/            # 路由类型
│   │   ├── route.ts       # 路由类型
│   │   ├── meta.ts        # 路由元信息
│   │   └── guard.ts       # 路由守卫类型
│   ├── utils/             # 工具类型
│   │   ├── helpers.ts     # 辅助类型
│   │   ├── validators.ts  # 验证类型
│   │   └── transformers.ts # 转换类型
│   ├── schemas/           # Zod 模式
│   │   ├── user.schema.ts # 用户模式
│   │   ├── api.schema.ts  # API 模式
│   │   └── form.schema.ts # 表单模式
│   ├── index.ts           # 主入口
│   └── global.d.ts        # 全局类型声明
├── tests/                 # 类型测试
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 核心类型

### 1. 基础类型

#### 通用类型

```typescript
// src/base/common.ts
/**
 * 基础 ID 类型
 */
export type ID = string | number

/**
 * 时间戳类型
 */
export type Timestamp = number

/**
 * 日期字符串类型
 */
export type DateString = string

/**
 * 可选字段类型
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * 必需字段类型
 */
export type Required<T, K extends keyof T> = T & Required<Pick<T, K>>

/**
 * 深度可选类型
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * 深度必需类型
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}

/**
 * 键值对类型
 */
export type KeyValue<K extends string | number | symbol = string, V = any> = Record<K, V>

/**
 * 字符串键对象类型
 */
export type StringRecord<T = any> = Record<string, T>

/**
 * 数字键对象类型
 */
export type NumberRecord<T = any> = Record<number, T>

/**
 * 可为空类型
 */
export type Nullable<T> = T | null

/**
 * 可为未定义类型
 */
export type Maybe<T> = T | undefined

/**
 * 可为空或未定义类型
 */
export type Optional<T> = T | null | undefined

/**
 * 非空类型
 */
export type NonNullable<T> = T extends null | undefined ? never : T

/**
 * 数组元素类型
 */
export type ArrayElement<T> = T extends (infer U)[] ? U : never

/**
 * 函数参数类型
 */
export type FunctionArgs<T> = T extends (...args: infer U) => any ? U : never

/**
 * 函数返回类型
 */
export type FunctionReturn<T> = T extends (...args: any[]) => infer U ? U : never

/**
 * Promise 解析类型
 */
export type PromiseResolve<T> = T extends Promise<infer U> ? U : T

/**
 * 值类型联合
 */
export type ValueOf<T> = T[keyof T]

/**
 * 字符串字面量联合
 */
export type StringLiteral<T> = T extends string ? (string extends T ? never : T) : never
```

#### 工具类型

```typescript
// src/base/utility.ts
/**
 * 排除指定键的类型
 */
export type Except<T, K extends keyof T> = Omit<T, K>

/**
 * 选择指定键的类型
 */
export type Select<T, K extends keyof T> = Pick<T, K>

/**
 * 重命名键类型
 */
export type Rename<T, K extends keyof T, N extends string> = Except<T, K> & Record<N, T[K]>

/**
 * 合并类型
 */
export type Merge<T, U> = Omit<T, keyof U> & U

/**
 * 覆盖类型
 */
export type Override<T, U> = Omit<T, keyof U> & U

/**
 * 条件类型
 */
export type If<C extends boolean, T, F> = C extends true ? T : F

/**
 * 类型守卫
 */
export type TypeGuard<T> = (value: unknown) => value is T

/**
 * 类型断言
 */
export type TypeAssertion<T> = (value: unknown) => asserts value is T

/**
 * 类型转换器
 */
export type TypeConverter<T, U> = (value: T) => U

/**
 * 类型验证器
 */
export type TypeValidator<T> = (value: unknown) => T | never

/**
 * 枚举值类型
 */
export type EnumValues<T extends Record<string, string | number>> = T[keyof T]

/**
 * 枚举键类型
 */
export type EnumKeys<T extends Record<string, string | number>> = keyof T

/**
 * 字符串枚举类型
 */
export type StringEnum<T extends Record<string, string>> = {
  readonly [K in keyof T]: T[K]
}

/**
 * 数字枚举类型
 */
export type NumberEnum<T extends Record<string, number>> = {
  readonly [K in keyof T]: T[K]
}

/**
 * 联合转交集类型
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

/**
 * 元组转联合类型
 */
export type TupleToUnion<T extends readonly unknown[]> = T[number]

/**
 * 联合转元组类型
 */
export type UnionToTuple<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer W ? [...UnionToTuple<Exclude<T, W>>, W] : []

/**
 * 深度只读类型
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

/**
 * 深度可写类型
 */
export type DeepMutable<T> = {
  -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P]
}
```

### 2. API 类型

#### 请求响应类型

```typescript
// src/api/request.ts
/**
 * HTTP 方法类型
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'

/**
 * 请求头类型
 */
export type RequestHeaders = Record<string, string>

/**
 * 查询参数类型
 */
export type QueryParams = Record<string, string | number | boolean | undefined>

/**
 * 请求体类型
 */
export type RequestBody = any

/**
 * 基础请求配置
 */
export interface BaseRequestConfig {
  url: string
  method?: HttpMethod
  headers?: RequestHeaders
  params?: QueryParams
  data?: RequestBody
  timeout?: number
  withCredentials?: boolean
}

/**
 * 扩展请求配置
 */
export interface RequestConfig extends BaseRequestConfig {
  baseURL?: string
  transformRequest?: (data: any) => any
  transformResponse?: (data: any) => any
  validateStatus?: (status: number) => boolean
  maxRedirects?: number
  signal?: AbortSignal
}

/**
 * 请求拦截器类型
 */
export type RequestInterceptor = (config: RequestConfig) => RequestConfig | Promise<RequestConfig>

/**
 * 响应拦截器类型
 */
export type ResponseInterceptor<T = any> = (response: ApiResponse<T>) => ApiResponse<T> | Promise<ApiResponse<T>>

/**
 * 错误拦截器类型
 */
export type ErrorInterceptor = (error: ApiError) => Promise<never>
```

```typescript
// src/api/response.ts
/**
 * API 响应状态码
 */
export enum ApiStatusCode {
  SUCCESS = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

/**
 * 基础 API 响应
 */
export interface BaseApiResponse {
  code: number
  message: string
  timestamp: number
  traceId?: string
}

/**
 * 成功响应
 */
export interface ApiSuccessResponse<T = any> extends BaseApiResponse {
  code: ApiStatusCode.SUCCESS
  data: T
  success: true
}

/**
 * 错误响应
 */
export interface ApiErrorResponse extends BaseApiResponse {
  code: Exclude<ApiStatusCode, ApiStatusCode.SUCCESS>
  error: string
  details?: any
  success: false
}

/**
 * API 响应联合类型
 */
export type ApiResponse<T = any> = ApiSuccessResponse<T> | ApiErrorResponse

/**
 * 分页响应数据
 */
export interface PaginatedData<T = any> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

/**
 * 分页响应
 */
export type PaginatedResponse<T = any> = ApiSuccessResponse<PaginatedData<T>>

/**
 * 列表响应
 */
export type ListResponse<T = any> = ApiSuccessResponse<T[]>

/**
 * 详情响应
 */
export type DetailResponse<T = any> = ApiSuccessResponse<T>

/**
 * 创建响应
 */
export interface CreateResponse<T = any> extends ApiSuccessResponse<T> {
  code: ApiStatusCode.CREATED
}

/**
 * 更新响应
 */
export type UpdateResponse<T = any> = ApiSuccessResponse<T>

/**
 * 删除响应
 */
export interface DeleteResponse extends BaseApiResponse {
  code: ApiStatusCode.NO_CONTENT
  success: true
}
```

#### 错误类型

```typescript
// src/api/error.ts
/**
 * API 错误类型
 */
export enum ApiErrorType {
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  REQUEST_ERROR = 'REQUEST_ERROR',
  RESPONSE_ERROR = 'RESPONSE_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR',
  NOT_FOUND_ERROR = 'NOT_FOUND_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

/**
 * 基础 API 错误
 */
export interface BaseApiError {
  type: ApiErrorType
  message: string
  code?: number
  details?: any
  timestamp: number
}

/**
 * 网络错误
 */
export interface NetworkError extends BaseApiError {
  type: ApiErrorType.NETWORK_ERROR
}

/**
 * 超时错误
 */
export interface TimeoutError extends BaseApiError {
  type: ApiErrorType.TIMEOUT_ERROR
  timeout: number
}

/**
 * 请求错误
 */
export interface RequestError extends BaseApiError {
  type: ApiErrorType.REQUEST_ERROR
  config: RequestConfig
}

/**
 * 响应错误
 */
export interface ResponseError extends BaseApiError {
  type: ApiErrorType.RESPONSE_ERROR
  response: ApiErrorResponse
  status: number
}

/**
 * 验证错误
 */
export interface ValidationError extends BaseApiError {
  type: ApiErrorType.VALIDATION_ERROR
  field: string
  value: any
  rule: string
}

/**
 * 认证错误
 */
export interface AuthenticationError extends BaseApiError {
  type: ApiErrorType.AUTHENTICATION_ERROR
}

/**
 * 授权错误
 */
export interface AuthorizationError extends BaseApiError {
  type: ApiErrorType.AUTHORIZATION_ERROR
  requiredPermissions?: string[]
}

/**
 * 404 错误
 */
export interface NotFoundError extends BaseApiError {
  type: ApiErrorType.NOT_FOUND_ERROR
  resource: string
}

/**
 * 服务器错误
 */
export interface ServerError extends BaseApiError {
  type: ApiErrorType.SERVER_ERROR
  stack?: string
}

/**
 * API 错误联合类型
 */
export type ApiError = 
  | NetworkError
  | TimeoutError
  | RequestError
  | ResponseError
  | ValidationError
  | AuthenticationError
  | AuthorizationError
  | NotFoundError
  | ServerError
  | BaseApiError

/**
 * 错误处理器类型
 */
export type ErrorHandler<T extends ApiError = ApiError> = (error: T) => void | Promise<void>

/**
 * 错误重试配置
 */
export interface RetryConfig {
  maxRetries: number
  retryDelay: number
  retryCondition: (error: ApiError) => boolean
}
```

### 3. 业务类型

#### 用户类型

```typescript
// src/business/user.ts
/**
 * 用户状态枚举
 */
export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  DELETED = 'deleted',
}

/**
 * 用户性别枚举
 */
export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

/**
 * 基础用户信息
 */
export interface BaseUser {
  id: ID
  username: string
  email: string
  phone?: string
  avatar?: string
  status: UserStatus
  createdAt: DateString
  updatedAt: DateString
}

/**
 * 用户详细信息
 */
export interface UserProfile extends BaseUser {
  firstName?: string
  lastName?: string
  displayName?: string
  gender?: UserGender
  birthday?: DateString
  bio?: string
  website?: string
  location?: string
  timezone?: string
  language?: string
}

/**
 * 用户设置
 */
export interface UserSettings {
  theme: 'light' | 'dark' | 'auto'
  language: string
  timezone: string
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
  privacy: {
    profileVisible: boolean
    emailVisible: boolean
    phoneVisible: boolean
  }
}

/**
 * 完整用户信息
 */
export interface User extends UserProfile {
  roles: Role[]
  permissions: Permission[]
  settings: UserSettings
  lastLoginAt?: DateString
  loginCount: number
}

/**
 * 用户创建数据
 */
export interface CreateUserData {
  username: string
  email: string
  password: string
  phone?: string
  firstName?: string
  lastName?: string
  roleIds?: ID[]
}

/**
 * 用户更新数据
 */
export interface UpdateUserData extends Partial<Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>> {
  roleIds?: ID[]
}

/**
 * 用户查询参数
 */
export interface UserQueryParams {
  keyword?: string
  status?: UserStatus
  roleId?: ID
  createdAfter?: DateString
  createdBefore?: DateString
  page?: number
  pageSize?: number
  sortBy?: keyof User
  sortOrder?: 'asc' | 'desc'
}

/**
 * 用户统计信息
 */
export interface UserStats {
  total: number
  active: number
  inactive: number
  suspended: number
  newThisMonth: number
  loginToday: number
}
```

#### 权限类型

```typescript
// src/business/permission.ts
/**
 * 权限类型枚举
 */
export enum PermissionType {
  READ = 'read',
  WRITE = 'write',
  DELETE = 'delete',
  ADMIN = 'admin',
}

/**
 * 资源类型枚举
 */
export enum ResourceType {
  USER = 'user',
  ROLE = 'role',
  PERMISSION = 'permission',
  MENU = 'menu',
  SYSTEM = 'system',
}

/**
 * 权限
 */
export interface Permission {
  id: ID
  name: string
  code: string
  description?: string
  type: PermissionType
  resource: ResourceType
  actions: string[]
  conditions?: Record<string, any>
  createdAt: DateString
  updatedAt: DateString
}

/**
 * 角色
 */
export interface Role {
  id: ID
  name: string
  code: string
  description?: string
  permissions: Permission[]
  isSystem: boolean
  createdAt: DateString
  updatedAt: DateString
}

/**
 * 权限检查结果
 */
export interface PermissionCheck {
  hasPermission: boolean
  reason?: string
  requiredPermissions: string[]
  userPermissions: string[]
}

/**
 * 权限上下文
 */
export interface PermissionContext {
  user: User
  resource?: string
  action?: string
  conditions?: Record<string, any>
}

/**
 * 权限策略
 */
export type PermissionPolicy = (context: PermissionContext) => boolean | Promise<boolean>

/**
 * 权限守卫配置
 */
export interface PermissionGuardConfig {
  permissions: string[]
  operator?: 'AND' | 'OR'
  policy?: PermissionPolicy
  fallback?: string
}
```

### 4. 组件类型

#### 组件属性类型

```typescript
// src/components/props.ts
/**
 * 基础组件属性
 */
export interface BaseComponentProps {
  id?: string
  class?: string | string[] | Record<string, boolean>
  style?: string | Record<string, any>
}

/**
 * 尺寸枚举
 */
export enum ComponentSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

/**
 * 颜色变体枚举
 */
export enum ComponentVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

/**
 * 按钮属性
 */
export interface ButtonProps extends BaseComponentProps {
  type?: 'button' | 'submit' | 'reset'
  size?: ComponentSize
  variant?: ComponentVariant
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  block?: boolean
  round?: boolean
  ghost?: boolean
  onClick?: (event: MouseEvent) => void
}

/**
 * 输入框属性
 */
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  value?: string | number
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  size?: ComponentSize
  clearable?: boolean
  showPassword?: boolean
  prefix?: string
  suffix?: string
  onInput?: (value: string) => void
  onChange?: (value: string) => void
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
}

/**
 * 表格列定义
 */
export interface TableColumn<T = any> {
  key: keyof T | string
  title: string
  width?: number | string
  minWidth?: number
  maxWidth?: number
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  filterable?: boolean
  resizable?: boolean
  fixed?: 'left' | 'right'
  render?: (value: any, record: T, index: number) => any
  formatter?: (value: any) => string
}

/**
 * 表格属性
 */
export interface TableProps<T = any> extends BaseComponentProps {
  data: T[]
  columns: TableColumn<T>[]
  loading?: boolean
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
  size?: ComponentSize
  rowKey?: keyof T | ((record: T) => string)
  selection?: {
    type: 'checkbox' | 'radio'
    selectedKeys: (string | number)[]
    onChange: (keys: (string | number)[]) => void
  }
  pagination?: {
    current: number
    pageSize: number
    total: number
    onChange: (page: number, pageSize: number) => void
  }
  onRowClick?: (record: T, index: number) => void
}
```

### 5. Zod 模式

#### 用户模式

```typescript
// src/schemas/user.schema.ts
import { z } from 'zod'
import { UserStatus, UserGender } from '../business/user'

/**
 * 用户状态模式
 */
export const UserStatusSchema = z.nativeEnum(UserStatus)

/**
 * 用户性别模式
 */
export const UserGenderSchema = z.nativeEnum(UserGender)

/**
 * 基础用户模式
 */
export const BaseUserSchema = z.object({
  id: z.union([z.string(), z.number()]),
  username: z.string().min(3).max(20),
  email: z.string().email(),
  phone: z.string().optional(),
  avatar: z.string().url().optional(),
  status: UserStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
})

/**
 * 用户详细信息模式
 */
export const UserProfileSchema = BaseUserSchema.extend({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  displayName: z.string().optional(),
  gender: UserGenderSchema.optional(),
  birthday: z.string().optional(),
  bio: z.string().max(500).optional(),
  website: z.string().url().optional(),
  location: z.string().optional(),
  timezone: z.string().optional(),
  language: z.string().optional(),
})

/**
 * 用户创建模式
 */
export const CreateUserSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(50),
  phone: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  roleIds: z.array(z.union([z.string(), z.number()])).optional(),
})

/**
 * 用户更新模式
 */
export const UpdateUserSchema = z.object({
  username: z.string().min(3).max(20).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  displayName: z.string().optional(),
  gender: UserGenderSchema.optional(),
  birthday: z.string().optional(),
  bio: z.string().max(500).optional(),
  website: z.string().url().optional(),
  location: z.string().optional(),
  timezone: z.string().optional(),
  language: z.string().optional(),
  roleIds: z.array(z.union([z.string(), z.number()])).optional(),
})

/**
 * 用户查询参数模式
 */
export const UserQuerySchema = z.object({
  keyword: z.string().optional(),
  status: UserStatusSchema.optional(),
  roleId: z.union([z.string(), z.number()]).optional(),
  createdAfter: z.string().optional(),
  createdBefore: z.string().optional(),
  page: z.number().min(1).optional(),
  pageSize: z.number().min(1).max(100).optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
})

// 导出推断类型
export type BaseUserType = z.infer<typeof BaseUserSchema>
export type UserProfileType = z.infer<typeof UserProfileSchema>
export type CreateUserType = z.infer<typeof CreateUserSchema>
export type UpdateUserType = z.infer<typeof UpdateUserSchema>
export type UserQueryType = z.infer<typeof UserQuerySchema>
```

### 6. 全局类型声明

```typescript
// src/global.d.ts
declare global {
  /**
   * 环境变量类型
   */
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_VERSION: string
    readonly VITE_API_BASE_URL: string
    readonly VITE_API_TIMEOUT: string
    readonly VITE_ENABLE_MOCK: string
    readonly VITE_ENABLE_DEVTOOLS: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

  /**
   * Window 对象扩展
   */
  interface Window {
    __APP_CONFIG__: {
      title: string
      version: string
      buildTime: string
    }
    __INITIAL_STATE__: any
  }

  /**
   * Vue 组件实例类型
   */
  declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $api: any
      $utils: any
      $constants: any
    }
  }

  /**
   * 模块声明
   */
  declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }

  declare module '*.svg' {
    const content: string
    export default content
  }

  declare module '*.png' {
    const content: string
    export default content
  }

  declare module '*.jpg' {
    const content: string
    export default content
  }

  declare module '*.jpeg' {
    const content: string
    export default content
  }

  declare module '*.gif' {
    const content: string
    export default content
  }

  declare module '*.webp' {
    const content: string
    export default content
  }

  /**
   * CSS 模块声明
   */
  declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
  }

  declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
  }

  declare module '*.module.sass' {
    const classes: { readonly [key: string]: string }
    export default classes
  }

  /**
   * 第三方库类型扩展
   */
  declare module 'lodash-es' {
    export * from 'lodash'
  }
}

export {}
```

### 7. 构建配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'QiyunTypes',
      formats: ['es', 'cjs'],
      fileName: (format) => `types.${format}.js`,
    },
    rollupOptions: {
      external: ['zod', 'type-fest'],
    },
  },
})
```

## 使用方法

### 1. 基本使用

```typescript
import type { User, CreateUserData, ApiResponse } from '@qiyun/types'
import { CreateUserSchema } from '@qiyun/types/schemas'

// 类型注解
const user: User = {
  id: '1',
  username: 'john_doe',
  email: 'john@example.com',
  // ... 其他属性
}

// 运行时验证
const createUser = (data: unknown): CreateUserData => {
  return CreateUserSchema.parse(data)
}

// API 响应类型
const fetchUser = async (id: string): Promise<ApiResponse<User>> => {
  const response = await api.get(`/users/${id}`)
  return response.data
}
```

### 2. 泛型使用

```typescript
import type { PaginatedResponse, ListResponse } from '@qiyun/types'

// 分页数据
const fetchUsers = async (): Promise<PaginatedResponse<User>> => {
  const response = await api.get('/users')
  return response.data
}

// 列表数据
const fetchRoles = async (): Promise<ListResponse<Role>> => {
  const response = await api.get('/roles')
  return response.data
}

// 自定义泛型组件
interface DataTableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  onRowClick?: (record: T) => void
}

const DataTable = <T,>(props: DataTableProps<T>) => {
  // 组件实现
}
```

### 3. 类型守卫

```typescript
import type { ApiResponse, ApiSuccessResponse, ApiErrorResponse } from '@qiyun/types'

// 类型守卫函数
const isSuccessResponse = <T>(response: ApiResponse<T>): response is ApiSuccessResponse<T> => {
  return response.success === true
}

const isErrorResponse = (response: ApiResponse): response is ApiErrorResponse => {
  return response.success === false
}

// 使用类型守卫
const handleResponse = <T>(response: ApiResponse<T>) => {
  if (isSuccessResponse(response)) {
    // TypeScript 知道这里是成功响应
    console.log(response.data)
  } else if (isErrorResponse(response)) {
    // TypeScript 知道这里是错误响应
    console.error(response.error)
  }
}
```

### 4. 工具类型使用

```typescript
import type { Optional, DeepPartial, Merge } from '@qiyun/types'

// 可选字段
type CreateUserOptional = Optional<CreateUserData, 'phone' | 'firstName' | 'lastName'>

// 深度可选
type PartialUser = DeepPartial<User>

// 类型合并
type ExtendedUser = Merge<User, {
  customField: string
  metadata: Record<string, any>
}>

// 条件类型
type UserWithRoles<T extends boolean> = T extends true 
  ? User & { roles: Role[] }
  : Omit<User, 'roles'>
```

### 5. Zod 集成

```typescript
import { z } from 'zod'
import { CreateUserSchema, UpdateUserSchema } from '@qiyun/types/schemas'

// 表单验证
const validateCreateUser = (data: unknown) => {
  try {
    const validData = CreateUserSchema.parse(data)
    return { success: true, data: validData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.errors }
    }
    throw error
  }
}

// 部分验证
const validateUpdateUser = (data: unknown) => {
  const result = UpdateUserSchema.safeParse(data)
  if (result.success) {
    return result.data
  } else {
    throw new Error('Validation failed')
  }
}

// 自定义验证
const CustomUserSchema = CreateUserSchema.extend({
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})
```

## 最佳实践

### 1. 类型组织

```typescript
// 按功能模块组织类型
// ✅ 推荐
export * from './user'
export * from './auth'
export * from './permission'

// ❌ 避免
export * from './types' // 太宽泛
```

### 2. 类型命名

```typescript
// ✅ 推荐 - 语义化命名
interface UserProfile {
  // 用户资料
}

interface CreateUserRequest {
  // 创建用户请求
}

interface UserListResponse {
  // 用户列表响应
}

// ❌ 避免 - 模糊命名
interface UserData {
  // 不明确是什么数据
}

interface UserInfo {
  // 不明确是什么信息
}
```

### 3. 泛型约束

```typescript
// ✅ 推荐 - 使用泛型约束
interface Repository<T extends { id: ID }> {
  findById(id: ID): Promise<T | null>
  create(data: Omit<T, 'id'>): Promise<T>
  update(id: ID, data: Partial<T>): Promise<T>
  delete(id: ID): Promise<void>
}

// ❌ 避免 - 过于宽泛的泛型
interface Repository<T> {
  // 没有约束，类型不安全
}
```

### 4. 类型安全

```typescript
// ✅ 推荐 - 严格的类型定义
interface ApiEndpoints {
  readonly users: '/api/users'
  readonly roles: '/api/roles'
  readonly permissions: '/api/permissions'
}

const API_ENDPOINTS: ApiEndpoints = {
  users: '/api/users',
  roles: '/api/roles',
  permissions: '/api/permissions',
} as const

// ❌ 避免 - 松散的类型定义
const API_ENDPOINTS = {
  users: '/api/users',
  roles: '/api/roles',
  permissions: '/api/permissions',
}
```

### 5. 运行时验证

```typescript
// ✅ 推荐 - 结合 Zod 进行运行时验证
const UserSchema = z.object({
  id: z.string(),
  username: z.string().min(3),
  email: z.string().email(),
})

type User = z.infer<typeof UserSchema>

const validateUser = (data: unknown): User => {
  return UserSchema.parse(data)
}

// ❌ 避免 - 仅依赖 TypeScript 类型
interface User {
  id: string
  username: string
  email: string
}

const validateUser = (data: any): User => {
  // 没有运行时验证，不安全
  return data as User
}
```

## 相关资源

- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [Zod 文档](https://zod.dev/)
- [Type-fest 工具库](https://github.com/sindresorhus/type-fest)
- [Vue 3 TypeScript 支持](https://vuejs.org/guide/typescript/overview.html)
- [API 设计](/guide/basics/api)
- [组件开发](/guide/modules/components)