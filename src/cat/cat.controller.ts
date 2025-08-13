import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) {}

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return this.catService.create(createCatDto);
    }

    @Get()
    findAll() {
        return this.catService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: string) {
        return this.catService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: string,
        @Body() updateCatDto: UpdateCatDto,
    ) {
        return this.catService.update(+id, updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: string) {
        return this.catService.remove(+id);
    }

    @Delete('/soft/:id')
    softDelete(@Param('id', ParseIntPipe) id: string) {
        return this.catService.softDelete(+id);
    }
    @Post('/restore/:id')
    restore(@Param('id', ParseIntPipe) id: string) {
        return this.catService.restore(+id);
    }
}
