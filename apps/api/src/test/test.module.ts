import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { AuthPowerModule } from '@app/auth-power';
import { CrudModule } from './testCrud';
import { Test1Controller } from './test1.controller';

@Module({
  imports: [
    AuthPowerModule,
    CrudModule.register([Test1Controller])
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule { }
