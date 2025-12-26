import { ApiField } from "@app/api-kit";



export class RegisterDto {
    @ApiField({ description: "用户名" })
    username: string;

    @ApiField({ description: "密码" })
    password: string;
}