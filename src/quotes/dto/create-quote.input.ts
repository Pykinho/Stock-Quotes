import { Field, InputType, Int, Float } from "@nestjs/graphql";

@InputType()
export class CreateQuoteInput{

    @Field()
    ticker: string;

    @Field(type => Float)
    price: number;

    @Field({nullable: true})
    timestamp?: string;

    @Field({nullable: true})
    created_at?: string;

}