import { Model } from 'sequelize-typescript';
import { Region } from '../../region/models/region.model';
interface DistrictAtr {
    name: string;
    region_id: number;
}
export declare class District extends Model<District, DistrictAtr> {
    id: number;
    name: string;
    region_id: number;
    region: Region;
}
export {};
