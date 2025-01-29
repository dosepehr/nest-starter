import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @IsEmail()
  @MinLength(4)
  @MaxLength(40)
  email: string;

  @IsNotEmpty()
  mobile: string;
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
