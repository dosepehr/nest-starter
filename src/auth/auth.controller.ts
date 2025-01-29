import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Message } from 'src/interfaces/message.interface';
import { SignInUserDto } from 'src/users/dto/signIn-user.dto';
import { MobilePipe } from 'src/pipes/validate/mobile/mobile.pipe';

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
