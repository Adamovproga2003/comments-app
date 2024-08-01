import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutParentCommentInput } from './comment-create-without-parent-comment.input';

@InputType()
export class CommentCreateOrConnectWithoutParentCommentInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutParentCommentInput, {nullable:false})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create!: CommentCreateWithoutParentCommentInput;
}
