# 目录说明

## 项目结构概览

Qiyun-Repo 采用 Monorepo 架构，使用 pnpm workspace 管理多个应用和共享包，以下是详细的目录结构说明。

## 根目录结构

```
project-monorepo/
├── apps/                    # 应用目录
│   ├── admin/              # 管理后台应用
│   ├── api/                # 后端 API 应用
│   └── dv/                 # 数据可视化应用
├── packages/               # 共享包目录
│   ├── components/         # 共享组件库
│   ├── utils/              # 工具函数库
│   ├── types/              # 类型定义库
│   ├── constants/          # 常量定义库
│   ├── hooks/              # 自定义 Hooks 库
│   ├── stores/             # 状态管理库
│   └── styles/             # 样式库
├── docs/                   # 文档目录
├── tools/                  # 工具脚本目录
├── .github/                # GitHub 配置
├── package.json            # 根包配置
├── pnpm-workspace.yaml     # pnpm 工作空间配置
├── turbo.json              # Turbo 构建配置
└── README.md               # 项目说明
```

## 应用目录 (apps/)

### Admin 应用 (apps/admin/)

管理后台应用，基于 Vue 3 + TypeScript + Ant Design Vue 构建。

```
apps/admin/
├── public/                 # 静态资源
│   ├── favicon.ico
│   └── index.html
├── src/                    # 源代码
│   ├── assets/            # 资源文件
│   │   ├── images/        # 图片资源
│   │   ├── icons/         # 图标资源
│   │   └── styles/        # 样式文件
│   ├── components/        # 页面组件
│   │   ├── common/        # 通用组件
│   │   ├── layout/        # 布局组件
│   │   └── business/      # 业务组件
│   ├── views/             # 页面视图
│   │   ├── dashboard/     # 仪表板
│   │   ├── users/         # 用户管理
│   │   ├── system/        # 系统管理
│   │   └── auth/          # 认证相关
│   ├── router/            # 路由配置
│   │   ├── index.ts       # 主路由文件
│   │   ├── modules/       # 路由模块
│   │   └── guards.ts      # 路由守卫
│   ├── stores/            # 状态管理
│   │   ├── index.ts       # Store 入口
│   │   ├── user.ts        # 用户状态
│   │   ├── app.ts         # 应用状态
│   │   └── modules/       # 其他模块状态
│   ├── api/               # API 接口
│   │   ├── index.ts       # API 入口
│   │   ├── client.ts      # HTTP 客户端
│   │   └── modules/       # 接口模块
│   ├── utils/             # 工具函数
│   │   ├── index.ts       # 工具入口
│   │   ├── request.ts     # 请求工具
│   │   ├── storage.ts     # 存储工具
│   │   └── helpers.ts     # 辅助函数
│   ├── composables/       # 组合式函数
│   │   ├── useAuth.ts     # 认证相关
│   │   ├── useTable.ts    # 表格相关
│   │   └── useForm.ts     # 表单相关
│   ├── types/             # 类型定义
│   │   ├── index.ts       # 类型入口
│   │   ├── api.ts         # API 类型
│   │   └── global.d.ts    # 全局类型
│   ├── App.vue            # 根组件
│   └── main.ts            # 应用入口
├── .env                   # 环境变量
├── .env.development       # 开发环境变量
├── .env.production        # 生产环境变量
├── index.html             # HTML 模板
├── package.json           # 包配置
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
└── tailwind.config.js     # TailwindCSS 配置
```

### API 应用 (apps/api/)

后端 API 应用，基于 NestJS + TypeScript + Prisma 构建。

