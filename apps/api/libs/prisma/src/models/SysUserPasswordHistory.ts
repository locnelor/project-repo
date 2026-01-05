import type { SysUserPasswordHistory } from '@repo/database'
import type { SysUserModel } from './SysUser'
import { ApiField } from '@app/api-kit'

export class SysUserPasswordHistoryModel implements SysUserPasswordHistory {
  @ApiField({ description: '主键ID', type: BigInt, required: true })
  id: bigint

  @ApiField({ description: '用户ID', type: BigInt, required: true })
  userId: bigint

  @ApiField({ description: '密码', type: String, required: true })
  password: string

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date

  user?: SysUserModel
}
