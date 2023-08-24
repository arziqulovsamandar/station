import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Media } from './models/media.model';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @ApiOperation({ summary: 'create categories' })
  @Post()
  create(@Body() createCategoryDto: CreateMediaDto): Promise<Media> {
    return this.mediaService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'all categories' })
  @Get()
  findAll(): Promise<Media[]> {
    return this.mediaService.findAll();
  }

  @ApiOperation({})
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Media> {
    return this.mediaService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update category' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatecategoryDto: UpdateMediaDto,
  ): Promise<Media> {
    return this.mediaService.update(id, updatecategoryDto);
  }

  @ApiOperation({ summary: 'Delete category' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.mediaService.remove(+id);
  }
}
