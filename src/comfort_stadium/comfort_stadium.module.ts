import { Module } from '@nestjs/common';
import { CamfortStadiumService} from './comfort_stadium.service';
import { CamfortStadiumStadiumController } from './comfort_stadium.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CamfortStadium } from './models/comfort_stadium.model';
import { Comfort } from '../comfort/models/comfort.model';
import { ComfortService } from '../comfort/comfort.service';

@Module({
  imports: [SequelizeModule.forFeature([CamfortStadium,Comfort])],
  controllers: [CamfortStadiumStadiumController],
  providers: [CamfortStadiumService],
  exports: [CamfortStadiumService],
})
export class ComfortStadiumModule {}
