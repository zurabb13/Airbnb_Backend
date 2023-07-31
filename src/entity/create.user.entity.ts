import { Field, InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@InputType()
export class CreateUser {
  // @Prop()
  // @Field()
  // id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  lastname: string;

  @Prop()
  @Field()
  email: string;
}
