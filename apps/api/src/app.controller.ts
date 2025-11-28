
import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';



import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { prisma } from '@repo/database';
import { ApiTags } from '@nestjs/swagger'
import { ApiResponseJson } from './common/decorators/api-response.decorator';
import { ApiField } from './common/decorators/api-field.decorator';

class TestObj {
  @ApiField("用户姓名", { outputKey: "User_Name" })
  user_name: "asd"
}
class TestResult {
  @ApiField("测试结果", { outputKey: "Result" })
  result: string

  @ApiField("测试对象", { type: () => TestObj, outputKey: "Obj" })
  obj: TestObj
}
@Controller()
@ApiTags("app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello() {
    return await prisma.sys_user.count() + 'count'
  }

  @Get("test")
  @ApiResponse({ type: TestResult })
  @ApiOperation({ summary: "测试接口" })
  async test() {
    return plainToInstance(TestResult, { result: 123, rest: '6661' }, { excludeExtraneousValues: true })
  }

  @Get("test2")
  @ApiResponseJson(TestResult, "测试接口2")
  async test2() {
    return {
      result: "123",
      rest: "00",
      obj: {
        user_name: "asd"
      },
      queryDataForm: {
        user_name: "asd"
      }
    }
    // return plainToInstance(TestResult, { result: 123, rest: '6661' }, { excludeExtraneousValues: true })
  }
}
