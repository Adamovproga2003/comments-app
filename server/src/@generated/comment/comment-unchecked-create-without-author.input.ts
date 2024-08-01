import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutParentCommentInput } from './comment-unchecked-create-nested-many-without-parent-comment.input';

@InputType()
export class CommentUncheckedCreateWithoutAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:true})
    parentCommentId?: number;

    @Field(() => CommentUncheckedCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replyComments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput;
}
