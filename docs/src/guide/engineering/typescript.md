# TypeScript 配置

## 概述

Qiyun Monorepo 项目全面采用 TypeScript 作为开发语言，提供强类型支持、更好的开发体验和代码质量保障。本文档详细介绍项目的 TypeScript 配置、最佳实践和使用指南。

## 配置文件

### 1. 根目录配置 (tsconfig.json)

```json
{
  "compilerOptions": {
    // 基础配置
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    // 严格模式
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,

    // 路径映射
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@qiyun/*": ["./packages/*/src"],
      "@apps/*": ["./apps/*/src"]
    },

    // 装饰器支持
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,

    // 其他配置
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "verbatimModuleSyntax": true
  },
  "include": ["src/**/*", "packages/**/*", "apps/**/*", "types/**/*"],
  "exclude": ["node_modules", "dist", "build", "coverage"],
  "references": [
    { "path": "./apps/admin" },
    { "path": "./apps/web" },
    { "path": "./packages/components" },
    { "path": "./packages/utils" },
    { "path": "./packages/types" }
  ]
}
```

### 2. 应用配置 (apps/admin/tsconfig.json)

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "types": ["vite/client", "node"],
    "jsx": "preserve",
    "jsxImportSource": "vue"
  },
  "include": ["src/**/*", "vite.config.ts", "vitest.config.ts", "env.d.ts"],
  "references": [
    { "path": "../../packages/components" },
    { "path": "../../packages/utils" },
    { "path": "../../packages/types" }
  ]
}
```

### 3. 包配置 (packages/utils/tsconfig.json)

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "declarationMap": true,
    "emitDeclarationOnly": false,
    "noEmit": false
  },
  "include": ["src/**/*"],
  "exclude": ["**/*.test.ts", "**/*.spec.ts"]
}
```

## 类型定义

### 1. 全局类型声明 (types/global.d.ts)

```typescript
// 全局类型声明
declare global {
  // 环境变量类型
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_API_BASE_URL: string;
    readonly VITE_APP_ENV: "development" | "staging" | "production";
    readonly VITE_ENABLE_MOCK: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  // 窗口对象扩展
  interface Window {
    __APP_VERSION__: string;
    __BUILD_TIME__: string;
  }

  // 模块声明
  declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }

  declare module "*.svg" {
    const content: string;
    export default content;
  }

  declare module "*.png" {
    const content: string;
    export default content;
  }
}

export {};
```

### 2. API 类型定义 (packages/types/src/api.ts)

```typescript
// 基础 API 类型
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
  timestamp: number;
}

export interface ApiError {
  code: number;
  message: string;
  details?: Record<string, any>;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginationResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// 请求配置类型
export interface RequestConfig {
  timeout?: number;
  retries?: number;
  cache?: boolean;
  loading?: boolean;
  errorHandler?: (error: ApiError) => void;
}

// HTTP 方法类型
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// 请求拦截器类型
export interface RequestInterceptor {
  onRequest?: (config: any) => any;
  onRequestError?: (error: any) => any;
}

// 响应拦截器类型
export interface ResponseInterceptor {
  onResponse?: (response: any) => any;
  onResponseError?: (error: any) => any;
}
```

### 3. 业务类型定义 (packages/types/src/business.ts)

```typescript
// 用户相关类型
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  status: UserStatus;
  roles: Role[];
  profile: UserProfile;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  bio?: string;
}

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
  profile: Omit<UserProfile, "id">;
}

export interface UpdateUserData {
  username?: string;
  email?: string;
  profile?: Partial<UserProfile>;
}

export type UserStatus = "active" | "inactive" | "suspended";

// 角色权限类型
export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: string;
  description?: string;
}

// 菜单类型
export interface MenuItem {
  id: string;
  title: string;
  path?: string;
  icon?: string;
  component?: string;
  redirect?: string;
  children?: MenuItem[];
  meta: MenuMeta;
}

export interface MenuMeta {
  requiresAuth: boolean;
  permissions?: string[];
  roles?: string[];
  hidden?: boolean;
  keepAlive?: boolean;
  title?: string;
}
```

### 4. 组件类型定义 (packages/types/src/components.ts)

