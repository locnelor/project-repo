
import { SYS_PERMISSIONS } from "./sys";
































/**
 * 系统模块权限前缀
 */
export const Permission = {
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