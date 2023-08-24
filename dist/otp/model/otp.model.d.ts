import { Model } from "sequelize-typescript";
interface OtpAtr {
    id: string;
    otp: string;
    expiration_time: Date;
    verified: boolean;
    check: string;
}
export declare class Otp extends Model<Otp, OtpAtr> {
    id: string;
    otp: string;
    expiration_time: Date;
    verified: boolean;
    check: string;
}
export {};
