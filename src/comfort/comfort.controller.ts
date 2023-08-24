import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ComfortService } from './comfort.service';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { Comfort } from './models/comfort.model';
import { ApiOperation } from '@nestjs/swagger';

@Controller('comfort')
export class ComfortController {
  constructor(private readonly comfortService: ComfortService) {}

  @ApiOperation({summary:"create comfort"})
  @Post()
  async create(@Body() createComfortDto: CreateComfortDto):Promise<Comfort> {
    return this.comfortService.create(createComfortDto)
  }

  @ApiOperation({summary:"all comfort"})
  @Get()
  async findAll():Promise<Comfort[]> {
    return this.comfortService.findAll();
  }

  @ApiOperation({summary:"id search comfort"})
  @Get(':id')
  findOne(@Param('id') id: number):Promise<Comfort> {
    return this.comfortService.findOne(id);
  }

  @ApiOperation({summary:'update'})
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateComfortDto: UpdateComfortDto):Promise<Comfort> {
    return this.comfortService.update(+id, updateComfortDto);
  }

  @ApiOperation({summary:'Delete'})
  @Delete(':id')
  async remove(@Param('id') id: string):Promise<void> {
    return this.comfortService.remove(+id);
  }
}
