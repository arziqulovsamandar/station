import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StadiumTimesService } from './stadium_times.service';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { ApiOperation } from '@nestjs/swagger';
import { StadiumTime } from './models/stadium_time.model';

@Controller('stadium-times')
export class StadiumTimesController {
  constructor(private readonly stadiumTimesService: StadiumTimesService) {}

  @ApiOperation({ summary: 'create categories' })
  @Post()
  create(@Body() createCategoryDto: CreateStadiumTimeDto): Promise<StadiumTime> {
    return this.stadiumTimesService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'all categories' })
  @Get()
  findAll(): Promise<StadiumTime[]> {
    return this.stadiumTimesService.findAll();
  }

  @ApiOperation({})
  @Get(':id')
  findOne(@Param('id') id: string): Promise<StadiumTime> {
    return this.stadiumTimesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update category' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatecategoryDto: UpdateStadiumTimeDto,
  ): Promise<StadiumTime> {
    return this.stadiumTimesService.update(id, updatecategoryDto);
  }

  @ApiOperation({ summary: 'Delete category' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.stadiumTimesService.remove(+id);
  }
}
