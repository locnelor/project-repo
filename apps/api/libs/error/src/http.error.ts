// 导入所需的NestJS异常类
import {
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common'

// 账号相关错误
export const AccountNotExistError = new UnauthorizedException(
  '账号不存在或已被禁用',
)
export const AccountOrPasswordError = new UnauthorizedException(
  '账号或密码错误',
)
export const AccountExistError = new ConflictException('账号已存在')

// 用户信息相关错误
export const EmailExistError = new ConflictException('邮箱已存在')
export const PhoneExistError = new ConflictException('手机号已存在')

// 认证相关错误
export const InvalidRefreshTokenError = new UnauthorizedException(
  '刷新令牌无效',
)
