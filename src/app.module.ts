import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstrumentsModule } from './instruments/instruments.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesModule } from './quotes/quotes.module';


@Module({
  imports: [ GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    password: null,
    database: 'instruments_quotes',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true, //TODO migrations 
  }),
  InstrumentsModule,
  QuotesModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
