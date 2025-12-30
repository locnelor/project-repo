import { SysUserRole } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysUserModel } from './SysUser';
import { SysRoleModel } from './SysRole';

export class SysUserRoleModel implements SysUserRole {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '用户ID', required: true })
  userId: bigint;

  @ApiField({ description: '角色ID', required: true })
  roleId: bigint;

  user?: SysUserModel;

  role?: SysRoleModel;
}
