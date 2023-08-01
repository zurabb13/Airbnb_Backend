import { Field, InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@InputType()
export class CreateUser {
  // @Prop({ type: mongoose.Schema.ObjectId })
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
