import { Model } from 'sequelize-typescript';
import { CamfortStadium } from '../../comfort_stadium/models/comfort_stadium.model';
export declare class Comfort extends Model<Comfort, Comfort> {
    id: number;
    name: string;
    camfort_Stadium: CamfortStadium[];
}
