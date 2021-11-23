import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumModule } from './album/album.module';
import { AlbumController } from './album/album.controller';
import { AlbumService } from './album/album.service';
import { Album } from './album/entities/album.entity';
import { MusicModule } from './music/music.module';
import { MusicController } from './music/music.controller';
import { MusicService } from './music/music.service';
import { Music } from './music/entities/music.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '170601',
      database: 'app_music',
      entities: [Album, Music],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AlbumModule,
    MusicModule

  ],
  controllers: [AlbumController, MusicController],
  providers: [AlbumService, MusicService],
})
export class AppModule {}
