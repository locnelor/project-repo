import { PermissionMetaKey, IgnorePermissionMetaKey, PermissionAction } from "@app/auth-power/constants";
import { SetMetadata } from "@nestjs/common";


export interface PermissionMeta {
    /**
     * 权限列表
     */
    permissions: string | string[];

    /**
     * 是否要求所有权限都符合，默认false
     */
    requireAll: boolean;
}
/**
 * 权限校验装饰器
 * 用于检查当前用户是否有指定权限
 * @param permissions 权限列表
 * @Param requireAll 是否要求所有权限都符合，默认false
 */
export const CheckPermission = (permissions: string | string[], requireAll: boolean = false) => {
    return SetMetadata(PermissionMetaKey, { permissions, requireAll });
}

/**
 * 操作权限校验装饰器
 * 用于检查当前用户是否有指定操作权限
 * @param action 操作权限
 */
export const ActionPermission = (action: PermissionAction) => SetMetadata(PermissionMetaKey, action);

/**
 * 忽略权限校验装饰器
 * 用于标记一个方法或控制器，忽略权限校验
 */
export const IgnorePermission = () => SetMetadata(IgnorePermissionMetaKey, true);


export const CheckRole = (roles: string | string[], requireAll: boolean = false) => {
    return SetMetadata(PermissionMetaKey, { permissions: roles, requireAll });
}