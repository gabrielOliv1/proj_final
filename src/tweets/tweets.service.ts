import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Tweets } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetsService {
  constructor(private prisma: PrismaService) {}
  async create(createTweetDto: CreateTweetDto): Promise<Tweets> {
    return await this.prisma.tweets.create({
      data: { ...createTweetDto },
    });
  }

  async findAll(): Promise<Tweets[]> {
    return await this.prisma.tweets.findMany();
  }

  async findOne(id: number): Promise<Tweets> {
    return await this.prisma.tweets.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTweetDto: UpdateTweetDto): Promise<Tweets> {
    return await this.prisma.tweets.update({
      data: {
        ...updateTweetDto,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<Tweets> {
    return await this.prisma.tweets.delete({
      where: {
        id,
      },
    });
  }
}
