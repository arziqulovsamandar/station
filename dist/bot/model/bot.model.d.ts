import { Model } from 'sequelize-typescript';
interface BotAtr {
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    status: boolean;
}
export declare class Bot extends Model<Bot, BotAtr> {
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    status: boolean;
}
export {};
