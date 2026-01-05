import { ApiResult } from '@app/api-kit'
import { CheckPermission, CurrentUser, IgnorePermission } from '@app/auth-power'
import { Body, Controller, Get, Inject, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { TestDto } from './dto/test.dto'
import { TestService } from './test.service'

@Controller('test')
@ApiTags('test')
@CheckPermission('test')
export class TestController {
  constructor(@Inject(TestService) private readonly testService: TestService) { }

  @Get('getToken')
  @ApiOperation({ summary: '获取测试token' })
  @IgnorePermission()
  getToken() {
    return this.testService.getToken()
  }

  @Get('checkPermission')
  @ApiOperation({ summary: '检查权限' })
  checkPermission(
    @CurrentUser() user: any,
  ) {
    return user
  }

  @Post('test')
  @ApiResult(TestDto, '测试接口')
  @IgnorePermission()
  test(
    @Body() body: TestDto,
  ) {
    console.log(body, 'body')
    return {
      test_field: '123',
      test_field2: '444',
    }
  }
}
