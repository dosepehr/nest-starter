import { Controller, Get } from '@nestjs/common';
import { AppService, User } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home')
  getHello(): User[] {
    return this.appService.getHello();
  }
}
