import { SysRoleDept } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysRoleModel } from './SysRole';
import { SysDeptModel } from './SysDept';

export class SysRoleDeptModel implements SysRoleDept {
  @ApiField({ description: '角色ID', required: true })
  roleId: bigint;

  @ApiField({ description: '部门ID', required: true })
  deptId: bigint;

  role?: SysRoleModel;

  dept?: SysDeptModel;
}
