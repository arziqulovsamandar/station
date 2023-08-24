import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMediaDto {
  @ApiProperty({
    example: 'bunyodkor',
    description: 'categories',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '1',
    description: 'categories id',
  })
  stadium_id: number;

  @ApiProperty({
    example: 'bunyodkor',
    description: 'categories',
  })
  @IsNotEmpty()
  @IsString()
  description: Text;
}
