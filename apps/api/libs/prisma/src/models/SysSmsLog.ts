import { SysSmsLog } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysSmsConfigModel } from './SysSmsConfig';

export class SysSmsLogModel implements SysSmsLog {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '配置ID', required: true })
  configId: bigint;

  @ApiField({ description: '手机号', type: String, required: true })
  phone: string;

  @ApiField({ description: '参数配置', type: String, nullable: true })
  params: string | null;

  @ApiField({ description: '发送状态（1：成功；2：失败）', type: Number, required: true })
  status: number;

  @ApiField({ description: '返回数据', type: String, nullable: true })
  resMsg: string | null;

  @ApiField({ description: '创建人', required: true })
  createUser: bigint;

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date;

  config?: SysSmsConfigModel;
}
