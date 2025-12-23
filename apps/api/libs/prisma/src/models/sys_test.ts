import { sys_test } from '@repo/database';
import { ApiField } from '@app/api-kit';

export class SysTestModel implements sys_test {
  @ApiField({ description: '主键ID', type: String, required: true })
  id: string;

  @ApiField({ description: '创建时间', type: Date, required: true })
  create_time: Date;

  @ApiField({ description: '修改时间', type: Date, required: true })
  update_time: Date;

  @ApiField({ description: '', type: String, required: true })
  name: string;
}
