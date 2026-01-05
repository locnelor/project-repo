import type { SysUserRole } from '@repo/database'
import type { SysRoleModel } from './SysRole'
import type { SysUserModel } from './SysUser'
import { ApiField } from '@app/api-kit'

export class SysUserRoleModel implements SysUserRole {
  @ApiField({ description: '主键ID', type: BigInt, required: true })
  id: bigint

  @ApiField({ description: '用户ID', type: BigInt, required: true })
  userId: bigint

  @ApiField({ description: '角色ID', type: BigInt, required: true })
  roleId: bigint

  user?: SysUserModel

  role?: SysRoleModel
}
