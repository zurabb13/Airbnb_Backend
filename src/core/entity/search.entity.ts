import { Field, InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@InputType()
export class SearchEntity {
  @Prop()
  @Field()
  country: string;

  @Prop()
  @Field()
  checkIn: number;

  @Prop()
  @Field()
  checkOut: number;

  @Prop()
  @Field()
  adults: number;

  @Prop()
  @Field()
  children: number;

  @Prop()
  @Field()
  infants: number;
}
