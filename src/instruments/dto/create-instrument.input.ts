import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class CreateInstrumentInput{
    
    @Field()
    name: string;

    @Field()
    ticker: string;

    @Field({nullable:true})
    created_at?: Date;


}