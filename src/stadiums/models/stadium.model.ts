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

interface CategoryAtr {
  name: string;
  parent_id: number;
}

@Table({ tableName: 'category' })
export class Stadium extends Model<Stadium, CategoryAtr> {
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
    example: 'bunyodkor',
    description: 'categories name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

//   @ForeignKey(() => Category)
//   @Column({
//     type: DataType.INTEGER,
//     onDelete: 'CASCADE',
//   })
//   parent_id: number;

//   @BelongsTo(() => Category)
//   categorie: Category;

//   @HasMany(() => Category)
//   categories: Category[];
}
