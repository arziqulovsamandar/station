import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Order } from './models/order.model';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({ summary: 'create categories' })
  @Post()
  create(@Body() createCategoryDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'all categories' })
  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @ApiOperation({})
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update category' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatecategoryDto: UpdateOrderDto,
  ): Promise<Order> {
    return this.ordersService.update(id, updatecategoryDto);
  }

  @ApiOperation({ summary: 'Delete category' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.ordersService.remove(+id);
  }
}
