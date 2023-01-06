import { Injectable } from '@nestjs/common';
import { Instrument } from './instrument.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstrumentInput } from './dto/create-instrument.input';

@Injectable()
export class InstrumentsService {
    constructor(@InjectRepository(Instrument) private instrumentsRepository: Repository<Instrument>){}

    createInstrument(createInstrumentInput: CreateInstrumentInput): Promise <Instrument>{
        const newInstrument = this.instrumentsRepository.create(createInstrumentInput);
        
        return this.instrumentsRepository.save(newInstrument); //insert 
    }

    async findAll(): Promise<Instrument[]>{
        return this.instrumentsRepository.find(); //SELECT * instrument
    }

    async findOne(id: number): Promise<Instrument>{
        return this.instrumentsRepository.findOneOrFail({where: {id: id}}); //SELECT one instrument
    }
}
