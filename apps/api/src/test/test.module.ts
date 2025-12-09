import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { AuthPowerModule } from '@app/auth-power';

@Module({
  imports: [AuthPowerModule],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule { }
