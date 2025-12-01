import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { TestResult1 } from './app.dto';
import { ApiResponseJson } from './common/decorators/api-response.decorator';
import { AuthController } from './common/decorators/authController.decorator';
import { ApiAuthGuard } from './common/guards';
import { ApiAuth, ApiPermissions, PublicApi } from './common/decorators/api-auth.decorator';


@AuthController({
  tag: "app",
  url: "app",
  auth: {
    // required: true,
    // ignore: true,
  },
  permissions: {
    // ignore: true,
    // permissions: ['app:test2']
  }
})
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("test3")
  @ApiResponseJson(TestResult1, {
    description: "测试接口2"
  })
  @ApiAuth()
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
