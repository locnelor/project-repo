import { ApiField } from "@app/api-kit";
import { SysUserModel } from "@app/prisma";
import { OmitType } from "@nestjs/swagger";


export class UserInfoDto extends OmitType(SysUserModel, ['password', 'deleted', 'createUser', 'email', 'phone']) {
    @ApiField({ description: '密钥' })
    token: string

    @ApiField({ description: '手机号', mask: "phone" })
    phone: string

    @ApiField({ description: '邮箱', mask: "email" })
    email: string
}