import {
    IsString,
    IsInt,
    Min,
    Max,
    MinLength,
    MaxLength,
    IsEnum,
    IsNotEmpty,
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

    @IsEnum(Gender, {
        message: 'gender must be either MALE or FEMALE',
    })
    gender: string;

    @IsInt({
        message: 'humanId must be a valid integer',
    })
    @IsNotEmpty({
        message: 'humanId is required',
    })
    humanId: number;
}
