import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumModule } from './album/album.module';
import { AlbumController } from './album/album.controller';
import { AlbumService } from './album/album.service';
import { Album } from './album/entities/album.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '170601',
      database: 'app_music',
      entities: [Album],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AlbumModule

  ],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AppModule {}
