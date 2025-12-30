import { SysDept } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysRoleDeptModel } from './SysRoleDept';
import { SysUserModel } from './SysUser';

export class SysDeptModel implements SysDept {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '名称', type: String, required: true })
  name: string;

  @ApiField({ description: '上级部门ID', required: true })
  parentId: bigint;

  @ApiField({ description: '祖级列表', type: String, required: true })
  ancestors: string;

  @ApiField({ description: '描述', type: String, nullable: true })
  description: string | null;

  @ApiField({ description: '排序', type: Number, required: true })
  sort: number;

  @ApiField({ description: '状态（1：启用；2：禁用）', type: Number, required: true })
  status: number;

  @ApiField({ description: '是否为系统内置数据', type: Boolean, required: true })
  isSystem: boolean;

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

  roles?: SysRoleDeptModel[];

  users?: SysUserModel[];
}
