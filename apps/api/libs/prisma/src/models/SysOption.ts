import { SysOption } from '@repo/database';
import { ApiField } from '@app/api-kit';

export class SysOptionModel implements SysOption {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '类别', type: String, required: true })
  category: string;

  @ApiField({ description: '名称', type: String, required: true })
  name: string;

  @ApiField({ description: '键', type: String, required: true })
  code: string;

  @ApiField({ description: '值', type: String, nullable: true })
  value: string | null;

  @ApiField({ description: '默认值', type: String, nullable: true })
  defaultValue: string | null;

  @ApiField({ description: '描述', type: String, nullable: true })
  description: string | null;

  @ApiField({ description: '修改人', nullable: true })
  updateUser: bigint | null;

  @ApiField({ description: '修改时间', type: Date, nullable: true })
  updateTime: Date | null;
}
