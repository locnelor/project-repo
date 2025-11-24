# @vben/utils

用于存放数据相关工具函数，例如数据转换、数据校验等。

## 使用方法

```ts
import {
  deepCopy,
  array2tree,
  treeMap,
  getFirstLeafNode,
  getAllLeafNodes,
  mergeRouteModules,
} from "@repo/utils";
```

## 函数列表

### 深拷贝工具

#### `deepCopy<T>(target: T): T`

深度拷贝对象，支持嵌套对象、数组、日期、正则表达式。

```ts
const original = { a: 1, b: { c: 2 } };
const copied = deepCopy(original);
```

### 树结构工具

#### `array2tree<T>(arr: T[], options?: Array2treeOptions<T>): T[]`

将扁平数组转换为树结构。

- `arr`: 扁平数组
- `options.nodeName`: 节点ID字段名，默认 "id"
- `options.parentNodeName`: 父节点ID字段名，默认 "pid"
- `options.defaultParentId`: 根节点父ID，默认 ""
- `options.cbk`: 节点处理回调函数
- `options.clearEmptyChildren`: 是否清除空children，默认 true

```ts
const flatArray = [
  { id: 1, pid: 0, name: "root" },
  { id: 2, pid: 1, name: "child" },
];
const tree = array2tree(flatArray);
```

#### `treeMap<T>(tree?: T[], cbk?: FilterCbk): any`

递归映射树结构，对每个节点应用回调函数。

```ts
const newTree = treeMap(tree, (node) => ({ ...node, processed: true }));
```

#### `getFirstLeafNode<T>(nodes: TreeNode<T>[]): T | TreeNode<T> | undefined`

获取树结构中的第一个叶节点。

```ts
const firstLeaf = getFirstLeafNode(treeNodes);
```

#### `getAllLeafNodes<T>(nodes: TreeNode<T>[]): (T | TreeNode<T>)[]`

获取树结构中所有叶节点。

```ts
const allLeaves = getAllLeafNodes(treeNodes);
```

### 路由工具

#### `mergeRouteModules(routeModules: Record<string, unknown>): RouteRecordRaw[]`

合并动态路由模块的默认导出，用于 Vue Router。

```ts
const modules = import.meta.glob('./routes/*.ts', { eager: true });
const routes = mergeRouteModules(modules);
```

### 类型定义