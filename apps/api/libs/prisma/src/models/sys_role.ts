import { sys_role } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysRoleMenuModel } from './sys_role_menu';
import { SysRoleUserModel } from './sys_role_user';

export class SysRoleModel implements sys_role {
  @ApiField({ description: '主键ID', type: String, required: true })
  id: string;

  @ApiField({ description: '创建时间', type: Date, nullable: true })
  create_time: Date | null;

  @ApiField({ description: '修改时间', type: Date, nullable: true })
  update_time: Date | null;

  @ApiField({ description: '创建人', type: String, nullable: true })
  create_by: string | null;

  @ApiField({ description: '修改人', type: String, nullable: true })
  update_by: string | null;

  @ApiField({ description: '是否已删除', type: Boolean, required: true })
  deleted: boolean;

  @ApiField({ description: '角色名称', type: String, nullable: true })
  name: string | null;

  @ApiField({ description: '角色描述', type: String, nullable: true })
  description: string | null;

  menus?: SysRoleMenuModel[];

  users?: SysRoleUserModel[];
}
