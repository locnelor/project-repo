import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPowerModule } from '@app/auth-power';
import { AuthController } from './auth.controller';

@Module({
  imports: [AuthPowerModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
