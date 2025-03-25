import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerInterceptor } from './utils/interceptors/Logger.interceptor';

@Controller()
@UseInterceptors(LoggerInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getWelcome();
  }
}
