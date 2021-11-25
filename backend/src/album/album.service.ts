import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';



@Injectable()
export class AlbumService {

  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
  ) { }



  create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const album = this.albumRepository.create(createAlbumDto);
    return this.albumRepository.save(album);
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    const album = await this.albumRepository.preload({
      id: id,
      ...updateAlbumDto,
    });
    if (!album) {
      throw new NotFoundException(`album ${id} not found`);
    }
    return this.albumRepository.save(album);
  }

  findByName(query): Promise<Album[]> {
    return this.albumRepository.find({
      where: {
        name: Like(`${query.name}%`),
        author: Like(`${query.author}%`)
      }
    });
  }

  findAll(): Promise<Album[]> {
    return this.albumRepository.find();
  }

  findOne(id: string): Promise<Album> {
    return this.albumRepository.findOne(id);
  }

  async remove(id: string) {
    const album = await this.findOne(id);
    return this.albumRepository.remove(album);
  }



}
