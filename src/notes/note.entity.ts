import { BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
}
