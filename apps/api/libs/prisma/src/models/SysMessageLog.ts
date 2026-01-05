import type { SysMessageLog } from '@repo/database'
import type { SysMessageModel } from './SysMessage'
import type { SysUserModel } from './SysUser'
import { ApiField } from '@app/api-kit'

export class SysMessageLogModel implements SysMessageLog {
  @ApiField({ description: '消息ID', type: BigInt, required: true })
  messageId: bigint

  @ApiField({ description: '用户ID', type: BigInt, required: true })
  userId: bigint

  @ApiField({ description: '读取时间', type: Date, nullable: true })
  readTime: Date | null

  message?: SysMessageModel

  user?: SysUserModel
}
