import { ApiField } from "@app/api-kit";
import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @ApiField({ description: "用户名" })
    @IsString()
    username: string;

    @ApiField({ description: "手机号" })
    @IsString()
    @IsOptional()
    phone?: string;

    @ApiField({ description: "邮箱" })
    @IsString()
    @IsOptional()
    email?: string;
}
