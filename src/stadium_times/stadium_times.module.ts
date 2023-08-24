import { Module } from '@nestjs/common';
import { StadiumTimesService } from './stadium_times.service';
import { StadiumTimesController } from './stadium_times.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StadiumTime } from './models/stadium_time.model';
import { Stadium } from '../stadiums/models/stadium.model';

@Module({
  imports: [SequelizeModule.forFeature([StadiumTime,Stadium])],
  controllers: [StadiumTimesController],
  providers: [StadiumTimesService],
  exports: [StadiumTimesService],
})
export class StadiumTimesModule {}
