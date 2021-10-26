import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class BaseQuestionDTO {
  _id?: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @ArrayMinSize(4)
  options: string[];

  @IsString()
  answer: string;
}
