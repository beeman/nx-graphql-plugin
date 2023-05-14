import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class HelloWorldInput {
  @Field(() => String, { nullable: true })
  name?: string
}
