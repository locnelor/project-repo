# 规范

## 概述

本文档定义了 Qiyun Monorepo 项目的开发规范和最佳实践，包括代码规范、命名规范、Git 规范、文档规范等。遵循这些规范有助于提高代码质量、团队协作效率和项目可维护性。

## 代码规范

### 1. TypeScript 规范

#### 基本规则

```typescript
// ✅ 推荐 - 使用 interface 定义对象类型
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ 推荐 - 使用 type 定义联合类型、函数类型等
type Status = "pending" | "success" | "error";
type EventHandler = (event: Event) => void;

// ✅ 推荐 - 明确的类型注解
const users: User[] = [];
const handleClick: EventHandler = (event) => {
  // 处理点击事件
};

// ❌ 避免 - 使用 any 类型
const data: any = {};

// ❌ 避免 - 省略必要的类型注解
const users = []; // 类型不明确
```

#### 泛型使用

```typescript
// ✅ 推荐 - 有意义的泛型参数名
interface ApiResponse<TData = any> {
  code: number;
  message: string;
  data: TData;
}

interface Repository<TEntity, TKey = string> {
  findById(id: TKey): Promise<TEntity | null>;
  create(entity: Omit<TEntity, "id">): Promise<TEntity>;
}

// ❌ 避免 - 无意义的泛型参数名
interface ApiResponse<T> {
  // 不清楚 T 代表什么
}
```

#### 枚举使用

```typescript
// ✅ 推荐 - 使用 const enum 或字符串枚举
const enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  SUSPENDED = "suspended",
}

// ✅ 推荐 - 使用 as const 断言
const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
} as const;

type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

// ❌ 避免 - 数字枚举（除非有特殊需求）
enum Status {
  PENDING, // 0
  SUCCESS, // 1
  ERROR, // 2
}
```

### 2. Vue 3 规范

#### 组件定义

```vue
<!-- ✅ 推荐 - 使用 Composition API + TypeScript -->
<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <button @click="handleEdit">编辑</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  user: User;
  editable?: boolean;
}

interface Emits {
  edit: [user: User];
  delete: [id: string];
}

const props = withDefaults(defineProps<Props>(), {
  editable: true,
});

const emit = defineEmits<Emits>();

const handleEdit = () => {
  emit("edit", props.user);
};
</script>

<style scoped>
.user-card {
  @apply p-4 border rounded-lg shadow-sm;
}
</style>
```

#### Composables 规范

```typescript
// ✅ 推荐 - 清晰的 composable 结构
export function useUserManagement() {
  const users = ref<User[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchUsers = async () => {
    try {
      loading.value = true;
      error.value = null;
      const response = await userApi.getUsers();
      users.value = response.data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "获取用户失败";
    } finally {
      loading.value = false;
    }
  };

  const createUser = async (userData: CreateUserData) => {
    try {
      const response = await userApi.createUser(userData);
      users.value.push(response.data);
      return response.data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "创建用户失败";
      throw err;
    }
  };

  return {
    // 状态
    users: readonly(users),
    loading: readonly(loading),
    error: readonly(error),

    // 方法
    fetchUsers,
    createUser,
  };
}
```

### 3. CSS/SCSS 规范

#### 类名规范

```scss
// ✅ 推荐 - 使用 BEM 命名规范
.user-card {
  @apply p-4 border rounded-lg;

  &__header {
    @apply flex items-center justify-between mb-4;
  }

  &__title {
    @apply text-lg font-semibold;
  }

  &__content {
    @apply text-gray-600;
  }

  &--featured {
    @apply border-blue-500 bg-blue-50;
  }

  &--disabled {
    @apply opacity-50 pointer-events-none;
  }
}

// ❌ 避免 - 嵌套过深
.user-card {
  .header {
    .title {
      .text {
        // 嵌套过深，难以维护
      }
    }
  }
}
```

#### TailwindCSS 使用

```vue
<template>
  <!-- ✅ 推荐 - 合理使用 TailwindCSS 类 -->
  <div
    class="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
  >
    <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
    <button
      class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      操作
    </button>
  </div>

  <!-- ❌ 避免 - 过长的类名 -->
  <div
    class="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
  >
    <!-- 类名过长，建议提取为组件类 -->
  </div>
</template>
```

## 命名规范

### 1. 文件和目录命名

