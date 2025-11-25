# Vite 配置

## 概述

Qiyun Monorepo 项目使用 Vite 作为构建工具，提供快速的开发体验和高效的生产构建。本文档详细介绍项目的 Vite 配置、插件使用、性能优化和最佳实践。

## 基础配置

### 1. 根目录配置 (vite.config.ts)

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  // 基础配置
  root: process.cwd(),
  base: '/',
  mode: 'development',
  
  // 插件配置
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
  ],
  
  // 路径解析
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@qiyun': resolve(__dirname, 'packages'),
      '@apps': resolve(__dirname, 'apps'),
      '@docs': resolve(__dirname, 'docs'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue', '.json'],
  },
  
  // 开发服务器
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  
  // 构建配置
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
  
  // 依赖优化
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'axios'],
    exclude: ['@qiyun/components'],
  },
})
```

### 2. 应用配置 (apps/admin/vite.config.ts)

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createViteConfig } from '../../tools/vite-config'

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  
  return createViteConfig({
    // 应用特定配置
    root: __dirname,
    base: isProduction ? '/admin/' : '/',
    
    // 插件配置
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('micro-'),
          },
        },
      }),
    ],
    
    // 路径解析
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@shared': resolve(__dirname, '../../packages'),
      },
    },
    
    // 开发服务器
    server: {
      port: 3001,
      proxy: {
        '/api': {
          target: process.env.VITE_API_BASE_URL || 'http://localhost:8080',
          changeOrigin: true,
        },
      },
    },
    
    // 构建配置
    build: {
      outDir: '../../dist/admin',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
      },
    },
    
    // 环境变量
    envDir: '../../',
    envPrefix: 'VITE_',
  })
})
```

### 3. 包配置 (packages/components/vite.config.ts)

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      cleanVueFileName: true,
      skipDiagnostics: false,
      tsConfigFilePath: './tsconfig.json',
    }),
  ],
  
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'QiyunComponents',
      formats: ['es', 'umd'],
      fileName: (format) => `qiyun-components.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'pinia'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          pinia: 'Pinia',
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
```

## 插件配置

### 1. Vue 插件配置

```typescript
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export const vuePlugins = [
  vue({
    include: [/\.vue$/, /\.md$/],
    
    // 模板编译选项
    template: {
      compilerOptions: {
        // 自定义元素
        isCustomElement: (tag) => {
          return tag.startsWith('micro-') || tag.includes('-')
        },
        
        // 保留空白字符
        whitespace: 'preserve',
        
        // 注释处理
        comments: process.env.NODE_ENV === 'development',
      },
      
      // 预处理器
      preprocessOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
        },
      },
    },
    
    // 脚本配置
    script: {
      defineModel: true,
      propsDestructure: true,
    },
    
    // 样式配置
    style: {
      trim: true,
    },
    
    // 响应式转换
    reactivityTransform: true,
  }),
  
  // JSX 支持
  vueJsx({
    mergeProps: false,
    enableObjectSlots: false,
  }),
]
```

### 2. 开发工具插件

```typescript
import { defineConfig } from 'vite'
import { resolve } from 'path'

// 自动导入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// UI 库解析器
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 图标插件
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// Mock 插件
import { viteMockServe } from 'vite-plugin-mock'

// ESLint 插件
import eslint from 'vite-plugin-eslint'

export const devPlugins = [
  // 自动导入 API
  AutoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
      {
        '@qiyun/utils': ['formatDate', 'debounce', 'throttle'],
        '@qiyun/request': ['request', 'useRequest'],
      },
    ],
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        prefix: 'Icon',
      }),
    ],
    dts: true,
    eslintrc: {
      enabled: true,
    },
  }),
  
  // 自动导入组件
  Components({
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        enabledCollections: ['ep', 'mdi', 'carbon'],
      }),
    ],
    dts: true,
    directoryAsNamespace: true,
  }),
  
  // 图标支持
  Icons({
    autoInstall: true,
    compiler: 'vue3',
  }),
  
  // Mock 服务
  viteMockServe({
    mockPath: 'mock',
    localEnabled: true,
    prodEnabled: false,
    injectCode: `
      import { setupProdMockServer } from './mockProdServer';
      setupProdMockServer();
    `,
  }),
  
  // ESLint 检查
  eslint({
    include: ['src/**/*.{js,ts,vue}'],
    exclude: ['node_modules', 'dist'],
    cache: false,
  }),
]
```

