# 基础概念

## Monorepo 概念

### 什么是 Monorepo？

Monorepo（单一仓库）是一种软件开发策略，将多个相关项目存储在同一个版本控制仓库中。与传统的多仓库（Multi-repo）方式不同，Monorepo 将所有代码集中管理。

### Monorepo 的优势

1. **代码共享**: 轻松共享代码、组件和工具
2. **统一依赖**: 避免版本冲突，确保一致性
3. **原子提交**: 跨项目的更改可以在单个提交中完成
4. **简化重构**: 大规模重构更加安全和高效

### 项目结构

```
project-monorepo/
├── apps/           # 应用程序
├── packages/       # 共享包
├── internal/       # 内部工具
└── docs/          # 文档
```

## 工作空间 (Workspace)

### pnpm Workspace

项目使用 pnpm workspace 来管理 monorepo：

```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - 'internal/*'
```

### 包引用

在 monorepo 中，包之间可以通过 workspace 协议相互引用：

```json
{
  "dependencies": {
    "@internal/utils": "workspace:*",
    "@internal/types": "workspace:*"
  }
}
```

## 应用程序 (Apps)

### 应用类型

项目包含三种类型的应用：

1. **Admin**: 管理后台应用
2. **API**: 后端 API 服务
3. **DV**: 数据可视化应用

### 应用特点

- 每个应用都是独立的项目
- 可以单独开发、测试和部署
- 共享 packages 中的代码和配置

## 共享包 (Packages)

### 包分类

- **components**: 共享 UI 组件
- **utils**: 工具函数库
- **types**: TypeScript 类型定义
- **styles**: 样式文件
- **stores**: 状态管理
- **database**: 数据库配置
- **constants**: 常量定义
- **effects**: 特效组件

### 包设计原则

1. **单一职责**: 每个包只负责一个特定功能
2. **最小依赖**: 减少包之间的依赖关系
3. **版本统一**: 使用 workspace 协议管理版本

## 构建系统

### Turbo

项目使用 Turbo 作为构建系统：

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false
    }
  }
}
```

### 构建流程

1. **依赖分析**: Turbo 分析包之间的依赖关系
2. **并行构建**: 并行执行无依赖的构建任务
3. **增量构建**: 只构建发生变化的包
4. **缓存机制**: 缓存构建结果，提高效率

## 开发模式

### 开发服务器

```bash
# 启动所有应用
pnpm dev

# 启动特定应用
pnpm --filter admin dev
```

### 热更新

- Vite 提供快速的热模块替换 (HMR)
- 修改共享包会自动更新相关应用
- 支持跨包的实时更新

## 依赖管理

### 版本控制

使用 `catalog:` 协议统一管理依赖版本：

```json
{
  "catalog": {
    "vue": "^3.3.0",
    "typescript": "^5.0.0"
  }
}
```

### 依赖类型

1. **生产依赖**: 运行时需要的包
2. **开发依赖**: 开发时需要的工具
3. **对等依赖**: 由使用方提供的依赖

## 类型系统

### TypeScript 配置

项目使用统一的 TypeScript 配置：

```json
{
  "extends": "@internal/tsconfig/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### 类型共享

通过 `@internal/types` 包共享类型定义：

```typescript
// 导出类型
export interface User {
  id: string
  name: string
  email: string
}

// 使用类型
import type { User } from '@internal/types'
```

## 样式系统

### TailwindCSS

项目使用 TailwindCSS 作为样式框架：

- 原子化 CSS 类
- 响应式设计
- 深度定制主题

### 样式组织

```
packages/styles/
├── src/
│   ├── base.css      # 基础样式
│   ├── components.css # 组件样式
│   └── utilities.css  # 工具类
└── tailwind.config.js # 配置文件
```

## 状态管理

### Pinia

使用 Pinia 进行状态管理：

```typescript
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null
  }),
  
  actions: {
    async fetchUser() {
      // 获取用户信息
    }
  }
})
```

### 状态共享

通过 `@internal/stores` 包共享状态管理逻辑。

## 路由系统

### Vue Router

使用 Vue Router 进行路由管理：

```typescript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 路由配置
  ]
})
```

### 路由组织

- 每个应用有独立的路由配置
- 支持嵌套路由和动态路由
- 路由守卫和权限控制

## 下一步

了解了基础概念后，您可以继续学习：

- [路由和菜单](/guide/basics/routing)
- [项目配置](/guide/basics/configuration)
- [构建与部署](/guide/basics/build-deploy)