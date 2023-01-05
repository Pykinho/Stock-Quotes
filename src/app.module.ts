import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstrumentsModule } from './instruments/instruments.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  TypeOrmModule.forRoot({
    type:'postgres',
    database:':memory:',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true, //TODO migrations 
  }),
  InstrumentsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
