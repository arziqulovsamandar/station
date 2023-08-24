import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { StadiumsModule } from './stadiums/stadiums.module';
import { StadiumTimesModule } from './stadium_times/stadium_times.module';
import { RegionModule } from './region/region.module';
import { OrdersModule } from './orders/orders.module';
import { MediaModule } from './media/media.module';
import { CommentsModule } from './comments/comments.module';
import { ComfortModule } from './comfort/comfort.module';
import { ComfortStadiumModule } from './comfort_stadium/comfort_stadium.module';
import { CategoriesModule } from './categories/categories.module';
import { DistrictModule } from './district/district.module';
import { Admin } from './admin/models/admin.model';
import { User } from './users/models/user.model';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mail.module';
import { BotModule } from './bot/bot.module';
import {TelegrafModule} from 'nestjs-telegraf'
import { BOT_NAME } from './app.constants';
import { Bot } from './bot/model/bot.model';
import { OtpModule } from './otp/otp.module';
import { Otp } from './otp/model/otp.model';
import { Category } from './categories/models/category.model';
import { Comfort } from './comfort/models/comfort.model';
import { Region } from './region/models/region.model';



@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName:BOT_NAME,
      useFactory:()=>({
        token:process.env.BOT_TOKEN,
        middlewares:[],
        inculde:[BotModule],
      }),
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),

      database: process.env.POSTGRES_DB,
      models: [ User ,Bot,Otp,Category,Comfort,Region],
      autoLoadModels: true,
      logging: false,
    }),
    // AdminModule,
    UsersModule,
    // UserWalletModule,
    // UserCardsModule,
    // StadiumsModule,
    // StadiumTimesModule,
    RegionModule,
    // OrdersModule,
    // MediaModule,
    // CommentsModule,
    ComfortModule,
    // ComfortStadiumModule,
    CategoriesModule,
    // DistrictModule,
    MailModule,
    BotModule,
    OtpModule,
  ],
  controllers: [],
  providers: [MailService],
})
export class AppModule {}
