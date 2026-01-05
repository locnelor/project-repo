import type { Ref } from 'vue'
import { array2tree, isFunction } from '@repo/utils'
import { computed, unref } from 'vue'

/**
 *
 * @param data 表格数据
 * @param makeTree 是否将数据转换为树结构
 * @returns 转换后的表格数据
 */
// export const useTableDataSource = (data?: any, makeTree = false) => {
//   return computed(() => {
//     const source = unref(data);
//     if (!source) return [];
//     const dataSource = source.map((item: any) => ({ ...item, key: item.id }));
//     return makeTree ? array2tree(dataSource) : dataSource;
//   });
// };

export type UseTableAction<T> = (() => T[] | Ref<T[]>) | T[] | Ref<T[]>

export const useTableDataSource = <T>(
  data?: UseTableAction<T>,
  makeTree = false,
) => {
  return computed(() => {
    const source = unref(data)
    if (!source) return []
    const list = isFunction(source) ? unref(source()) : source
    if (!list) return []
    const dataSource = list.map((item: any) => ({ ...item, key: item.id }))
    return makeTree ? array2tree(dataSource) : dataSource
  })
}
