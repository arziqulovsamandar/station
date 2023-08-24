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

interface MediaAtr {
  photo: string;
  stadium_id: number;
  description:Text
}

@Table({ tableName: 'media' })
export class Media extends Model<Media, Media> {
  @ApiProperty({
    example: '1',
    description: 'media id',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: '.pg',
    description: 'media photo',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  photo: string;

  //   @ForeignKey(() => Stadium)
  //   @Column({
  //     type: DataType.INTEGER,
  //     onDelete: 'CASCADE',
  //   })
  //   stadium_id: number;

  //   @BelongsTo(() => Stadium)
  //   stadium: Stadium;

  @ApiProperty({
    example: 'txt',
    description: 'media txt',
  })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: Text;
}
