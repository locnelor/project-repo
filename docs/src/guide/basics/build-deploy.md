# 构建与部署

## 构建系统概览

Qiyun-Repo 使用 Turbo + Vite 构建系统，支持增量构建、并行构建和缓存优化，确保高效的开发和部署流程。

## 本地构建

### 构建所有应用

```bash
# 构建所有应用和包
pnpm build

# 使用 Turbo 并行构建
pnpm turbo build

# 构建并生成分析报告
pnpm build:analyze
```

### 构建单个应用

```bash
# 构建 admin 应用
pnpm --filter admin build

# 构建 api 应用
pnpm --filter api build

# 构建 dv 应用
pnpm --filter dv build
```

### 构建配置

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],

  build: {
    // 输出目录
    outDir: "dist",

    // 生成 sourcemap
    sourcemap: process.env.NODE_ENV === "development",

    // 代码分割
    rollupOptions: {
      output: {
        // 手动分包
        manualChunks: {
          // 第三方库
          vendor: ["vue", "vue-router", "pinia"],
          antd: ["ant-design-vue"],
          utils: ["lodash-es", "dayjs", "axios"],
        },

        // 文件命名
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];

          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(assetInfo.name)) {
            return `media/[name]-[hash].${ext}`;
          }

          if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
            return `images/[name]-[hash].${ext}`;
          }

          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `fonts/[name]-[hash].${ext}`;
          }

          return `assets/[name]-[hash].${ext}`;
        },
      },
    },

    // 压缩配置
    minify: "terser",
    terserOptions: {
      compress: {
        // 生产环境移除 console
        drop_console: process.env.NODE_ENV === "production",
        drop_debugger: true,
      },
    },

    // 构建目标
    target: "es2015",

    // 资源内联阈值
    assetsInlineLimit: 4096,
  },
});
```

## Turbo 构建配置

### turbo.json 配置

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"],
      "env": ["NODE_ENV", "VITE_*"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "outputs": []
    },
    "test": {
      "outputs": ["coverage/**"],
      "dependsOn": ["build"]
    },
    "type-check": {
      "outputs": []
    }
  },
  "globalDependencies": [
    "package.json",
    "pnpm-lock.yaml",
    "turbo.json",
    ".env*"
  ]
}
```

### 构建缓存

```bash
# 清除构建缓存
pnpm turbo build --force

# 查看缓存状态
pnpm turbo build --dry-run

# 禁用缓存
pnpm turbo build --no-cache
```

## 环境配置

### 多环境构建

```bash
# 开发环境构建
NODE_ENV=development pnpm build

# 测试环境构建
NODE_ENV=test pnpm build

# 生产环境构建
NODE_ENV=production pnpm build
```

### 环境变量配置

```bash
# .env.production
NODE_ENV=production
VITE_API_BASE_URL=https://api.qiyun.com
VITE_APP_TITLE=Qiyun Admin
VITE_BUILD_COMPRESS=gzip
VITE_BUILD_ANALYZE=false

# .env.staging
NODE_ENV=production
VITE_API_BASE_URL=https://staging-api.qiyun.com
VITE_APP_TITLE=Qiyun Admin (Staging)
VITE_BUILD_COMPRESS=gzip
VITE_BUILD_ANALYZE=true
```

## 构建优化

### 代码分割策略

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 第三方库分包
          if (id.includes("node_modules")) {
            if (id.includes("vue")) {
              return "vue-vendor";
            }
            if (id.includes("ant-design-vue")) {
              return "antd-vendor";
            }
            if (id.includes("lodash") || id.includes("dayjs")) {
              return "utils-vendor";
            }
            return "vendor";
          }

          // 按路由分包
          if (id.includes("/views/")) {
            const route = id.split("/views/")[1].split("/")[0];
            return `page-${route}`;
          }

          // 组件分包
          if (id.includes("/components/")) {
            return "components";
          }
        },
      },
    },
  },
});
```

### 压缩优化

```typescript
// vite.config.ts
import { compression } from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    // Gzip 压缩
    compression({
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: false,
      threshold: 1024,
    }),

    // Brotli 压缩
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginFile: false,
      threshold: 1024,
    }),
  ],
});
```

### 构建分析

```typescript
// vite.config.ts
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    // 包分析
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
```

## Docker 部署

### Dockerfile

```dockerfile
# 多阶段构建
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制依赖文件
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/*/package.json ./packages/*/
COPY apps/*/package.json ./apps/*/

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY . .

# 构建应用
RUN pnpm build

# 生产镜像
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/apps/admin/dist /usr/share/nginx/html
COPY --from=builder /app/apps/api/dist /app/api

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动命令
CMD ["nginx", "-g", "daemon off;"]
```

### Nginx 配置

```nginx
# nginx.conf
server {
    listen 80;
    server_name localhost;

    # 前端静态文件
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;

        # 缓存策略
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # HTML 文件不缓存
        location ~* \.html$ {
            expires -1;
            add_header Cache-Control "no-cache, no-store, must-revalidate";
        }
    }

    # API 代理
    location /api/ {
        proxy_pass http://api:3000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
}
```

### Docker Compose

```yaml
# docker-compose.yml
version: "3.8"

