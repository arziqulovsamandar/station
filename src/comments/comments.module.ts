import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stadium } from '../stadiums/models/stadium.model';
import { UserCard } from '../user_cards/models/user_card.model';

@Module({
  imports: [SequelizeModule.forFeature([Comment,Stadium,UserCard])],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
