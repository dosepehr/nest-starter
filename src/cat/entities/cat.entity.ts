import { CatGender } from 'src/utils/enums/cat.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column({
        type: 'enum',
        enum: CatGender,
        default: CatGender.MALE,
    })
    gender: string;
}
