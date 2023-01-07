import { Field, InputType, Int, Float } from "@nestjs/graphql";

@InputType()
export class CreateQuoteInput{

    @Field(type => Int)
    instrument_id: number;

    @Field(type => Float)
    price: number;

    @Field({nullable: true})
    timestamp?: Date;

    @Field({nullable: true})
    created_at?: Date;

}