```typescript
// 基础组件 Props 类型
export interface BaseComponentProps {
  id?: string;
  class?:
    | string
    | Record<string, boolean>
    | Array<string | Record<string, boolean>>;
  style?: string | Record<string, any>;
}

// 按钮组件类型
export interface ButtonProps extends BaseComponentProps {
  type?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  block?: boolean;
  round?: boolean;
  circle?: boolean;
}

// 表单组件类型
export interface FormProps extends BaseComponentProps {
  model: Record<string, any>;
  rules?: FormRules;
  labelWidth?: string | number;
  labelPosition?: "left" | "right" | "top";
  inline?: boolean;
  disabled?: boolean;
  validateOnRuleChange?: boolean;
}

export interface FormItemProps extends BaseComponentProps {
  prop?: string;
  label?: string;
  labelWidth?: string | number;
  required?: boolean;
  rules?: FormRule | FormRule[];
  error?: string;
  showMessage?: boolean;
}

export interface FormRule {
  required?: boolean;
  message?: string;
  trigger?: "blur" | "change" | "submit";
  min?: number;
  max?: number;
  pattern?: RegExp;
  validator?: (
    rule: FormRule,
    value: any,
    callback: (error?: Error) => void,
  ) => void;
}

export type FormRules = Record<string, FormRule | FormRule[]>;

// 表格组件类型
export interface TableProps<T = any> extends BaseComponentProps {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  pagination?: PaginationConfig;
  selection?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  resizable?: boolean;
  bordered?: boolean;
  striped?: boolean;
  size?: "small" | "medium" | "large";
}

export interface TableColumn<T = any> {
  key: keyof T | string;
  title: string;
  width?: number | string;
  minWidth?: number | string;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  filterable?: boolean;
  fixed?: "left" | "right";
  render?: (value: any, record: T, index: number) => any;
  formatter?: (value: any, record: T, index: number) => string;
}

export interface PaginationConfig {
  current: number;
  pageSize: number;
  total: number;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean;
  pageSizeOptions?: number[];
}
```

## 工具类型

### 1. 实用工具类型 (packages/types/src/utils.ts)

```typescript
// 深度只读类型
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 深度可选类型
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 深度必需类型
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

// 提取函数参数类型
export type ExtractFunctionArgs<T> = T extends (...args: infer P) => any
  ? P
  : never;

// 提取函数返回类型
export type ExtractFunctionReturn<T> = T extends (...args: any[]) => infer R
  ? R
  : never;

// 提取 Promise 类型
export type ExtractPromiseType<T> = T extends Promise<infer U> ? U : T;

// 键值对类型
export type KeyValuePair<
  K extends string | number | symbol = string,
  V = any,
> = {
  [key in K]: V;
};

// 可空类型
export type Nullable<T> = T | null;

// 可选类型
export type Optional<T> = T | undefined;

// 可空可选类型
export type Maybe<T> = T | null | undefined;

// 排除空值类型
export type NonNullable<T> = T extends null | undefined ? never : T;

// 数组元素类型
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

// 对象值类型
export type ValueOf<T> = T[keyof T];

// 字符串字面量联合类型
export type StringLiteral<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;

// 数字字面量联合类型
export type NumberLiteral<T> = T extends number
  ? number extends T
    ? never
    : T
  : never;

// 条件类型工具
export type If<C extends boolean, T, F> = C extends true ? T : F;

// 元组转联合类型
export type TupleToUnion<T extends readonly any[]> = T[number];

// 联合类型转交叉类型
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

// 获取对象的必需键
export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

// 获取对象的可选键
export type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

// 创建严格的对象类型
export type Exact<T, U> = T extends U ? (U extends T ? T : never) : never;

// 递归键路径类型
export type KeyPath<T, K extends keyof T = keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ? `${K}` | `${K}.${KeyPath<T[K]>}`
    : `${K}`
  : never;

// 根据键路径获取值类型
export type GetValueByPath<
  T,
  P extends string,
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? GetValueByPath<T[K], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;
```

### 2. 状态管理类型 (packages/types/src/store.ts)