### 3. 构建优化插件

```typescript
import { defineConfig } from 'vite'

// 压缩插件
import { compression } from 'vite-plugin-compression2'
import terser from '@rollup/plugin-terser'

// 分析插件
import { visualizer } from 'rollup-plugin-visualizer'

// PWA 插件
import { VitePWA } from 'vite-plugin-pwa'

// 预加载插件
import { preloadPlugin } from 'vite-plugin-preload'

export const buildPlugins = [
  // Gzip 压缩
  compression({
    algorithm: 'gzip',
    ext: '.gz',
    threshold: 1024,
    deleteOriginFile: false,
  }),
  
  // Brotli 压缩
  compression({
    algorithm: 'brotliCompress',
    ext: '.br',
    threshold: 1024,
    deleteOriginFile: false,
  }),
  
  // 代码压缩
  terser({
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log'],
    },
    format: {
      comments: false,
    },
  }),
  
  // 包分析
  visualizer({
    filename: 'dist/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  }),
  
  // PWA 支持
  VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/api\./,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24, // 24 hours
            },
          },
        },
      ],
    },
    manifest: {
      name: 'Qiyun Admin',
      short_name: 'Qiyun',
      description: 'Qiyun 管理后台',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  }),
  
  // 资源预加载
  preloadPlugin({
    include: ['**/*.{js,css}'],
    exclude: ['**/*.map'],
  }),
]
```

## 环境配置

### 1. 环境变量配置

```bash
# .env
VITE_APP_TITLE=Qiyun Monorepo
VITE_APP_VERSION=1.0.0
VITE_BUILD_TIME=2024-01-01

# .env.development
VITE_APP_ENV=development
VITE_API_BASE_URL=http://localhost:8080
VITE_ENABLE_MOCK=true
VITE_ENABLE_DEVTOOLS=true

# .env.staging
VITE_APP_ENV=staging
VITE_API_BASE_URL=https://api-staging.qiyun.com
VITE_ENABLE_MOCK=false
VITE_ENABLE_DEVTOOLS=true

# .env.production
VITE_APP_ENV=production
VITE_API_BASE_URL=https://api.qiyun.com
VITE_ENABLE_MOCK=false
VITE_ENABLE_DEVTOOLS=false
```

### 2. 环境类型定义

```typescript
// types/env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_ENV: 'development' | 'staging' | 'production'
  readonly VITE_API_BASE_URL: string
  readonly VITE_ENABLE_MOCK: string
  readonly VITE_ENABLE_DEVTOOLS: string
  readonly VITE_BUILD_TIME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

### 3. 环境配置工具

```typescript
// tools/env.ts
export const getEnvConfig = () => {
  const env = import.meta.env
  
  return {
    title: env.VITE_APP_TITLE,
    version: env.VITE_APP_VERSION,
    env: env.VITE_APP_ENV,
    apiBaseUrl: env.VITE_API_BASE_URL,
    enableMock: env.VITE_ENABLE_MOCK === 'true',
    enableDevtools: env.VITE_ENABLE_DEVTOOLS === 'true',
    buildTime: env.VITE_BUILD_TIME,
    isDevelopment: env.VITE_APP_ENV === 'development',
    isStaging: env.VITE_APP_ENV === 'staging',
    isProduction: env.VITE_APP_ENV === 'production',
  }
}

