import type { CanActivate } from '@nestjs/common'
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { ApiAuthGuard } from '../guards'

/**
 * 鉴权配置接口
 */
export interface ApiAuthConfig {
  /** 是否需要鉴权，默认 true */
  required?: boolean
  /** 是否忽略鉴权，优先级低于 required */
  ignore?: boolean
  /** 兼容旧版本：是否忽略鉴权 */
  authIgnore?: boolean
  /** 自定义 Guard 列表 */
  // eslint-disable-next-line ts/no-unsafe-function-type
  guards?: (Function | CanActivate)[]
}

/**
 * 权限配置接口
 */
export interface ApiPermissionsConfig {
  /** 需要的权限列表 */
  permissions?: string[]
  /** 是否忽略权限检查 */
  ignore?: boolean
}

/**
 * 鉴权配置元数据键
 */
export const AUTH_CONFIG_KEY = 'auth:config'

/**
 * 权限配置元数据键
 */
export const PERMISSIONS_CONFIG_KEY = 'permissions:config'

/**
 * API 鉴权装饰器
 * 用于配置接口的鉴权行为，自动注册 ApiAuthGuard
 *
 * @param config 鉴权配置
 * @example
 * ```typescript
 * // 需要鉴权（默认）
 * @ApiAuth({ required: true })
 *
 * // 忽略鉴权
 * @ApiAuth({ ignore: true })
 * // 或者
 * @ApiAuth({ authIgnore: true })
 * // 或者
 * @ApiAuth({ required: false })
 *
 * // 使用自定义 Guard
 * @ApiAuth({
 *   required: true,
 *   guards: [JwtAuthGuard, CustomGuard]
 * })
 * ```
 */
export const ApiAuth = (config: ApiAuthConfig = {}) => {
  // 延迟加载 ApiAuthGuard 以避免循环依赖
  const guards = config.guards || []

  // 如果需要鉴权，自动添加 ApiAuthGuard
  const shouldAuth = config.required !== false && !config.ignore && !config.authIgnore

  if (shouldAuth) {
    guards.unshift(ApiAuthGuard)
    // 延迟导入 Guard 以避免循环依赖
    // const ApiAuthGuard = require('../guards/api-auth.guard').ApiAuthGuard;
    // guards.unshift(ApiAuthGuard);
  }

  return applyDecorators(
    SetMetadata(AUTH_CONFIG_KEY, config),
    ...(guards.length > 0 ? [UseGuards(...guards)] : []),
  )
}

/**
 * API 权限装饰器
 * 用于配置接口的权限要求
 *
 * @param config 权限配置
 * @example
 * ```typescript
 * // 需要特定权限
 * @ApiPermissions({ permissions: ['sys:user:add'] })
 *
 * // 忽略权限检查
 * @ApiPermissions({ ignore: true })
 *
 * // 需要多个权限
 * @ApiPermissions({ permissions: ['sys:user:add', 'sys:user:update'] })
 * ```
 */
export const ApiPermissions = (config: ApiPermissionsConfig = {}) => {
  return SetMetadata(PERMISSIONS_CONFIG_KEY, config)
}

/**
 * 便捷装饰器：公开接口（无需鉴权）
 */
export const PublicApi = () => ApiAuth({ ignore: true })

/**
 * 便捷装饰器：忽略权限检查（但仍需鉴权）
 */
export const IgnorePermissions = () => ApiPermissions({ ignore: true })
