/**
 * 权限常量定义
 * 用于统一管理系统中所有的权限前缀
 * 
 * 权限格式：模块:资源:操作
 * 例如：sys:menu:add, sys:user:update
 */

import { SYS_PERMISSIONS } from "./sys";

/**
 * 系统模块权限前缀
 */
export const PERMISSIONS = {
    SYSTEM: SYS_PERMISSIONS
} as const;



/**
 * 判断一个权限是否在权限组中。
 * @param permission 需要判断的权限
 * @param permissions 需要判断的权限组
 */
export const hasPermission = (permission: string, permissions: string[]) => {

}
/**
 * 
 * 一个用户所拥有的权限：
 * [
 * a:b:c, // 表示一个功能
 * a:*,c, // 表示a模块下的所有模块拥有c功能
 * a:b:* // 表示a模块下的b模块的所有c功能
 * *:b:c // 表示所有权限都有b模块的c功能
 * *:*,c // 表示所有权限都有c功能
 * *:*:* // 表示所有权限都有所有功能
 * * 表示所有功能
 * ]
 * 
 * 需要判断的权限:
 * [
 * a,b,c
 * &
 * a1,b1,c1
 * ]
 * 
 * 
 * 
 * 
 * 
 * 
 */




/**
 * 权限操作类型
 * 配合权限前缀使用，通过 AuthPowerEnum 定义
 */
export enum PermissionAction {
    ALL = 'all', //全部
    QUERY = 'query', //查询
    ADD = 'add', //添加
    UPDATE = 'update', //更新
    CHANGE = 'change', //变更
    DELETE = 'delete', //删除
    EXPORT = 'export', //导出
    IMPORT = 'import', //导入
    STATISTIC = 'statistic', //统计
    EXPORT_TEMPLATE = 'export_template', //导出模板
    CUSTOM = 'custom', //自定义
}