export const validateEnvConfig = () => {
  const requiredEnvVars = [
    'VITE_APP_TITLE',
    'VITE_APP_VERSION',
    'VITE_APP_ENV',
    'VITE_API_BASE_URL',
  ]
  
  const missingVars = requiredEnvVars.filter(
    (varName) => !import.meta.env[varName]
  )
  
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    )
  }
}
```

## 性能优化

### 1. 代码分割配置

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 第三方库分割
          vendor: ['vue', 'vue-router', 'pinia'],
          ui: ['element-plus', '@element-plus/icons-vue'],
          utils: ['lodash-es', 'dayjs', 'axios'],
          
          // 业务模块分割
          admin: ['./src/views/admin'],
          user: ['./src/views/user'],
          dashboard: ['./src/views/dashboard'],
        },
        
        // 动态导入分割
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            const fileName = facadeModuleId.split('/').pop()?.replace('.vue', '')
            return `js/${fileName}-[hash].js`
          }
          return 'js/[name]-[hash].js'
        },
      },
    },
  },
})
```

### 2. 依赖预构建优化

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    // 强制预构建
    include: [
      'vue',
      'vue-router',
      'pinia',
      'axios',
      'lodash-es',
      'dayjs',
      'element-plus/es',
      '@element-plus/icons-vue',
    ],
    
    // 排除预构建
    exclude: [
      '@qiyun/components',
      '@qiyun/utils',
    ],
    
    // 自定义 esbuild 选项
    esbuildOptions: {
      target: 'es2020',
      supported: {
        'top-level-await': true,
      },
    },
    
    // 强制重新预构建
    force: false,
  },
  
  // 依赖扫描配置
  server: {
    preTransformRequests: false,
  },
})
```

### 3. 构建性能优化

```typescript
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    // 构建目标
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: {
        safari10: true,
      },
    },
    
    // 资源内联阈值
    assetsInlineLimit: 4096,
    
    // CSS 代码分割
    cssCodeSplit: true,
    
    // 生成 manifest
    manifest: true,
    
    // Rollup 选项
    rollupOptions: {
      // 外部依赖
      external: (id) => {
        return id.includes('node_modules') && !id.includes('@qiyun')
      },
      
      // 输入配置
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
      
      // 输出配置
      output: {
        // 资源命名
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(assetInfo.name)) {
            return `media/[name]-[hash].${ext}`
          }
          if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
            return `images/[name]-[hash].${ext}`
          }
          if (ext === 'css') {
            return `css/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
        
        // 代码分割
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
    
    // 报告压缩详情
    reportCompressedSize: false,
    
    // 构建缓存
    write: true,
  },
})
```

## 开发服务器配置

### 1. 代理配置

```typescript
import { defineConfig } from 'vite'
import type { ProxyOptions } from 'vite'

const createProxy = (target: string): ProxyOptions => ({
  target,
  changeOrigin: true,
  secure: false,
  configure: (proxy, options) => {
    proxy.on('error', (err, req, res) => {
      console.log('proxy error', err)
    })
    proxy.on('proxyReq', (proxyReq, req, res) => {
      console.log('Sending Request to the Target:', req.method, req.url)
    })
    proxy.on('proxyRes', (proxyRes, req, res) => {
      console.log('Received Response from the Target:', proxyRes.statusCode, req.url)
    })
  },
})

export default defineConfig({
  server: {
    proxy: {
      '/api': createProxy('http://localhost:8080'),
      '/upload': createProxy('http://localhost:8080'),
      '/ws': {
        target: 'ws://localhost:8080',
        ws: true,
        changeOrigin: true,
      },
      '/socket.io': {
        target: 'http://localhost:3001',
        ws: true,
        changeOrigin: true,
      },
    },
  },
})
```

### 2. 中间件配置

```typescript
import { defineConfig } from 'vite'
import type { Connect } from 'vite'

// 自定义中间件
const customMiddleware: Connect.NextHandleFunction = (req, res, next) => {
  // 添加安全头
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  
  // 处理特定路由
  if (req.url?.startsWith('/api/mock')) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Mock API Response' }))
    return
  }
  
  next()
}

export default defineConfig({
  server: {
    middlewareMode: false,
    
    // 配置中间件
    configureServer(server) {
      server.middlewares.use('/custom', customMiddleware)
      
      // 添加自定义路由
      server.middlewares.use('/health', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ status: 'ok', timestamp: Date.now() }))
      })
    },
  },
})
```

### 3. HMR 配置

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: {
      port: 24678,
      overlay: true,
    },
  },
  
  // HMR 边界配置
  define: {
    __HMR__: true,
  },
  
  plugins: [
    {
      name: 'hmr-logger',
      handleHotUpdate(ctx) {
        console.log(`HMR update: ${ctx.file}`)
        
        // 自定义 HMR 逻辑
        if (ctx.file.endsWith('.vue')) {
          console.log('Vue component updated')
        }
        
        if (ctx.file.includes('store')) {
          console.log('Store updated, refreshing...')
          ctx.server.ws.send({
            type: 'full-reload',
          })
          return []
        }
      },
    },
  ],
})
```

## 工具函数

### 1. 配置工厂函数

```typescript
// tools/vite-config.ts
import { defineConfig, type UserConfig } from 'vite'
import { resolve } from 'path'
import { vuePlugins } from './plugins/vue'
import { devPlugins } from './plugins/dev'
import { buildPlugins } from './plugins/build'