```typescript
// Pinia Store 基础类型
export interface BaseState {
  loading: boolean;
  error: string | null;
}

// 用户状态类型
export interface UserState extends BaseState {
  currentUser: User | null;
  token: string | null;
  permissions: string[];
  roles: string[];
}

// 应用状态类型
export interface AppState extends BaseState {
  theme: "light" | "dark" | "auto";
  locale: string;
  sidebarCollapsed: boolean;
  breadcrumbs: BreadcrumbItem[];
  tabs: TabItem[];
}

export interface BreadcrumbItem {
  title: string;
  path?: string;
}

export interface TabItem {
  key: string;
  title: string;
  path: string;
  closable?: boolean;
}

// Store Actions 类型
export interface UserActions {
  login(credentials: LoginCredentials): Promise<void>;
  logout(): Promise<void>;
  refreshToken(): Promise<void>;
  updateProfile(profile: Partial<UserProfile>): Promise<void>;
  changePassword(data: ChangePasswordData): Promise<void>;
}

export interface AppActions {
  setTheme(theme: AppState["theme"]): void;
  setLocale(locale: string): void;
  toggleSidebar(): void;
  addBreadcrumb(item: BreadcrumbItem): void;
  addTab(item: TabItem): void;
  removeTab(key: string): void;
}

// Store Getters 类型
export interface UserGetters {
  isAuthenticated: boolean;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
  fullName: string;
}

export interface AppGetters {
  isDarkMode: boolean;
  currentLocale: string;
  isSidebarCollapsed: boolean;
}
```

## 类型守卫和验证

### 1. 类型守卫函数 (packages/utils/src/type-guards.ts)

```typescript
// 基础类型守卫
export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

export const isNumber = (value: unknown): value is number => {
  return typeof value === "number" && !isNaN(value);
};

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};

export const isObject = (value: unknown): value is Record<string, any> => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
};

export const isArray = <T = any>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

export const isFunction = (value: unknown): value is Function => {
  return typeof value === "function";
};

export const isPromise = <T = any>(value: unknown): value is Promise<T> => {
  return (
    value instanceof Promise ||
    (isObject(value) && isFunction((value as any).then))
  );
};

// 空值检查
export const isNull = (value: unknown): value is null => {
  return value === null;
};

export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined;
};

export const isNullish = (value: unknown): value is null | undefined => {
  return isNull(value) || isUndefined(value);
};

export const isNotNullish = <T>(value: T | null | undefined): value is T => {
  return !isNullish(value);
};

// 业务类型守卫
export const isUser = (value: unknown): value is User => {
  return (
    isObject(value) &&
    isString(value.id) &&
    isString(value.username) &&
    isString(value.email) &&
    isArray(value.roles)
  );
};

export const isApiResponse = <T = any>(
  value: unknown,
): value is ApiResponse<T> => {
  return (
    isObject(value) &&
    isNumber(value.code) &&
    isString(value.message) &&
    "data" in value
  );
};

export const isApiError = (value: unknown): value is ApiError => {
  return isObject(value) && isNumber(value.code) && isString(value.message);
};

// 泛型类型守卫
export const hasProperty = <T extends Record<string, any>, K extends string>(
  obj: T,
  key: K,
): obj is T & Record<K, unknown> => {
  return key in obj;
};

export const isArrayOf = <T>(
  value: unknown,
  guard: (item: unknown) => item is T,
): value is T[] => {
  return isArray(value) && value.every(guard);
};

export const isObjectWith = <T extends Record<string, any>>(
  value: unknown,
  guards: { [K in keyof T]: (value: unknown) => value is T[K] },
): value is T => {
  if (!isObject(value)) return false;

  return Object.entries(guards).every(([key, guard]) => {
    return guard(value[key]);
  });
};
```

### 2. Zod 模式验证 (packages/types/src/schemas.ts)

```typescript
import { z } from "zod";

// 基础模式
export const IdSchema = z.string().uuid();
export const EmailSchema = z.string().email();
export const PasswordSchema = z
  .string()
  .min(8)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/);
export const PhoneSchema = z.string().regex(/^1[3-9]\d{9}$/);

// 用户相关模式
export const UserProfileSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  phone: PhoneSchema.optional(),
  address: z.string().max(200).optional(),
  bio: z.string().max(500).optional(),
});

export const CreateUserSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: EmailSchema,
  password: PasswordSchema,
  profile: UserProfileSchema,
});

export const UpdateUserSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/)
    .optional(),
  email: EmailSchema.optional(),
  profile: UserProfileSchema.partial().optional(),
});

export const LoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  remember: z.boolean().optional(),
});

// API 相关模式
export const PaginationParamsSchema = z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1).max(100),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});

export const ApiResponseSchema = <T extends z.ZodType>(dataSchema: T) =>
  z.object({
    code: z.number(),
    message: z.string(),
    data: dataSchema,
    timestamp: z.number(),
  });

// 表单验证模式
export const FormRuleSchema = z.object({
  required: z.boolean().optional(),
  message: z.string().optional(),
  trigger: z.enum(["blur", "change", "submit"]).optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  pattern: z.instanceof(RegExp).optional(),
  validator: z.function().optional(),
});

// 配置模式
export const ThemeConfigSchema = z.object({
  mode: z.enum(["light", "dark", "auto"]),
  primaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  borderRadius: z.number().min(0).max(20),
  fontSize: z.enum(["small", "medium", "large"]),
});

// 运行时验证函数
export const validateUser = (data: unknown) => {
  return CreateUserSchema.parse(data);
};

export const validateUserUpdate = (data: unknown) => {
  return UpdateUserSchema.parse(data);
};

export const validateLogin = (data: unknown) => {
  return LoginSchema.parse(data);
};

export const validatePagination = (data: unknown) => {
  return PaginationParamsSchema.parse(data);
};

// 安全解析函数
export const safeParseUser = (data: unknown) => {
  return CreateUserSchema.safeParse(data);
};

export const safeParseLogin = (data: unknown) => {
  return LoginSchema.safeParse(data);
};
```

