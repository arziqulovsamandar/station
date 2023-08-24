"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const start = async () => {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const port = process.env.PORT || 1;
        app.useGlobalPipes(new common_1.ValidationPipe());
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Station Project')
            .setDescription('Mini project for stadium finder')
            .setVersion('1.0.0')
            .addTag('NESTJS,NODEJS,JWT,OTP,Postgres,Sequielize')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('dosc', app, document);
        app.use(cookieParser());
        app.setGlobalPrefix('api');
        app.useGlobalPipes(new common_1.ValidationPipe());
        app.listen(port, () => {
            console.log(`server ${port}-Portda ishga tushdi`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map