import type { UserConfig } from 'vite'
// import tailwindcss from "@tailwindcss/vite"
import { getPackagesSync } from '@internal/pkg-utils'
import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig, mergeConfig } from 'vite'

// 创建自动添加@source指令的插件
// tailwind4x
// function createTailwindSourcePlugin(): Plugin {
//   return {
//     name: 'transform-tailwind-source-plugin',
//     enforce: 'pre', // 确保在其他插件之前执行
//     transform(code: string, id: string) {
//       if (id.endsWith('.css') && code.includes('@import "tailwindcss"')) {
//         const { getPackagesSync } = require('@manypkg/get-packages')
//         const { packages }: { packages: Package[] } = getPackagesSync(process.cwd())
//         const cssFileDir = path.dirname(id)

//         // 生成@source指令
//         const sourceDirectives = packages
//           .map((pkg: Package) => {
//             const relativePath = path.relative(cssFileDir, pkg.dir)
//             return relativePath
//           })
//           .filter((relativePath: string) => {
//             // 排除当前目录和父级目录，只包含有效的相对路径
//             return relativePath &&
//               relativePath !== '.' &&
//               !relativePath.startsWith('node_modules') &&
//               relativePath !== path.relative(cssFileDir, cssFileDir)
//           })
//           .map((relativePath: string) => {
//             // 确保路径使用正斜杠（跨平台兼容）
//             const normalizedPath = relativePath.replace(/\\/g, '/')
//             return `@source "${normalizedPath}";`
//           })
//           .join('\n')
//         // 只有当有@source指令时才添加
//         if (sourceDirectives) {
//           // 在@import "tailwindcss"后添加@source指令
//           const updatedCode = code.replace(
//             /@import ["']tailwindcss["'];?/,
//             `@import "tailwindcss";\n${sourceDirectives}`
//           )
//           return {
//             code: updatedCode,
//             map: null
//           }
//         }
//       }
//       return null
//     }
//   }
// }

const { packages } = getPackagesSync()
const tailwindPackages: string[] = []

packages.forEach((pkg) => {
  // apps目录下和 @vben-core/tailwind-ui 包需要使用到 tailwindcss ui
  // if (fs.existsSync(path.join(pkg.dir, 'tailwind.config.mjs'))) {
  tailwindPackages.push(pkg.dir)
  // }
})

export const defineApplicationConfig = (userConfig: UserConfig = {}) => {
  const config = defineConfig({
    plugins: [
      // createTailwindSourcePlugin(),
      vuePlugin() as any,
      // tailwindcss()
    ],
    // css: {
    //   postcss: {
    //     plugins: [],
    //   },
    // },
  })
  return mergeConfig(config, userConfig)
}
