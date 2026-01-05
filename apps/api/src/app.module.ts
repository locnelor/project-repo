import { JwtAuthGuard } from '@app/auth-power'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SystemModule } from './system/system.module'
import { TestModule } from './test/test.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../../.env'],
    }),
    SystemModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    AppService,
  ],
})
export class AppModule { }
