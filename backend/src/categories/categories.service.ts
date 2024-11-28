import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }

  async create(name: string): Promise<Category> {
    return this.categoryModel.create({ name });
  }
}
