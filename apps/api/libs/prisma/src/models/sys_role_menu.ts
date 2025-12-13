import { sys_role_menu } from '@repo/database';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SysRoleMenuModel implements sys_role_menu {
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
  @ApiProperty({description:'',required:false})
  @Expose()
  role_id: string;
  @ApiProperty({description:'',required:false})
  @Expose()
  menu_id: string;
}
