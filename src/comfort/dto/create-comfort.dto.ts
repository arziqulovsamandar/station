import { ApiProperty } from "@nestjs/swagger";

export class CreateComfortDto {
      @ApiProperty({
        example:'comfort',
        description:'comfort '
    })
    name:string
}
