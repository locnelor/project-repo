import type { SysRoleMenu } from '@repo/database'
import type { SysMenuModel } from './SysMenu'
import type { SysRoleModel } from './SysRole'
import { ApiField } from '@app/api-kit'

export class SysRoleMenuModel implements SysRoleMenu {
  @ApiField({ description: '角色ID', type: BigInt, required: true })
  roleId: bigint

  @ApiField({ description: '菜单ID', type: BigInt, required: true })
  menuId: bigint

  role?: SysRoleModel

  menu?: SysMenuModel
}
