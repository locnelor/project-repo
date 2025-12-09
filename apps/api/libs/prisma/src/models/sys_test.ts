import { sys_test } from '@repo/database';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SysTestModel implements sys_test {
  @ApiProperty({description:''})
  @Expose()
  id: string;
  @ApiProperty({description:''})
  @Expose()
  create_time: Date;
  @ApiProperty({description:''})
  @Expose()
  update_time: Date;
  @ApiProperty({description:''})
  @Expose()
  name: string;
}
