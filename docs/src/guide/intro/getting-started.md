# 快速开始

## 前置准备

### 环境要求

- **Node.js**: 20 及以上版本
- **Git**: 最新版本

### 版本管理工具（推荐）

推荐使用以下工具之一进行 Node.js 版本管理：

- **nvm** (Node Version Manager)
- **fnm** (Fast Node Manager)  
- **pnpm** (也可用于 Node.js 版本管理)

### 验证环境

确保您的环境满足要求：

```bash
# 检查 Node.js 版本
node -v

# 检查 Git 版本
git -v
```

## 启动项目

### 1. 克隆项目

```bash
git clone https://codeup.aliyun.com/5eb632e238076f00011bd0c9/WEBBASE/project-monorepo
cd project-monorepo
```

### 2. 安装依赖

```bash
pnpm install
```

::: warning 注意事项
- 项目只支持使用 **pnpm** 进行依赖安装
- 默认会使用 **corepack** 来安装指定版本的 pnpm
- 如果网络环境无法访问 npm 源，可以设置环境变量：
  ```bash
  export COREPACK_NPM_REGISTRY=https://registry.npmmirror.com
  ```
  然后再执行 `pnpm install`
:::

### 3. 运行项目

```bash
pnpm dev
```

执行后，您会看到项目选择界面：

```
Select the app you need to run [dev]:
│  ● @web/admin
│  ○ @web/api  
│  ○ @web/next-alpha
│  ○ @repo/docs
```

使用方向键选择您需要运行的项目，然后按回车确认。

### 4. 访问项目

项目启动成功后，您可以在浏览器中访问：

**http://localhost:9090/**