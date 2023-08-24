import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserCard } from '../../user_cards/models/user_card.model';
import { Stadium } from '../../stadiums/models/stadium.model';

interface CamentsAtr {
  user_id:number,
  stadium_id:number;
  impression:string
}

@Table({ tableName: 'caments' })
export class Caments extends Model<Caments, CamentsAtr> {
  @ApiProperty({
    example: '1',
    description: 'comfort id',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  //   @ForeignKey(() => UserCard)
  //   @Column({
  //     type: DataType.INTEGER,
  //     onDelete: 'CASCADE',
  //   })
  //   parent_id: number;

  //   @BelongsTo(() => UserCard)
  //   user_card: UserCard;

//   @ForeignKey(() => Stadium)
//   @Column({
//     type: DataType.INTEGER,
//     onDelete: 'CASCADE',
//   })
//   parent_id: number;

//   @BelongsTo(() => Stadium)
//   stadium: Stadium;

  @ApiProperty({
    example: 'impression',
    description: 'coments impression',
  })
  @Column({
    type: DataType.STRING,
  })
  impression: string;
}
