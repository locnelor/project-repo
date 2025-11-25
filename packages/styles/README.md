# @repo/styles

这是一个基于TailwindCSS的主题样式系统，提供了一套完整的主题色方案和响应式设计工具。

## 特性

- 🎨 完整的主题色系统，支持从100到900的色阶
- 🌓 内置亮色/暗色主题切换
- 📱 完全响应式设计
- 🧩 组件化设计，易于扩展
- 🔄 CSS变量驱动，便于定制
- 🛠️ 提供 `cn` 工具函数，智能合并 TailwindCSS 类名

## 安装

```bash
# 在monorepo项目中使用
pnpm add @repo/styles

# 或者在项目中直接引用
# 在package.json中添加
"dependencies": {
  "@repo/styles": "workspace:*"
}
```

## 使用方法

### 1. 引入样式

在你的应用入口文件（如`app/layout.tsx`）中引入样式：

```tsx
import "@repo/styles";
```

### 2. 使用 cn 工具函数

`cn` 函数是一个强大的类名合并工具，结合了 `clsx` 和 `tailwind-merge` 的功能：

```tsx
import { cn } from "@repo/styles";

// 基础用法
const className = cn("px-2 py-1", "text-red-500");

// 条件类名
const className = cn("px-2 py-1", {
  "text-red-500": isError,
  "text-green-500": isSuccess,
});

// TailwindCSS 类名冲突处理（px-4 会覆盖 px-2）
const className = cn("px-2 py-1", "px-4"); // => 'py-1 px-4'

// 在组件中使用
<div
  className={cn(
    "base-styles",
    "px-4 py-2",
    {
      "bg-red-500": isError,
      "bg-green-500": isSuccess,
    },
    className, // 外部传入的类名
  )}
>
  内容
</div>;
```

### 3. 使用主题色

#### 背景色类

提供从100到900的背景色阶：

```jsx
<div className="bg-current">当前主题背景色</div>
<div className="bg-background">相反主题背景色</div>
<div className="bg-base-100">基础背景色 100</div>
<div className="bg-base-200">基础背景色 200</div>
<div className="bg-base-300">基础背景色 300</div>
<div className="bg-base-400">基础背景色 400</div>
<div className="bg-base-500">基础背景色 500</div>
<div className="bg-base-600">基础背景色 600</div>
<div className="bg-base-700">基础背景色 700</div>
<div className="bg-base-800">基础背景色 800</div>
<div className="bg-base-900">基础背景色 900</div>
```

#### 文本色类

提供从100到900的文本色阶：

```jsx
<p className="text-current">当前主题文本色</p>
<p className="text-background">相反主题文本色</p>
<p className="text-base-100">基础文本色 100</p>
<p className="text-base-200">基础文本色 200</p>
<p className="text-base-300">基础文本色 300</p>
<p className="text-base-400">基础文本色 400</p>
<p className="text-base-500">基础文本色 500</p>
<p className="text-base-600">基础文本色 600</p>
<p className="text-base-700">基础文本色 700</p>
<p className="text-base-800">基础文本色 800</p>
<p className="text-base-900">基础文本色 900</p>
```

## 色彩系统

### 默认主题（亮色）

- `--theme-current`: 255 255 255（白色）
- `--theme-background`: 23 23 23（黑色）
- `--theme-base-100` 到 `--theme-base-900`: 从浅灰到深灰的渐变色系
- `--theme-text-current`: 23 23 23（黑色文本）
- `--theme-text-background`: 255 255 255（白色文本）
- `--theme-text-base-100` 到 `--theme-text-base-900`: 从深灰到浅灰的文本色系

### 暗色主题

当添加`.dark`类或使用`ThemeProvider`切换到暗色主题时，颜色会自动反转。

## 最佳实践

1. **色彩选择**：
   - 使用`bg-current`和`text-current`作为主要背景和文本颜色
   - 使用`bg-base-100`到`bg-base-300`作为卡片和容器背景
   - 使用`bg-base-700`到`bg-base-900`作为强调元素背景

2. **文本可读性**：
   - 在浅色背景上使用`text-base-700`到`text-base-900`
   - 在深色背景上使用`text-base-100`到`text-base-300`
   - 确保文本与背景之间有足够的对比度

3. **主题切换**：
   - 使用`ThemeProvider`和`useTheme`钩子管理主题状态
   - 避免硬编码颜色值，始终使用主题色类
