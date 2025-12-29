import { ApiField } from "@app/api-kit";
import { IsString } from "class-validator";

export class User {
    @ApiField({ description: "用户名", name: "userName" })
    username: string;
}
export class TestDto {
    @ApiField({ description: '测试字段', name: 'TestField' })
    @IsString()
    test_field: string

    @ApiField({description:'hello'})
    @IsString()
    test_field2:string
}