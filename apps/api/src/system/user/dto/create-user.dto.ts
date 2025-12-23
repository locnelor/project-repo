import { ApiField } from "@app/api-kit";
import { IsString } from "class-validator";

export class CreateUserDto {
    @ApiField({ description: "用户名" })
    @IsString()
    username: string;
}
