import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutParentCommentInput } from './comment-create-without-parent-comment.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutParentCommentInput } from './comment-create-or-connect-without-parent-comment.input';
import { CommentUpsertWithWhereUniqueWithoutParentCommentInput } from './comment-upsert-with-where-unique-without-parent-comment.input';
import { CommentCreateManyParentCommentInputEnvelope } from './comment-create-many-parent-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutParentCommentInput } from './comment-update-with-where-unique-without-parent-comment.input';
import { CommentUpdateManyWithWhereWithoutParentCommentInput } from './comment-update-many-with-where-without-parent-comment.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutParentCommentNestedInput {

    @Field(() => [CommentCreateWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateWithoutParentCommentInput)
    create?: Array<CommentCreateWithoutParentCommentInput>;

    @Field(() => [CommentCreateOrConnectWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutParentCommentInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutParentCommentInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutParentCommentInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutParentCommentInput>;

    @Field(() => CommentCreateManyParentCommentInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyParentCommentInputEnvelope)
    createMany?: CommentCreateManyParentCommentInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutParentCommentInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutParentCommentInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutParentCommentInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutParentCommentInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutParentCommentInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
