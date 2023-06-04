"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("K-Contacts")
        .setDescription("API de clientes e contatos")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = dist_1.SwaggerModule.createDocument(app, config);
    dist_1.SwaggerModule.setup("api", app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }), new common_1.ValidationPipe({
        transform: true,
        transformOptions: {
            groups: ['transform-password'],
        },
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map