import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUser {
  @Field()
  id: number;
  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field()
  email: string;
}
