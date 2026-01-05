import { AuthPowerModule } from '@app/auth-power'
import { Module } from '@nestjs/common'
import { Test1Controller } from './test1.controller'
import { TestController } from './test.controller'
import { TestService } from './test.service'
import { CrudModule } from './testCrud'

@Module({
  imports: [
    AuthPowerModule,
    CrudModule.register([Test1Controller]),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule { }
