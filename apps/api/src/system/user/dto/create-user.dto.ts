import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ description: '用户姓名' })
    name: string
}
