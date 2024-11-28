import { Category } from './category.model';
export declare class CategoriesService {
    private categoryModel;
    constructor(categoryModel: typeof Category);
    findAll(): Promise<Category[]>;
    create(name: string): Promise<Category>;
}
