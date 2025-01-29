import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mobile: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    default: false,
  })
  @Exclude()
  isActive: boolean;
}
