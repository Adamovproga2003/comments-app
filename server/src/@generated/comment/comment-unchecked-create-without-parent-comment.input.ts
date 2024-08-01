import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutParentCommentInput } from './comment-unchecked-create-nested-many-without-parent-comment.input';

@InputType()
export class CommentUncheckedCreateWithoutParentCommentInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CommentUncheckedCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replyComments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput;
}
