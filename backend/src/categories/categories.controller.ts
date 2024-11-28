import { Controller, Post, Body, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: { name: string }) {
    return this.categoryService.create(createCategoryDto.name);
  }

  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }
}
