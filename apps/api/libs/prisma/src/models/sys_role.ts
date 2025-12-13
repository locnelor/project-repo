import { sys_role } from '@repo/database';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SysRoleModel implements sys_role {
  @ApiProperty({description:''})
  @Expose()
  id: string;
  @ApiProperty({description:'',required:false})
  @Expose()
  create_time: Date;
  @ApiProperty({description:'',required:false})
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
  @ApiProperty({description:'角色名称',required:false})
  @Expose()
  name: string;
  @ApiProperty({description:'角色描述',required:false})
  @Expose()
  description: string;
}
