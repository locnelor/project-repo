import { ApiField } from "../decorators";



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

export class BaseApiPaginationResponse {
    @ApiField({description: "数量"})
    total: number;
    
    @ApiField({description: "页码"})
    pageNo: number;
    
    @ApiField({description: "页大小"})
    pageSize: number;
}