import { IsNotEmpty } from 'class-validator';
import { Music } from 'src/music/entities/music.entity';

export class CreateAlbumDto {
    
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    author: string;
    @IsNotEmpty()
    lancamento: string;
    @IsNotEmpty()
    music: Music[];
}
