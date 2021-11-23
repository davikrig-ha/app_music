import { Album } from "src/album/entities/album.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Music {

    @PrimaryGeneratedColumn()
    id: string;
  
    @Column({ type: "varchar", length: "300" })
    name: string;

    @ManyToMany(() => Album, album => album.music, { cascade: ['remove'] })
    album: Album[];
}