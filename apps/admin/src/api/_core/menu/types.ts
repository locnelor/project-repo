export interface SysMenuVO {
  /**
   * 是否显示面包屑
   */
  breadCrumb?: boolean;
  /**
   * 颜色
   */
  color?: string;
  /**
   * 组件名称
   */
  componentName?: string;
  /**
   * 组件路径
   */
  componentPath?: string;
  /**
   * 数据权限接口追踪地址
   * 数据权限接口追踪地址（分隔符//）
   */
  dataAuthApiClueAddress?: string;
  /**
   * 是否显示
   */
  display?: boolean;
  /**
   * 菜单图标
   */
  icon?: string;
  /**
   * id
   */
  id?: string;
  /**
   * 模式: pc, app
   */
  mode?: string;
  /**
   * 菜单名称
   */
  name?: string;
  /**
   * 排序
   */
  orderNum?: number;
  /**
   * 授权(多个用逗号分隔，如：user:list,user:create)
   */
  perms?: string;
  /**
   * 父菜单ID，一级菜单为0
   */
  pid?: string;
  /**
   * 路由地址
   */
  routeUrl?: string;
  /**
   * 类型   0：目录   1：菜单   2：按钮
   */
  type?: number;
  /**
   * 菜单URL
   */
  url?: string;
  [property: string]: any;
}
