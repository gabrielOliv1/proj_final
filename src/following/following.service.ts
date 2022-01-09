import { Injectable } from '@nestjs/common';
import { Following } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFollowingDto } from './dto/create-following.dto';
import { UpdateFollowingDto } from './dto/update-following.dto';

@Injectable()
export class followingService {
  constructor(private prisma: PrismaService) {}
  async create(createfollowingDto: CreateFollowingDto): Promise<Following> {
    return await this.prisma.following.create({
      data: { ...createfollowingDto },
    });
  }

  async findAll(): Promise<Following[]> {
    return await this.prisma.following.findMany();
  }

  async findOne(id: number): Promise<Following> {
    return await this.prisma.following.findUnique({ 
      where: {
        id
      },
    });
  }

  async update(id: number, updatefollowingDto: UpdateFollowingDto): Promise<Following> {
    return await this.prisma.following.update({
      data: { ...updatefollowingDto },
      where: { id },
    });
  }

  async remove(id: number): Promise<Following> {
    return await this.prisma.following.delete({
      where: {
        id
      },
    });
  }
}