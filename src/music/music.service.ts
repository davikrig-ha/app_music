import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicService {
  
  constructor(
    @InjectRepository(Music)
    private musicRepository: Repository<Music>,
  ) {}

 
  create(createMusicDto: CreateMusicDto): Promise<Music> {
    const music = this.musicRepository.create(createMusicDto);
    return this.musicRepository.save(music);
  }

  async update(id: string, updateMusicDto: UpdateMusicDto): Promise<Music> {
    const music = await this.musicRepository.preload({
      id: id,
      ...updateMusicDto,
    });
    if (!music) {
      throw new NotFoundException(`album ${id} not found`);
    }
    return this.musicRepository.save(music);
  }


  findAll(): Promise<Music[]> {
    return this.musicRepository.find();
  }

  findOne(id: string): Promise<Music> {
    return this.musicRepository.findOne(id);
  }

  async remove(id: string) {
   const music = await this.findOne(id);
   return this.musicRepository.remove(music);
  }
}
