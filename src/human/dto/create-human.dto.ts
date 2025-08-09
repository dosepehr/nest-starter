import {
    IsString,
    IsInt,
    Min,
    Max,
    MinLength,
    MaxLength,
    IsEnum,
} from 'class-validator';
import { Gender } from 'src/utils/enums/cat.enum';

export class CreateHumanDto {
    @IsString()
    @MinLength(1, {
        message: 'human name is required',
    })
    @MaxLength(20, {
        message: 'human name is 20 chars at most',
    })
    name: string;

    @IsInt()
    @Min(0, {
        message: 'human age must be 0 at least',
    })
    @Max(20, {
        message: 'human age can not be more than 20',
    })
    age: number;

    @IsEnum(Gender)
    gender: string;
}
