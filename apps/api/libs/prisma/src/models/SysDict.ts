import { SysDict } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysDictItemModel } from './SysDictItem';

export class SysDictModel implements SysDict {
  @ApiField({ description: '主键ID', type: BigInt, required: true })
  id: bigint;

  @ApiField({ description: '创建人', type: BigInt, required: true })
  createUser: bigint;

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date;

  @ApiField({ description: '修改人', type: BigInt, nullable: true })
  updateUser: bigint | null;

  @ApiField({ description: '修改时间', type: Date, nullable: true })
  updateTime: Date | null;

  @ApiField({ description: '是否已删除', type: BigInt, required: true })
  deleted: bigint;

  @ApiField({ description: '名称', type: String, required: true })
  name: string;

  @ApiField({ description: '编码', type: String, required: true })
  code: string;

  @ApiField({ description: '描述', type: String, nullable: true })
  description: string | null;

  @ApiField({ description: '是否为系统内置数据', type: Boolean, required: true })
  isSystem: boolean;

  items?: SysDictItemModel[];
}
