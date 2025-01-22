import { Controller, Get, Post } from '@nestjs/common';
import { AppService, Message, User } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home')
  getHello(): User[] {
    return this.appService.getHello();
  }
  @Get('/user')
  getUser(): User {
    return this.appService.getUser();
  }
  @Post('/addUser')
  addUser(): Message {
    return this.appService.addUser();
  }
}
