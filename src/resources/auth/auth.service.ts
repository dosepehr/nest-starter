import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { hashPassword } from 'src/utils/funcs/hashPassword';
import { Repository } from 'typeorm';
import { Message } from 'src/interfaces/message.interface';
import { comparePassword } from 'src/utils/funcs/comparePassword';
import { instanceToPlain } from 'class-transformer';
import { User } from '../users/entities/users.entity';
import { SignInUserDto } from '../users/dto/signIn-user.dto';
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
  async signIn(data: SignInUserDto): Promise<any> {
    const user = await this.userRepository.findOne({
      where: [{ email: data.identifier }, { name: data.identifier }],
    });

    if (!user) {
      throw new NotFoundException('No user found');
    }
    const passwordMatch = await comparePassword(data.password, user.password);
    if (!passwordMatch) {
      throw new NotFoundException('No user found');
    }
    return instanceToPlain(user);
  }
}
