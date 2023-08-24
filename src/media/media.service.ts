import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Media } from './models/media.model';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media)
    private readonly categoryModel: typeof Media,
  ) {}
  create(createCategoryDto: CreateMediaDto) {
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
    updateCategoryDto: UpdateMediaDto,
  ): Promise<Media> {
    const upcate = await this.categoryModel.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
    return upcate[1][0].dataValues;
  }

  async remove(id: number): Promise<void> {
    const deletecategory = await this.categoryModel.destroy({
      where: { id },
    });
    if (deletecategory === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
