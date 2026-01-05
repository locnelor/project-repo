import type { TreeNode } from './interface'
import _ from 'lodash'

interface Array2treeOptions<T> {
  cbk?: (item: T) => any
  defaultParentId?: any
  nodeName?: string
  parentNodeName?: string
  clearEmptyChildren?: boolean
}

export const array2tree = <T>(arr: T[], options: Array2treeOptions<T> = {}) => {
  const {
    nodeName = 'id',
    parentNodeName = 'pid',
    defaultParentId = '',
    cbk = (e) => e,
    clearEmptyChildren = true,
  } = options
  const nodeMap = _.groupBy(arr, parentNodeName)
  const buildTree: any = (parentId: any) => {
    const children = nodeMap[parentId] || []
    return children.map((child: any) => {
      child.children = buildTree(child[nodeName])
      const item = !!cbk && cbk(child)
      const result = {
        ...child,
        ...item,
      }
      if (clearEmptyChildren && result.children && !result.children.length) {
        delete result.children
      }
      return result
    })
  }
  return buildTree(defaultParentId) as T[]
}

/**
 * 获取树结构中的第一个叶节点
 * @param nodes 树节点数组
 * @returns 第一个叶节点，如果没有找到则返回 undefined
 *
 * @example
 * // 示例1: 基本用法
 * const tree = [
 *   { children: [1, 2] },
 *   { children: [3, 4] }
 * ];
 * getFirstLeafNode(tree); // 返回 1
 *
 * @example
 * // 示例2: 对象节点
 * const tree = [
 *   {
 *     name: 'parent1',
 *     children: [
 *       { name: 'leaf1', children: [] },
 *       { name: 'leaf2', children: [] }
 *     ]
 *   },
 *   {
 *     name: 'parent2',
 *     children: [
 *       { name: 'leaf3', children: [] }
 *     ]
 *   }
 * ];
 * getFirstLeafNode(tree); // 返回 { name: 'leaf1', children: [] }
 */
export function getFirstLeafNode<T = any>(
  nodes: TreeNode<T>[],
): T | TreeNode<T> | undefined {
  if (!nodes || nodes.length === 0) {
    return undefined
  }

  for (const node of nodes) {
    // 如果当前节点没有 children 属性或 children 为空数组，则它是叶节点
    if (!node.children || node.children.length === 0) {
      return node
    }

    // 如果 children 存在且不为空，递归查找第一个叶节点
    const firstChild = node.children[0]

    // 如果第一个子节点是基本类型（非对象），直接返回
    if (typeof firstChild !== 'object' || firstChild === null) {
      return firstChild
    }

    // 如果第一个子节点是对象，递归查找
    const leafNode = getFirstLeafNode([firstChild as TreeNode<T>])
    if (leafNode !== undefined) {
      return leafNode
    }
  }

  return undefined
}

/**
 * 获取树结构中所有叶节点
 * @param nodes 树节点数组
 * @returns 所有叶节点的数组
 */
export function getAllLeafNodes<T = any>(
  nodes: TreeNode<T>[],
): (T | TreeNode<T>)[] {
  const leafNodes: (T | TreeNode<T>)[] = []

  function traverse(currentNodes: TreeNode<T>[]) {
    for (const node of currentNodes) {
      if (!node.children || node.children.length === 0) {
        leafNodes.push(node)
      } else {
        // 检查子节点是否为基本类型
        for (const child of node.children) {
          if (typeof child !== 'object' || child === null) {
            leafNodes.push(child)
          } else {
            traverse([child as TreeNode<T>])
          }
        }
      }
    }
  }

  traverse(nodes)
  return leafNodes
}

// 回调函数类型，该函数处理树节点并返回修改后的节点
type FilterCbk = <T extends TreeNode>(node: T) => T

/**
 * 递归映射树结构，对每个节点应用回调函数。
 *
 * @param tree - 以数组形式表示的树结构，每个元素为 TreeNode 对象。
 * @param cbk - 可选的回调函数，用于修改每个节点。
 * @returns 一个新的树结构，其中的节点已被修改。
 */
export const treeMap = <T extends TreeNode>(
  tree?: T[],
  cbk?: FilterCbk,
): any => {
  // 如果未提供树结构，则直接返回
  if (!tree) return tree

  // 遍历树节点，应用回调函数（如果提供），并递归处理子节点
  return tree.map((item: T) => {
    const child = {
      ...item,
      children: treeMap(item.children, cbk),
    }
    return cbk?.(child)
  })
}
