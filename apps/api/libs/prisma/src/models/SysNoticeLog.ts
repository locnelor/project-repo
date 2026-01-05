import type { SysNoticeLog } from '@repo/database'
import type { SysNoticeModel } from './SysNotice'
import type { SysUserModel } from './SysUser'
import { ApiField } from '@app/api-kit'

export class SysNoticeLogModel implements SysNoticeLog {
  @ApiField({ description: '公告ID', type: BigInt, required: true })
  noticeId: bigint

  @ApiField({ description: '用户ID', type: BigInt, required: true })
  userId: bigint

  @ApiField({ description: '读取时间', type: Date, nullable: true })
  readTime: Date | null

  notice?: SysNoticeModel

  user?: SysUserModel
}
