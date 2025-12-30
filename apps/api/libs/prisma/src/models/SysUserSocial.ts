import { SysUserSocial } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysUserModel } from './SysUser';

export class SysUserSocialModel implements SysUserSocial {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '来源', type: String, required: true })
  source: string;

  @ApiField({ description: '开放ID', type: String, required: true })
  openId: string;

  @ApiField({ description: '用户ID', required: true })
  userId: bigint;

  @ApiField({ description: '附加信息', type: String, nullable: true })
  metaJson: string | null;

  @ApiField({ description: '最后登录时间', type: Date, nullable: true })
  lastLoginTime: Date | null;

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date;

  @ApiField({ description: '修改时间', type: Date, nullable: true })
  updateTime: Date | null;

  @ApiField({ description: '是否已删除', required: true })
  deleted: bigint;

  user?: SysUserModel;
}