```
apps/api/
├── src/                   # 源代码
│   ├── modules/           # 功能模块
│   │   ├── auth/          # 认证模块
│   │   ├── users/         # 用户模块
│   │   ├── system/        # 系统模块
│   │   └── common/        # 通用模块
│   ├── shared/            # 共享代码
│   │   ├── decorators/    # 装饰器
│   │   ├── filters/       # 异常过滤器
│   │   ├── guards/        # 守卫
│   │   ├── interceptors/  # 拦截器
│   │   ├── pipes/         # 管道
│   │   └── utils/         # 工具函数
│   ├── config/            # 配置文件
│   │   ├── database.ts    # 数据库配置
│   │   ├── jwt.ts         # JWT 配置
│   │   └── app.ts         # 应用配置
│   ├── prisma/            # Prisma 相关
│   │   ├── schema.prisma  # 数据库模式
│   │   ├── migrations/    # 数据库迁移
│   │   └── seeds/         # 数据种子
│   ├── app.module.ts      # 应用模块
│   └── main.ts            # 应用入口
├── test/                  # 测试文件
├── .env                   # 环境变量
├── .env.test              # 测试环境变量
├── package.json           # 包配置
├── tsconfig.json          # TypeScript 配置
├── nest-cli.json          # NestJS CLI 配置
└── Dockerfile             # Docker 配置
```

### DV 应用 (apps/dv/)

数据可视化应用，基于 Vue 3 + TypeScript + ECharts 构建。

```
apps/dv/
├── src/                   # 源代码
│   ├── components/        # 组件
│   │   ├── charts/        # 图表组件
│   │   ├── widgets/       # 小部件
│   │   └── layout/        # 布局组件
│   ├── views/             # 页面视图
│   │   ├── dashboard/     # 仪表板
│   │   ├── reports/       # 报表页面
│   │   └── analytics/     # 分析页面
│   ├── stores/            # 状态管理
│   ├── utils/             # 工具函数
│   │   ├── chart.ts       # 图表工具
│   │   └── data.ts        # 数据处理
│   └── types/             # 类型定义
├── package.json           # 包配置
└── vite.config.ts         # Vite 配置
```

## 共享包目录 (packages/)

### 组件库 (packages/components/)

```
packages/components/
├── src/                   # 源代码
│   ├── basic/             # 基础组件
│   │   ├── Button/        # 按钮组件
│   │   ├── Input/         # 输入框组件
│   │   ├── Modal/         # 模态框组件
│   │   └── index.ts       # 基础组件导出
│   ├── business/          # 业务组件
│   │   ├── UserSelect/    # 用户选择器
│   │   ├── DataTable/     # 数据表格
│   │   ├── FormBuilder/   # 表单构建器
│   │   └── index.ts       # 业务组件导出
│   ├── layout/            # 布局组件
│   │   ├── Header/        # 头部组件
│   │   ├── Sidebar/       # 侧边栏组件
│   │   ├── Footer/        # 底部组件
│   │   └── index.ts       # 布局组件导出
│   └── index.ts           # 组件库入口
├── styles/                # 样式文件
│   ├── components.scss    # 组件样式
│   └── variables.scss     # 样式变量
├── package.json           # 包配置
├── tsconfig.json          # TypeScript 配置
└── vite.config.ts         # 构建配置
```

### 工具库 (packages/utils/)

```
packages/utils/
├── src/                   # 源代码
│   ├── array/             # 数组工具
│   │   ├── index.ts       # 数组工具入口
│   │   ├── chunk.ts       # 数组分块
│   │   └── unique.ts      # 数组去重
│   ├── object/            # 对象工具
│   │   ├── index.ts       # 对象工具入口
│   │   ├── clone.ts       # 对象克隆
│   │   └── merge.ts       # 对象合并
│   ├── string/            # 字符串工具
│   │   ├── index.ts       # 字符串工具入口
│   │   ├── format.ts      # 字符串格式化
│   │   └── validate.ts    # 字符串验证
│   ├── date/              # 日期工具
│   │   ├── index.ts       # 日期工具入口
│   │   ├── format.ts      # 日期格式化
│   │   └── calculate.ts   # 日期计算
│   ├── storage/           # 存储工具
│   │   ├── index.ts       # 存储工具入口
│   │   ├── local.ts       # 本地存储
│   │   └── session.ts     # 会话存储
│   ├── request/           # 请求工具
│   │   ├── index.ts       # 请求工具入口
│   │   ├── client.ts      # HTTP 客户端
│   │   └── interceptors.ts # 拦截器
│   └── index.ts           # 工具库入口
├── package.json           # 包配置
└── tsconfig.json          # TypeScript 配置
```

