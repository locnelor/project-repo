import { SysUser } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysDeptModel } from './SysDept';
import { SysUserRoleModel } from './SysUserRole';
import { SysUserSocialModel } from './SysUserSocial';
import { SysUserPasswordHistoryModel } from './SysUserPasswordHistory';
import { SysMessageLogModel } from './SysMessageLog';
import { SysNoticeLogModel } from './SysNoticeLog';

export class SysUserModel implements SysUser {
  @ApiField({ description: '主键ID', type: BigInt, required: true })
  id: bigint;

  @ApiField({ description: '创建人', type: BigInt, nullable: true })
  createUser: bigint | null;

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date;

  @ApiField({ description: '修改人', type: BigInt, nullable: true })
  updateUser: bigint | null;

  @ApiField({ description: '修改时间', type: Date, nullable: true })
  updateTime: Date | null;

  @ApiField({ description: '是否已删除', type: BigInt, required: true })
  deleted: bigint;

  @ApiField({ description: '用户名', type: String, required: true })
  username: string;

  @ApiField({ description: '昵称', type: String, required: true })
  nickname: string;

  @ApiField({ description: '密码', type: String, nullable: true })
  password: string | null;

  @ApiField({ description: '性别（0：未知；1：男；2：女）', type: Number, required: true })
  gender: number;

  @ApiField({ description: '邮箱', type: String, nullable: true })
  email: string | null;

  @ApiField({ description: '手机号码', type: String, nullable: true })
  phone: string | null;

  @ApiField({ description: '头像', type: String, nullable: true })
  avatar: string | null;

  @ApiField({ description: '描述', type: String, nullable: true })
  description: string | null;

  @ApiField({ description: '状态（1：启用；2：禁用）', type: Number, required: true })
  status: number;

  @ApiField({ description: '是否为系统内置数据', type: Boolean, required: true })
  isSystem: boolean;

  @ApiField({ description: '最后一次修改密码时间', type: Date, nullable: true })
  pwdResetTime: Date | null;

  @ApiField({ description: '部门ID', type: BigInt, required: true })
  deptId: bigint;

  dept?: SysDeptModel;

  roles?: SysUserRoleModel[];

  socials?: SysUserSocialModel[];

  passwordHistory?: SysUserPasswordHistoryModel[];

  messageLogs?: SysMessageLogModel[];

  noticeLogs?: SysNoticeLogModel[];
}
