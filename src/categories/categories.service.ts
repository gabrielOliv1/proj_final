import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.prisma.category.create({
      data: {... createCategoryDto }
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return await this.prisma.category.update({
      data: {... updateCategoryDto },
        where: { id }
    });
  }

  async remove(id: number): Promise<Category> {
    return await this.prisma.category.delete({
      where: { id }
    });
  }
}
