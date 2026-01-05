import type { NestExpressApplication } from '@nestjs/platform-express'
import { writeFileSync } from 'node:fs'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from '../src/app.module'
import { AuthModule } from '../src/system/auth/auth.module'
import 'tsconfig-paths/register'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {})
  const options = new DocumentBuilder()
    .build()
  const document = SwaggerModule.createDocument(app, options, {
    include: [AuthModule],
  })
  document.components = {
    ...document.components,
    securitySchemes: {
      ...document.components?.securitySchemes,
    },
  }
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customJs: '/swagger-auto-auth.js',
  })

  // 保存为 JSON 文件
  writeFileSync('./swagger.json', JSON.stringify(document, null, 2))
}
bootstrap()
