import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Message } from 'src/interfaces/message.interface';
import { MobilePipe } from 'src/utils/pipes/mobile.pipe';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SignInUserDto } from '../users/dto/signIn-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  signUp(
    @Body(new MobilePipe())
    data: CreateUserDto,
  ): Promise<Message> {
    return this.authService.signUp(data);
  }
  @Post('/signin')
  signIn(
    @Body(new MobilePipe())
    data: SignInUserDto,
  ): Promise<Message> {
    return this.authService.signIn(data);
  }
}
