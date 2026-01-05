import { ApiField } from '@app/api-kit'
import { SysUserModel } from '@app/prisma'

export class AuthUserDto extends SysUserModel {
  @ApiField({ description: 'token', required: true })
  token: string
}
