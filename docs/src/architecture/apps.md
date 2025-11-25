# 应用项目

Qiyun 前端开发模板提供了三个完整的应用项目模板，涵盖了企业开发中的主要场景。每个项目都是独立可运行的，同时共享底层的组件库和工具函数。

## 📊 Admin - 中台管理系统

### 项目概述

Admin 是一个基于 Vue 3 + Ant Design Vue 的企业级后台管理系统模板，提供了完整的权限管理、用户管理、系统配置等功能。

**位置**: `apps/admin/`

### 🎯 核心特性

- ✅ **现代化技术栈**: Vue 3 + Composition API + TypeScript
- ✅ **企业级UI**: Ant Design Vue 4.x 组件库
- ✅ **权限管理**: 基于角色的权限控制系统
- ✅ **路由守卫**: 自动化的路由权限验证
- ✅ **响应式布局**: 适配桌面端和移动端
- ✅ **主题切换**: 支持亮色/暗色主题
- ✅ **国际化**: 内置多语言支持

### 📁 项目结构

```
apps/admin/
├── src/
│   ├── api/                   # API 接口定义
│   │   ├── auth.ts           # 认证相关接口
│   │   ├── user.ts           # 用户管理接口
│   │   └── system.ts         # 系统配置接口
│   ├── assets/               # 静态资源
│   │   ├── images/           # 图片资源
│   │   └── icons/            # 图标资源
│   ├── components/           # 业务组件
│   │   ├── Layout/           # 布局组件
│   │   ├── Header/           # 头部组件
│   │   └── Sidebar/          # 侧边栏组件
│   ├── layout/               # 页面布局
│   │   ├── BasicLayout.vue   # 基础布局
│   │   └── BlankLayout.vue   # 空白布局
│   ├── pages/                # 页面组件
│   │   ├── dashboard/        # 仪表盘
│   │   ├── user/             # 用户管理
│   │   ├── system/           # 系统管理
│   │   └── auth/             # 认证页面
│   ├── router/               # 路由配置
│   │   ├── index.ts          # 路由主文件
│   │   └── routes.ts         # 路由定义
│   ├── store/                # 状态管理
│   │   ├── modules/          # 状态模块
│   │   └── index.ts          # Store 入口
│   ├── utils/                # 工具函数
│   ├── App.vue               # 根组件
│   └── main.ts               # 应用入口
├── public/                   # 公共资源
├── .env.development          # 开发环境配置
├── .env.production           # 生产环境配置
├── package.json              # 项目配置
└── vite.config.ts            # Vite 配置
```

### 🚀 快速开始

```bash
# 进入项目目录
cd apps/admin

# 安装依赖
pnpm install

# 启动开发服务
pnpm dev

# 访问地址: http://localhost:3000
```

### 🔧 主要功能模块

#### 1. 用户认证

- 登录/注册
- JWT Token 管理
- 权限验证
- 自动登录

#### 2. 权限管理

- 角色管理
- 菜单权限
- 按钮权限
- 数据权限

#### 3. 用户管理

- 用户列表
- 用户详情
- 用户编辑
- 用户状态管理

#### 4. 系统管理

- 菜单管理
- 角色管理
- 权限配置
- 系统设置

---

## 🔌 API - 后端服务

### 项目概述

API 是基于 NestJS + Prisma 的企业级后端服务，提供了完整的用户认证、权限管理、数据操作等功能。

**位置**: `apps/api/`

### 🎯 核心特性

- ✅ **现代化框架**: NestJS + TypeScript
- ✅ **数据库ORM**: Prisma 类型安全的数据库操作
- ✅ **身份认证**: JWT + Passport 认证策略
- ✅ **缓存系统**: Redis 高性能缓存
- ✅ **API文档**: Swagger 自动生成文档
- ✅ **GraphQL**: 灵活的数据查询接口
- ✅ **单元测试**: Jest 测试框架
- ✅ **错误处理**: 统一的异常处理机制

### 📁 项目结构

```
apps/api/
├── src/
│   ├── app.module.ts         # 应用主模块
│   ├── main.ts               # 应用入口
│   ├── common/               # 通用模块
│   │   ├── decorators/       # 装饰器
│   │   ├── filters/          # 异常过滤器
│   │   ├── guards/           # 守卫
│   │   ├── interceptors/     # 拦截器
│   │   └── pipes/            # 管道
│   └── system/               # 业务模块
│       ├── auth/             # 认证模块
│       ├── user/             # 用户模块
│       ├── role/             # 角色模块
│       └── permission/       # 权限模块
├── libs/                     # 自定义库
│   ├── auth-power/           # 权限库
│   ├── error/                # 错误处理库
│   ├── file/                 # 文件处理库
│   ├── hash/                 # 加密库
│   ├── prisma/               # Prisma 库
│   └── redis-cache/          # Redis 缓存库
├── test/                     # 测试文件
├── .env                      # 环境配置
├── .env.example              # 环境配置示例
├── package.json              # 项目配置
└── nest-cli.json             # NestJS CLI 配置
```

### 🚀 快速开始

