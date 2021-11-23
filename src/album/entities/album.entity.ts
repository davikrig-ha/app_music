import { Music } from 'src/music/entities/music.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';



@Entity()
export class Album {
  
 @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "varchar", length: "300" })
  name: string;

  @Column({ type: "varchar", length: "200"})
  author: string;

  @Column({type: "varchar", length: "4"})
  lancamento: string;
  
  @ManyToMany(type => Music, music => music.album, { cascade: ['insert'], eager: true })
  @JoinTable({
    name: 'music_album_music',
    joinColumn: { name: 'album_id' },
    inverseJoinColumn: { name: 'music_id' }})
    music: Music[];
}