```
// ✅ 推荐 - 文件命名
components/
├── UserCard.vue           # 组件使用 PascalCase
├── user-list.vue          # 或使用 kebab-case
├── index.ts               # 入口文件
└── types.ts               # 类型文件

composables/
├── useUserManagement.ts   # Composables 使用 camelCase
├── useAuth.ts
└── index.ts

utils/
├── formatDate.ts          # 工具函数使用 camelCase
├── validateEmail.ts
└── index.ts

// ❌ 避免 - 不一致的命名
components/
├── userCard.vue           # 不一致
├── User_List.vue          # 使用下划线
└── BUTTON.vue             # 全大写
```

### 2. 变量和函数命名

```typescript
// ✅ 推荐 - 变量命名
const userName = "john_doe"; // camelCase
const MAX_RETRY_COUNT = 3; // 常量使用 UPPER_SNAKE_CASE
const API_ENDPOINTS = {
  // 对象常量
  USERS: "/api/users",
  ROLES: "/api/roles",
} as const;

// ✅ 推荐 - 函数命名
const getUserById = (id: string) => {
  /* ... */
}; // 动词开头
const validateEmail = (email: string) => {
  /* ... */
}; // 动词开头
const isValidUser = (user: User) => {
  /* ... */
}; // 布尔值返回用 is/has/can 开头
const hasPermission = (permission: string) => {
  /* ... */
};

// ✅ 推荐 - 类和接口命名
class UserService {
  /* ... */
} // PascalCase
interface ApiResponse {
  /* ... */
} // PascalCase
type UserStatus = "active" | "inactive"; // PascalCase

// ❌ 避免 - 不清晰的命名
const data = getUserData(); // 太泛化
const temp = processUser(); // 无意义
const flag = checkStatus(); // 不明确
```

### 3. 组件命名

```vue
<!-- ✅ 推荐 - 组件命名 -->
<template>
  <!-- 基础组件使用 Base 前缀 -->
  <BaseButton type="primary">点击</BaseButton>
  <BaseInput v-model="value" placeholder="请输入" />

  <!-- 业务组件使用描述性名称 -->
  <UserProfileCard :user="currentUser" />
  <ProductListTable :products="products" />

  <!-- 页面组件使用 Page 后缀 -->
  <UserManagementPage />
  <DashboardPage />
</template>

<!-- ❌ 避免 - 不规范的组件命名 -->
<template>
  <Button />
  <!-- 太泛化 -->
  <MyComponent />
  <!-- 无意义前缀 -->
  <user-card />
  <!-- 应该使用 PascalCase -->
</template>
```

## Git 规范

### 1. 分支命名

```bash
# ✅ 推荐 - 分支命名规范
feature/user-management     # 功能分支
bugfix/login-error         # 修复分支
hotfix/security-patch      # 热修复分支
release/v1.2.0            # 发布分支
chore/update-dependencies  # 维护分支

# ❌ 避免 - 不规范的分支命名
dev                       # 太泛化
fix                       # 不明确
john-work                 # 个人命名
```

### 2. 提交信息规范

```bash
# ✅ 推荐 - 使用 Conventional Commits 规范
feat: 添加用户管理功能
fix: 修复登录页面验证错误
docs: 更新 API 文档
style: 格式化代码
refactor: 重构用户服务
test: 添加用户管理测试用例
chore: 更新依赖包版本
perf: 优化列表查询性能
ci: 更新 GitHub Actions 配置

# 详细提交信息示例
feat(user): 添加用户角色管理功能

- 新增角色分配接口
- 添加权限验证中间件
- 更新用户列表显示角色信息

Closes #123

# ❌ 避免 - 不规范的提交信息
update                    # 太泛化
fix bug                   # 不明确
修改                      # 语言不一致
WIP                       # 工作进行中不应提交
```

### 3. Pull Request 规范

```markdown
## 📝 变更描述

简要描述本次 PR 的主要变更内容

## 🎯 变更类型

- [ ] 新功能 (feature)
- [ ] 修复 (bugfix)
- [ ] 文档 (docs)
- [ ] 样式 (style)
- [ ] 重构 (refactor)
- [ ] 性能优化 (perf)
- [ ] 测试 (test)
- [ ] 构建 (build)
- [ ] CI/CD (ci)
- [ ] 其他 (chore)

## 🔗 相关 Issue

Closes #123
Related to #456

## 📋 测试清单

- [ ] 单元测试通过
- [ ] 集成测试通过
- [ ] 手动测试通过
- [ ] 代码审查通过

## 📸 截图/录屏

如果有 UI 变更，请提供截图或录屏

## 📝 其他说明

其他需要说明的内容
```

## 代码审查规范

### 1. 审查清单

#### 功能性

