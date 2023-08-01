import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import mongoose, { Document } from 'mongoose';

export type SearchDocument = Search & Document;
@ObjectType()
@Schema()
export class Search {
  @Prop({ type: String })
  @Field()
  country: string;

  @Prop({ type: Number })
  @Field()
  checkIn: number;

  @Prop({ type: Number })
  @Field()
  checkOut: number;

  @Prop({ type: Number })
  @Field()
  adults: number;

  @Prop({ type: Number })
  @Field()
  children: number;

  @Prop({ type: Number })
  @Field()
  infants: number;
}

export const SearchSchema = SchemaFactory.createForClass(Search);
