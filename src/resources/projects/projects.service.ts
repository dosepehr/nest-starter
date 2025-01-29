import {
  Project,
  ProjectStatusEnum,
} from 'src/resources/projects/entities/project.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from 'src/interfaces/message.interface';
import { stat } from 'fs';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  async create(data: CreateProjectDto): Promise<Message<Project>> {
    const newProject = this.projectRepository.create(data);
    await this.projectRepository.save(newProject);
    return {
      message: 'Project added',
      status: true,
      data: newProject,
    };
  }

  async findAll(
    status: ProjectStatusEnum,
    limit: number,
    page: number,
  ): Promise<Message<Project[]>> {
    const projects = await this.projectRepository.find({
      where: {
        status,
      },
      skip: +limit * (+page - 1),
      take: +limit,
    });
    return {
      message: 'Success',
      status: true,
      data: projects,
      count: projects.length,
    };
  }

  async findOne(id: number): Promise<Message<Project>> {
    const project = await this.projectRepository.findOneBy({ id });
    if (!project) {
      throw new NotFoundException('No project found');
    }
    return {
      message: 'Success',
      status: true,
      data: project,
    };
  }

  async update(id: number, data: UpdateProjectDto) {
    await this.findOne(id);
    await this.projectRepository.update(id, data);
    return {
      message: 'Project edited',
      status: true,
    };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.projectRepository.delete(id);
    return {
      message: 'Project edited',
      status: true,
    };
  }
}
