import { Args, Float, Mutation, Query, Resolver } from '@nestjs/graphql'
import { HelloWorldInput } from './dto/hello-world.input'
import { HelloEntity } from './entity/hello.entity'

@Resolver()
export class AppResolver {
  @Query(() => Float)
  uptime() {
    return process.uptime()
  }

  @Mutation(() => HelloEntity)
  hello(@Args('input') input: HelloWorldInput): HelloEntity {
    return {
      message: `Hello ${input.name || 'World'}!`,
      name: input.name,
    }
  }
}

/**
[
  GraphQLError: Type HelloEntity must define one or more fields.
      at SchemaValidationContext.reportError (./nx-graphql-plugin/node_modules/graphql/type/validate.js:73:7)
      at validateFields (./nx-graphql-plugin/node_modules/graphql/type/validate.js:271:13)
      at validateTypes (./nx-graphql-plugin/node_modules/graphql/type/validate.js:244:7)
      at validateSchema (./nx-graphql-plugin/node_modules/graphql/type/validate.js:43:3)
      at graphqlImpl (./nx-graphql-plugin/node_modules/graphql/graphql.js:60:63)
      at ./nx-graphql-plugin/node_modules/graphql/graphql.js:23:43
      at new Promise (<anonymous>)
      at graphql (./nx-graphql-plugin/node_modules/graphql/graphql.js:23:10)
      at GraphQLSchemaFactory.create (./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/schema-builder/graphql-schema.factory.js:51:65)
      at GraphQLSchemaBuilder.generateSchema (./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/graphql-schema.builder.js:35:52) {
    path: undefined,
    locations: undefined,
    extensions: [Object: null prototype] {}
  },
  GraphQLError: Input Object type HelloWorldInput must define one or more fields.
      at SchemaValidationContext.reportError (./nx-graphql-plugin/node_modules/graphql/type/validate.js:73:7)
      at validateInputFields (./nx-graphql-plugin/node_modules/graphql/type/validate.js:532:13)
      at validateTypes (./nx-graphql-plugin/node_modules/graphql/type/validate.js:260:7)
      at validateSchema (./nx-graphql-plugin/node_modules/graphql/type/validate.js:43:3)
      at graphqlImpl (./nx-graphql-plugin/node_modules/graphql/graphql.js:60:63)
      at ./nx-graphql-plugin/node_modules/graphql/graphql.js:23:43
      at new Promise (<anonymous>)
      at graphql (./nx-graphql-plugin/node_modules/graphql/graphql.js:23:10)
      at GraphQLSchemaFactory.create (./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/schema-builder/graphql-schema.factory.js:51:65)
      at GraphQLSchemaBuilder.generateSchema (./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/graphql-schema.builder.js:35:52) {
    path: undefined,
    locations: undefined,
    extensions: [Object: null prototype] {}
  }
]
 *
./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/schema-builder/graphql-schema.factory.js:57
                throw new schema_generation_error_1.SchemaGenerationError(errors);
                      ^
Error: Schema generation error (code-first approach)
    at GraphQLSchemaFactory.create (./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/schema-builder/graphql-schema.factory.js:57:23)
    at GraphQLSchemaBuilder.generateSchema (./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/graphql-schema.builder.js:35:24)
    at GraphQLSchemaBuilder.build (./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/graphql-schema.builder.js:22:20)
    at GraphQLFactory.generateSchema (./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/graphql.factory.js:27:41)
    at GraphQLModule.onModuleInit (./nx-graphql-plugin/node_modules/@nestjs/graphql/dist/graphql.module.js:103:27)
    at callModuleInitHook (./nx-graphql-plugin/node_modules/@nestjs/core/hooks/on-module-init.hook.js:51:9)
    at NestApplication.callInitHook (./nx-graphql-plugin/node_modules/@nestjs/core/nest-application-context.js:224:13)
    at NestApplication.init (./nx-graphql-plugin/node_modules/@nestjs/core/nest-application.js:98:9)
    at NestApplication.listen (./nx-graphql-plugin/node_modules/@nestjs/core/nest-application.js:168:33)
 */
