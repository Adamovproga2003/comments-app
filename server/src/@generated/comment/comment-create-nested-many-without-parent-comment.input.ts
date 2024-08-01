import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutParentCommentInput } from './comment-create-without-parent-comment.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutParentCommentInput } from './comment-create-or-connect-without-parent-comment.input';
import { CommentCreateManyParentCommentInputEnvelope } from './comment-create-many-parent-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutParentCommentInput {

    @Field(() => [CommentCreateWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create?: Array<CommentCreateWithoutParentCommentInput>;

    @Field(() => [CommentCreateOrConnectWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutParentCommentInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentCommentInput>;

    @Field(() => CommentCreateManyParentCommentInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyParentCommentInputEnvelope)
    createMany?: CommentCreateManyParentCommentInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
