import { ApiField } from "@app/api-kit";

export class User {
    @ApiField({ description: "用户名", outputKey: "userName" })
    username: string;
}
export class TestDto {
    
}