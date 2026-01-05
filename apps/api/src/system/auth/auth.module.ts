import { AuthPowerModule } from '@app/auth-power'
import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [AuthPowerModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
