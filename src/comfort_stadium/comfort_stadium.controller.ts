import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CamfortStadiumService } from './comfort_stadium.service';
import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort_stadium.dto';
import { ApiOperation } from '@nestjs/swagger';
import { CamfortStadium } from './models/comfort_stadium.model';

@Controller('CamfortStadium-stadium')
export class CamfortStadiumStadiumController {
  constructor(private readonly CamfortStadiumStadiumService: CamfortStadiumService) {}

  @ApiOperation({ summary: 'create CamfortStadium' })
  @Post()
  async create(@Body() createCamfortStadiumDto: CreateComfortStadiumDto): Promise<CamfortStadium> {
    return this.CamfortStadiumStadiumService.create(createCamfortStadiumDto);
  }

  @ApiOperation({ summary: 'all CamfortStadium' })
  @Get()
  async findAll(): Promise<CamfortStadium[]> {
    return this.CamfortStadiumStadiumService.findAll();
  }

  @ApiOperation({ summary: 'id search CamfortStadium' })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<CamfortStadium> {
    return this.CamfortStadiumStadiumService.findOne(id);
  }

  @ApiOperation({ summary: 'update' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCamfortStadiumDto: UpdateComfortStadiumDto,
  ): Promise<CamfortStadium> {
    return this.CamfortStadiumStadiumService.update(+id, updateCamfortStadiumDto);
  }

  @ApiOperation({ summary: 'Delete' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.CamfortStadiumStadiumService.remove(+id);
  }
}
