import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './entities/music.entity';

@Module({
  controllers: [MusicController],
  providers: [MusicService],
  imports: [
    TypeOrmModule.forFeature([Music])],
    exports: [TypeOrmModule]
})
export class MusicModule {}