import { Module } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { FollowersController } from './followers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[PrismaModule, PassportModule],
  controllers: [FollowersController],
  providers: [FollowersService, PrismaService]
})
export class FollowersModule {}
