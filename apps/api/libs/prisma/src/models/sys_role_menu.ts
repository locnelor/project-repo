import { sys_role_menu } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysRoleModel } from './sys_role';
import { SysMenuModel } from './sys_menu';

export class SysRoleMenuModel implements sys_role_menu {
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

  @ApiField({ description: '菜单id', type: String, nullable: true })
  menu_id: string | null;

  role?: SysRoleModel;

  menu?: SysMenuModel;
}
