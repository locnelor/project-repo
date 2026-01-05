import type { ClassValue } from 'clsx'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合并 CSS 类名的工具函数
 * 结合 clsx 和 tailwind-merge 的功能，用于处理条件类名和 TailwindCSS 类名冲突
 *
 * @param inputs - 类名输入，支持字符串、对象、数组等多种格式
 * @returns 合并后的类名字符串
 *
 * @example
 * ```ts
 * // 基础用法
 * cn('px-2 py-1', 'text-red-500')
 * // => 'px-2 py-1 text-red-500'
 *
 * // 条件类名
 * cn('px-2 py-1', {
 *   'text-red-500': isError,
 *   'text-green-500': isSuccess
 * })
 *
 * // TailwindCSS 类名冲突处理
 * cn('px-2 py-1', 'px-4') // px-4 会覆盖 px-2
 * // => 'py-1 px-4'
 * ```
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export { cn }
