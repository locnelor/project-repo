import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { PaginationDto } from '@app/api-kit/dto/pagination.dto';

export class ListMenuQuery extends PaginationDto {
  @ApiProperty({
    description: '菜单名称',
    default: '',
    required: false,
  })
  @IsOptional()
  name?: string = '';
}
