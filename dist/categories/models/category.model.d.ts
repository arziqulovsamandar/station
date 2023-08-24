import { Model } from 'sequelize-typescript';
interface CategoryAtr {
    name: string;
    parent_id: number;
}
export declare class Category extends Model<Category, CategoryAtr> {
    id: number;
    name: string;
    parent_id: number;
    categorie: Category;
    categories: Category[];
}
export {};
