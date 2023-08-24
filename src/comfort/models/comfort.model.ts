import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { CamfortStadium } from '../../comfort_stadium/models/comfort_stadium.model';

interface ComfortAtr {
  name: string;
}

@Table({ tableName: 'comfort' })
export class Comfort extends Model<Comfort, Comfort> {
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

  @ApiProperty({
    example: 'comfort',
    description: 'comfort',
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => CamfortStadium)
  camfort_Stadium: CamfortStadium[];
}
