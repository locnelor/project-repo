export const deepCopy = <T>(target: T): T => {
  // 如果是基本类型或null，直接返回
  if (target === null || typeof target !== 'object') {
    return target
  }

  // 处理日期对象
  if (target instanceof Date) {
    return new Date(target.getTime()) as any
  }

  // 处理正则表达式
  if (target instanceof RegExp) {
    return new RegExp(target.source, target.flags) as any
  }

  // 处理数组
  if (Array.isArray(target)) {
    return target.map((item) => deepCopy(item)) as any
  }

  // 处理普通对象
  const result = {} as T
  Object.keys(target as object).forEach((key) => {
    result[key as keyof T] = deepCopy((target as any)[key])
  })

  return result
}
