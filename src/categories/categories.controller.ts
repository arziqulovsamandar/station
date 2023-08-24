import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './models/category.model';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'create categories' })
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'all categories' })
  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @ApiOperation({})
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findOne(+id);
  }

  @ApiOperation({summary:"Update category"})
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatecategoryDto: UpdateCategoryDto,
  ):Promise<Category> {
    return this.categoriesService.update(id, updatecategoryDto);
  }

  @ApiOperation({summary:"Delete category"})
  @Delete(':id')
  async remove(@Param('id') id: string):Promise<void> {
    return this.categoriesService.remove(+id);
  }
}
