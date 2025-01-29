import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ProjectStatusEnum } from '../entities/project.entity';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(ProjectStatusEnum)
  status: ProjectStatusEnum;
}