import { IsString, MaxLength, MinLength } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  name: string;
}
