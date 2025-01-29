import { Task } from 'src/resources/tasks/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum ProjectStatusEnum {
  Enable = 'nable',
  Disable = 'disable',
}
@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ProjectStatusEnum,
    default: ProjectStatusEnum.Enable,
  })
  status: ProjectStatusEnum;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}
