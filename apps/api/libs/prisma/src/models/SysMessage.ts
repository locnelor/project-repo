import { SysMessage } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysMessageLogModel } from './SysMessageLog';

export class SysMessageModel implements SysMessage {
  @ApiField({ description: '主键ID', type: BigInt, required: true })
  id: bigint;

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date;

  @ApiField({ description: '修改时间', type: Date, nullable: true })
  updateTime: Date | null;

  @ApiField({ description: '是否已删除', type: BigInt, required: true })
  deleted: bigint;

  @ApiField({ description: '标题', type: String, required: true })
  title: string;

  @ApiField({ description: '内容', type: String, nullable: true })
  content: string | null;

  @ApiField({ description: '类型（1：系统消息；2：安全消息）', type: Number, required: true })
  type: number;

  @ApiField({ description: '跳转路径', type: String, nullable: true })
  path: string | null;

  @ApiField({ description: '通知范围（1：所有人；2：指定用户）', type: Number, required: true })
  scope: number;

  @ApiField({ description: '通知用户', nullable: true })
  users;

  logs?: SysMessageLogModel[];
}
