import { sys_dept } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysUserModel } from './sys_user';

export class SysDeptModel implements sys_dept {
  @ApiField({ description: '主键ID', type: String, required: true })
  id: string;

  @ApiField({ description: '创建时间', type: Date, required: true })
  create_time: Date;

  @ApiField({ description: '修改时间', type: Date, required: true })
  update_time: Date;

  @ApiField({ description: '创建人', type: String, nullable: true })
  create_by: string | null;

  @ApiField({ description: '修改人', type: String, nullable: true })
  update_by: string | null;

  @ApiField({ description: '是否已删除', type: Boolean, required: true })
  deleted: boolean;

  @ApiField({ description: 'PID', type: String, nullable: true })
  pid: string | null;

  @ApiField({ description: '部门名称', type: String, required: true })
  name: string;

  @ApiField({ description: '是否显示', type: Boolean, required: true })
  display: boolean;

  @ApiField({ description: '排序', type: Number, required: true })
  sort: number;

  parent?: SysDeptModel;

  children?: SysDeptModel[];

  users?: SysUserModel[];
}
