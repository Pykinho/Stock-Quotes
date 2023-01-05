import { Resolver, Query } from '@nestjs/graphql';
import { InstrumentsService } from './instruments.service';
import { Instrument } from './instrument.entity';

@Resolver()
export class InstrumentsResolver {
    constructor(private instrumentsService: InstrumentsService){}

    @Query(returns => [Instrument])
    instruments(): Promise<Instrument[]>{
        return this.instrumentsService.findAll();
    }
}
