import { IsNotEmpty } from 'class-validator';
import { ProjectStatusEnum } from '../entities/project.entity';

export class CreateProjectDto {
  @IsNotEmpty()
  name: string;

  status: ProjectStatusEnum;
}
