/**
 * 将数组转换为树形结构
 * @param array 要转换的数组
 * @param options 配置选项
 * @returns 树形结构数组
 */
export function arrayToTree(
  array: any[],
  options: {
    id?: string;
    parentId?: string;
    children?: string;
  } = {}
): any[] {
  const { id = 'id', parentId = 'parentId', children = 'children' } = options;
  
  if (!Array.isArray(array)) {
    return [];
  }

  // 创建映射表
  const map = new Map();
  const result: any[] = [];

  // 第一遍遍历，创建所有节点的映射
  array.forEach(item => {
    map.set(item[id], { ...item, [children]: [] });
  });

  // 第二遍遍历，建立父子关系
  array.forEach(item => {
    const node = map.get(item[id]);
    const parent = map.get(item[parentId]);
    
    if (parent) {
      // 有父节点，添加到父节点的children中
      parent[children].push(node);
    } else {
      // 没有父节点，是根节点
      result.push(node);
    }
  });

  return result;
}