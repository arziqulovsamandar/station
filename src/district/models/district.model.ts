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
import { Region } from '../../region/models/region.model';

interface DistrictAtr {
  name: string;
  region_id: number;
}

@Table({ tableName: 'district' })
export class District extends Model<District, DistrictAtr> {
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

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  region_id: number;

  @BelongsTo(() => Region)
  region: Region;

//   @HasMany(() => Stadiums)
//   stadiums: Stadiums[];
}
