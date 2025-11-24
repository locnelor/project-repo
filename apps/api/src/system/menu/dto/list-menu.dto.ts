import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { PaginationDto } from "src/common/dto/pagination.dto";



export class ListMenuQuery extends PaginationDto {
  @ApiProperty({
    description: '菜单名称',
    default: '',
    required: false,
  })
  @IsOptional()
  name?: string = '';
}