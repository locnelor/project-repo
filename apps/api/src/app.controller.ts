
import { ApiResponse, ApiOperation, ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance, Transform } from 'class-transformer';



import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger'
import { TestResult, TestResult1 } from './app.dto';
import { ApiResponseJson } from './common/decorators/api-response.decorator';


@Controller()
@ApiTags("app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("test2")
  @ApiResponseJson(TestResult1, { description: "测试接口2" })
  test2() {
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
  }
}
