import { Injectable } from '@nestjs/common';
import { Instrument } from './instrument.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstrumentsService {
    constructor(@InjectRepository(Instrument) private instrumentsRepository: Repository<Instrument>){}

    async findAll(): Promise<Instrument[]>{
        return this.instrumentsRepository.find();
    }
}
