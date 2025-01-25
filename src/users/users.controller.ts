import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CustomPipe } from 'src/pipes/custom.pipe';
import { MobilePipe } from 'src/pipes/validate/mobile/mobile.pipe';
import { User } from './entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/')
  getUsers(): User[] {
    return this.userService.getUsers();
  }
  @Get('/:id')
  getUserById(
    @Param('id', ParseIntPipe, new CustomPipe(11)) id: number,
  ): User | object {
    const selectedUser = this.userService.getUser(id);
    return (
      selectedUser || {
        message: 'no user found',
      }
    );
  }
  @Post('/')
  addUser(
    @Body(new ValidationPipe(), new CustomPipe(11), new MobilePipe())
    data: CreateUserDto,
  ) {
    const newUser = this.userService.addUser(data);
    return {
      message: 'new user added',
      data: newUser,
    };
  }
}
