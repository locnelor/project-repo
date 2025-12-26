import { ApiField } from "@app/api-kit";


export class VerifyCodeDto {
    @ApiField({ description: "验证id" })
    verifyId: string;
}