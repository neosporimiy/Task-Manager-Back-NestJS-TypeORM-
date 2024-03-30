import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryColumn()
  boardId: string;

  @Column()
  boardName: string;

  @Column({ default: false })
  isCurrent: boolean;
}
