import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProjectStatusEnum } from '../entities/project.entity';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(ProjectStatusEnum)
  @IsOptional()
  status: ProjectStatusEnum;
}
