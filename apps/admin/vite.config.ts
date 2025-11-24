import { defineConfig } from "@internal/vite-config"

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  server: {
    host: '0.0.0.0', // 允许局域网访问
    proxy: {
      '/cidg-ibmo-test': {
        target: 'https://sc.qiyun.wiki/',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/cidg-ibmo-test/, '/cidg-ibmo-test'),
        // 添加缓存控制头
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // 设置缓存控制头
            proxyRes.headers['cache-control'] = 'public, max-age=3600'; // 缓存1小时
            proxyRes.headers['etag'] = `"${Date.now()}"`;
          });
        }
      }
    }
  },
  // 添加构建缓存配置
  build: {
    rollupOptions: {
      output: {
        // 为静态资源添加hash，便于缓存管理
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  }
})