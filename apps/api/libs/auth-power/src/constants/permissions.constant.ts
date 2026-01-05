import { SYS_PERMISSIONS } from './sys'

/**
 * 系统模块权限前缀
 */
export const Permission = {
  SYSTEM: SYS_PERMISSIONS,
} as const

/**
 * 判断一个权限是否在权限组中。
 * @param permission 需要判断的权限
 * @param permissions 需要判断的权限组
 */
export const hasPermission = (permission: string, permissions: string[]) => {

}

/**
 * 权限操作类型
 * 配合权限前缀使用，通过 AuthPowerEnum 定义
 */
export enum PermissionAction {
  /**
   * 获取详情
   */
  get = 'get',

  /**
   * 获取列表
   */
  list = 'list',

  /**
   * 创建
   */
  create = 'create',

  /**
   * 更新
   */
  update = 'update',

  /**
   * 删除
   */
  delete = 'delete',

  /**
   * 导出
   */
  export = 'export',

  /**
   * 导入
   */
  import = 'import',

  /**
   * 自定义操作
   */
  custom = 'custom',
}
