import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFollowingDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    followingId: number
}
