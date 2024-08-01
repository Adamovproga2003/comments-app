import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutParentCommentInput } from './comment-update-without-parent-comment.input';
import { CommentCreateWithoutParentCommentInput } from './comment-create-without-parent-comment.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutParentCommentInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutParentCommentInput, {nullable:false})
    @Type(() => CommentUpdateWithoutParentCommentInput)
    update!: CommentUpdateWithoutParentCommentInput;

    @Field(() => CommentCreateWithoutParentCommentInput, {nullable:false})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create!: CommentCreateWithoutParentCommentInput;
}
