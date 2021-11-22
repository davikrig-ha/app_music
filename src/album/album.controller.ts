import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  findAll() {
    return this.albumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumService.findOne(id);
  }

  @Put()
  create(@Param('id') id: string, @Body() createAlbum: CreateAlbumDto)  {
  return this.albumService.create(createAlbum);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
  return this.albumService.update(id, updateAlbumDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.albumService.remove(id);
}
}
