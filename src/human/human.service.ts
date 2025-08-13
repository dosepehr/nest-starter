import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHumanDto } from './dto/create-human.dto';
import { UpdateHumanDto } from './dto/update-human.dto';
import { Human } from './entities/human.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SuccessResponse } from 'src/utils/interface/success-response.interface';

@Injectable()
export class HumanService {
    constructor(
        @InjectRepository(Human)
        private readonly humanRepository: Repository<Human>,
    ) {}
    async create(createHumanDto: CreateHumanDto): Promise<SuccessResponse> {
        const human = this.humanRepository.create(createHumanDto);
        await this.humanRepository.save(human);
        return {
            message: 'Human created successfully',
            status: true,
        };
    }

    async findAll(): Promise<SuccessResponse<Human[]>> {
        const humans = await this.humanRepository.find({
            relations: ['cats'],
        });
        return {
            status: true,
            data: humans,
        };
    }

    async findOne(id: number) {
        const human = await this.humanRepository.findOne({
            where: { id },
            relations: ['cats'],
        });

        if (!human) {
            throw new NotFoundException(`Human with ID ${id} not found`);
        }

        return {
            status: true,
            data: human,
        };
    }

    async update(id: number, updateHumanDto: UpdateHumanDto) {
        await this.findOne(id);
        await this.humanRepository.update(id, updateHumanDto);

        return {
            message: 'Human updated successfully',
            status: true,
        };
    }

    async remove(id: number) {
        await this.findOne(id);
        await this.humanRepository.delete(id);
        return {
            message: 'Human deleted successfully',
            status: true,
        };
    }
}
