import { ApiProperty } from "@nestjs/swagger";

import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/models/district.model";

interface RegionAtr{
    name:string
}

@Table({ tableName: 'region' })
export class Region extends Model<Region, RegionAtr> {
  @ApiProperty({
    example: '1',
    description: 'region id',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Toshkent',
    description: 'region name',
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

    @HasMany(() => District)
    district: District[];
}
