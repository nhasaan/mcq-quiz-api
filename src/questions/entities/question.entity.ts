import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Question {
  _id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, type: [String] })
  options: string[];

  @Prop({ required: true, type: String })
  answer: string;
}

export type QuestionDocument = Question & Document;
export const QuestionSchema = SchemaFactory.createForClass(Question);
