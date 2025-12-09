
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { IgnorePermission } from '@app/auth-power';


@Controller("app")
@ApiTags("appTag")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @IgnorePermission()
  getHello(): string {
    return this.appService.getHello();
  }
}
