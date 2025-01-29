import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/users.entity';
import { hashPassword } from 'src/utils/hashPassword';
import { Repository } from 'typeorm';
import { Message } from 'src/interfaces/message.interface';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async signUp(data: CreateUserDto): Promise<Message> {
    // check if user exists
    const existingUser = await this.userRepository.findOneBy({
      email: data.email,
    });
    if (existingUser) {
      throw new BadRequestException('Email in use');
    }
    // hashing pass
    const hashedPassword = await hashPassword(data.password);
    const newUser = this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
    // saving user
    this.userRepository.save(newUser);
    return {
      message: 'user signed up successfully',
      status: true,
    };
  }
}
