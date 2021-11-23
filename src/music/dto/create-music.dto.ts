import { IsNotEmpty } from 'class-validator';
import { Album } from 'src/album/entities/album.entity';

export class CreateMusicDto {

    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    album: Album[];
}
