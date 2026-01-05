import type { SysLog } from '@repo/database'
import { ApiField } from '@app/api-kit'

export class SysLogModel implements SysLog {
  @ApiField({ description: '主键ID', type: BigInt, required: true })
  id: bigint

  @ApiField({ description: '创建人', type: BigInt, nullable: true })
  createUser: bigint | null

  @ApiField({ description: '创建时间', type: Date, required: true })
  createTime: Date

  @ApiField({ description: '链路ID', type: String, nullable: true })
  traceId: string | null

  @ApiField({ description: '日志描述', type: String, required: true })
  description: string

  @ApiField({ description: '所属模块', type: String, required: true })
  module: string

  @ApiField({ description: '请求URL', type: String, required: true })
  requestUrl: string

  @ApiField({ description: '请求方式', type: String, required: true })
  requestMethod: string

  @ApiField({ description: '请求头', type: String, nullable: true })
  requestHeaders: string | null

  @ApiField({ description: '请求体', type: String, nullable: true })
  requestBody: string | null

  @ApiField({ description: '状态码', type: Number, required: true })
  statusCode: number

  @ApiField({ description: '响应头', type: String, nullable: true })
  responseHeaders: string | null

  @ApiField({ description: '响应体', type: String, nullable: true })
  responseBody: string | null

  @ApiField({ description: '耗时（ms）', type: BigInt, required: true })
  timeTaken: bigint

  @ApiField({ description: 'IP', type: String, nullable: true })
  ip: string | null

  @ApiField({ description: 'IP归属地', type: String, nullable: true })
  address: string | null

  @ApiField({ description: '浏览器', type: String, nullable: true })
  browser: string | null

  @ApiField({ description: '操作系统', type: String, nullable: true })
  os: string | null

  @ApiField({ description: '状态（1：成功；2：失败）', type: Number, required: true })
  status: number

  @ApiField({ description: '错误信息', type: String, nullable: true })
  errorMsg: string | null
}
