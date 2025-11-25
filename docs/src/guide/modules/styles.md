# 样式

## 概述

`packages/styles` 是项目的统一样式解决方案，基于 TailwindCSS 构建，提供了设计系统、主题管理、组件样式和工具类。支持多主题切换、暗黑模式、响应式设计和自定义样式扩展。

## 架构

### 技术栈

- **TailwindCSS**: 原子化 CSS 框架
- **PostCSS**: CSS 后处理器
- **Sass/SCSS**: CSS 预处理器
- **CSS Variables**: 原生 CSS 变量
- **TypeScript**: 类型安全
- **Vite**: 构建工具

### 项目结构

```
packages/styles/
├── src/
│   ├── base/                # 基础样式
│   │   ├── reset.scss      # 样式重置
│   │   ├── normalize.scss  # 标准化样式
│   │   └── typography.scss # 字体排版
│   ├── themes/             # 主题系统
│   │   ├── default.scss    # 默认主题
│   │   ├── dark.scss       # 暗黑主题
│   │   ├── variables.scss  # CSS 变量
│   │   └── mixins.scss     # 样式混入
│   ├── components/         # 组件样式
│   │   ├── button.scss     # 按钮样式
│   │   ├── form.scss       # 表单样式
│   │   ├── table.scss      # 表格样式
│   │   └── modal.scss      # 模态框样式
│   ├── utilities/          # 工具类
│   │   ├── spacing.scss    # 间距工具
│   │   ├── layout.scss     # 布局工具
│   │   ├── colors.scss     # 颜色工具
│   │   └── animations.scss # 动画工具
│   ├── layouts/            # 布局样式
│   │   ├── grid.scss       # 网格布局
│   │   ├── flex.scss       # 弹性布局
│   │   └── container.scss  # 容器布局
│   ├── responsive/         # 响应式样式
│   │   ├── breakpoints.scss # 断点定义
│   │   └── media.scss      # 媒体查询
│   ├── index.scss          # 主入口文件
│   └── tailwind.scss       # TailwindCSS 入口
├── tailwind.config.js      # TailwindCSS 配置
├── postcss.config.js       # PostCSS 配置
├── package.json
└── vite.config.ts
```

## 核心功能

### 1. 主题系统

#### CSS 变量定义

```scss
// src/themes/variables.scss
:root {
  // 颜色系统
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-primary-active: #1d4ed8;
  --color-secondary: #6b7280;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #06b6d4;

  // 中性色
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  // 背景色
  --bg-primary: var(--color-white);
  --bg-secondary: var(--color-gray-50);
  --bg-tertiary: var(--color-gray-100);
  --bg-overlay: rgba(0, 0, 0, 0.5);

  // 文本色
  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-600);
  --text-tertiary: var(--color-gray-400);
  --text-inverse: var(--color-white);

  // 边框色
  --border-primary: var(--color-gray-200);
  --border-secondary: var(--color-gray-300);
  --border-focus: var(--color-primary);

  // 阴影
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  // 圆角
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 9999px;

  // 间距
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;

  // 字体
  --font-family-sans:
    "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "JetBrains Mono", "Fira Code", Consolas, monospace;

  // 字体大小
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;

  // 行高
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  // 过渡动画
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;

  // Z-index
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-toast: 1080;
}
```

#### 暗黑主题

```scss
// src/themes/dark.scss
[data-theme="dark"] {
  // 重新定义颜色变量
  --bg-primary: var(--color-gray-900);
  --bg-secondary: var(--color-gray-800);
  --bg-tertiary: var(--color-gray-700);
  --bg-overlay: rgba(0, 0, 0, 0.8);

  --text-primary: var(--color-gray-100);
  --text-secondary: var(--color-gray-300);
  --text-tertiary: var(--color-gray-500);
  --text-inverse: var(--color-gray-900);

  --border-primary: var(--color-gray-700);
  --border-secondary: var(--color-gray-600);

  // 调整阴影透明度
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
}

// 暗黑模式特定样式
[data-theme="dark"] {
  .glass-effect {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .neon-glow {
    box-shadow: 0 0 20px var(--color-primary);
  }

  // 代码高亮调整
  .code-block {
    background: var(--color-gray-800);
    border: 1px solid var(--color-gray-700);
  }
}
```

