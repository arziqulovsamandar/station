import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './models/region.model';
import { ApiOperation } from '@nestjs/swagger';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({summary:"create Region"})
  @Post()
  create(@Body() createRegionDto: CreateRegionDto):Promise<Region> {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({summary:"all region"})
  @Get()
  findAll() :Promise<Region[]>{
    return this.regionService.findAll();
  }

  @ApiOperation({summary:"id search region"})
  @Get(':id')
  findOne(@Param('id') id: number):Promise<Region> {
    return this.regionService.findOne(+id);
  }

  @ApiOperation({summary:"update"})
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateRegionDto: UpdateRegionDto):Promise<Region> {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({summary:'Delete'})
  @Delete(':id')
  remove(@Param('id') id: number):Promise<void> {
    return this.regionService.remove(+id);
  }
}
