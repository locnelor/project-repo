import { SysSmsConfig } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysSmsLogModel } from './SysSmsLog';

export class SysSmsConfigModel implements SysSmsConfig {
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

  @ApiField({ description: '状态（1：启用；2：禁用）', type: Number, required: true })
  status: number;

  @ApiField({ description: '名称', type: String, required: true })
  name: string;

  @ApiField({ description: '厂商', type: String, required: true })
  supplier: string;

  @ApiField({ description: 'Access Key', type: String, required: true })
  accessKey: string;

  @ApiField({ description: 'Secret Key', type: String, required: true })
  secretKey: string;

  @ApiField({ description: '短信签名', type: String, nullable: true })
  signature: string | null;

  @ApiField({ description: '模板ID', type: String, nullable: true })
  templateId: string | null;

  @ApiField({ description: '负载均衡权重', type: Number, nullable: true })
  weight: number | null;

  @ApiField({ description: '重试间隔（单位：秒）', type: Number, nullable: true })
  retryInterval: number | null;

  @ApiField({ description: '重试次数', type: Number, nullable: true })
  maxRetries: number | null;

  @ApiField({ description: '发送上限', type: Number, nullable: true })
  maximum: number | null;

  @ApiField({ description: '各个厂商独立配置', type: String, nullable: true })
  supplierConfig: string | null;

  @ApiField({ description: '是否为默认配置', type: Boolean, required: true })
  isDefault: boolean;

  logs?: SysSmsLogModel[];
}
