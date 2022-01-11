import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { followingService } from './following.service';
import { CreateFollowingDto } from './dto/create-following.dto';
import { UpdateFollowingDto } from './dto/update-following.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('following')
export class FollowingController {
  constructor(private readonly followingService: followingService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createFollowingDto: CreateFollowingDto) {
    return this.followingService.create(createFollowingDto);
  }

  @Get()
  findAll() {
    return this.followingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followingService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateFollowingDto: UpdateFollowingDto) {
    return this.followingService.update(+id, updateFollowingDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.followingService.remove(+id);
  }
}
