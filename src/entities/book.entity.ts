import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  published: boolean;
}
