import { Injectable } from '@nestjs/common';
import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort_stadium.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CamfortStadium } from './models/comfort_stadium.model';

@Injectable()
export class CamfortStadiumService {
  constructor(
    @InjectModel(CamfortStadium)
    private readonly comforModel: typeof CamfortStadium,
  ) {}

  async create(createCamfortStadiumDto: CreateComfortStadiumDto) {
    return this.comforModel.create(createCamfortStadiumDto);
  }

  async findAll(): Promise<CamfortStadium[]> {
    return this.comforModel.findAll();
  }

  findOne(id: number): Promise<CamfortStadium> {
    return this.comforModel.findByPk(id);
  }

  async update(
    id: number,
    updateCamfortStadiumDto: UpdateComfortStadiumDto,
  ): Promise<CamfortStadium> {
    const updateCamfortStadium = await this.comforModel.update(updateCamfortStadiumDto, {
      where: { id },
      returning: true,
    });
    return updateCamfortStadium[1][0].dataValues;
  }

  async remove(id: number): Promise<void> {
    const deleteCamfortStadium = await this.comforModel.destroy({
      where: { id },
    });
    if (deleteCamfortStadium === 0) {
      throw new Error(`Could not delete customer with id ${id}`);
    }
  }
}
