import { ApiProperty } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
import { IsInt, IsOptional, Min } from 'class-validator'
import { ApiField } from '../decorators'

export class PaginationDto {
  // @ApiProperty({ description: '当前页码', default: 1, required: false })
  // @IsInt({ message: '页码必须是整数' })
  // @Min(1, { message: '页码最小为1' })
  // @IsOptional()
  // @Type(() => Number)
  // @Expose()
  @ApiField({ description: "当前页码", default: 1 })
  pageNo: number = 1

  // @ApiProperty({ description: '每页数据条数', default: 10, required: false })
  // @IsInt({ message: '每页数据条数必须是整数' })
  // @Min(1, { message: '每页数据条数最小为1' })
  // @IsOptional()
  // @Type(() => Number)
  // @Expose()
  @ApiField({ description: "每页数据条数", default: 10 })
  pageSize: number = 10
}

export const Pagination = <T>(type: new () => T) => {
  class PaginationResultDto extends PaginationDto {
    // @ApiProperty({ type: () => [type] })
    // @Type(() => type)
    // @Expose()
    @ApiField({ description: "查询结果", type: () => [type] })
    records!: T[]

    // @ApiProperty({ description: '总条数' })
    // @Expose()
    @ApiField({ description: "总条数" })
    total: number
  }

  return PaginationResultDto
}