#### 主题混入

```scss
// src/themes/mixins.scss
@mixin theme-transition($properties: all) {
  transition: #{$properties} var(--transition-normal);
}

@mixin glass-morphism($opacity: 0.1) {
  background: rgba(255, 255, 255, $opacity);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@mixin gradient-background($direction: 135deg, $colors...) {
  background: linear-gradient($direction, $colors);
}

@mixin text-gradient($colors...) {
  background: linear-gradient(135deg, $colors);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@mixin hover-lift($scale: 1.02, $shadow: var(--shadow-lg)) {
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);

  &:hover {
    transform: translateY(-2px) scale($scale);
    box-shadow: $shadow;
  }
}

@mixin focus-ring($color: var(--color-primary)) {
  outline: none;
  box-shadow: 0 0 0 3px rgba($color, 0.1);
  border-color: $color;
}

@mixin truncate-text($lines: 1) {
  @if $lines == 1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

@mixin responsive-grid($min-width: 250px, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min-width, 1fr));
  gap: $gap;
}

@mixin center-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 2. 组件样式

#### 按钮样式

```scss
// src/components/button.scss
.btn {
  @apply inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md;
  @apply border border-transparent cursor-pointer select-none;
  @apply transition-all duration-200 ease-in-out;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;

  // 尺寸变体
  &--xs {
    @apply px-2 py-1 text-xs;
  }

  &--sm {
    @apply px-3 py-1.5 text-sm;
  }

  &--lg {
    @apply px-6 py-3 text-base;
  }

  &--xl {
    @apply px-8 py-4 text-lg;
  }

  // 颜色变体
  &--primary {
    @apply bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500;
  }

  &--secondary {
    @apply bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500;
  }

  &--success {
    @apply bg-green-600 text-white hover:bg-green-700 focus:ring-green-500;
  }

  &--warning {
    @apply bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500;
  }

  &--danger {
    @apply bg-red-600 text-white hover:bg-red-700 focus:ring-red-500;
  }

  // 样式变体
  &--outline {
    @apply bg-transparent border-current;

    &.btn--primary {
      @apply text-blue-600 border-blue-600 hover:bg-blue-50;
    }

    &.btn--secondary {
      @apply text-gray-600 border-gray-600 hover:bg-gray-50;
    }
  }

  &--ghost {
    @apply bg-transparent border-transparent;

    &.btn--primary {
      @apply text-blue-600 hover:bg-blue-50;
    }

    &.btn--secondary {
      @apply text-gray-600 hover:bg-gray-50;
    }
  }

  &--gradient {
    @include gradient-background(135deg, var(--color-primary), #8b5cf6);
    @apply text-white border-transparent;

    &:hover {
      @include gradient-background(135deg, #2563eb, #7c3aed);
    }
  }

  // 形状变体
  &--rounded {
    @apply rounded-full;
  }

  &--square {
    @apply aspect-square p-0;
  }

  // 加载状态
  &--loading {
    @apply relative text-transparent pointer-events-none;

    &::after {
      @apply absolute inset-0 flex items-center justify-center;
      content: "";
      width: 1rem;
      height: 1rem;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }

  // 图标按钮
  &--icon-only {
    @apply p-2;

    .icon {
      @apply w-4 h-4;
    }
  }

  // 按钮组
  .btn-group & {
    @apply rounded-none border-r-0;

    &:first-child {
      @apply rounded-l-md;
    }

    &:last-child {
      @apply rounded-r-md border-r;
    }

    &:only-child {
      @apply rounded-md border-r;
    }
  }
}

// 按钮组
.btn-group {
  @apply inline-flex;

  &--vertical {
    @apply flex-col;

    .btn {
      @apply border-b-0 rounded-none;

      &:first-child {
        @apply rounded-t-md;
      }

      &:last-child {
        @apply rounded-b-md border-b;
      }

      &:only-child {
        @apply rounded-md border-b;
      }
    }
  }
}

// 动画
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

#### 表单样式

```scss
// src/components/form.scss
.form-group {
  @apply mb-4;

  &--inline {
    @apply flex items-center space-x-4 mb-0;
  }
}

.form-label {
  @apply block text-sm font-medium text-gray-700 mb-1;

  &--required::after {
    @apply text-red-500 ml-1;
    content: "*";
  }

  &--optional::after {
    @apply text-gray-400 ml-1 text-xs;
    content: "(可选)";
  }
}

.form-input {
  @apply block w-full px-3 py-2 border border-gray-300 rounded-md;
  @apply text-sm placeholder-gray-400;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
  @apply disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed;
  @include theme-transition(border-color, box-shadow);

  // 尺寸变体
  &--sm {
    @apply px-2 py-1 text-xs;
  }

  &--lg {
    @apply px-4 py-3 text-base;
  }

  // 状态变体
  &--error {
    @apply border-red-300 focus:border-red-500 focus:ring-red-500;
  }

  &--success {
    @apply border-green-300 focus:border-green-500 focus:ring-green-500;
  }

  &--warning {
    @apply border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500;
  }
}

.form-textarea {
  @extend .form-input;
  @apply resize-vertical min-h-[80px];
}

.form-select {
  @extend .form-input;
  @apply pr-8 bg-white cursor-pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
}

.form-checkbox,
.form-radio {
  @apply w-4 h-4 text-blue-600 border-gray-300 rounded;
  @apply focus:ring-2 focus:ring-blue-500 focus:ring-offset-0;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

.form-radio {
  @apply rounded-full;
}

.form-switch {
  @apply relative inline-flex h-6 w-11 items-center rounded-full;
  @apply bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;

  &--checked {
    @apply bg-blue-600;
  }

  &__thumb {
    @apply inline-block h-4 w-4 transform rounded-full bg-white transition-transform;
    @apply translate-x-1;

    .form-switch--checked & {
      @apply translate-x-6;
    }
  }
}

.form-help {
  @apply mt-1 text-xs text-gray-500;

  &--error {
    @apply text-red-600;
  }

  &--success {
    @apply text-green-600;
  }

  &--warning {
    @apply text-yellow-600;
  }
}

.form-fieldset {
  @apply border border-gray-200 rounded-md p-4;

  .form-legend {
    @apply px-2 text-sm font-medium text-gray-700;
  }
}

// 输入组
.input-group {
  @apply relative flex items-stretch;

  .form-input {
    @apply flex-1 min-w-0;

    &:not(:first-child) {
      @apply rounded-l-none border-l-0;
    }

    &:not(:last-child) {
      @apply rounded-r-none;
    }
  }

  &__prepend,
  &__append {
    @apply flex items-center px-3 text-sm text-gray-500 bg-gray-50 border border-gray-300;

    &:first-child {
      @apply rounded-l-md border-r-0;
    }

    &:last-child {
      @apply rounded-r-md border-l-0;
    }
  }
}

// 表单验证
.form-validation {
  &--pending .form-input {
    @apply border-yellow-300;
  }

  &--valid .form-input {
    @apply border-green-300;
  }

  &--invalid .form-input {
    @apply border-red-300;
  }
}
```

### 3. 工具类

#### 动画工具

```scss
// src/utilities/animations.scss
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

.animate-fade-out {
  animation: fadeOut 0.3s ease-in-out;
}

.animate-slide-in-up {
  animation: slideInUp 0.3s ease-out;
}

.animate-slide-in-down {
  animation: slideInDown 0.3s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.3s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.3s ease-out;
}

.animate-bounce-in {
  animation: bounceIn 0.6s ease-out;
}

.animate-zoom-in {
  animation: zoomIn 0.3s ease-out;
}

.animate-rotate {
  animation: rotate 1s linear infinite;
}

.animate-pulse-slow {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

// 悬停动画
.hover-lift {
  @include hover-lift();
}

.hover-glow {
  transition: box-shadow var(--transition-normal);

  &:hover {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
}

.hover-scale {
  transition: transform var(--transition-fast);

  &:hover {
    transform: scale(1.05);
  }
}

// 关键帧动画
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

// 过渡类
.transition-fast {
  transition: all var(--transition-fast);
}

.transition-normal {
  transition: all var(--transition-normal);
}

.transition-slow {
  transition: all var(--transition-slow);
}

.transition-colors {
  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal);
}

.transition-transform {
  transition: transform var(--transition-normal);
}

.transition-opacity {
  transition: opacity var(--transition-normal);
}
```

#### 布局工具

```scss
// src/utilities/layout.scss
.container {
  @apply w-full mx-auto px-4;

  @screen sm {
    @apply max-w-screen-sm;
  }

  @screen md {
    @apply max-w-screen-md;
  }

  @screen lg {
    @apply max-w-screen-lg;
  }

  @screen xl {
    @apply max-w-screen-xl;
  }

  @screen 2xl {
    @apply max-w-screen-2xl;
  }

  &--fluid {
    @apply max-w-none;
  }

  &--narrow {
    @apply max-w-4xl;
  }

  &--wide {
    @apply max-w-7xl;
  }
}

// 网格系统
.grid-auto-fit {
  @include responsive-grid();
}

.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

// Flexbox 工具
.flex-center {
  @include center-content;
}

.flex-between {
  @apply flex justify-between items-center;
}

.flex-around {
  @apply flex justify-around items-center;
}

.flex-evenly {
  @apply flex justify-evenly items-center;
}

// 定位工具
.absolute-center {
  @include absolute-center;
}

.absolute-top-left {
  @apply absolute top-0 left-0;
}

.absolute-top-right {
  @apply absolute top-0 right-0;
}

.absolute-bottom-left {
  @apply absolute bottom-0 left-0;
}

.absolute-bottom-right {
  @apply absolute bottom-0 right-0;
}

// 尺寸工具
.full-screen {
  @apply w-screen h-screen;
}

.full-viewport {
  @apply w-full h-screen;
}

.square {
  @apply aspect-square;
}

.circle {
  @apply aspect-square rounded-full;
}

// 滚动工具
.scroll-smooth {
  scroll-behavior: smooth;
}

.scroll-hidden {
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.scroll-styled {
  &::-webkit-scrollbar {
    @apply w-2;
  }

  &::-webkit-scrollbar-track {
    @apply bg-gray-100 rounded;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-gray-300 rounded hover:bg-gray-400;
  }
}

// 溢出工具
.text-ellipsis {
  @include truncate-text(1);
}

.text-ellipsis-2 {
  @include truncate-text(2);
}

.text-ellipsis-3 {
  @include truncate-text(3);
}

// 可见性工具
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
  clip: rect(0, 0, 0, 0);
}

.not-sr-only {
  @apply static w-auto h-auto p-0 m-0 overflow-visible whitespace-normal;
  clip: auto;
}
```

### 4. TailwindCSS 配置

```javascript
// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./apps/**/*.{vue,js,ts,jsx,tsx}",
    "./packages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        gray: colors.slate,
        success: colors.emerald,
        warning: colors.amber,
        error: colors.red,
        info: colors.cyan,
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "inner-lg": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-in": "bounceIn 0.6s ease-out",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    // 自定义插件
    function ({ addUtilities, addComponents, theme }) {
      // 添加自定义工具类
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
        },
        ".glass-morphism": {
          background: "rgba(255, 255, 255, 0.1)",
          "backdrop-filter": "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      });

      // 添加自定义组件
      addComponents({
        ".card": {
          "@apply bg-white rounded-lg shadow-md p-6": {},
          "@apply dark:bg-gray-800 dark:shadow-gray-900/20": {},
        },
        ".badge": {
          "@apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium":
            {},
        },
      });
    },
  ],
};
```

### 5. 构建配置

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/themes/variables.scss";
          @import "./src/themes/mixins.scss";
        `,
      },
    },
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("cssnano")({
          preset: "default",
        }),
      ],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.scss"),
      name: "QiyunStyles",
      formats: ["es"],
      fileName: "styles",
    },
    rollupOptions: {
      output: {
        assetFileNames: "styles.[ext]",
      },
    },
  },
});
```

## 使用方法

### 1. 基本使用

```vue
<template>
  <div class="container">
    <!-- 使用预定义组件样式 -->
    <button class="btn btn--primary btn--lg">主要按钮</button>

    <!-- 使用 TailwindCSS 工具类 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">标题</h2>
      <p class="text-gray-600 leading-relaxed">内容文本</p>
    </div>

    <!-- 使用自定义工具类 -->
    <div class="glass-morphism p-6 rounded-xl">玻璃态效果</div>
  </div>
</template>

<style scoped>
/* 使用 SCSS 混入 */
.custom-card {
  @include glass-morphism(0.15);
  @include hover-lift();
  @include theme-transition();
}

.gradient-text {
  @include text-gradient(#3b82f6, #8b5cf6, #ec4899);
}
</style>
```

### 2. 主题切换

```vue
<template>
  <div>
    <button @click="toggleTheme" class="btn btn--secondary">切换主题</button>

    <div class="theme-demo">
      <div class="bg-primary text-white p-4 rounded">主色调背景</div>
      <div class="bg-secondary text-primary p-4 rounded">次要色调背景</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute(
    "data-theme",
    isDark.value ? "dark" : "light",
  );
};
</script>

<style scoped>
.theme-demo {
  @apply grid grid-cols-2 gap-4 mt-4;
}

.bg-primary {
  background-color: var(--color-primary);
}

.bg-secondary {
  background-color: var(--bg-secondary);
}

.text-primary {
  color: var(--text-primary);
}
</style>
```

### 3. 响应式设计

```vue
<template>
  <div class="responsive-layout">
    <!-- 响应式网格 -->
    <div class="grid-auto-fit">
      <div v-for="item in items" :key="item.id" class="card">
        {{ item.title }}
      </div>
    </div>

    <!-- 响应式导航 -->
    <nav class="navbar">
      <div class="navbar__brand">Logo</div>
      <div class="navbar__menu" :class="{ 'navbar__menu--open': menuOpen }">
        <a href="#" class="navbar__link">首页</a>
        <a href="#" class="navbar__link">产品</a>
        <a href="#" class="navbar__link">关于</a>
      </div>
      <button class="navbar__toggle md:hidden" @click="menuOpen = !menuOpen">
        ☰
      </button>
    </nav>
  </div>
</template>

<style scoped>
.responsive-layout {
  @apply container mx-auto px-4;
}

.navbar {
  @apply flex items-center justify-between p-4 bg-white shadow-md;

  &__brand {
    @apply text-xl font-bold text-primary;
  }

  &__menu {
    @apply hidden md:flex space-x-6;

    &--open {
      @apply flex flex-col absolute top-full left-0 w-full bg-white shadow-lg p-4;
      @apply md:flex-row md:static md:w-auto md:shadow-none md:p-0;
    }
  }

  &__link {
    @apply text-gray-600 hover:text-primary transition-colors;
  }

  &__toggle {
    @apply p-2 text-gray-600 hover:text-primary;
  }
}

/* 自定义断点 */
@media (max-width: 480px) {
  .grid-auto-fit {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1440px) {
  .container {
    max-width: 1200px;
  }
}
</style>
```

### 4. 动画效果

```vue
<template>
  <div class="animation-demo">
    <!-- 入场动画 -->
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="animate-slide-in-up card"
      :style="{ animationDelay: `${index * 100}ms` }"
    >
      {{ item.title }}
    </div>

    <!-- 交互动画 -->
    <button class="btn btn--primary hover-lift hover-glow">悬停效果</button>

    <!-- 加载动画 -->
    <div v-if="loading" class="loading-spinner">
      <div
        class="animate-rotate w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
      ></div>
    </div>

    <!-- 过渡动画 -->
    <transition name="fade" mode="out-in">
      <div v-if="showContent" class="content">内容区域</div>
    </transition>
  </div>
</template>

<style scoped>
.animation-demo {
  @apply space-y-6 p-6;
}

/* Vue 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

/* 自定义动画 */
.loading-spinner {
  @apply flex justify-center items-center p-8;
}

/* 延迟动画 */
.stagger-animation {
  @apply opacity-0;
  animation: fadeInUp 0.6s ease-out forwards;
}

@for $i from 1 through 10 {
  .stagger-animation:nth-child(#{$i}) {
    animation-delay: #{$i * 0.1}s;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
```

## 最佳实践

### 1. 样式组织

```scss
// 推荐的样式组织结构
.component {
  // 基础样式
  @apply block relative;

  // 布局样式
  @apply w-full p-4;

  // 视觉样式
  @apply bg-white rounded-lg shadow-md;

  // 交互样式
  @apply hover:shadow-lg transition-shadow;

  // 状态样式
  &--active {
    @apply bg-blue-50 border-blue-200;
  }

  &--disabled {
    @apply opacity-50 pointer-events-none;
  }

  // 子元素样式
  &__header {
    @apply flex items-center justify-between mb-4;
  }

  &__title {
    @apply text-lg font-semibold text-gray-900;
  }

  &__content {
    @apply text-gray-600 leading-relaxed;
  }
}
```

### 2. 性能优化

```scss
// 使用 CSS 自定义属性优化主题切换
.theme-optimized {
  // 避免重复定义，使用 CSS 变量
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border-color: var(--border-primary);

  // 使用 transform 而不是改变 layout 属性
  &:hover {
    transform: translateY(-2px);
  }

  // 使用 will-change 提示浏览器优化
  &.animating {
    will-change: transform, opacity;
  }
}

// 避免昂贵的 CSS 选择器
// ❌ 避免
* + * {
  margin-top: 1rem;
}

// ✅ 推荐
.stack > * + * {
  margin-top: 1rem;
}
```

### 3. 可维护性

```scss
// 使用语义化的类名
.product-card {
  // 而不是 .blue-box
}

.navigation-menu {
  // 而不是 .top-bar
}

// 使用 BEM 命名规范
.search-form {
  &__input {
    // 输入框样式
  }

  &__button {
    // 按钮样式

    &--primary {
      // 主要按钮变体
    }
  }

  &--compact {
    // 紧凑型表单修饰符
  }
}

// 使用混入避免重复
@mixin card-style {
  @apply bg-white rounded-lg shadow-md p-6;
  @apply dark:bg-gray-800 dark:shadow-gray-900/20;
}

.user-card {
  @include card-style;
}

.product-card {
  @include card-style;
}
```

## 相关资源

- [TailwindCSS 官方文档](https://tailwindcss.com/docs)
- [Sass 官方文档](https://sass-lang.com/documentation)
- [PostCSS 插件](https://github.com/postcss/postcss/blob/main/docs/plugins.md)
- [CSS 自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)
- [设计系统](/guide/intro/components#设计系统)
- [主题配置](/guide/basics/configuration#主题配置)
