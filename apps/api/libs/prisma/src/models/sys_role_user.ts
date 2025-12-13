import { sys_role_user } from '@repo/database';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SysRoleUserModel implements sys_role_user {
  @ApiProperty({description:''})
  @Expose()
  id: string;
  @ApiProperty({description:'',required:false})
  @Expose()
  create_by: string;
  @ApiProperty({description:'',required:false})
  @Expose()
  create_time: Date;
  @ApiProperty({description:''})
  @Expose()
  deleted: boolean;
  @ApiProperty({description:'角色id',required:false})
  @Expose()
  role_id: string;
  @ApiProperty({description:'用户id',required:false})
  @Expose()
  user_id: string;
}
