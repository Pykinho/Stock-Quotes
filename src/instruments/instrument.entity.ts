import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Instrument {
    @Field(type => Int)
    id: number;

    @Field()
    ticker: string;

    @Field()
    name: string;
    
    @Field({nullable: true})
    created_at?: Date;
}