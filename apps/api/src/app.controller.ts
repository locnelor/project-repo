import { IgnorePermission } from '@app/auth-power'
import { Controller, Get, Inject } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service'

@Controller('app')
@ApiTags('appTag')
export class AppController {
  constructor(@Inject(AppService) private readonly appService: AppService) { }

  @Get()
  @IgnorePermission()
  getHello(): string {
    return this.appService.getHello()
  }
}
