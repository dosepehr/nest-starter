import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  private users: User[] = [];
  getUsers(): any {
    return this.users;
  }
  getUser(id: number) {
    return this.users.find((user) => user.id == id);
  }
  addUser(user: CreateUserDto): User {
    const newUser = this.userRepository.create(user);
    this.userRepository.save(newUser);
    return newUser;
  }
}
