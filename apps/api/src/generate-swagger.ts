
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('SwaggerGenerator');
  try {
    const app = await NestFactory.create(AppModule, { logger: ['error', 'warn'] });
    
    const config = new DocumentBuilder()
      .setTitle('Test')
      .setDescription('Test')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    writeFileSync('./swagger-debug.json', JSON.stringify(document, null, 2));
    logger.log('Swagger JSON generated successfully');
    await app.close();
  } catch (error) {
    logger.error('Error generating swagger', error);
    process.exit(1);
  }
}
bootstrap();
