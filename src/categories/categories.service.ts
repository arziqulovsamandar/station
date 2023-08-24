import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private readonly categoryModel: typeof Category,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto);
  }

  findAll() {
    return this.categoryModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.categoryModel.findByPk(id);
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const upcate = await this.categoryModel.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
    return upcate[1][0].dataValues;
  }


  async remove(id: number):Promise<void> {
    const deletecategory=await this.categoryModel.destroy({
      where:{id}
    })
    if(deletecategory===0){
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
