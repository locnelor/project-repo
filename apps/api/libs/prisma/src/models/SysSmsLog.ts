import type { SysSmsLog } from '@repo/database'
import type { SysSmsConfigModel } from './SysSmsConfig'
import { ApiField } from '@app/api-kit'

export class SysSmsLogModel implements SysSmsLog {
  @ApiField({ description: '主键ID', type: BigInt, required: true })
  id: bigint

  @ApiField({ description: '创建人', type: BigInt, required: true })
  createUser: bigint

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date

  @ApiField({ description: '配置ID', type: BigInt, required: true })
  configId: bigint

  @ApiField({ description: '手机号', type: String, required: true })
  phone: string

  @ApiField({ description: '参数配置', type: String, nullable: true })
  params: string | null

  @ApiField({ description: '发送状态（1：成功；2：失败）', type: Number, required: true })
  status: number

  @ApiField({ description: '返回数据', type: String, nullable: true })
  resMsg: string | null

  config?: SysSmsConfigModel
}
