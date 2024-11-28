import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoryService;
    constructor(categoryService: CategoriesService);
    create(createCategoryDto: {
        name: string;
    }): Promise<import("./category.model").Category>;
    findAll(): Promise<import("./category.model").Category[]>;
}
