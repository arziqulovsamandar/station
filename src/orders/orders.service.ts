import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private readonly categoryModel: typeof Order,
  ) {}
  create(createCategoryDto: CreateOrderDto) {
    return this.categoryModel.create(createCategoryDto);
  }

  findAll() {
    return this.categoryModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.categoryModel.findByPk(id);
  }

  async update(
    id: number,
    updateCategoryDto: UpdateOrderDto,
  ): Promise<Order> {
    const upcate = await this.categoryModel.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
    return upcate[1][0].dataValues;
  }

  async remove(id: number): Promise<void> {
    const deletecategory = await this.categoryModel.destroy({
      where: { id },
    });
    if (deletecategory === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
