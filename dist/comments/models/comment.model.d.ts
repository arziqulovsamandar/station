import { Model } from 'sequelize-typescript';
interface CamentsAtr {
    user_id: number;
    stadium_id: number;
    impression: string;
}
export declare class Caments extends Model<Caments, CamentsAtr> {
    id: number;
    impression: string;
}
export {};
