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
import { StadiumTime } from '../../stadium_times/models/stadium_time.model';
import { UserWallet } from '../../user_wallet/models/user_wallet.model';

interface OrderAtr {
  user_walet_id: number;
  stadium_times_id:number;
  date:Date;
  createdAt:Date;
  
}

@Table({ tableName: 'order' })
export class Order extends Model<Order, OrderAtr> {
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
    description: 'order date',
  })
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  date: Date;

  @ApiProperty({
    example: 'Date',
    description: 'order date',
  })
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  createdAt: Date;

  //   @ForeignKey(() => StadiumTime)
  //   @Column({
  //     type: DataType.INTEGER,
  //     onDelete: 'CASCADE',
  //   })
  //   stadium_times_id: number;

  //   @BelongsTo(() => StadiumTime)
  //   stadiumtimes: StadiumTime;

//   @ForeignKey(() => UserWallet)
//   @Column({
//     type: DataType.INTEGER,
//     onDelete: 'CASCADE',
//   })
//   user_walet_id: number;

//   @BelongsTo(() => UserWallet)
//   userWallet: UserWallet;

  //   @HasMany(() => Category)
  //   categories: Category[];
}
