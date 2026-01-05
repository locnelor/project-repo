import type { ApiAuthConfig, ApiPermissionsConfig } from './api.auth.decorator'
import { applyDecorators, Controller, SetMetadata } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AUTH_CONFIG_KEY, PERMISSIONS_CONFIG_KEY } from './api.auth.decorator'

export interface AuthControllerOptions {
  url?: string
  perms?: string
  tag?: string
  /** 鉴权配置 */
  auth?: ApiAuthConfig
  /** 权限配置 */
  permissions?: ApiPermissionsConfig
}
/**
 * 认证控制器装饰器
 * 用于定义带有权限控制和API文档标签的控制器
 * @param options - 控制器配置选项
 * @param options.url - 控制器路由前缀，默认为空字符串
 * @param options.perms - 权限前缀，默认根据url自动生成.例如 "/sys/user" 会生成 "sys:user"
 * @param options.tag - Swagger API标签，默认为"default"
 * @param options.auth - 鉴权配置，控制是否需要鉴权
 * @param options.permissions - 权限配置，控制权限检查行为
 * @returns 组合装饰器，包含Controller、ApiTags和SetMetadata
 * @example
 * ```typescript
 * @AuthController({
 *   url: '/users',
 *   perms: 'user',
 *   tag: 'User Management',
 *   auth: { required: true },
 *   permissions: { ignore: false }
 * })
 * export class UserController {}
 * ```
 */
export const AuthController = (options: AuthControllerOptions = {}) => {
  const url = options.url ?? ''

  const normalizePrefix = (url: string): string => {
    return url
      .trim()
      .replace(/^\/+/, '') // removes leading "/"
      .replace(/\/+$/, '') // removes trailing "/"
      .replace(/^api\//i, '') // case-insensitive "api/"
      .replace(/\/:/g, '/') // fix "/:id"
      .replace(/:.*$/, '') // remove path params
      .toLowerCase()
      .replace(/\//g, ':') || 'default'
  }

  const prefix = (options.perms && options.perms.trim()) || normalizePrefix(url)
  const tag = options.tag || 'default'

  return function (target: any) {
    // 先存储所有controller相关的元数据
    Reflect.defineMetadata('prefix', prefix, target)
    Reflect.defineMetadata('controller:url', url, target)
    Reflect.defineMetadata('controller:tag', tag, target)

    // 存储鉴权和权限配置
    if (options.auth) {
      Reflect.defineMetadata(AUTH_CONFIG_KEY, options.auth, target)
    }
    if (options.permissions) {
      Reflect.defineMetadata(PERMISSIONS_CONFIG_KEY, options.permissions, target)
    }

    // 然后应用其他装饰器
    const decorators = applyDecorators(
      Controller(url),
      ApiTags(tag),
    )

    decorators(target)
  }
}
