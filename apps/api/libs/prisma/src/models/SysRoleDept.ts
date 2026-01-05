import type { SysRoleDept } from '@repo/database'
import type { SysDeptModel } from './SysDept'
import type { SysRoleModel } from './SysRole'
import { ApiField } from '@app/api-kit'

export class SysRoleDeptModel implements SysRoleDept {
  @ApiField({ description: '角色ID', type: BigInt, required: true })
  roleId: bigint

  @ApiField({ description: '部门ID', type: BigInt, required: true })
  deptId: bigint

  role?: SysRoleModel

  dept?: SysDeptModel
}
