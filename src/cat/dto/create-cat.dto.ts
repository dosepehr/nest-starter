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

export class CreateCatDto {
    @IsString()
    @MinLength(1, {
        message: 'cat name is required',
    })
    @MaxLength(20, {
        message: 'cat name is 20 chars at most',
    })
    name: string;

    @IsInt()
    @Min(0, {
        message: 'cat age must be 0 at least',
    })
    @Max(20, {
        message: 'cat age can not be more than 20',
    })
    age: number;

    @IsEnum(Gender)
    gender: string;
}
