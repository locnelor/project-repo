import { ApiField } from "../decorators/api-field.decorator";



export class BaseApiResponse {
    @ApiField("状态码")
    code: number;

    @ApiField("消息")
    msg: string = "success";

    @ApiField("请求时间")
    now: number
}