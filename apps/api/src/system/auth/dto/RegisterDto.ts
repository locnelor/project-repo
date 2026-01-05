import { ApiField } from '@app/api-kit'
import { IsString } from 'class-validator'

export class RegisterDto {
  @ApiField({ description: '用户名' })
  @IsString()
  username: string

  @ApiField({ description: '密码' })
  @IsString()
  password: string
}
