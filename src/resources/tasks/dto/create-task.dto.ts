import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TaskStatusEnum } from '../entities/task.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status: TaskStatusEnum;

  @IsNotEmpty()
  projectId: number;
}
