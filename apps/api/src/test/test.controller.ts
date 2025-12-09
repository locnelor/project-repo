import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CheckPermission, CurrentUser, IgnorePermission } from '@app/auth-power';

@Controller('test')
@ApiTags("test")
@CheckPermission("test")
export class TestController {
  constructor(private readonly testService: TestService) { }


  @Get("getToken")
  @ApiOperation({ summary: "获取测试token" })
  @IgnorePermission()
  getToken() {
    return this.testService.getToken();
  }

  @Get("checkPermission")
  @ApiOperation({ summary: "检查权限" })
  checkPermission(
    @CurrentUser() user: any
  ) {
    return user
  }
}
