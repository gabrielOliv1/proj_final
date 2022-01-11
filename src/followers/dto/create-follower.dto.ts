import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFollowerDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    followerId: number
}