interface CreateViteConfigOptions {
  root?: string
  base?: string
  plugins?: any[]
  resolve?: UserConfig['resolve']
  server?: UserConfig['server']
  build?: UserConfig['build']
  envDir?: string
  envPrefix?: string
}

export const createViteConfig = (options: CreateViteConfigOptions = {}) => {
  const {
    root = process.cwd(),
    base = '/',
    plugins = [],
    resolve = {},
    server = {},
    build = {},
    envDir = '.',
    envPrefix = 'VITE_',
  } = options

  return defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production'
    const isDevelopment = mode === 'development'

    return {
      root,
      base,
      mode,
      envDir,
      envPrefix,

      plugins: [
        ...vuePlugins,
        ...(isDevelopment ? devPlugins : []),
        ...(isProduction ? buildPlugins : []),
        ...plugins,
      ],

      resolve: {
        alias: {
          '@': resolve(root, 'src'),
          '@qiyun': resolve(root, '../../packages'),
          ...resolve.alias,
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue', '.json'],
        ...resolve,
      },

      server: {
        host: '0.0.0.0',
        port: 3000,
        open: true,
        cors: true,
        ...server,
      },

      build: {
        target: 'es2015',
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: !isProduction,
        minify: isProduction ? 'terser' : false,
        ...build,
      },

      optimizeDeps: {
        include: ['vue', 'vue-router', 'pinia'],
        exclude: ['@qiyun/components'],
      },

      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/styles/variables.scss";`,
          },
        },
      },
    }
  })
}
```

### 2. 路径解析工具

```typescript
// tools/path-resolver.ts
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件目录
export const getCurrentDir = (importMetaUrl: string) => {
  return dirname(fileURLToPath(importMetaUrl))
}

// 创建路径解析器
export const createPathResolver = (baseDir: string) => {
  return (...paths: string[]) => resolve(baseDir, ...paths)
}

// 常用路径解析
export const createCommonAliases = (rootDir: string) => {
  const r = createPathResolver(rootDir)
  
  return {
    '@': r('src'),
    '@assets': r('src/assets'),
    '@components': r('src/components'),
    '@views': r('src/views'),
    '@stores': r('src/stores'),
    '@utils': r('src/utils'),
    '@types': r('src/types'),
    '@styles': r('src/styles'),
    '@qiyun': r('packages'),
    '@shared': r('packages'),
  }
}

// 包路径解析
export const createPackageAliases = (packagesDir: string) => {
  const packages = [
    'components',
    'utils',
    'types',
    'request',
    'persistence',
    'styles',
    'hooks',
    'dashboard',
  ]
  
  return packages.reduce((aliases, pkg) => {
    aliases[`@qiyun/${pkg}`] = resolve(packagesDir, pkg, 'src')
    return aliases
  }, {} as Record<string, string>)
}
```

### 3. 插件管理工具

```typescript
// tools/plugin-manager.ts
import type { Plugin } from 'vite'

