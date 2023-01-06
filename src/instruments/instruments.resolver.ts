import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InstrumentsService } from './instruments.service';
import { Instrument } from './instrument.entity';
import { CreateInstrumentInput } from './dto/create-instrument.input';

@Resolver()
export class InstrumentsResolver {
    constructor(private instrumentsService: InstrumentsService){}

    @Query(returns => [Instrument])
    instruments(): Promise<Instrument[]>{
        return this.instrumentsService.findAll();
    }

    @Mutation(returns => Instrument)
    createInstrument(@Args('createInstrumentInput') createInstrumentInput: CreateInstrumentInput): Promise<Instrument> {
        return this.instrumentsService.createInstrument(createInstrumentInput);
    }
}
