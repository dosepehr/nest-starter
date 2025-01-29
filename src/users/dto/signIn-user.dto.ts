import { MaxLength, MinLength } from 'class-validator';

export class SignInUserDto {
  @MinLength(4)
  @MaxLength(40)
  identifier: string;

  @MinLength(8)
  @MaxLength(20)
  password: string;
}
