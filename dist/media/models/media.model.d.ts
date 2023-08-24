import { Model } from 'sequelize-typescript';
export declare class Media extends Model<Media, Media> {
    id: number;
    photo: string;
    description: Text;
}
