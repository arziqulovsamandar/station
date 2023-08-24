"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const region_module_1 = require("./region/region.module");
const comfort_module_1 = require("./comfort/comfort.module");
const categories_module_1 = require("./categories/categories.module");
const user_model_1 = require("./users/models/user.model");
const mail_service_1 = require("./mail/mail.service");
const mail_module_1 = require("./mail/mail.module");
const bot_module_1 = require("./bot/bot.module");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_constants_1 = require("./app.constants");
const bot_model_1 = require("./bot/model/bot.model");
const otp_module_1 = require("./otp/otp.module");
const otp_model_1 = require("./otp/model/otp.model");
const category_model_1 = require("./categories/models/category.model");
const comfort_model_1 = require("./comfort/models/comfort.model");
const region_model_1 = require("./region/models/region.model");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_telegraf_1.TelegrafModule.forRootAsync({
                botName: app_constants_1.BOT_NAME,
                useFactory: () => ({
                    token: process.env.BOT_TOKEN,
                    middlewares: [],
                    inculde: [bot_module_1.BotModule],
                }),
            }),
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [user_model_1.User, bot_model_1.Bot, otp_model_1.Otp, category_model_1.Category, comfort_model_1.Comfort, region_model_1.Region],
                autoLoadModels: true,
                logging: false,
            }),
            users_module_1.UsersModule,
            region_module_1.RegionModule,
            comfort_module_1.ComfortModule,
            categories_module_1.CategoriesModule,
            mail_module_1.MailModule,
            bot_module_1.BotModule,
            otp_module_1.OtpModule,
        ],
        controllers: [],
        providers: [mail_service_1.MailService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map