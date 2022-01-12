import { IsAlphanumeric, IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    // @IsNotEmpty()
    // @IsString()
    // name: string;

    // @IsNotEmpty()
    // @IsString()
    // lastname: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    // @IsNotEmpty()
    // @IsString()
    // about: string;

    // @IsNotEmpty()
    // @IsString()
    // birthday: string;

    // @IsNotEmpty()
    // @IsDate()
    // createdAt: Date;
}
