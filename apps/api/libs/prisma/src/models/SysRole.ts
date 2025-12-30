import { SysRole } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysUserRoleModel } from './SysUserRole';
import { SysRoleMenuModel } from './SysRoleMenu';
import { SysRoleDeptModel } from './SysRoleDept';

export class SysRoleModel implements SysRole {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '名称', type: String, required: true })
  name: string;

  @ApiField({ description: '编码', type: String, required: true })
  code: string;

  @ApiField({ description: '数据权限（1：全部数据权限；2：本部门及以下数据权限；3：本部门数据权限；4：仅本人数据权限；5：自定义数据权限）', type: Number, required: true })
  dataScope: number;

  @ApiField({ description: '描述', type: String, nullable: true })
  description: string | null;

  @ApiField({ description: '排序', type: Number, required: true })
  sort: number;

  @ApiField({ description: '是否为系统内置数据', type: Boolean, required: true })
  isSystem: boolean;

  @ApiField({ description: '菜单选择是否父子节点关联', type: Boolean, nullable: true })
  menuCheckStrictly: boolean | null;

  @ApiField({ description: '部门选择是否父子节点关联', type: Boolean, nullable: true })
  deptCheckStrictly: boolean | null;

  @ApiField({ description: '创建人', required: true })
  createUser: bigint;

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date;

  @ApiField({ description: '修改人', nullable: true })
  updateUser: bigint | null;

  @ApiField({ description: '修改时间', type: Date, nullable: true })
  updateTime: Date | null;

  @ApiField({ description: '是否已删除', required: true })
  deleted: bigint;

  users?: SysUserRoleModel[];

  menus?: SysRoleMenuModel[];

  depts?: SysRoleDeptModel[];
}
