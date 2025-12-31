import { SysDictItem } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysDictModel } from './SysDict';

export class SysDictItemModel implements SysDictItem {
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

  @ApiField({ description: '标签', type: String, required: true })
  label: string;

  @ApiField({ description: '值', type: String, required: true })
  value: string;

  @ApiField({ description: '标签颜色', type: String, nullable: true })
  color: string | null;

  @ApiField({ description: '排序', type: Number, required: true })
  sort: number;

  @ApiField({ description: '描述', type: String, nullable: true })
  description: string | null;

  @ApiField({ description: '状态（1：启用；2：禁用）', type: Number, required: true })
  status: number;

  @ApiField({ description: '字典ID', type: BigInt, required: true })
  dictId: bigint;

  dict?: SysDictModel;
}
