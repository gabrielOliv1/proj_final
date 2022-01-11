import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[PrismaModule, PassportModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService]
})
export class CategoriesModule {}
