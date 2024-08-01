import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutReplyCommentsInput } from './comment-create-without-reply-comments.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutReplyCommentsInput } from './comment-create-or-connect-without-reply-comments.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedOneWithoutReplyCommentsInput {

    @Field(() => CommentCreateWithoutReplyCommentsInput, {nullable:true})
    @Type(() => CommentCreateWithoutReplyCommentsInput)
    create?: CommentCreateWithoutReplyCommentsInput;

    @Field(() => CommentCreateOrConnectWithoutReplyCommentsInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutReplyCommentsInput)
    connectOrCreate?: CommentCreateOrConnectWithoutReplyCommentsInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
