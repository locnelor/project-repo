import { SysNotice } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysNoticeLogModel } from './SysNoticeLog';

export class SysNoticeModel implements SysNotice {
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

  @ApiField({ description: '状态（1：草稿；2：待发布；3：已发布）', type: Number, required: true })
  status: number;

  @ApiField({ description: '标题', type: String, required: true })
  title: string;

  @ApiField({ description: '内容', type: String, required: true })
  content: string;

  @ApiField({ description: '分类', type: String, required: true })
  type: string;

  @ApiField({ description: '通知范围（1：所有人；2：指定用户）', type: Number, required: true })
  noticeScope: number;

  @ApiField({ description: '通知用户', nullable: true })
  noticeUsers;

  @ApiField({ description: '通知方式（1：系统消息；2：登录弹窗）', nullable: true })
  noticeMethods;

  @ApiField({ description: '是否定时', type: Boolean, required: true })
  isTiming: boolean;

  @ApiField({ description: '发布时间', type: Date, nullable: true })
  publishTime: Date | null;

  @ApiField({ description: '是否置顶', type: Boolean, required: true })
  isTop: boolean;

  logs?: SysNoticeLogModel[];
}
