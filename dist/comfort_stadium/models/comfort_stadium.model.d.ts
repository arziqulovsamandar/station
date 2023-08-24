import { Model } from 'sequelize-typescript';
import { Comfort } from '../../comfort/models/comfort.model';
interface CamfortAtr {
    name: string;
    parent_id: number;
}
export declare class CamfortStadium extends Model<CamfortStadium, CamfortAtr> {
    id: number;
    name: string;
    comfort_id: number;
    comfort: Comfort;
}
export {};
