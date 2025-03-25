import { Controller, Get, UseInterceptors, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerInterceptor } from './utils/interceptors/Logger.interceptor';
import { AuthGuard } from './utils/guards/auth.guard';

@Controller()
@UseInterceptors(LoggerInterceptor)
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getWelcome();
  }
}
