import { Controller, Get } from '@nestjs/common';
import { User } from 'src/app.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/')
  getUser(): User[] {
    return this.userService.getUsers();
  }
}
