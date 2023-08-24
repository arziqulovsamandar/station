import { Model } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
interface RegionAtr {
    name: string;
}
export declare class Region extends Model<Region, RegionAtr> {
    id: number;
    name: string;
    district: District[];
}
export {};
