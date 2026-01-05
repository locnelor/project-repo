import type { AppService } from './app.service'
import { IgnorePermission } from '@app/auth-power'
import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@Controller('app')
@ApiTags('appTag')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @IgnorePermission()
  getHello(): string {
    return this.appService.getHello()
  }
}
