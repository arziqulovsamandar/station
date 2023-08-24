import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
  @ApiProperty({
    example: 'emailo1@.gmail.com',
    description: 'Foydalanuvchi elektron pochtasi',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'emailo1@.gmail.com',
    description: 'Foydalanuvchi passwordi',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}