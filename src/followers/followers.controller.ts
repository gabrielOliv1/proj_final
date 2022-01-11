import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createFollowerDto: CreateFollowerDto) {
    return this.followersService.create(createFollowerDto);
  }

  @Get()
  findAll() {
    return this.followersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateFollowerDto: UpdateFollowerDto) {
    return this.followersService.update(+id, updateFollowerDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.followersService.remove(+id);
  }
}
