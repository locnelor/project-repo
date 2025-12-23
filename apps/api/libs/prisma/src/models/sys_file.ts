import { sys_file } from '@repo/database';
import { ApiField } from '@app/api-kit';

export class SysFileModel implements sys_file {
  @ApiField({ description: '主键ID', type: String, required: true })
  id: string;

  @ApiField({ description: '创建人', type: String, nullable: true })
  create_by: string | null;

  @ApiField({ description: '创建时间', type: Date, nullable: true })
  create_time: Date | null;

  @ApiField({ description: '文件名称', type: String, required: true })
  name: string;

  @ApiField({ description: '文件存放路径', type: String, required: true })
  path: string;

  @ApiField({ description: '文件md5', type: String, required: true })
  md5: string;
}
