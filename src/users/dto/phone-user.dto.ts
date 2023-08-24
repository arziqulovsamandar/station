import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class PhoneUserDto{

    @ApiProperty({
        example:'9981234567',
        description:'Foydalanuvchi telefon raqmi'
    })
    @IsNotEmpty()
    @IsPhoneNumber()
    phone:string;
}