```bash
# 进入项目目录
cd apps/api

# 安装依赖
pnpm install

# 配置环境变量
cp .env.example .env

# 启动开发服务
pnpm dev

# 访问地址: http://localhost:3001
# API文档: http://localhost:3001/api
```

### 🔧 主要功能模块

#### 1. 认证授权 (Auth)

- JWT Token 生成和验证
- 用户登录/注册
- 权限验证中间件
- 角色权限管理

#### 2. 用户管理 (User)

- 用户CRUD操作
- 用户信息查询
- 用户状态管理
- 用户权限分配

#### 3. 系统管理 (System)

- 菜单管理
- 角色管理
- 权限配置
- 系统日志

#### 4. 文件管理 (File)

- 文件上传
- 文件下载
- 图片处理
- 文件存储

---

## 📈 DV - 数据可视化大屏

### 项目概述

DV 是一个专业的数据可视化大屏模板，基于 Vue 3 + ECharts + D3.js 构建，适用于监控大屏、数据展示、商业智能等场景。

**位置**: `apps/dv/`

### 🎯 核心特性

- ✅ **丰富图表**: ECharts + D3.js 图表库
- ✅ **响应式设计**: 自适应不同屏幕尺寸
- ✅ **实时数据**: WebSocket 实时数据更新
- ✅ **3D效果**: ECharts GL 3D 可视化
- ✅ **地图集成**: 高德地图 + GeoJSON
- ✅ **动画效果**: GSAP 动画库
- ✅ **主题切换**: 多种大屏主题
- ✅ **组件化**: 可复用的图表组件

### 📁 项目结构

```
apps/dv/
├── src/
│   ├── assets/               # 静态资源
│   │   ├── images/           # 图片资源
│   │   ├── fonts/            # 字体文件
│   │   └── data/             # 静态数据
│   ├── components/           # 图表组件
│   │   ├── Charts/           # 基础图表
│   │   │   ├── LineChart.vue # 折线图
│   │   │   ├── BarChart.vue  # 柱状图
│   │   │   ├── PieChart.vue  # 饼图
│   │   │   └── MapChart.vue  # 地图
│   │   ├── Widgets/          # 数据组件
│   │   │   ├── DataCard.vue  # 数据卡片
│   │   │   ├── Progress.vue  # 进度条
│   │   │   └── Counter.vue   # 数字滚动
│   │   └── Layout/           # 布局组件
│   ├── composables/          # 组合式函数
│   │   ├── useChart.ts       # 图表逻辑
│   │   ├── useWebSocket.ts   # WebSocket
│   │   └── useResize.ts      # 响应式
│   ├── config/               # 配置文件
│   │   ├── charts.ts         # 图表配置
│   │   └── theme.ts          # 主题配置
│   ├── hooks/                # 自定义钩子
│   ├── layout/               # 页面布局
│   ├── router/               # 路由配置
│   ├── store/                # 状态管理
│   ├── style/                # 样式文件
│   ├── types/                # 类型定义
│   ├── utils/                # 工具函数
│   ├── views/                # 页面组件
│   │   ├── Dashboard/        # 仪表盘
│   │   ├── Monitor/          # 监控大屏
│   │   └── Analysis/         # 数据分析
│   ├── App.vue               # 根组件
│   └── main.ts               # 应用入口
├── public/                   # 公共资源
│   ├── icon/                 # 图标
│   ├── marker/               # 地图标记
│   └── logo.png              # Logo
├── types/                    # 全局类型
├── package.json              # 项目配置
└── vite.config.ts            # Vite 配置
```

### 🚀 快速开始

```bash
# 进入项目目录
cd apps/dv

# 安装依赖
pnpm install

# 启动开发服务
pnpm dev

# 访问地址: http://localhost:3002
```

### 🔧 主要功能模块

#### 1. 数据展示

- 实时数据监控
- 多维度数据分析
- 趋势图表展示
- 关键指标统计

#### 2. 地图可视化

- 地理数据展示
- 区域热力图
- 轨迹动画
- 标点聚合

#### 3. 3D 可视化

- 3D 柱状图
- 3D 地球
- 3D 场景
- 粒子效果

#### 4. 交互功能

- 图表联动
- 数据筛选
- 时间轴控制
- 全屏展示

---

## 🔗 项目间协作

### 共享依赖

所有应用项目都依赖于 `packages/` 目录下的共享包：

```json
{
  "dependencies": {
    "@repo/components": "workspace:*",
    "@repo/utils": "workspace:*",
    "@repo/types": "workspace:*",
    "@repo/stores": "workspace:*",
    "@repo/styles": "workspace:*"
  }
}
```

### 统一配置

通过 `internal/` 目录下的配置包，确保所有项目使用统一的：

- ESLint 规则
- TypeScript 配置
- Vite 构建配置
- Prettier 格式化规则

### 开发协作

```bash
# 同时启动所有项目
pnpm dev

# 单独启动某个项目
pnpm --filter admin dev
pnpm --filter api dev
pnpm --filter dv dev

# 构建所有项目
pnpm build

# 运行测试
pnpm test
```

## 📚 相关文档

- [共享包详解](./packages.md)
- [开发指南](../guide/getting-started.md)
- [API 文档](../api/overview.md)
- [组件库文档](../components/overview.md)
