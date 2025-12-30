import { SysMessageLog } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysMessageModel } from './SysMessage';
import { SysUserModel } from './SysUser';

export class SysMessageLogModel implements SysMessageLog {
  @ApiField({ description: '消息ID', required: true })
  messageId: bigint;

  @ApiField({ description: '用户ID', required: true })
  userId: bigint;

  @ApiField({ description: '读取时间', type: Date, nullable: true })
  readTime: Date | null;

  message?: SysMessageModel;

  user?: SysUserModel;
}
