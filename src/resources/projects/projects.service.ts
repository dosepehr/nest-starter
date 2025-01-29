import { Project } from 'src/resources/projects/entities/project.entity';
import { Injectable } from '@nestjs/common';
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

  async findAll(status): Promise<Message<Project[]>> {
    const projects = await this.projectRepository.find({
      where: {
        status,
      },
    });
    return {
      message: 'Success',
      status: true,
      data: projects,
      count: projects.length,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
