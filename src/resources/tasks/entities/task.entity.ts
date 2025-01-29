import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatusEnum {
  Done = 'done',
  OnProgress = 'onProgress',
  NotStarted = 'notStarted',
}
@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatusEnum,
    default: TaskStatusEnum.NotStarted,
  })
  status: TaskStatusEnum;
}
