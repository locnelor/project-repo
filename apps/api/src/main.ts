import type { NestExpressApplication } from '@nestjs/platform-express'
import { writeFileSync } from 'node:fs'
import { HashService } from '@app/hash'
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory, Reflector } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './common/filters/http-exception.filter'
import { ResponseInterceptor } from './common/interceptors/response.interceptor'
import { DecryptMiddleware } from './common/middleware/decrypt.middleware'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: false,
    // httpsOptions:
    //   process.env.HTTPS_ENABLED === 'true'
    //     ? {
    //       key: FileService.getSSLKey(),
    //       cert: FileService.getSSLPem(),
    //     }
    //     : undefined,
    rawBody: true,
    bodyParser: false,
  })

  const decryptMiddleware = new DecryptMiddleware(app.get(HashService))
  app.use(decryptMiddleware.use.bind(decryptMiddleware))

  const configService: any = app.get(ConfigService)
  app.enableCors({
    origin: (origin, callback) => {
      callback(null, origin) // 允许任意来源
    },
    credentials: true,
  })
  app.useBodyParser('text')
  app.useBodyParser('raw')
  app.useBodyParser('json', { limit: '10mb' })

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }))
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())
  // set prefix
  // app.setGlobalPrefix("/api")

  app.useStaticAssets('build')
  app.useStaticAssets('resource')
  app.useStaticAssets('public')

  if (configService.get('SWAGGER') === 'true') {
    const options = new DocumentBuilder()
      .setTitle(<string>configService.get('TITLE'))
      .setDescription(<string>configService.get('DESCRIPTION'))
      .setVersion(<string>configService.get('VERSION'))
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'Authorization',
          in: 'header',
          description: '请输入 JWT 令牌',
        },
        'Authorization',
      )
      .build()
    const document = SwaggerModule.createDocument(app, options)
    document.components = {
      ...document.components,
      securitySchemes: {
        ...document.components?.securitySchemes,
      },
    }
    document.security = [{ Authorization: [] }]

    SwaggerModule.setup('docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customJs: '/swagger-auto-auth.js',
    })

    // 保存为 JSON 文件
    writeFileSync('./swagger.json', JSON.stringify(document, null, 2))
  }
  const host = configService.get('SERVER_HOST')
  const port = configService.get('PORT')
  await app.listen(port, host, () => {
    console.log(`listener: http://${host}:${port}`)
    console.log(`docs: http://${host}:${port}/docs`)
  })
}

bootstrap()
