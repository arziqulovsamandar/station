import { Injectable } from '@nestjs/common';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comfort } from './models/comfort.model';

@Injectable()
export class ComfortService {
  constructor(
    @InjectModel(Comfort)
    private readonly comforModel:typeof Comfort
  ){}

  async create(createComfortDto: CreateComfortDto) {
    return this.comforModel.create(createComfortDto)
  }

  async findAll():Promise<Comfort[]> {
    return this.comforModel.findAll();
  }

  findOne(id: number):Promise<Comfort> {
    return this.comforModel.findByPk(id)
  }

  async update(
    id: number, 
    updateComfortDto: UpdateComfortDto):Promise<Comfort> {
     const updateComfort=await this.comforModel.update(updateComfortDto,{
      where:{id},
      returning:true
     })
    return updateComfort[1][0].dataValues
  }

  async remove(id: number) :Promise<void>{
    const deletecomfort=await this.comforModel.destroy({
      where:{id}
    })
    if(deletecomfort===0){
      throw new Error(`Could not delete customer with id ${id}`);
    }
    
  }
}
