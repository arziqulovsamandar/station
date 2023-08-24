import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiOperation } from '@nestjs/swagger';
import { District } from './models/district.model';

@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: 'create comfort' })
  @Post()
  async create(@Body() createComfortDto: CreateDistrictDto): Promise<District> {
    return this.districtService.create(createComfortDto);
  }

  @ApiOperation({ summary: 'all comfort' })
  @Get()
  async findAll(): Promise<District[]> {
    return this.districtService.findAll();
  }

  @ApiOperation({ summary: 'id search comfort' })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<District> {
    return this.districtService.findOne(id);
  }

  @ApiOperation({ summary: 'update' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateComfortDto: UpdateDistrictDto,
  ): Promise<District> {
    return this.districtService.update(+id, updateComfortDto);
  }

  @ApiOperation({ summary: 'Delete' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.districtService.remove(+id);
  }
}
