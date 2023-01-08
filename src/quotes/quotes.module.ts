import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesResolver } from './quotes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quote.entity';
import { InstrumentsModule } from 'src/instruments/instruments.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quote]), InstrumentsModule],
  providers: [QuotesService, QuotesResolver]
})
export class QuotesModule {}