- [ ] 代码实现是否符合需求
- [ ] 边界条件是否处理正确
- [ ] 错误处理是否完善
- [ ] 性能是否满足要求

#### 代码质量

- [ ] 代码是否易读易懂
- [ ] 命名是否规范
- [ ] 函数是否单一职责
- [ ] 是否有重复代码

#### 安全性

- [ ] 是否有安全漏洞
- [ ] 输入验证是否充分
- [ ] 敏感信息是否泄露
- [ ] 权限控制是否正确

#### 测试

- [ ] 是否有足够的测试覆盖
- [ ] 测试用例是否合理
- [ ] 是否有集成测试
- [ ] 是否有性能测试

### 2. 审查意见规范

````markdown
# ✅ 推荐 - 建设性的审查意见

## 🔧 必须修改 (Must Fix)

这里的逻辑有问题，可能导致数据不一致：

```typescript
// 当前代码
if ((user.status = "active")) {
  // 应该使用 === 而不是 =
  // ...
}

// 建议修改
if (user.status === "active") {
  // ...
}
```
````

## 💡 建议优化 (Suggestion)

考虑使用更语义化的变量名：

```typescript
// 当前代码
const data = await fetchUsers();

// 建议修改
const users = await fetchUsers();
```

## ❓ 疑问 (Question)

这里为什么要使用 setTimeout？是否有更好的解决方案？

## 👍 做得好 (Good Job)

错误处理很完善，考虑了各种边界情况！

# ❌ 避免 - 不建设性的审查意见

这里有问题 # 不明确
代码写得不好 # 不具体
重写这部分 # 没有建议

````

## 文档规范

### 1. README 文档

```markdown
# 项目名称

简要描述项目的功能和用途

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖
```bash
pnpm install
````

### 启动开发服务器

```bash
pnpm dev
```

## 📁 项目结构

```
project/
├── apps/           # 应用目录
├── packages/       # 共享包
├── docs/          # 文档
└── tools/         # 工具
```

## 🛠️ 开发指南

- [开发规范](./docs/standards.md)
- [API 文档](./docs/api.md)
- [部署指南](./docs/deployment.md)

## 🤝 贡献指南

请阅读 [贡献指南](./CONTRIBUTING.md) 了解如何参与项目开发

## 📄 许可证

MIT License

````

### 2. API 文档

```typescript
/**
 * 用户服务类
 * 提供用户相关的 CRUD 操作
 *
 * @example
 * ```typescript
 * const userService = new UserService()
 * const user = await userService.getUserById('123')
 * ```
 */
export class UserService {
  /**
   * 根据 ID 获取用户信息
   *
   * @param id - 用户 ID
   * @returns 用户信息，如果不存在则返回 null
   *
   * @throws {ValidationError} 当 ID 格式不正确时
   * @throws {NotFoundError} 当用户不存在时
   *
   * @example
   * ```typescript
   * const user = await userService.getUserById('123')
   * if (user) {
   *   console.log(user.name)
   * }
   * ```
   */
  async getUserById(id: string): Promise<User | null> {
    // 实现
  }
}
````

### 3. 组件文档

````vue
<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <LoadingIcon v-if="loading" class="mr-2" />
    <slot />
  </button>
</template>

<script setup lang="ts">
/**
 * 基础按钮组件
 *
 * @description 提供统一的按钮样式和交互行为
 *
 * @example
 * ```vue
 * <BaseButton
 *   type="primary"
 *   size="large"
 *   :loading="isSubmitting"
 *   @click="handleSubmit"
 * >
 *   提交
 * </BaseButton>
 * ```
 */

interface Props {
  /** 按钮类型 */
  type?: "primary" | "secondary" | "danger";
  /** 按钮尺寸 */
  size?: "small" | "medium" | "large";
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否显示加载状态 */
  loading?: boolean;
}

interface Emits {
  /** 点击事件 */
  click: [event: MouseEvent];
}

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  size: "medium",
  disabled: false,
  loading: false,
});

const emit = defineEmits<Emits>();
</script>
````

## 测试规范

### 1. 单元测试

```typescript
// ✅ 推荐 - 清晰的测试结构
describe("UserService", () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe("getUserById", () => {
    it("should return user when id exists", async () => {
      // Arrange
      const userId = "123";
      const expectedUser = { id: userId, name: "John Doe" };
      jest.spyOn(userService, "findById").mockResolvedValue(expectedUser);

      // Act
      const result = await userService.getUserById(userId);

      // Assert
      expect(result).toEqual(expectedUser);
    });

    it("should return null when user not found", async () => {
      // Arrange
      const userId = "non-existent";
      jest.spyOn(userService, "findById").mockResolvedValue(null);

      // Act
      const result = await userService.getUserById(userId);

      // Assert
      expect(result).toBeNull();
    });

    it("should throw error when id is invalid", async () => {
      // Arrange
      const invalidId = "";

      // Act & Assert
      await expect(userService.getUserById(invalidId)).rejects.toThrow(
        "Invalid user ID",
      );
    });
  });
});
```

### 2. 组件测试

```typescript
// ✅ 推荐 - Vue 组件测试
import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import BaseButton from "../BaseButton.vue";

