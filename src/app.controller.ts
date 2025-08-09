import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request } from 'express';
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(@Req() req: Request) {
        return this.appService.getHello();
    }
    @Get('/errors/forbidden')
    forbiddenError() {
        return this.appService.forbiddenError();
    }
}