services:
  # 前端应用
  admin:
    build:
      context: .
      dockerfile: apps/admin/Dockerfile
    ports:
      - "80:80"
    depends_on:
      - api
    environment:
      - NODE_ENV=production
    networks:
      - qiyun-network

  # 后端 API
  api:
    build:
      context: .
      dockerfile: apps/api/Dockerfile
    ports:
      - "3000:3000"
    depends_on:
      - postgres
      - redis
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://qiyun:password@postgres:5432/qiyun
      - REDIS_URL=redis://redis:6379
    networks:
      - qiyun-network

  # 数据库
  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=qiyun
      - POSTGRES_USER=qiyun
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - qiyun-network

  # Redis
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    networks:
      - qiyun-network

volumes:
  postgres_data:
  redis_data:

networks:
  qiyun-network:
    driver: bridge
```

## CI/CD 流水线

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run tests
        run: pnpm test

      - name: Run linting
        run: pnpm lint

      - name: Type check
        run: pnpm type-check

  build:
    needs: test
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build applications
        run: pnpm build
        env:
          NODE_ENV: production
          VITE_API_BASE_URL: ${{ secrets.API_BASE_URL }}

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build-files
          path: |
            apps/*/dist
            !apps/*/dist/**/*.map

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build-files

      - name: Deploy to server
        uses: appleboy/ssh-action@v0.1.5
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/qiyun
            docker-compose down
            docker-compose pull
            docker-compose up -d
```

## 部署策略

### 蓝绿部署

```bash
#!/bin/bash
# deploy.sh

# 蓝绿部署脚本
BLUE_PORT=8080
GREEN_PORT=8081
CURRENT_PORT=$(docker ps --format "table {{.Names}}\t{{.Ports}}" | grep qiyun-app | awk '{print $2}' | cut -d':' -f2 | cut -d'-' -f1)

if [ "$CURRENT_PORT" = "$BLUE_PORT" ]; then
    NEW_PORT=$GREEN_PORT
    OLD_PORT=$BLUE_PORT
else
    NEW_PORT=$BLUE_PORT
    OLD_PORT=$GREEN_PORT
fi

echo "Deploying to port $NEW_PORT..."

# 构建新版本
docker build -t qiyun-app:new .

# 启动新容器
docker run -d --name qiyun-app-new -p $NEW_PORT:80 qiyun-app:new

# 健康检查
sleep 10
if curl -f http://localhost:$NEW_PORT/health; then
    echo "Health check passed"

    # 更新负载均衡器
    # 这里需要根据实际的负载均衡器配置

    # 停止旧容器
    docker stop qiyun-app-old
    docker rm qiyun-app-old

    # 重命名容器
    docker rename qiyun-app-new qiyun-app-old

    echo "Deployment successful"
else
    echo "Health check failed, rolling back"
    docker stop qiyun-app-new
    docker rm qiyun-app-new
    exit 1
fi
```

### 滚动更新

```yaml
# kubernetes/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: qiyun-admin
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
  selector:
    matchLabels:
      app: qiyun-admin
  template:
    metadata:
      labels:
        app: qiyun-admin
    spec:
      containers:
        - name: admin
          image: qiyun/admin:latest
          ports:
            - containerPort: 80
          livenessProbe:
            httpGet:
              path: /health
              port: 80
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /ready
              port: 80
            initialDelaySeconds: 5
            periodSeconds: 5
```

## 监控和日志

### 应用监控

```typescript
// utils/monitor.ts
export class Monitor {
  static trackBuildTime(startTime: number) {
    const buildTime = Date.now() - startTime;
    console.log(`Build completed in ${buildTime}ms`);

    // 发送到监控系统
    if (process.env.NODE_ENV === "production") {
      this.sendMetric("build.time", buildTime);
    }
  }

  static trackBundleSize(stats: any) {
    const totalSize = stats.assets.reduce((sum: number, asset: any) => {
      return sum + asset.size;
    }, 0);

    console.log(`Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);

    if (process.env.NODE_ENV === "production") {
      this.sendMetric("bundle.size", totalSize);
    }
  }

  private static sendMetric(name: string, value: number) {
    // 实现监控数据发送逻辑
  }
}
```

### 构建日志

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    {
      name: "build-logger",
      buildStart() {
        console.log("🚀 Build started...");
      },
      buildEnd() {
        console.log("✅ Build completed!");
      },
      generateBundle(options, bundle) {
        const files = Object.keys(bundle);
        console.log(`📦 Generated ${files.length} files`);
      },
    },
  ],
});
```

## 部署最佳实践

### 1. 构建优化

- 启用代码分割和懒加载
- 使用 CDN 加速静态资源
- 启用 Gzip/Brotli 压缩
- 优化图片和字体资源

### 2. 缓存策略

- 静态资源使用长期缓存
- HTML 文件禁用缓存
- API 响应合理设置缓存

### 3. 安全配置

- 设置安全响应头
- 启用 HTTPS
- 配置 CSP 策略
- 定期更新依赖

### 4. 性能监控

- 监控构建时间和包大小
- 设置性能预算
- 监控运行时性能指标

## 相关资源

- [Vite 构建指南](https://vitejs.dev/guide/build.html)
- [Turbo 文档](https://turbo.build/repo/docs)
- [Docker 最佳实践](https://docs.docker.com/develop/dev-best-practices/)
- [项目配置](/guide/basics/configuration)
