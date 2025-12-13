import { sys_user } from '@repo/database';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

/** 用户表 */
export class SysUserModel implements sys_user {
  @ApiProperty({description:''})
  @Expose()
  id: string;
  @ApiProperty({description:''})
  @Expose()
  create_time: Date;
  @ApiProperty({description:''})
  @Expose()
  update_time: Date;
  @ApiProperty({description:'',required:false})
  @Expose()
  create_by: string;
  @ApiProperty({description:'',required:false})
  @Expose()
  update_by: string;
  @ApiProperty({description:''})
  @Expose()
  deleted: boolean;
  @ApiProperty({description:'用户名'})
  @Expose()
  username: string;
  @ApiProperty({description:'密码',required:false})
  @Expose()
  password: string;
  @ApiProperty({description:'昵称',required:false})
  @Expose()
  nickname: string;
  @ApiProperty({description:'真实姓名',required:false})
  @Expose()
  real_name: string;
  @ApiProperty({description:'邮箱',required:false})
  @Expose()
  email: string;
  @ApiProperty({description:'手机号',required:false})
  @Expose()
  phone: string;
  @ApiProperty({description:'工号',required:false})
  @Expose()
  job_no: string;
  @ApiProperty({description:'',required:false})
  @Expose()
  dept_id: string;
}
