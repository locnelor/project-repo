import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPowerModule } from '@app/auth-power';

@Module({
  imports:[
    AuthPowerModule
  ],
  providers: [AuthService]
})
export class AuthModule {}