describe("BaseButton", () => {
  it("should render button with correct text", () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: "Click me",
      },
    });

    expect(wrapper.text()).toBe("Click me");
  });

  it("should emit click event when clicked", async () => {
    const wrapper = mount(BaseButton);

    await wrapper.trigger("click");

    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("should be disabled when loading", () => {
    const wrapper = mount(BaseButton, {
      props: {
        loading: true,
      },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });
});
```

## 性能规范

### 1. 代码分割

```typescript
// ✅ 推荐 - 路由级别的代码分割
const routes = [
  {
    path: "/users",
    component: () => import("../views/UserManagement.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
];

// ✅ 推荐 - 组件级别的懒加载
const LazyComponent = defineAsyncComponent(
  () => import("./HeavyComponent.vue"),
);
```

### 2. 性能监控

```typescript
// ✅ 推荐 - 性能监控
export const performanceMonitor = {
  measureTime: <T>(name: string, fn: () => T): T => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  },

  measureAsyncTime: async <T>(
    name: string,
    fn: () => Promise<T>,
  ): Promise<T> => {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  },
};

// 使用示例
const users = await performanceMonitor.measureAsyncTime("fetchUsers", () =>
  userApi.getUsers(),
);
```

## 安全规范

### 1. 输入验证

```typescript
// ✅ 推荐 - 严格的输入验证
import { z } from "zod";

const CreateUserSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
});

export const createUser = async (data: unknown) => {
  // 验证输入
  const validData = CreateUserSchema.parse(data);

  // 处理业务逻辑
  return await userService.create(validData);
};

// ❌ 避免 - 直接使用未验证的输入
export const createUser = async (data: any) => {
  return await userService.create(data); // 不安全
};
```

### 2. 权限控制

```typescript
// ✅ 推荐 - 基于角色的权限控制
export const requirePermission = (permission: string) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const user = getCurrentUser();
      if (!user.hasPermission(permission)) {
        throw new ForbiddenError("Insufficient permissions");
      }

      return originalMethod.apply(this, args);
    };
  };
};

// 使用示例
class UserController {
  @requirePermission("user:delete")
  async deleteUser(id: string) {
    return await userService.delete(id);
  }
}
```

## 工具配置

### 1. ESLint 配置

```javascript
// .eslintrc.js
module.exports = {
  extends: ["@vue/eslint-config-typescript", "@vue/eslint-config-prettier"],
  rules: {
    // TypeScript 规则
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-explicit-any": "warn",

    // Vue 规则
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/prop-name-casing": ["error", "camelCase"],

    // 通用规则
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "prefer-const": "error",
    "no-var": "error",
  },
};
```

### 2. Prettier 配置

```javascript
// .prettierrc.js
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 100,
  endOfLine: "lf",
  arrowParens: "avoid",
  vueIndentScriptAndStyle: false,
};
```

### 3. Husky 配置

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{js,ts,vue}": ["eslint --fix", "prettier --write"],
    "*.{css,scss,vue}": ["stylelint --fix", "prettier --write"]
  }
}
```

## 最佳实践总结

### 1. 代码质量

- 使用 TypeScript 确保类型安全
- 遵循 SOLID 原则
- 保持函数和类的单一职责
- 编写有意义的测试用例

### 2. 团队协作

- 统一代码风格和规范
- 及时进行代码审查
- 编写清晰的文档
- 使用规范的 Git 工作流

### 3. 性能优化

- 合理使用代码分割
- 避免不必要的重新渲染
- 使用适当的缓存策略
- 监控和分析性能指标

### 4. 安全防护

- 严格验证用户输入
- 实施适当的权限控制
- 保护敏感信息
- 定期更新依赖包

### 5. 可维护性

- 保持代码简洁易读
- 使用有意义的命名
- 避免过度设计
- 及时重构技术债务

通过遵循这些规范和最佳实践，我们可以构建高质量、可维护、安全的应用程序，提高团队的开发效率和协作质量。
