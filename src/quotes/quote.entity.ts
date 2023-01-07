import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Quote {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field(type => Int)
    instrument_id: number;

    @Column()
    @Field(type => Int)
    price: number;

    @Column({nullable: true})
    @Field({nullable: true})
    timestamp?: Date;

    @Column({nullable: true})
    @Field({nullable: true})
    created_at?: Date;
}