import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUpdateWithoutReplyCommentsInput } from './comment-update-without-reply-comments.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutReplyCommentsInput } from './comment-create-without-reply-comments.input';
import { CommentWhereInput } from './comment-where.input';

@InputType()
export class CommentUpsertWithoutReplyCommentsInput {

    @Field(() => CommentUpdateWithoutReplyCommentsInput, {nullable:false})
    @Type(() => CommentUpdateWithoutReplyCommentsInput)
    update!: CommentUpdateWithoutReplyCommentsInput;

    @Field(() => CommentCreateWithoutReplyCommentsInput, {nullable:false})
    @Type(() => CommentCreateWithoutReplyCommentsInput)
    create!: CommentCreateWithoutReplyCommentsInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;
}
