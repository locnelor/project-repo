import { log_type, sys_log } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysUserModel } from './sys_user';

export class SysLogModel implements sys_log {
  @ApiField({ description: '主键ID', type: String, required: true })
  id: string;

  @ApiField({ description: '创建时间', type: Date, required: true })
  create_time: Date;

  @ApiField({ description: '请求唯一码', type: String, nullable: true })
  request_unique: string | null;

  @ApiField({ description: '日志描述', type: String, nullable: true })
  description: string | null;

  @ApiField({ description: '日志类型', nullable: true, enum: log_type })
  log_type: log_type | null;

  @ApiField({ description: '请求方法', type: String, nullable: true })
  method: string | null;

  @ApiField({ description: '请求参数', type: String, nullable: true })
  params: string | null;

  @ApiField({ description: '请求IP', type: String, nullable: true })
  request_ip: string | null;

  @ApiField({ description: '耗时', nullable: true })
  time: bigint | null;

  @ApiField({ description: '用户ID', type: String, nullable: true })
  user_id: string | null;

  @ApiField({ description: '用户名称', type: String, nullable: true })
  user_name: string | null;

  @ApiField({ description: '地址', type: String, nullable: true })
  address: string | null;

  @ApiField({ description: '异常信息', type: String, nullable: true })
  exception_detail: string | null;

  user?: SysUserModel;
}
