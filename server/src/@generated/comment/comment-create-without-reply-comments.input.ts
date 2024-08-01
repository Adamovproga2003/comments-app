import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { CommentCreateNestedOneWithoutReplyCommentsInput } from './comment-create-nested-one-without-reply-comments.input';

@InputType()
export class CommentCreateWithoutReplyCommentsInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedOneWithoutReplyCommentsInput, {nullable:true})
    parentComment?: CommentCreateNestedOneWithoutReplyCommentsInput;
}
