import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateRoleDto {
  @ApiProperty({
    description: '角色名称',
    required: false,
    maxLength: 255,
    example: '管理员',
  })
  @IsOptional()
  @IsString({ message: '角色名称必须是字符串' })
  @MaxLength(255, { message: '角色名称最大长度为255' })
  name?: string

  @ApiProperty({
    description: '角色描述',
    required: false,
    maxLength: 500,
    example: '系统管理员角色',
  })
  @IsOptional()
  @IsString({ message: '角色描述必须是字符串' })
  @MaxLength(500, { message: '角色描述最大长度为500' })
  description?: string
}
