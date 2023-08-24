// export class ComfortStadium {}
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
import { Comfort } from '../../comfort/models/comfort.model';

interface CamfortAtr {
  name: string;
  parent_id: number;
}

@Table({ tableName: 'camfort' })
export class CamfortStadium extends Model<CamfortStadium, CamfortAtr> {
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

  @ForeignKey(() => Comfort)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  comfort_id: number;

  @BelongsTo(() => Comfort)
  comfort: Comfort;

//   @HasMany(() => Category)
//   categories: Category[];
}
