import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

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
  addUser(user: CreateUserDto): User {
    const newUser = this.userRepository.create(user);
    this.userRepository.save(newUser);
    return newUser;
  }
  updateUser(data: UpdateUserDto, id: number) {
    return this.userRepository.update({ id }, data);
  }
  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
