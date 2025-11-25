# 配置

## 配置系统概览

Qiyun-Repo 采用分层配置系统，支持环境变量、配置文件、运行时配置等多种配置方式，确保项目在不同环境下的灵活性和可维护性。

## 环境变量配置

### 环境变量文件

项目使用 `.env` 文件管理环境变量：

```bash
# .env.local (本地开发环境)
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=Qiyun Admin
VITE_ROUTER_HISTORY=web
VITE_BASE=/

# 数据库配置
DATABASE_URL="postgresql://username:password@localhost:5432/qiyun_dev"

# Redis 配置
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# JWT 配置
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRES_IN=7d
```

### 环境变量类型

```typescript
// types/env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_ROUTER_HISTORY: "web" | "hash";
  readonly VITE_BASE: string;
  readonly VITE_ENABLE_MOCK: string;
  readonly VITE_BUILD_COMPRESS: string;
  readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

### 环境变量验证

```typescript
// utils/env.ts
import { z } from "zod";

const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url(),
  VITE_APP_TITLE: z.string().min(1),
  VITE_ROUTER_HISTORY: z.enum(["web", "hash"]),
  VITE_BASE: z.string(),
});

export function validateEnv() {
  try {
    return envSchema.parse(import.meta.env);
  } catch (error) {
    console.error("Environment validation failed:", error);
    throw new Error("Invalid environment configuration");
  }
}
```

## Vite 配置

### 基础配置

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],

  // 路径别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@internal": resolve(__dirname, "../../packages"),
    },
  },

  // 服务器配置
  server: {
    port: 3000,
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  // 构建配置
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },

  // 环境变量
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
});
```

### 多环境配置

```typescript
// vite.config.ts
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [vue()],

    server: {
      port: Number(env.VITE_PORT) || 3000,
      proxy: env.VITE_API_BASE_URL
        ? {
            "/api": {
              target: env.VITE_API_BASE_URL,
              changeOrigin: true,
            },
          }
        : undefined,
    },

    build: {
      sourcemap: mode === "development",
    },
  };
});
```

## TypeScript 配置

### 基础 TypeScript 配置

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path mapping */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@internal/*": ["../../packages/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 项目引用配置

```json
// tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

## 应用配置

### 配置管理器

```typescript
// config/index.ts
interface AppConfig {
  app: {
    title: string;
    version: string;
    description: string;
  };
  api: {
    baseURL: string;
    timeout: number;
  };
  router: {
    history: "web" | "hash";
    base: string;
  };
  theme: {
    primaryColor: string;
    darkMode: boolean;
  };
}

class ConfigManager {
  private config: AppConfig;

  constructor() {
    this.config = this.loadConfig();
  }

  private loadConfig(): AppConfig {
    return {
      app: {
        title: import.meta.env.VITE_APP_TITLE || "Qiyun Admin",
        version: __APP_VERSION__,
        description: "Qiyun 管理系统",
      },
      api: {
        baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
        timeout: 10000,
      },
      router: {
        history: import.meta.env.VITE_ROUTER_HISTORY || "web",
        base: import.meta.env.VITE_BASE || "/",
      },
      theme: {
        primaryColor: "#1890ff",
        darkMode: false,
      },
    };
  }

  get<K extends keyof AppConfig>(key: K): AppConfig[K] {
    return this.config[key];
  }

  set<K extends keyof AppConfig>(key: K, value: AppConfig[K]): void {
    this.config[key] = value;
  }

  getAll(): AppConfig {
    return { ...this.config };
  }
}

export const configManager = new ConfigManager();
export { type AppConfig };
```

### 配置使用

```typescript
// 在组件中使用配置
import { configManager } from "@/config";

export default {
  setup() {
    const appConfig = configManager.get("app");
    const apiConfig = configManager.get("api");

    return {
      appTitle: appConfig.title,
      apiBaseURL: apiConfig.baseURL,
    };
  },
};
```

## 主题配置

### CSS 变量配置

```css
/* styles/variables.css */
:root {
  /* 主色调 */
  --color-primary: #1890ff;
  --color-primary-light: #40a9ff;
  --color-primary-dark: #096dd9;

  /* 辅助色 */
  --color-success: #52c41a;
  --color-warning: #faad14;
  --color-error: #f5222d;
  --color-info: #1890ff;

  /* 中性色 */
  --color-text-primary: #262626;
  --color-text-secondary: #595959;
  --color-text-disabled: #bfbfbf;

  /* 背景色 */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #fafafa;
  --color-bg-disabled: #f5f5f5;

  /* 边框色 */
  --color-border: #d9d9d9;
  --color-border-light: #f0f0f0;

  /* 阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.03);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* 圆角 */
  --border-radius-sm: 2px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;

  /* 间距 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}

/* 暗色主题 */
[data-theme="dark"] {
  --color-text-primary: #ffffff;
  --color-text-secondary: #a6a6a6;
  --color-bg-primary: #141414;
  --color-bg-secondary: #1f1f1f;
  --color-border: #434343;
}
```

### 主题切换

```typescript
// composables/useTheme.ts
import { ref, watch } from "vue";

const isDark = ref(false);

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  const setTheme = (dark: boolean) => {
    isDark.value = dark;
  };

  // 监听主题变化
  watch(
    isDark,
    (dark) => {
      document.documentElement.setAttribute(
        "data-theme",
        dark ? "dark" : "light",
      );
      localStorage.setItem("theme", dark ? "dark" : "light");
    },
    { immediate: true },
  );

  // 初始化主题
  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    isDark.value = savedTheme ? savedTheme === "dark" : prefersDark;
  };

  return {
    isDark: readonly(isDark),
    toggleTheme,
    setTheme,
    initTheme,
  };
}
```

## 构建配置

### 生产环境优化

```typescript
// vite.config.prod.ts
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import { compression } from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    // Gzip 压缩
    compression({
      algorithm: "gzip",
      deleteOriginFile: false,
    }),

    // 包分析
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
    }),
  ],

  build: {
    // 代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue", "vue-router", "pinia"],
          antd: ["ant-design-vue"],
          utils: ["lodash-es", "dayjs"],
        },
      },
    },

    // 压缩配置
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
```

### 开发环境配置

```typescript
// vite.config.dev.ts
export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },

    // 开发服务器代理
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on("error", (err, req, res) => {
            console.log("proxy error", err);
          });
        },
      },
    },
  },

  // 开发工具
  define: {
    __DEV__: true,
  },
});
```

## 配置最佳实践

### 1. 环境变量管理

- 使用 `.env` 文件管理环境变量
- 敏感信息不要提交到版本控制
- 提供 `.env.example` 作为模板

### 2. 配置验证

- 使用 schema 验证配置
- 在应用启动时验证必要配置
- 提供友好的错误提示

### 3. 类型安全

- 为配置定义 TypeScript 类型
- 使用类型断言确保类型安全
- 避免使用 `any` 类型

### 4. 配置分层

- 区分开发、测试、生产环境配置
- 使用配置继承减少重复
- 支持运行时配置覆盖

## 相关资源

- [Vite 配置文档](https://vitejs.dev/config/)
- [环境变量](/guide/basics/environment)
- [构建与部署](/guide/basics/build-deploy)
