import { Module } from '@nestjs/common';
import { InterpretacionService } from './interpretacion.service';
import { InterpretacionController } from './interpretacion.controller';

@Module({
  controllers: [InterpretacionController],
  providers: [InterpretacionService],
})
export class InterpretacionModule {}
