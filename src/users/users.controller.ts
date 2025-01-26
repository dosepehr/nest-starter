import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CustomPipe } from 'src/pipes/custom.pipe';
import { MobilePipe } from 'src/pipes/validate/mobile/mobile.pipe';
import { User } from './entities/users.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/')
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
  @Get('/:id')
  async getUserById(
    @Param('id', ParseIntPipe, new CustomPipe(11)) id: number,
  ): Promise<User | object> {
    const selectedUser = await this.userService.getUser(id);
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
  @Put('/:id')
  updateUser(
    @Body() data: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.updateUser(data, id);
  }
  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