### 类型库 (packages/types/)

```
packages/types/
├── src/                   # 源代码
│   ├── api/               # API 类型
│   │   ├── index.ts       # API 类型入口
│   │   ├── user.ts        # 用户相关类型
│   │   ├── auth.ts        # 认证相关类型
│   │   └── common.ts      # 通用 API 类型
│   ├── components/        # 组件类型
│   │   ├── index.ts       # 组件类型入口
│   │   ├── table.ts       # 表格组件类型
│   │   └── form.ts        # 表单组件类型
│   ├── utils/             # 工具类型
│   │   ├── index.ts       # 工具类型入口
│   │   └── helpers.ts     # 辅助类型
│   ├── global.d.ts        # 全局类型声明
│   └── index.ts           # 类型库入口
├── package.json           # 包配置
└── tsconfig.json          # TypeScript 配置
```

### 常量库 (packages/constants/)

```
packages/constants/
├── src/                   # 源代码
│   ├── api/               # API 常量
│   │   ├── index.ts       # API 常量入口
│   │   ├── endpoints.ts   # 接口端点
│   │   └── status.ts      # 状态码
│   ├── app/               # 应用常量
│   │   ├── index.ts       # 应用常量入口
│   │   ├── config.ts      # 配置常量
│   │   └── routes.ts      # 路由常量
│   ├── business/          # 业务常量
│   │   ├── index.ts       # 业务常量入口
│   │   ├── user.ts        # 用户相关常量
│   │   └── system.ts      # 系统相关常量
│   └── index.ts           # 常量库入口
├── package.json           # 包配置
└── tsconfig.json          # TypeScript 配置
```

### Hooks 库 (packages/hooks/)

```
packages/hooks/
├── src/                   # 源代码
│   ├── data/              # 数据相关 Hooks
│   │   ├── index.ts       # 数据 Hooks 入口
│   │   ├── useRequest.ts  # 请求 Hook
│   │   ├── useTable.ts    # 表格 Hook
│   │   └── useForm.ts     # 表单 Hook
│   ├── ui/                # UI 相关 Hooks
│   │   ├── index.ts       # UI Hooks 入口
│   │   ├── useModal.ts    # 模态框 Hook
│   │   ├── useDrawer.ts   # 抽屉 Hook
│   │   └── useToast.ts    # 提示 Hook
│   ├── utils/             # 工具 Hooks
│   │   ├── index.ts       # 工具 Hooks 入口
│   │   ├── useStorage.ts  # 存储 Hook
│   │   ├── useDebounce.ts # 防抖 Hook
│   │   └── useThrottle.ts # 节流 Hook
│   └── index.ts           # Hooks 库入口
├── package.json           # 包配置
└── tsconfig.json          # TypeScript 配置
```

### 状态管理库 (packages/stores/)

```
packages/stores/
├── src/                   # 源代码
│   ├── modules/           # 状态模块
│   │   ├── index.ts       # 模块入口
│   │   ├── user.ts        # 用户状态
│   │   ├── app.ts         # 应用状态
│   │   └── system.ts      # 系统状态
│   ├── plugins/           # 插件
│   │   ├── index.ts       # 插件入口
│   │   ├── persistence.ts # 持久化插件
│   │   └── logger.ts      # 日志插件
│   ├── types/             # 状态类型
│   │   ├── index.ts       # 类型入口
│   │   └── store.ts       # Store 类型
│   └── index.ts           # 状态库入口
├── package.json           # 包配置
└── tsconfig.json          # TypeScript 配置
```

### 样式库 (packages/styles/)

