import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { CommentCreateNestedManyWithoutParentCommentInput } from './comment-create-nested-many-without-parent-comment.input';

@InputType()
export class CommentCreateWithoutParentCommentInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedManyWithoutParentCommentInput, {nullable:true})
    replyComments?: CommentCreateNestedManyWithoutParentCommentInput;
}
