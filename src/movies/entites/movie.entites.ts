import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('int')
  year: number;

  @Column('array')
  genres: string[];
}
