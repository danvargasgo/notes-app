import { Model } from 'sequelize-typescript';
export declare class Note extends Model {
    title: string;
    content: string;
    archived: boolean;
    category: string;
}
