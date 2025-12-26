import { ApiField } from "@app/api-kit";
import { IsString } from "class-validator";


export class LoginDto {
    @ApiField({ description: "用户名", required: true })
    @IsString()
    username: string;


    @ApiField({ description: "密码", required: true })
    @IsString()
    password: string;
}