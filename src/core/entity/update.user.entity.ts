import { Field, InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@InputType()
export class UpdateUser {
  // @Field()
  // _id: str
  @Field()
  name: string;

  @Prop()
  @Field()
  lastname: string;

  @Prop()
  @Field()
  email: string;
}
