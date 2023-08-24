import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
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
  parent_id: number;
}
