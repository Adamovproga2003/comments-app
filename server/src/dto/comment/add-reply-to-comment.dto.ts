import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';
import { CreateCommentDto } from './create-comment.dto';

@InputType()
export class AddReplyCommentDto extends CreateCommentDto {
  @Field(() => Int)
  @IsNumber()
  parentCommentId: number;
}
