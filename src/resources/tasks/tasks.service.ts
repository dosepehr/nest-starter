import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { Message } from 'src/interfaces/message.interface';
import { Project } from '../projects/entities/project.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  async create(data: CreateTaskDto): Promise<Message<Task>> {
    const { projectId, ...taskData } = data;
    const project = await this.projectRepository.findOneBy({ id: projectId });
    if (!project) throw new NotFoundException('No Project found');
    const newTask = this.taskRepository.create({
      ...taskData,
      project: project,
    });
    await this.taskRepository.save(newTask);
    return { message: 'Task added', status: true, data: newTask };
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, data: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
