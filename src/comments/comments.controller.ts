import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Caments } from './models/comment.model';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({ summary: 'create CamfortStadium' })
  @Post()
  async create(
    @Body() createCamfortStadiumDto: CreateCommentDto,
  ): Promise<Caments> {
    return this.commentsService.create(createCamfortStadiumDto);
  }

  @ApiOperation({ summary: 'all CamfortStadium' })
  @Get()
  async findAll(): Promise<Caments[]> {
    return this.commentsService.findAll();
  }

  @ApiOperation({ summary: 'id search CamfortStadium' })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Caments> {
    return this.commentsService.findOne(id);
  }

  @ApiOperation({ summary: 'update' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCamfortStadiumDto: UpdateCommentDto,
  ): Promise<Caments> {
    return this.commentsService.update(
      +id,
      updateCamfortStadiumDto,
    );
  }

  @ApiOperation({ summary: 'Delete' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.commentsService.remove(+id);
  }
}
