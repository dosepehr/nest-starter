import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SuccessResponse } from 'src/utils/interface/success-response.interface';

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>,
    ) {}
    async create(createCatDto: CreateCatDto): Promise<SuccessResponse> {
        const cat = this.catRepository.create(createCatDto);
        await this.catRepository.save(cat);
        return {
            message: 'Cat created successfully',
            status: true,
        };
    }

    findAll() {
        return `This action returns all cat`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
