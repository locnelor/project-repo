import type { Config } from 'tailwindcss'

import path from 'node:path'

import { addDynamicIconSelectors } from '@iconify/tailwind'
import { getPackagesSync } from '@internal/pkg-utils'
import typographyPlugin from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'

// import defaultTheme from 'tailwindcss/defaultTheme';

const { packages } = getPackagesSync()

const tailwindPackages: string[] = []

packages.forEach((pkg) => {
  // apps目录下和 @vben-core/tailwind-ui 包需要使用到 tailwindcss ui
  // if (fs.existsSync(path.join(pkg.dir, 'tailwind.config.mjs'))) {
  tailwindPackages.push(pkg.dir)
  // }
})

export default {
  content: [
    './index.html',
    ...tailwindPackages.map((item) =>
      path.join(item, 'src/**/*.{vue,js,ts,jsx,tsx,svelte,astro,html}'),
    ),
  ],
  darkMode: 'selector',
  plugins: [animate, typographyPlugin, addDynamicIconSelectors()],
  prefix: '',
} as Config

function createColorsPalette(name: string) {
  return {
    '50': `hsl(var(--${name}-50))`,
    '100': `hsl(var(--${name}-100))`,
    '200': `hsl(var(--${name}-200))`,
    '300': `hsl(var(--${name}-300))`,
    '400': `hsl(var(--${name}-400))`,
    '500': `hsl(var(--${name}-500))`,
    '600': `hsl(var(--${name}-600))`,
    '700': `hsl(var(--${name}-700))`,
    '800': `hsl(var(--${name}-800))`,
    '900': `hsl(var(--${name}-900))`,
    '950': `hsl(var(--${name}-950))`,
    // 激活状态下的颜色，适用于按钮按下时的背景色或边框色。
    'active': `hsl(var(--${name}-700))`,
    // 浅色背景，适用于输入框或表单区域的背景。
    'background-light': `hsl(var(--${name}-200))`,
    // 适用于略浅的背景色，通常用于次要背景或略浅的区域。
    'background-lighter': `hsl(var(--${name}-100))`,
    // 最浅的背景色，适用于非常轻微的阴影或卡片的背景。
    'background-lightest': `hsl(var(--${name}-50))`,
    // 适用于普通边框，可能用于按钮或卡片的边框。
    'border': `hsl(var(--${name}-400))`,
    // 浅色边框，适用于输入框或卡片的边框。
    'border-light': `hsl(var(--${name}-300))`,
    'foreground': `hsl(var(--${name}-foreground))`,
    // 鼠标悬停状态下的颜色，适用于按钮悬停时的背景色或边框色。
    'hover': `hsl(var(--${name}-600))`,
    // 主色文本
    'text': `hsl(var(--${name}-500))`,
    // 主色文本激活态
    'text-active': `hsl(var(--${name}-700))`,
    // 主色文本悬浮态
    'text-hover': `hsl(var(--${name}-600))`,
  }
}
