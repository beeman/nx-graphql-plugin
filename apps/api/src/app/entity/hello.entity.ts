import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class HelloEntity {
  @Field(() => String)
  message: string
  name?: string
}
