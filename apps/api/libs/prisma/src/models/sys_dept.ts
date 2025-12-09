import { sys_dept } from '@repo/database';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

/** 部门表 */
export class SysDeptModel implements sys_dept {
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
  create_by?: string;
  @ApiProperty({description:'',required:false})
  @Expose()
  update_by?: string;
  @ApiProperty({description:''})
  @Expose()
  deleted: boolean;
  @ApiProperty({description:'PID',required:false})
  @Expose()
  pid?: string;
  @ApiProperty({description:'部门名称'})
  @Expose()
  name: string;
  @ApiProperty({description:'是否显示'})
  @Expose()
  display: boolean;
  @ApiProperty({description:'排序'})
  @Expose()
  sort: number;
}
