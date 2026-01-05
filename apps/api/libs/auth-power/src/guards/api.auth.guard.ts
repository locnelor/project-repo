import type { CanActivate, ExecutionContext } from '@nestjs/common'
import type { Reflector } from '@nestjs/core'
import type { ApiAuthConfig, ApiPermissionsConfig } from '../decorators/api.auth.decorator'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AUTH_CONFIG_KEY, PERMISSIONS_CONFIG_KEY } from '../decorators/api.auth.decorator'
/**
 * API 鉴权 Guard
 * 负责处理接口的鉴权和权限检查
 */
@Injectable()
export class ApiAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const handler = context.getHandler()
    const controller = context.getClass()
    const request = context.switchToHttp().getRequest()

    // 获取鉴权配置（方法级优先于控制器级）
    const authConfig = this.reflector.getAllAndOverride<ApiAuthConfig>(AUTH_CONFIG_KEY, [
      handler,
      controller,
    ])

    // 获取权限配置（方法级优先于控制器级）
    const permissionsConfig = this.reflector.getAllAndOverride<ApiPermissionsConfig>(PERMISSIONS_CONFIG_KEY, [
      handler,
      controller,
    ])
    // 判断是否需要鉴权
    const authRequired = this.isAuthRequired(authConfig)
    // return true;

    if (!authRequired) {
      // 不需要鉴权，直接通过
      return true
    }

    // 检查用户是否已登录
    const user = request.user
    if (!user) {
      // throw new UnauthorizedException('未登录或登录已过期');
    }

    // 判断是否需要权限检查
    const permissionsRequired = this.getRequiredPermissions(permissionsConfig)
    console.log(permissionsConfig, permissionsRequired, '---')
    if (!permissionsRequired || permissionsRequired.length === 0) {
      // 不需要权限检查，直接通过
      return true
    }

    // 检查用户是否拥有所需权限
    const hasPermission = this.checkPermissions(user, permissionsRequired)

    if (!hasPermission) {
      throw new UnauthorizedException('权限不足')
    }

    return true
  }

  /**
   * 判断是否需要鉴权
   * 优先级：auth.required > auth.ignore > authIgnore > 默认(true)
   */
  private isAuthRequired(config?: ApiAuthConfig): boolean {
    if (!config) {
      return true // 默认需要鉴权
    }

    // auth.required 优先级最高
    if (config.required !== undefined) {
      return config.required
    }

    // auth.ignore 次之
    if (config.ignore !== undefined) {
      return !config.ignore
    }

    // authIgnore 兼容旧版本
    if ((config as any).authIgnore !== undefined) {
      return !(config as any).authIgnore
    }

    return true // 默认需要鉴权
  }

  /**
   * 获取需要的权限列表
   */
  private getRequiredPermissions(config?: ApiPermissionsConfig): string[] | null {
    if (!config) {
      return null
    }

    // 如果明确忽略权限检查
    if (config.ignore) {
      return null
    }

    return config.permissions || null
  }

  /**
   * 检查用户是否拥有所需权限
   */
  private checkPermissions(user: any, requiredPermissions: string[]): boolean {
    if (!user || !user.permissions) {
      return false
    }

    const userPermissions: string[] = user.permissions || []

    // 超级管理员拥有所有权限
    if (userPermissions.includes('*:*:*')) {
      return true
    }

    // 检查是否拥有所有必需的权限
    return requiredPermissions.every((permission) =>
      userPermissions.includes(permission),
    )
  }
}