```
packages/styles/
├── src/                   # 源代码
│   ├── base/              # 基础样式
│   │   ├── reset.scss     # 样式重置
│   │   ├── normalize.scss # 样式标准化
│   │   └── typography.scss # 字体样式
│   ├── components/        # 组件样式
│   │   ├── button.scss    # 按钮样式
│   │   ├── input.scss     # 输入框样式
│   │   └── modal.scss     # 模态框样式
│   ├── layout/            # 布局样式
│   │   ├── grid.scss      # 网格系统
│   │   ├── flex.scss      # 弹性布局
│   │   └── spacing.scss   # 间距系统
│   ├── themes/            # 主题样式
│   │   ├── light.scss     # 浅色主题
│   │   ├── dark.scss      # 深色主题
│   │   └── variables.scss # 主题变量
│   ├── utilities/         # 工具样式
│   │   ├── colors.scss    # 颜色工具
│   │   ├── text.scss      # 文本工具
│   │   └── display.scss   # 显示工具
│   └── index.scss         # 样式库入口
├── package.json           # 包配置
└── README.md              # 使用说明
```

## 文档目录 (docs/)

```
docs/
├── src/                   # 文档源码
│   ├── .vitepress/        # VitePress 配置
│   │   ├── config.ts      # 配置文件
│   │   └── theme/         # 主题配置
│   ├── guide/             # 开发指南
│   │   ├── intro/         # 简介
│   │   ├── basics/        # 基础
│   │   ├── modules/       # 模块
│   │   └── engineering/   # 工程
│   ├── api/               # API 文档
│   └── examples/          # 示例代码
├── public/                # 静态资源
├── package.json           # 包配置
└── README.md              # 文档说明
```

## 工具目录 (tools/)

```
tools/
├── scripts/               # 脚本文件
│   ├── build.js           # 构建脚本
│   ├── deploy.js          # 部署脚本
│   ├── release.js         # 发布脚本
│   └── clean.js           # 清理脚本
├── templates/             # 模板文件
│   ├── component/         # 组件模板
│   ├── page/              # 页面模板
│   └── api/               # API 模板
├── generators/            # 代码生成器
│   ├── component.js       # 组件生成器
│   ├── page.js            # 页面生成器
│   └── api.js             # API 生成器
└── configs/               # 配置文件
    ├── eslint.js          # ESLint 配置
    ├── prettier.js        # Prettier 配置
    └── tsconfig.js        # TypeScript 配置
```

## 目录命名规范

### 1. 文件夹命名

- 使用 kebab-case（短横线分隔）
- 保持简洁明了
- 避免使用缩写

```bash
# 好的命名
user-management/
data-visualization/
api-client/

# 不好的命名
userMgmt/
dataViz/
apiCli/
```

### 2. 文件命名

- 组件文件使用 PascalCase
- 工具文件使用 camelCase
- 配置文件使用 kebab-case

```bash
# 组件文件
UserProfile.vue
DataTable.tsx
ModalDialog.vue

# 工具文件
userUtils.ts
dataProcessor.ts
apiClient.ts

# 配置文件
vite.config.ts
tailwind.config.js
eslint.config.js
```

### 3. 导入导出规范

```typescript
// 统一使用 index.ts 作为模块入口
// packages/utils/src/index.ts
export * from "./array";
export * from "./object";
export * from "./string";
export * from "./date";

// 使用命名导出
export { formatDate, parseDate } from "./date";
export { validateEmail, validatePhone } from "./validation";

// 默认导出用于主要功能
export { default as ApiClient } from "./ApiClient";
```

## 目录管理最佳实践

### 1. 模块化组织

- 按功能模块组织代码
- 保持模块间的低耦合
- 使用清晰的依赖关系

### 2. 代码分层

- 按照职责分离原则组织代码
- 区分业务逻辑和基础设施代码
- 保持代码的可测试性

### 3. 文档同步

- 保持目录结构文档的及时更新
- 为每个模块提供 README 文件
- 使用注释说明复杂的目录结构

### 4. 工具支持

- 使用 IDE 插件提高开发效率
- 配置路径别名简化导入
- 使用代码生成器保持一致性

## 相关资源

- [pnpm Workspace 文档](https://pnpm.io/workspaces)
- [Turbo 文档](https://turbo.build/repo/docs)
- [项目配置](/guide/basics/configuration)
- [工程规范](/guide/engineering/standards)
