import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { User } from 'src/app.service';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/')
  getUsers(): User[] {
    return this.userService.getUsers();
  }
  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: string): User | object {
    const selectedUser = this.userService.getUser(id);
    return (
      selectedUser || {
        message: 'no user found',
      }
    );
  }
  @Post('/')
  addUser(@Body() data: CreateUserDto) {
    this.userService.addUser(data);
    return {
      message: 'new user added',
      data: this.userService.getUsers(),
    };
  }
}
