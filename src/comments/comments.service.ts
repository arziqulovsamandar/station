import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Caments } from './models/comment.model';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Caments)
    private readonly comforModel: typeof Caments,
  ) {}

  async create(createCamfortStadiumDto: CreateCommentDto) {
    return this.comforModel.create(createCamfortStadiumDto);
  }

  async findAll(): Promise<Caments[]> {
    return this.comforModel.findAll();
  }

  findOne(id: number): Promise<Caments> {
    return this.comforModel.findByPk(id);
  }

  async update(
    id: number,
    updateCamfortStadiumDto: UpdateCommentDto,
  ): Promise<Caments> {
    const updateCamfortStadium = await this.comforModel.update(
      updateCamfortStadiumDto,
      {
        where: { id },
        returning: true,
      },
    );
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
