import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProjectStatusEnum } from 'src/resources/projects/entities/project.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsEnum(ProjectStatusEnum)
  @IsOptional()
  status: ProjectStatusEnum;
}
