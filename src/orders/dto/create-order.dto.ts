import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateOrderDto {
  @ApiProperty({
    example: 'bunyodkor',
    description: 'categories',
  })
  user_walet_id: number;

  @ApiProperty({
    example: '1',
    description: 'categories id',
  })
  parent_id: number;

  @ApiProperty({
    example: 'Date',
    description: 'categories date',
  })
  date: Date;

  @ApiProperty({
    example: 'Date',
    description: 'categories date',
  })
  createdAt: Date;
}
