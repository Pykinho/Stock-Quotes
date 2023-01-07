import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateInstrumentInput{
    
    @Field()
    name: string;

    @Field()
    ticker: string;

    @Field({nullable:true})
    created_at?: Date;


}