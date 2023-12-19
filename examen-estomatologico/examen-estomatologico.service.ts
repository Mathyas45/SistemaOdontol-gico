import { Injectable } from '@nestjs/common';
import { CreateExamenEstomatologicoDto } from './dto/create-examen-estomatologico.dto';
import { UpdateExamenEstomatologicoDto } from './dto/update-examen-estomatologico.dto';

@Injectable()
export class ExamenEstomatologicoService {
  create(createExamenEstomatologicoDto: CreateExamenEstomatologicoDto) {
    return 'This action adds a new examenEstomatologico';
  }

  findAll() {
    return `This action returns all examenEstomatologico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examenEstomatologico`;
  }

  update(id: number, updateExamenEstomatologicoDto: UpdateExamenEstomatologicoDto) {
    return `This action updates a #${id} examenEstomatologico`;
  }

  remove(id: number) {
    return `This action removes a #${id} examenEstomatologico`;
  }
}
