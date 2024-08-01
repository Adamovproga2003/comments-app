import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutReplyCommentsInput } from './comment-update-without-reply-comments.input';

@InputType()
export class CommentUpdateToOneWithWhereWithoutReplyCommentsInput {

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;

    @Field(() => CommentUpdateWithoutReplyCommentsInput, {nullable:false})
    @Type(() => CommentUpdateWithoutReplyCommentsInput)
    data!: CommentUpdateWithoutReplyCommentsInput;
}
