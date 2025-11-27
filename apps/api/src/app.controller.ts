import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { prisma } from '@repo/database';
// import { prisma } from '@app/prisma';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return await prisma.sys_user.count() + 'count'
  }
}
