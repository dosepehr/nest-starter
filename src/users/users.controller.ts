import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/app.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/')
  getUsers(): User[] {
    return this.userService.getUsers();
  }
  @Get('/:id')
  getUserById(@Param('id') id: string): User | object {
    const selectedUser = this.userService.getUser(id);
    return (
      selectedUser || {
        message: 'no user found',
      }
    );
  }
  @Post('/')
  addUser(@Body() data: User) {
    this.userService.addUser(data);
    return {
      message: 'new user added',
      data: this.userService.getUsers(),
    };
  }
}
