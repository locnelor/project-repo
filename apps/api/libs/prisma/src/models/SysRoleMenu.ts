import { SysRoleMenu } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysRoleModel } from './SysRole';
import { SysMenuModel } from './SysMenu';

export class SysRoleMenuModel implements SysRoleMenu {
  @ApiField({ description: '角色ID', required: true })
  roleId: bigint;

  @ApiField({ description: '菜单ID', required: true })
  menuId: bigint;

  role?: SysRoleModel;

  menu?: SysMenuModel;
}
