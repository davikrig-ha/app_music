import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get()
  findAll() {
    return this.musicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicService.findOne(id);
  }

  @Put()
  create(@Param('id') id: string, @Body() createAlbum: CreateMusicDto)  {
  return this.musicService.create(createAlbum);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateMusicDto: UpdateMusicDto) {
  return this.musicService.update(id, updateMusicDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.musicService.remove(id);
}
}
