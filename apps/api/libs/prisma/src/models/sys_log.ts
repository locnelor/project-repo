import { sys_log } from '@repo/database';
import { log_type } from '@repo/database';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

/** 日志表 */
export class SysLogModel implements sys_log {
  @ApiProperty({description:''})
  @Expose()
  id: string;
  
  @ApiProperty({description:''})
  @Expose()
  create_time: Date;
  
  @ApiProperty({description:'请求唯一码',required:false})
  @Expose()
  request_unique: string;
  
  @ApiProperty({description:'日志描述',required:false})
  @Expose()
  description: string;
  
  @ApiProperty({description:'日志类型',required:false})
  @Expose()
  log_type: log_type;
  
  @ApiProperty({description:'请求方法',required:false})
  @Expose()
  method: string;
  
  @ApiProperty({description:'请求参数',required:false})
  @Expose()
  params: string;
  
  @ApiProperty({description:'请求IP',required:false})
  @Expose()
  request_ip: string;
  
  @ApiProperty({description:'耗时',required:false})
  @Expose()
  time: bigint;
  
  @ApiProperty({description:'用户ID',required:false})
  @Expose()
  user_id: string;
  
  @ApiProperty({description:'用户名称',required:false})
  @Expose()
  user_name: string;
  
  @ApiProperty({description:'地址',required:false})
  @Expose()
  address: string;
  
  @ApiProperty({description:'异常信息',required:false})
  @Expose()
  exception_detail: string;
}
