import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateCommentDto {
  @Field()
  @IsString()
  text: string;

  @Field()
  @IsUUID()
  authorId: string;
}
