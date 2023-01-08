import { Module } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { InstrumentsResolver } from './instruments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instrument } from './instrument.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instrument])],
  providers: [InstrumentsService, InstrumentsResolver],
  exports: [InstrumentsService]
})
export class InstrumentsModule {}
