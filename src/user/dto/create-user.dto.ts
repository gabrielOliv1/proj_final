import { ApiProperty } from "@nestjs/swagger";
import {  IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Name serve para nomear um perfil.",
    example: "Gabriel"
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Lastname serve para exibir o sobrenome de uma pessoa.",
    example: "Oliveira"
  })
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: "Para exibir o email de uma conta.",
    example: "email@gmail.com"
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Para exibir a senha de uma conta.",
    example: "Senhadaconta"
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Para exibir a biografia de algum perfil.",
    example: "Eu sou o Gabriel e sou do rock."
  })
  about: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Para exibir a data de aniversário do dono do perfil.",
    example: "18/13"
  })
  birthday: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({
    description: "Para exibir quando o usuário foi criado"
  })
  createdAt: Date
}
