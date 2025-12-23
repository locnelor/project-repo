import { sys_role_user } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysRoleModel } from './sys_role';
import { SysUserModel } from './sys_user';

export class SysRoleUserModel implements sys_role_user {
  @ApiField({ description: '主键ID', type: String, required: true })
  id: string;

  @ApiField({ description: '创建人', type: String, nullable: true })
  create_by: string | null;

  @ApiField({ description: '创建时间', type: Date, nullable: true })
  create_time: Date | null;

  @ApiField({ description: '是否已删除', type: Boolean, required: true })
  deleted: boolean;

  @ApiField({ description: '角色id', type: String, nullable: true })
  role_id: string | null;

  @ApiField({ description: '用户id', type: String, nullable: true })
  user_id: string | null;

  role?: SysRoleModel;

  user?: SysUserModel;
}
