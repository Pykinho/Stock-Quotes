import { Injectable } from '@nestjs/common';
import { Quote } from './quote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuoteInput } from './dto/create-quote.input';
import { ApolloError } from 'apollo-server-express';
import { InstrumentsService } from 'src/instruments/instruments.service';
import { Instrument } from 'src/instruments/instrument.entity';

@Injectable()
export class QuotesService {
    constructor(@InjectRepository(Quote) private quotesRepository: Repository<Quote>, private instrumentsService: InstrumentsService){}

    async createQuote(createQuoteInput: CreateQuoteInput): Promise <Quote>{

        let instrumentId = await this.instrumentsService.findTicker(createQuoteInput.ticker);
        
        const newQuote =  this.quotesRepository.create(createQuoteInput);
        newQuote.instrumentId = instrumentId
        
        return this.quotesRepository.save(newQuote);
    }

    async findAll(): Promise<Quote[]>{
        return this.quotesRepository.find();
    }

    async findOne(id: number): Promise<Quote>{
        const quote = await this.quotesRepository.findOneOrFail({where: {id: id}});
        if (!quote)
        {
            throw new ApolloError(`Quote with id "${id}" not found`);
        }
        return quote;
    }

    async findInstrument(id: number): Promise<Instrument>{
        return this.instrumentsService.findOne(id);
    }
}
