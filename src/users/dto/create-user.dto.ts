<<<<<<< HEAD
import { IsString, MaxLength, MinLength } from 'class-validator';
=======
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
>>>>>>> 92c66422896e022dc93ffaf6786f8d8efe5b443f
export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  name: string;
<<<<<<< HEAD
=======

  @IsNotEmpty()
  mobile: string;
>>>>>>> 92c66422896e022dc93ffaf6786f8d8efe5b443f
}
