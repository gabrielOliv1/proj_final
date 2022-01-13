import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';
import { JwtPayload } from 'src/auth/jwt.strategy';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.UserCreateInput): Promise<User> {
    data.password = await bcrypt.hash(data.password, 10);
    return await this.prisma.user.create({ data });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async findByLogin(login: CreateAuthDto): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: login.email,
      },
    });

    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    // console.log(login.password);
    // console.log(user.password);
    const CompararSenha = await bcrypt.compare(login.password, user.password);
    // console.log(CompararSenha);

    if (!CompararSenha) {
      throw new HttpException('Senha inválida', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async validate(PayLoad: JwtPayload): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: PayLoad.email,
      },
    });

    if (!user) {
      throw new HttpException('Token não autorizado!', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return await this.prisma.user.update({ data, where: { id } });
  }

  async remove(id: number): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });
  }
}
