/**
 * 树节点接口定义
 */
export interface TreeNode<T = any> {
  children?: TreeNode<T>[] | T[];
  [key: string]: any;
}
