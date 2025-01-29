import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
  getUser(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }
  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
