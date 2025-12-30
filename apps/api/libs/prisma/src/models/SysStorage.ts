import { SysStorage } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysFileModel } from './SysFile';

export class SysStorageModel implements SysStorage {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '名称', type: String, required: true })
  name: string;

  @ApiField({ description: '编码', type: String, required: true })
  code: string;

  @ApiField({ description: '类型（1：本地存储；2：对象存储）', type: Number, required: true })
  type: number;

  @ApiField({ description: 'Access Key', type: String, nullable: true })
  accessKey: string | null;

  @ApiField({ description: 'Secret Key', type: String, nullable: true })
  secretKey: string | null;

  @ApiField({ description: 'Endpoint', type: String, nullable: true })
  endpoint: string | null;

  @ApiField({ description: 'Bucket', type: String, required: true })
  bucketName: string;

  @ApiField({ description: '域名', type: String, nullable: true })
  domain: string | null;

  @ApiField({ description: '启用回收站', type: Boolean, required: true })
  recycleBinEnabled: boolean;

  @ApiField({ description: '回收站路径', type: String, nullable: true })
  recycleBinPath: string | null;

  @ApiField({ description: '描述', type: String, nullable: true })
  description: string | null;

  @ApiField({ description: '是否为默认存储', type: Boolean, required: true })
  isDefault: boolean;

  @ApiField({ description: '排序', type: Number, required: true })
  sort: number;

  @ApiField({ description: '状态（1：启用；2：禁用）', type: Number, required: true })
  status: number;

  @ApiField({ description: '创建人', required: true })
  createUser: bigint;

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date;

  @ApiField({ description: '修改人', nullable: true })
  updateUser: bigint | null;

  @ApiField({ description: '修改时间', type: Date, nullable: true })
  updateTime: Date | null;

  @ApiField({ description: '是否已删除', required: true })
  deleted: bigint;

  files?: SysFileModel[];
}
