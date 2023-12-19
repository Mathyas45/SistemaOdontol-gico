import { Module } from '@nestjs/common';
import { ExamenEstomatologicoService } from './examen-estomatologico.service';
import { ExamenEstomatologicoController } from './examen-estomatologico.controller';

@Module({
  controllers: [ExamenEstomatologicoController],
  providers: [ExamenEstomatologicoService],
})
export class ExamenEstomatologicoModule {}
