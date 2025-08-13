import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { HumanService } from './human.service';
import { CreateHumanDto } from './dto/create-human.dto';
import { UpdateHumanDto } from './dto/update-human.dto';

@Controller('human')
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @Post()
  create(@Body() createHumanDto: CreateHumanDto) {
    return this.humanService.create(createHumanDto);
  }

  @Get()
  findAll() {
    return this.humanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: string) {
    return this.humanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: string, @Body() updateHumanDto: UpdateHumanDto) {
    return this.humanService.update(+id, updateHumanDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: string) {
    return this.humanService.remove(+id);
  }
}
