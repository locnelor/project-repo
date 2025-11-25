import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @ApiProperty({
    description: '当前页码',
    default: 1,
    required: false,
  })
  @IsInt({ message: '页码必须是整数' })
  @Min(1, { message: '页码最小为1' })
  @IsOptional()
  @Type(() => Number)
  pageNo: number = 1;

  @ApiProperty({
    description: '每页数据条数',
    default: 10,
    required: false,
  })
  @IsInt({ message: '每页数据条数必须是整数' })
  @Min(1, { message: '每页数据条数最小为1' })
  @IsOptional()
  @Type(() => Number)
  pageSize: number = 10;

  constructor() {
    console.log(this.pageNo, this.pageSize);
  }
}
