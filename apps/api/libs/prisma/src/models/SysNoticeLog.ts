import { SysNoticeLog } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysNoticeModel } from './SysNotice';
import { SysUserModel } from './SysUser';

export class SysNoticeLogModel implements SysNoticeLog {
  @ApiField({ description: '公告ID', type: BigInt, required: true })
  noticeId: bigint;

  @ApiField({ description: '用户ID', type: BigInt, required: true })
  userId: bigint;

  @ApiField({ description: '读取时间', type: Date, nullable: true })
  readTime: Date | null;

  notice?: SysNoticeModel;

  user?: SysUserModel;
}