## 高级类型技巧

### 1. 条件类型和映射类型

```typescript
// 条件类型示例
export type NonEmptyArray<T> = T extends readonly any[]
  ? T extends readonly []
    ? never
    : T
  : never;

// 映射类型示例
export type Getters<T> = {
  readonly [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

export type Setters<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
};

// 模板字面量类型
export type EventName<T extends string> = `on${Capitalize<T>}`;
export type CSSProperty = `--${string}`;

// 递归类型
export type DeepFlatten<T> = T extends readonly (infer U)[]
  ? U extends readonly any[]
    ? DeepFlatten<U>
    : U
  : T;

// 分布式条件类型
export type ToArray<T> = T extends any ? T[] : never;

// 类型推断
export type InferArrayElement<T> = T extends (infer U)[] ? U : never;
export type InferReturnType<T> = T extends (...args: any[]) => infer R
  ? R
  : never;
```

### 2. 高级工具类型

```typescript
// 创建不可变类型
export type Immutable<T> = {
  readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K];
};

// 创建可变类型
export type Mutable<T> = {
  -readonly [K in keyof T]: T[K] extends object ? Mutable<T[K]> : T[K];
};

// 类型合并
export type Merge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? U[K]
    : K extends keyof T
      ? T[K]
      : never;
};

// 深度合并
export type DeepMerge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? K extends keyof T
      ? T[K] extends object
        ? U[K] extends object
          ? DeepMerge<T[K], U[K]>
          : U[K]
        : U[K]
      : U[K]
    : K extends keyof T
      ? T[K]
      : never;
};

// 类型差集
export type Diff<T, U> = {
  [K in keyof T as K extends keyof U ? never : K]: T[K];
};

// 类型交集
export type Intersection<T, U> = {
  [K in keyof T as K extends keyof U ? K : never]: T[K];
};

// 函数重载类型
export type Overload<T> = T extends {
  (...args: infer A1): infer R1;
  (...args: infer A2): infer R2;
  (...args: infer A3): infer R3;
}
  ? ((...args: A1) => R1) & ((...args: A2) => R2) & ((...args: A3) => R3)
  : T extends {
        (...args: infer A1): infer R1;
        (...args: infer A2): infer R2;
      }
    ? ((...args: A1) => R1) & ((...args: A2) => R2)
    : T extends (...args: infer A) => infer R
      ? (...args: A) => R
      : never;
```

## 编译器配置优化

### 1. 性能优化配置

```json
{
  "compilerOptions": {
    // 增量编译
    "incremental": true,
    "tsBuildInfoFile": ".tsbuildinfo",

    // 跳过库检查
    "skipLibCheck": true,

    // 假设导入总是有副作用
    "assumeChangesOnlyAffectDirectDependencies": true,

    // 禁用源映射
    "sourceMap": false,
    "inlineSourceMap": false,

    // 优化模块解析
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,

    // 禁用不必要的检查
    "noResolve": false,
    "disableSizeLimit": true
  },

  // 项目引用优化
  "references": [
    { "path": "./packages/types", "prepend": true },
    { "path": "./packages/utils" },
    { "path": "./packages/components" }
  ]
}
```

### 2. 开发环境配置

```json
{
  "compilerOptions": {
    // 开发时启用的选项
    "sourceMap": true,
    "declarationMap": true,
    "removeComments": false,

    // 严格检查
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,

    // 额外检查
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true
  }
}
```

