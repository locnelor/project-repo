import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CheckPermission, CurrentUser, IgnorePermission } from '@app/auth-power';
import { ApiResult } from '@app/api-kit';
import { TestDto } from './dto/test.dto';

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

  @Get("test")
  @ApiResult(TestDto, "测试接口")
  test() {
    return {}
  }
}

