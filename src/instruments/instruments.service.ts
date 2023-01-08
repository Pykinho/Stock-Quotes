import { Injectable } from '@nestjs/common';
import { Instrument } from './instrument.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstrumentInput } from './dto/create-instrument.input';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class InstrumentsService {
    constructor(@InjectRepository(Instrument) private instrumentsRepository: Repository<Instrument>){}

    createInstrument(createInstrumentInput: CreateInstrumentInput): Promise <Instrument>{
        const newInstrument = this.instrumentsRepository.create(createInstrumentInput);
        
        return this.instrumentsRepository.save(newInstrument); //insert 
    }

    async findAll(): Promise<Instrument[]>{
        return this.instrumentsRepository.find();
    }

    async findOne(id: number): Promise<Instrument>{
        const instrument =  this.instrumentsRepository.findOne({where: {id: id}});
        
        if (!instrument) {
        throw new ApolloError(`Instrument with id "${id}" not found`);
        }
        return instrument;
    }

    async findTicker(ticker: string): Promise<number>{
        let instrument =  await this.instrumentsRepository.findOne({where: {ticker: ticker}});
        
        if (!instrument) {
            instrument = this.instrumentsRepository.create({ ticker });
            await this.instrumentsRepository.save(instrument);
        }
        return instrument.id;
    }

}
