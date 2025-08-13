import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Human } from 'src/human/entities/human.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cat, Human])],
    controllers: [CatController],
    providers: [CatService],
})
export class CatModule {}
