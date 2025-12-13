import { sys_file } from '@repo/database';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SysFileModel implements sys_file {
  @ApiProperty({ description: '' })
  @Expose()
  id: string;
  
  @ApiProperty({ description: '', required: false })
  @Expose()
  create_by: string;
  
  @ApiProperty({ description: '', required: false })
  @Expose()
  create_time: Date;
  
  @ApiProperty({ description: '文件名称' })
  @Expose()
  name: string;
  
  @ApiProperty({ description: '文件存放路径' })
  @Expose()
  path: string;
  
  @ApiProperty({ description: '文件md5' })
  @Expose()
  md5: string;
}
