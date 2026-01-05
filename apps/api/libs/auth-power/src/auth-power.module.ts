import { HashModule } from '@app/hash'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { AuthPowerService } from './auth-power.service'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.getOrThrow('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.getOrThrow('JWT_EXPIRATION'),
          },
        }
      },
      inject: [ConfigService],
    }),
    HashModule,
  ],
  providers: [AuthPowerService, JwtAuthGuard, JwtStrategy],
  exports: [AuthPowerService, JwtAuthGuard, JwtModule],
})
export class AuthPowerModule {}
