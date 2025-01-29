import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CustomPipe } from 'src/utils/pipes/custom.pipe';
import { User } from './entities/users.entity';

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
  ): Promise<User | null> {
    const selectedUser = await this.userService.getUser(id);
    if (!selectedUser)
      throw new NotFoundException({
        status: false,
        message: `no user found with id : ${id}`,
      });
    return selectedUser;
  }
  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
