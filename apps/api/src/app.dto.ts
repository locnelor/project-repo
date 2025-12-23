import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"
import { ApiField } from "../libs/api-kit/src/decorators/api-field.decorator"

export class TestObj {
    @ApiProperty({ description: "用户姓名" })
    @Expose()
    user_name: string
}
export class TestResult {
    @ApiProperty({ description: "测试结果" })
    @Expose()
    result: string

    @ApiProperty({ type: () => TestObj, description: "测试对象", })
    @Expose()
    obj: TestObj
}













export class TestObj1 {
    @ApiField({ description: "用户姓名", outputKey: "UserName" })
    user_name: string
}
export class TestResult1 {
    @ApiField({ description: "测试结果", outputKey: "Result" })
    result: string

    @ApiField({ type: TestObj1, description: "测试对象", outputKey: "Obj" })
    obj: TestObj1
}



