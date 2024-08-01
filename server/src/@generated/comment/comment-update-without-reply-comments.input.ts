import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutCommentsNestedInput } from '../user/user-update-one-without-comments-nested.input';
import { CommentUpdateOneWithoutReplyCommentsNestedInput } from './comment-update-one-without-reply-comments-nested.input';

@InputType()
export class CommentUpdateWithoutReplyCommentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutCommentsNestedInput;

    @Field(() => CommentUpdateOneWithoutReplyCommentsNestedInput, {nullable:true})
    parentComment?: CommentUpdateOneWithoutReplyCommentsNestedInput;
}
