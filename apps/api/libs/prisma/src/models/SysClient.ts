import { SysClient } from '@repo/database';
import { ApiField } from '@app/api-kit';

export class SysClientModel implements SysClient {
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

  @ApiField({ description: '客户端ID', type: String, required: true })
  clientId: string;

  @ApiField({ description: '客户端类型', type: String, required: true })
  clientType: string;

  @ApiField({ description: '认证类型', required: true })
  authType;

  @ApiField({ description: 'Token最低活跃频率（单位：秒，-1：不限制，永不冻结）', type: BigInt, required: true })
  activeTimeout: bigint;

  @ApiField({ description: 'Token有效期（单位：秒，-1：永不过期）', type: BigInt, required: true })
  timeout: bigint;

  @ApiField({ description: '是否允许同一账号多地同时登录（true：允许；false：新登录挤掉旧登录）', type: Boolean, required: true })
  isConcurrent: boolean;

  @ApiField({ description: '顶人下线的范围（CURR_DEVICE_TYPE：当前客户端类型；ALL_DEVICE_TYPE：所有客户端类型）', type: String, nullable: true })
  replacedRange: string | null;

  @ApiField({ description: '同一账号最大登录数量（-1：不限制，只有在 isConcurrent=true，isShare=false 时才有效）', type: Number, required: true })
  maxLoginCount: number;

  @ApiField({ description: '溢出人数的下线方式（LOGOUT：注销下线；KICKOUT：踢人下线；REPLACED：顶人下线）', type: String, nullable: true })
  overflowLogoutMode: string | null;
}
