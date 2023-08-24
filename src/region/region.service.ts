import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region)
    private readonly regionModel: typeof Region,
  ) {}
  create(createRegionDto: CreateRegionDto): Promise<Region> {
    return this.regionModel.create(createRegionDto);
  }

  findAll(): Promise<Region[]> {
    return this.regionModel.findAll();
  }

  findOne(id: number): Promise<Region> {
    return this.regionModel.findByPk(id);
  }

  async update(id: number, updateRegionDto: UpdateRegionDto): Promise<Region> {
    const region=await this.regionModel.update(updateRegionDto,{
      where:{id},
      returning:true
    })
    return region[1][0].dataValues
  }

  async remove(id: number):Promise<void> {
    const regiondelete=await this.regionModel.destroy({
      where:{id}
    })
    if(regiondelete===0){
      throw new Error(`Could not delete customer with id ${id}`);
    }
  }
}
