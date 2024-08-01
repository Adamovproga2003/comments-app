import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutReplyCommentsInput } from './comment-create-without-reply-comments.input';

@InputType()
export class CommentCreateOrConnectWithoutReplyCommentsInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutReplyCommentsInput, {nullable:false})
    @Type(() => CommentCreateWithoutReplyCommentsInput)
    create!: CommentCreateWithoutReplyCommentsInput;
}
