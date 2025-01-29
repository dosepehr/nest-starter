import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ProjectStatusEnum {
  Enable = 'enable',
  Disable = 'Disable',
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
}
