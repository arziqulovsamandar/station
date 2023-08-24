import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stadium } from '../../stadiums/models/stadium.model';

interface CategoryAtr {
  start_time: Date;
  end_time:Date;
  price:number;
  stadium_id: number;
}

@Table({ tableName: 'stadium_time' })
export class StadiumTime extends Model<StadiumTime, CategoryAtr> {
  @ApiProperty({
    example: '1',
    description: 'categories id',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Date',
    description: 'Date',
  })
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  start_time: Date;

  @ApiProperty({
    example: 'Date',
    description: 'Date',
  })
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  end_time: Date;

  @ApiProperty({
    example: 'price',
    description: 'pric',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  price: number;

//   @ForeignKey(() => Stadium)
//   @Column({
//     type: DataType.INTEGER,
//     onDelete: 'CASCADE',
//   })
//   stadium_id: number;

//   @BelongsTo(() => Stadium)
//   categorie: Category;

//   @HasMany(() => Category)
//   stadium: Stadium[];
}
