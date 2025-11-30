import { ApiField } from "../decorators/api-field.decorator";



export class BaseApiResponse {
    @ApiField({ description: "状态码" })
    code: number;

    @ApiField({ description: "消息" })
    msg: string = "success";

    @ApiField({ description: "请求时间" })
    now: number

    // 移除基类中的 data 定义，由子类覆盖
    // @ApiField({ description: "数据" })
    // data: T;
}