### 3. 生产环境配置

```json
{
  "compilerOptions": {
    // 生产优化
    "removeComments": true,
    "sourceMap": false,
    "declaration": true,
    "declarationMap": false,

    // 输出优化
    "target": "ES2020",
    "module": "ES2020",
    "moduleResolution": "node",

    // 严格模式
    "strict": true,
    "noEmitOnError": true,

    // 优化选项
    "importHelpers": true,
    "downlevelIteration": false,
    "noEmitHelpers": false
  }
}
```

## 最佳实践

### 1. 类型设计原则

```typescript
// ✅ 推荐 - 使用联合类型而不是枚举
export type Status = "pending" | "success" | "error";

// ✅ 推荐 - 使用 const assertions
export const STATUSES = ["pending", "success", "error"] as const;
export type Status = (typeof STATUSES)[number];

// ✅ 推荐 - 使用品牌类型确保类型安全
export type UserId = string & { readonly brand: unique symbol };
export type Email = string & { readonly brand: unique symbol };

export const createUserId = (id: string): UserId => id as UserId;
export const createEmail = (email: string): Email => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email format");
  }
  return email as Email;
};

// ✅ 推荐 - 使用泛型约束
export interface Repository<T extends { id: string }> {
  findById(id: string): Promise<T | null>;
  create(entity: Omit<T, "id">): Promise<T>;
  update(id: string, updates: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

// ✅ 推荐 - 使用条件类型处理复杂逻辑
export type ApiResult<T, E = ApiError> = T extends any
  ? { success: true; data: T }
  : { success: false; error: E };
```

### 2. 错误处理类型

```typescript
// Result 类型模式
export type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

export const success = <T>(data: T): Result<T, never> => ({
  success: true,
  data,
});

export const failure = <E>(error: E): Result<never, E> => ({
  success: false,
  error,
});

// Option 类型模式
export type Option<T> = T | null;

export const some = <T>(value: T): Option<T> => value;
export const none = (): Option<never> => null;

export const isSome = <T>(option: Option<T>): option is T => {
  return option !== null;
};

export const isNone = <T>(option: Option<T>): option is null => {
  return option === null;
};

// Either 类型模式
export type Either<L, R> =
  | { type: "left"; value: L }
  | { type: "right"; value: R };

export const left = <L>(value: L): Either<L, never> => ({
  type: "left",
  value,
});

export const right = <R>(value: R): Either<never, R> => ({
  type: "right",
  value,
});
```

### 3. 性能优化技巧

```typescript
// ✅ 推荐 - 使用类型断言而不是类型守卫（在确定的情况下）
const user = data as User; // 比 isUser(data) 更快

// ✅ 推荐 - 使用索引签名优化查找
export interface UserMap {
  [id: string]: User;
}

// ✅ 推荐 - 使用元组而不是数组（当长度固定时）
export type Coordinates = [number, number]; // 比 number[] 更精确

// ✅ 推荐 - 使用字面量类型优化
export interface Config {
  mode: "development" | "production"; // 比 string 更精确
  port: 3000 | 8080; // 比 number 更精确
}

// ✅ 推荐 - 使用 const 泛型参数
export function createArray<T extends readonly unknown[]>(...items: T): T {
  return items;
}

const arr = createArray("a", "b", "c"); // 类型为 ['a', 'b', 'c']
```

## 调试和工具

### 1. 类型调试工具

```typescript
// 类型调试辅助类型
export type Debug<T> = T & { __debug?: never };
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
export type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;

// 类型测试工具
export type Expect<T extends true> = T;
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

// 使用示例
type Test1 = Expect<Equal<string, string>>; // ✅
type Test2 = Expect<Equal<string, number>>; // ❌ 编译错误

// 类型信息提取
export type TypeInfo<T> = {
  type: T;
  keys: keyof T;
  values: T[keyof T];
  optional: {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
  };
  required: {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
  };
};
```

### 2. IDE 配置

```json
// .vscode/settings.json
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.inlayHints.parameterNames.enabled": "all",
  "typescript.inlayHints.parameterTypes.enabled": true,
  "typescript.inlayHints.variableTypes.enabled": true,
  "typescript.inlayHints.functionLikeReturnTypes.enabled": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll.eslint": true
  }
}
```

通过遵循这些 TypeScript 配置和最佳实践，我们可以构建类型安全、高性能、易维护的应用程序，充分发挥 TypeScript 的优势。
