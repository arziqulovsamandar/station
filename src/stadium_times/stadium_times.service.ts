import { Injectable } from '@nestjs/common';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StadiumTime } from './models/stadium_time.model';

@Injectable()
export class StadiumTimesService {
  constructor(
    @InjectModel(StadiumTime)
    private readonly categoryModel: typeof StadiumTime,
  ) {}
  create(createCategoryDto: CreateStadiumTimeDto) {
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
    updateCategoryDto: UpdateStadiumTimeDto,
  ): Promise<StadiumTime> {
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
