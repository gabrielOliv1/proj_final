import { Module } from '@nestjs/common';
import { followingService } from './following.service';
import { FollowingController } from './following.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[PrismaModule, PassportModule],
  controllers: [FollowingController],
  providers: [followingService, PrismaService]
})
export class FollowingModule {}
