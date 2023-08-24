import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/district.model';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District)
    private readonly comforModel: typeof District,
  ) {}

  async create(createComfortDto: CreateDistrictDto) {
    return this.comforModel.create(createComfortDto);
  }

  async findAll(): Promise<District[]> {
    return this.comforModel.findAll();
  }

  findOne(id: number): Promise<District> {
    return this.comforModel.findByPk(id);
  }

  async update(
    id: number,
    updateComfortDto: UpdateDistrictDto,
  ): Promise<District> {
    const updateComfort = await this.comforModel.update(updateComfortDto, {
      where: { id },
      returning: true,
    });
    return updateComfort[1][0].dataValues;
  }

  async remove(id: number): Promise<void> {
    const deletecomfort = await this.comforModel.destroy({
      where: { id },
    });
    if (deletecomfort === 0) {
      throw new Error(`Could not delete customer with id ${id}`);
    }
  }
}
