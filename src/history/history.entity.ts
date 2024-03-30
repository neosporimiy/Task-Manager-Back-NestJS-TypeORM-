import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class History {
  @PrimaryColumn()
  id: string;

  @Column()
  taskId: number;
  
  @Column()
  changeType: string;

  @Column()
  changeDescription: string;

  @Column()
  timestamp: string;
}