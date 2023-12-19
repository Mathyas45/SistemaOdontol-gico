import { Injectable } from '@nestjs/common';
import { CreateInterpretacionDto } from './dto/create-interpretacion.dto';
import { UpdateInterpretacionDto } from './dto/update-interpretacion.dto';

@Injectable()
export class InterpretacionService {
  create(createInterpretacionDto: CreateInterpretacionDto) {
    return 'This action adds a new interpretacion';
  }

  findAll() {
    return `This action returns all interpretacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interpretacion`;
  }

  update(id: number, updateInterpretacionDto: UpdateInterpretacionDto) {
    return `This action updates a #${id} interpretacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} interpretacion`;
  }
}
