# 快速开始

欢迎使用 Qiyun 前端开发模板！本指南将帮助您快速搭建开发环境并启动项目。

## 📋 环境要求

在开始之前，请确保您的开发环境满足以下要求：

- **Node.js**: >= 20.10.0
- **包管理器**: pnpm >= 9.12.0
- **Git**: 用于代码版本管理

::: tip 💡 推荐使用 nvm
建议使用 [nvm](https://github.com/nvm-sh/nvm) 管理 Node.js 版本，确保版本一致性。
:::

## 🚀 项目初始化

### 1. 克隆项目

```bash
# 使用 HTTPS
git clone https://github.com/qiyun-company/project-monorepo.git

# 或使用 SSH
git clone git@github.com:qiyun-company/project-monorepo.git

# 进入项目目录
cd project-monorepo
```

### 2. 安装依赖

```bash
# 安装所有依赖
pnpm install

# 如果遇到网络问题，可以使用淘宝镜像
pnpm install --registry https://registry.npmmirror.com
```

### 3. 环境配置

复制环境变量配置文件：

```bash
# API 服务环境配置
cp apps/api/.env.example apps/api/.env

# 管理后台环境配置
cp apps/admin/.env.example apps/admin/.env.development

# 数据库配置
cp packages/database/.env-example packages/database/.env
```

### 4. 数据库初始化

```bash
# 生成 Prisma 客户端
pnpm db:generate

# 推送数据库结构（开发环境）
pnpm db:push
```

## 🎯 启动项目

### 启动所有服务

```bash
# 同时启动所有应用
pnpm dev
```

这将启动以下服务：

- 📊 **管理后台** (admin): http://localhost:3000
- 🔌 **API服务** (api): http://localhost:3001
- 📈 **数据大屏** (dv): http://localhost:3002

### 单独启动服务

如果您只需要启动特定的服务：

```bash
# 启动管理后台
cd apps/admin && pnpm dev

# 启动 API 服务
cd apps/api && pnpm dev

# 启动数据可视化大屏
cd apps/dv && pnpm dev

# 启动文档服务
pnpm docs:dev
```

## 📖 项目结构概览

```
project-monorepo/
├── 📱 apps/                    # 应用项目
│   ├── admin/                 # 中台管理系统
│   ├── api/                   # 后端 API 服务
│   └── dv/                    # 数据可视化大屏
├── 📦 packages/               # 共享包
│   ├── components/            # 通用组件库
│   ├── constants/             # 常量定义
│   ├── database/              # 数据库配置
│   ├── stores/                # 状态管理
│   ├── styles/                # 样式库
│   ├── types/                 # 类型定义
│   └── utils/                 # 工具函数
├── 🛠️ internal/               # 内部工具
│   ├── eslint-config/         # ESLint 配置
│   ├── tsconfig/              # TypeScript 配置
│   └── vite-config/           # Vite 配置
├── 📚 docs/                   # 项目文档
└── 🔧 scripts/                # 构建脚本
```

## 🔧 常用命令

### 开发命令

```bash
# 启动所有开发服务
pnpm dev

# 启动演示项目
pnpm dev:demo

# 构建所有项目
pnpm build

# 代码检查和格式化
pnpm lint

# 清理缓存和构建产物
pnpm clean
```

### 数据库命令

```bash
# 生成 Prisma 客户端
pnpm db:generate

# 推送数据库变更
pnpm db:push

# 查看数据库状态
pnpm db:studio
```

### 文档命令

```bash
# 启动文档开发服务
pnpm docs:dev

# 构建文档
pnpm docs:build

# 预览构建后的文档
pnpm docs:preview
```

## 🎨 开始开发

### 1. 选择项目模板

根据您的需求选择合适的项目模板：

- **Admin**: 适用于后台管理系统
- **DV**: 适用于数据可视化大屏
- **API**: 适用于后端服务开发

### 2. 了解共享包

项目提供了丰富的共享包，避免重复开发：

- `@repo/components`: 通用 UI 组件
- `@repo/utils`: 工具函数库
- `@repo/types`: TypeScript 类型定义
- `@repo/stores`: Pinia 状态管理

### 3. 开发规范

- 遵循 ESLint 和 Prettier 配置
- 使用 TypeScript 进行类型检查
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case

## 🆘 常见问题

### 依赖安装失败

```bash
# 清理缓存后重新安装
pnpm store prune
rm -rf node_modules
pnpm install
```

### 端口冲突

如果遇到端口冲突，可以修改各项目的配置文件：

- Admin: `apps/admin/vite.config.ts`
- API: `apps/api/src/main.ts`
- DV: `apps/dv/vite.config.ts`

### 数据库连接问题

检查 `packages/database/.env` 文件中的数据库连接配置。

## 📚 下一步

- 📖 [项目架构](../architecture/overview.md) - 了解项目整体架构
- 🔧 [开发流程](./development.md) - 学习开发最佳实践
- 📦 [组件库](../components/overview.md) - 探索可用组件
- 🔌 [API文档](../api/overview.md) - 查看接口文档

---

::: tip 🎉 恭喜！
您已经成功启动了 Qiyun 前端开发模板。现在可以开始您的开发之旅了！
:::
