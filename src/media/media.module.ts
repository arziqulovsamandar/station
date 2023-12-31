import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Media } from './models/media.model';
import { Stadium } from '../stadiums/models/stadium.model';

@Module({
  imports: [SequelizeModule.forFeature([Media,Stadium])],
  controllers: [MediaController],
  providers: [MediaService],
  exports: [MediaService],
})
export class MediaModule {}
