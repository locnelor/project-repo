import type { UserConfig } from 'vite'
import { defineConfig, mergeConfig } from 'vite'

export const defineLibraryConfig = (userConfig: UserConfig = {}) => {
  const config = defineConfig({
    build: {
      lib: {
        entry: 'src/index.ts',
        fileName: () => 'index.mjs',
        formats: ['es'],
      },
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
      sourcemap: false,
    },
  })
  return mergeConfig(config, userConfig)
}
