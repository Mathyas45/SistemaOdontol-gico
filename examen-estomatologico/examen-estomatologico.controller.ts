import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamenEstomatologicoService } from './examen-estomatologico.service';
import { CreateExamenEstomatologicoDto } from './dto/create-examen-estomatologico.dto';
import { UpdateExamenEstomatologicoDto } from './dto/update-examen-estomatologico.dto';

@Controller('examen-estomatologico')
export class ExamenEstomatologicoController {
  constructor(private readonly examenEstomatologicoService: ExamenEstomatologicoService) {}

  @Post()
  create(@Body() createExamenEstomatologicoDto: CreateExamenEstomatologicoDto) {
    return this.examenEstomatologicoService.create(createExamenEstomatologicoDto);
  }

  @Get()
  findAll() {
    return this.examenEstomatologicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenEstomatologicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamenEstomatologicoDto: UpdateExamenEstomatologicoDto) {
    return this.examenEstomatologicoService.update(+id, updateExamenEstomatologicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenEstomatologicoService.remove(+id);
  }
}
