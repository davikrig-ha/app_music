import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


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
  
 @Column({ type: "varchar", length: "5000"})
 musics: string;

}
