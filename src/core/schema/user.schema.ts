import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Prop()
  @Field()
  id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  lastname: string;

  @Prop()
  @Field()
  email: string;

  @Prop()
  @Field()
  createdAt: string;

  @Prop()
  @Field()
  updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
