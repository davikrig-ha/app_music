import { IsNotEmpty } from 'class-validator';

export class CreateAlbumDto {
    
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    author: string;
    @IsNotEmpty()
    lancamento: string;
    @IsNotEmpty()
    music: string;
}
