import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDistrictDto {
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
  region_id: number;
}
