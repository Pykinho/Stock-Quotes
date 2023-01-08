import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { QuotesService } from './quotes.service';
import { Quote } from './quote.entity';
import { CreateQuoteInput } from './dto/create-quote.input';
import { Instrument } from 'src/instruments/instrument.entity';


@Resolver((of) => Quote)
export class QuotesResolver {
    constructor(private quoteService: QuotesService){}

@Query(returns => [Quote])
quotes(): Promise<Quote[]>{
    return this.quoteService.findAll();
}

@Query(returns => Quote)
getQuote(@Args('id', {type: () => Int}) id: number): Promise<Quote>{
    return this.quoteService.findOne(id);
}

@ResolveField(returns => Instrument)
instrument(@Parent() quote: Quote): Promise<Instrument>{
    return this.quoteService.findInstrument(quote.instrumentId);
}

@Mutation(returns => Quote)
createQuote(@Args('createQuoteInput') createQuoteInput: CreateQuoteInput): Promise<Quote> {
    return this.quoteService.createQuote(createQuoteInput);
}
}

