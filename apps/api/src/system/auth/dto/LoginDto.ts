import { ApiField } from "@app/api-kit";


export class LoginDto {
    @ApiField({ description: "用户名", required: true })
    username: string;
    @ApiField({ description: "密码", required: true })
    password: string;
}