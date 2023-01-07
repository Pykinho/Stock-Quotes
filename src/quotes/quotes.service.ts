import { Injectable } from '@nestjs/common';
import { Quote } from './quote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuoteInput } from './dto/create-quote.input';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class QuotesService {
    constructor(@InjectRepository(Quote) private quotesRepository: Repository<Quote>){}

    createQuote(createQuoteInput: CreateQuoteInput): Promise <Quote>{
        const newQuote = this.quotesRepository.create(createQuoteInput);
        
        return this.quotesRepository.save(newQuote); //insert 
    }

    async findAll(): Promise<Quote[]>{
        return this.quotesRepository.find(); //SELECT * instrument
    }

    async findOne(id: number): Promise<Quote>{
        const quote = await this.quotesRepository.findOneOrFail({where: {id: id}}); //SELECT one instrument
        if (!quote)
        {
            throw new ApolloError(`Quote with id "${id}" not found`);
        }
        return quote;
    }
}
