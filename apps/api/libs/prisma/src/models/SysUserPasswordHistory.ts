import { SysUserPasswordHistory } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysUserModel } from './SysUser';

export class SysUserPasswordHistoryModel implements SysUserPasswordHistory {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '用户ID', required: true })
  userId: bigint;

  @ApiField({ description: '密码', type: String, required: true })
  password: string;

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date;

  user?: SysUserModel;
}
