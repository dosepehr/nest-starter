import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SuccessResponse } from 'src/utils/interface/success-response.interface';
import { Human } from 'src/human/entities/human.entity';

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>,
        @InjectRepository(Human)
        private readonly humanRepository: Repository<Human>,
    ) {}
    async create(createCatDto: CreateCatDto): Promise<SuccessResponse> {
        const { humanId, ...catData } = createCatDto;

        // Check if the human exists
        const human = await this.humanRepository.findOne({
            where: { id: humanId },
        });
        if (!human) {
            throw new BadRequestException(`Human with ID ${humanId} not found`);
        }

        // Create a new cat and assign the human
        const cat = this.catRepository.create({
            ...catData,
            human,
        });

        await this.catRepository.save(cat);

        return {
            message: 'Cat created successfully',
            status: true,
        };
    }

    async findAll(): Promise<SuccessResponse<Cat[]>> {
        const cats = await this.catRepository.find({
            relations: ['human'],
        });
        return {
            status: true,
            data: cats,
        };
    }

    async findOne(id: number): Promise<SuccessResponse<Cat>> {
        const cat = await this.catRepository.findOne({
            where: { id },

            relations: ['human'],
        });

        if (!cat) {
            throw new NotFoundException(`Cat with ID ${id} not found`);
        }

        return {
            status: true,
            data: cat,
        };
    }

    async update(
        id: number,
        updateCatDto: UpdateCatDto,
    ): Promise<SuccessResponse> {
        // Check if the cat exists
        await this.findOne(id);

        const { humanId, ...catData } = updateCatDto;

        let updatePayload: Partial<Cat> = { ...catData };

        // If humanId is provided, validate and set the relation
        if (humanId !== undefined) {
            const human = await this.humanRepository.findOne({
                where: { id: humanId },
            });
            if (!human) {
                throw new BadRequestException(
                    `Human with ID ${humanId} not found`,
                );
            }
            updatePayload.human = human;
        }

        await this.catRepository.update(id, updatePayload);

        return {
            message: 'Cat updated successfully',
            status: true,
        };
    }

    async remove(id: number) {
        await this.findOne(id);
        await this.catRepository.delete(id);
        return {
            message: 'Cat deleted successfully',
            status: true,
        };
    }
    async softDelete(id: number) {
        await this.findOne(id);
        await this.catRepository.softDelete(id);
        return {
            message: 'Cat soft deleted successfully',
            status: true,
        };
    }
    async restore(id: number) {
        const cat = await this.catRepository.findOne({
            where: { id },
            withDeleted: true,
        });
        if (!cat) {
            throw new NotFoundException(`Cat with ID ${id} not found`);
        }

        await this.catRepository.restore(id);

        return {
            message: 'Cat restored successfully',
            status: true,
        };
    }
}
