import 'tsconfig-paths/register';
import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from "@nestjs/platform-express"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { writeFileSync } from "fs"
import { AppModule } from "../src/app.module"
import { AuthModule } from "../src/system/auth/auth.module"


async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {})
    const options = new DocumentBuilder()
        .build();
    const document = SwaggerModule.createDocument(app, options, {
        include: [AuthModule]
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
    });

    // 保存为 JSON 文件
    writeFileSync('./swagger.json', JSON.stringify(document, null, 2));
}
bootstrap()