import { Injectable } from '@nestjs/common';
import { Instrument } from './instrument.entity';

@Injectable()
export class InstrumentsService {
    async findAll(): Promise<Instrument[]>{
        const instrument = new Instrument();
        instrument.id = 1;
        instrument.ticker = 'ddd';
        instrument.name = 'dadada';

        return [instrument];
    }
}
