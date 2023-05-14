import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'node:path'
import { cwd } from 'node:process'

import { AppController } from './app.controller'
import { AppResolver } from './app.resolver'
import { AppService } from './app.service'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(cwd(), 'api-schema.graphql'),
      driver: ApolloDriver,
    }),
  ],
  controllers: [AppController],
  providers: [AppResolver, AppService],
})
export class AppModule {}
