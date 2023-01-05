import { Module } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { InstrumentsResolver } from './instruments.resolver';

@Module({
  providers: [InstrumentsService, InstrumentsResolver]
})
export class InstrumentsModule {}
