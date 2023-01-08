import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Quote } from "src/quotes/quote.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Instrument {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    ticker: string;

    @Column({nullable: true})
    @Field({nullable: true})
    name: string;

    @CreateDateColumn({nullable: true})
    @Field({nullable: true})
    created_at?: string;

    @OneToMany(() => Quote, quote => quote.instrument)
    @Field(type => [Quote], {nullable: true})
    quotes?: Quote[];
}