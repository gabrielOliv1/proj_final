import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Followers } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';

@Injectable()
export class FollowersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createFollowerDto: CreateFollowerDto): Promise<Followers> {
    return await this.prisma.followers.create({
      data: {... createFollowerDto} 
    });
  }

  async findAll(): Promise<Followers[]> {
    return await this.prisma.followers.findMany();
  }

  async findOne(id: number): Promise<Followers> {
    return await this.prisma.followers.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateFollowerDto: UpdateFollowerDto): Promise<Followers> {
    return await this.prisma.followers.update({
      data: {
        ...UpdateFollowerDto
      },
      where: {
        id
      }
    });
  }

  async remove(id: number): Promise<Followers> {
    return await this.prisma.followers.delete({
      where: {
        id
      }
    });
  }
}
