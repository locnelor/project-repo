import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { TestResult1 } from './app.dto';
import { ApiResponseJson } from './common/decorators/api-response.decorator';
import { AuthController } from './common/decorators/authController.decorator';
import { ApiAuthGuard } from './common/guards';


@AuthController({
  tag: "app",
  url: "app"
})
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("test2")
  @ApiResponseJson(TestResult1, {
    description: "测试接口2",
  })
  @UseGuards(ApiAuthGuard)
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
