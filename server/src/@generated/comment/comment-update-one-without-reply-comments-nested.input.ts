import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutReplyCommentsInput } from './comment-create-without-reply-comments.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutReplyCommentsInput } from './comment-create-or-connect-without-reply-comments.input';
import { CommentUpsertWithoutReplyCommentsInput } from './comment-upsert-without-reply-comments.input';
import { CommentWhereInput } from './comment-where.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateToOneWithWhereWithoutReplyCommentsInput } from './comment-update-to-one-with-where-without-reply-comments.input';

@InputType()
export class CommentUpdateOneWithoutReplyCommentsNestedInput {

    @Field(() => CommentCreateWithoutReplyCommentsInput, {nullable:true})
    @Type(() => CommentCreateWithoutReplyCommentsInput)
    create?: CommentCreateWithoutReplyCommentsInput;

    @Field(() => CommentCreateOrConnectWithoutReplyCommentsInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutReplyCommentsInput)
    connectOrCreate?: CommentCreateOrConnectWithoutReplyCommentsInput;

    @Field(() => CommentUpsertWithoutReplyCommentsInput, {nullable:true})
    @Type(() => CommentUpsertWithoutReplyCommentsInput)
    upsert?: CommentUpsertWithoutReplyCommentsInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    disconnect?: CommentWhereInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    delete?: CommentWhereInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateToOneWithWhereWithoutReplyCommentsInput, {nullable:true})
    @Type(() => CommentUpdateToOneWithWhereWithoutReplyCommentsInput)
    update?: CommentUpdateToOneWithWhereWithoutReplyCommentsInput;
}