export class PluginManager {
  private plugins: Plugin[] = []
  
  add(plugin: Plugin | Plugin[]) {
    if (Array.isArray(plugin)) {
      this.plugins.push(...plugin)
    } else {
      this.plugins.push(plugin)
    }
    return this
  }
  
  addIf(condition: boolean, plugin: Plugin | Plugin[]) {
    if (condition) {
      this.add(plugin)
    }
    return this
  }
  
  remove(name: string) {
    this.plugins = this.plugins.filter(plugin => plugin.name !== name)
    return this
  }
  
  get() {
    return this.plugins
  }
  
  clear() {
    this.plugins = []
    return this
  }
}

// 使用示例
export const createPlugins = (isDev: boolean, isProd: boolean) => {
  const manager = new PluginManager()
  
  return manager
    .add(vuePlugins)
    .addIf(isDev, devPlugins)
    .addIf(isProd, buildPlugins)
    .get()
}
```

## 最佳实践

### 1. 配置组织

```typescript
// 推荐的配置文件结构
configs/
├── vite/
│   ├── base.config.ts          # 基础配置
│   ├── dev.config.ts           # 开发配置
│   ├── prod.config.ts          # 生产配置
│   └── lib.config.ts           # 库构建配置
├── plugins/
│   ├── vue.ts                  # Vue 插件配置
│   ├── dev.ts                  # 开发插件配置
│   ├── build.ts                # 构建插件配置
│   └── index.ts                # 插件入口
└── utils/
    ├── env.ts                  # 环境工具
    ├── path.ts                 # 路径工具
    └── plugin-manager.ts       # 插件管理
```

### 2. 性能监控

```typescript
// tools/performance.ts
import type { Plugin } from 'vite'

export const performancePlugin = (): Plugin => {
  let startTime: number
  
  return {
    name: 'performance-monitor',
    buildStart() {
      startTime = Date.now()
      console.log('🚀 Build started...')
    },
    buildEnd() {
      const duration = Date.now() - startTime
      console.log(`✅ Build completed in ${duration}ms`)
    },
    generateBundle(options, bundle) {
      const bundleSize = Object.values(bundle).reduce((total, chunk) => {
        if (chunk.type === 'chunk') {
          return total + chunk.code.length
        }
        return total
      }, 0)
      
      console.log(`📦 Bundle size: ${(bundleSize / 1024).toFixed(2)}KB`)
    },
  }
}
```

### 3. 错误处理

```typescript
// tools/error-handler.ts
import type { Plugin } from 'vite'

export const errorHandlerPlugin = (): Plugin => {
  return {
    name: 'error-handler',
    configResolved(config) {
      // 验证配置
      if (!config.root) {
        throw new Error('Root directory is required')
      }
    },
    buildStart() {
      process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'reason:', reason)
      })
      
      process.on('uncaughtException', (error) => {
        console.error('Uncaught Exception:', error)
        process.exit(1)
      })
    },
    load(id) {
      try {
        // 自定义加载逻辑
      } catch (error) {
        this.error(`Failed to load ${id}: ${error.message}`)
      }
    },
  }
}
```

### 4. 缓存策略

```typescript
// tools/cache.ts
import { createHash } from 'crypto'
import { readFileSync, existsSync } from 'fs'

export const createCacheKey = (files: string[]) => {
  const hash = createHash('md5')
  
  files.forEach(file => {
    if (existsSync(file)) {
      hash.update(readFileSync(file))
    }
  })
  
  return hash.digest('hex')
}

export const cachePlugin = (): Plugin => {
  const cache = new Map<string, any>()
  
  return {
    name: 'cache-plugin',
    load(id) {
      const cacheKey = createCacheKey([id])
      
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey)
      }
      
      // 加载并缓存结果
      const result = this.load(id)
      cache.set(cacheKey, result)
      
      return result
    },
  }
}
```

通过合理配置 Vite，我们可以获得快速的开发体验和高效的生产构建，同时保持良好的代码组织和可维护性。