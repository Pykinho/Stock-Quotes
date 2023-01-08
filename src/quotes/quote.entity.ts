import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Instrument } from "src/instruments/instrument.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Quote {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({nullable: true})
    @Field({nullable: true})
    timestamp?: string;

    @Column()
    @Field(type => Int)
    price: number;

    @CreateDateColumn({nullable: true})
    @Field({nullable: true})
    created_at?: string;

    @Column()
    @Field(type=> Int)
    instrumentId: number;

    @ManyToOne(() => Instrument, instrument => instrument.quotes)
    @Field(type => Instrument)
    instrument: Instrument;
}