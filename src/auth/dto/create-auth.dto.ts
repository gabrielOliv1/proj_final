import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string
}
