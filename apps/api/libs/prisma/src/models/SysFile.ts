import { SysFile } from '@repo/database';
import { ApiField } from '@app/api-kit';
import { SysStorageModel } from './SysStorage';

export class SysFileModel implements SysFile {
  @ApiField({ description: '主键ID', required: true })
  id: bigint;

  @ApiField({ description: '名称', type: String, required: true })
  name: string;

  @ApiField({ description: '原始名称', type: String, required: true })
  originalName: string;

  @ApiField({ description: '大小（字节）', nullable: true })
  size: bigint | null;

  @ApiField({ description: '上级目录', type: String, required: true })
  parentPath: string;

  @ApiField({ description: '路径', type: String, required: true })
  path: string;

  @ApiField({ description: '扩展名', type: String, nullable: true })
  extension: string | null;

  @ApiField({ description: '内容类型', type: String, nullable: true })
  contentType: string | null;

  @ApiField({ description: '类型（0: 目录；1：其他；2：图片；3：文档；4：视频；5：音频）', type: Number, required: true })
  type: number;

  @ApiField({ description: 'SHA256值', type: String, nullable: true })
  sha256: string | null;

  @ApiField({ description: '元数据', type: String, nullable: true })
  metadata: string | null;

  @ApiField({ description: '缩略图名称', type: String, nullable: true })
  thumbnailName: string | null;

  @ApiField({ description: '缩略图大小（字节)', nullable: true })
  thumbnailSize: bigint | null;

  @ApiField({ description: '缩略图元数据', type: String, nullable: true })
  thumbnailMetadata: string | null;

  @ApiField({ description: '存储ID', required: true })
  storageId: bigint;

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

  storage?: SysStorageModel;
}
