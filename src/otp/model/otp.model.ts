
import { ApiProperty } from "@nestjs/swagger";
import { Table,Model, Column, DataType } from "sequelize-typescript";

interface OtpAtr{
    id:string;
    otp:string;
    expiration_time:Date;
    verified:boolean;
    check:string;
}

@Table({ tableName: 'otp' })
export class Otp extends Model<Otp, OtpAtr> {
  @ApiProperty({
    example: '112988-sdf4-dfdf-ghde7',
    description: 'OTP ID',
  })
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
  })
  id: string;

  @ApiProperty({
    example: '1978',
    description: 'OTP',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  otp: string;

  @ApiProperty({
    example: '2023-02-27T08:10:10.000Z',
    description: 'expiration time',
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  expiration_time: Date;

  @ApiProperty({
    example: 'false',
    description: 'verified',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  verified: boolean;

  @ApiProperty({
    example: '99981234567',
    description: 'check phone number',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  check: string;
}
