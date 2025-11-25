import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SystemModule } from './system/system.module';
import { join } from 'path';
import { existsSync } from 'fs';

// 根据环境变量选择配置文件
function getEnvFilePath(): string[] {
  const nodeEnv = process.env.NODE_ENV;
  const defaultEnvFile = '.env';
  const envFiles = [defaultEnvFile];
  if (nodeEnv) {
    const customEnvFile = `.env.${nodeEnv}`;
    const customEnvPath = join(process.cwd(), customEnvFile);

    if (existsSync(customEnvPath)) {
      // 将自定义环境文件放在前面，优先级更高
      envFiles.unshift(customEnvFile);
      console.log(`加载环境配置文件: ${customEnvFile}`);
    } else {
      console.warn(`环境配置文件 ${customEnvFile} 不存在，将使用默认配置`);
    }
  }

  console.log(`使用的环境配置文件: ${envFiles.join(', ')}`);
  return envFiles;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: getEnvFilePath(),
    }),
    SystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
