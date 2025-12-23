import { sys_user } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysLogModel } from './sys_log';
import { SysDeptModel } from './sys_dept';
import { SysRoleUserModel } from './sys_role_user';

export class SysUserModel implements sys_user {
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

  @ApiField({ description: '用户名', type: String, required: true })
  username: string;

  @ApiField({ description: '密码', type: String, nullable: true })
  password: string | null;

  @ApiField({ description: '昵称', type: String, nullable: true })
  nickname: string | null;

  @ApiField({ description: '真实姓名', type: String, nullable: true })
  real_name: string | null;

  @ApiField({ description: '邮箱', type: String, nullable: true })
  email: string | null;

  @ApiField({ description: '手机号', type: String, nullable: true })
  phone: string | null;

  @ApiField({ description: '工号', type: String, nullable: true })
  job_no: string | null;

  logs?: SysLogModel[];

  dept?: SysDeptModel;

  @ApiField({ description: '', type: String, nullable: true })
  dept_id: string | null;

  sysRoleUsers?: SysRoleUserModel[];
}
