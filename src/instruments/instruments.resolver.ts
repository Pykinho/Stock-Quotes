import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InstrumentsService } from './instruments.service';
import { Instrument } from './instrument.entity';
import { CreateInstrumentInput } from './dto/create-instrument.input';


@Resolver((of) => Instrument)
export class InstrumentsResolver {
    constructor(private instrumentsService: InstrumentsService){}

    @Query(returns => [Instrument])
    instruments(): Promise<Instrument[]>{
        return this.instrumentsService.findAll();
    }

    @Query(returns => Instrument)
    getInstrument(@Args('id', {type: () => Int}) id: number): Promise<Instrument>{
        return this.instrumentsService.findOne(id);
    }

    @Mutation(returns => Instrument)
    createInstrument(@Args('createInstrumentInput') createInstrumentInput: CreateInstrumentInput): Promise<Instrument> {
        return this.instrumentsService.createInstrument(createInstrumentInput);
    }
}
