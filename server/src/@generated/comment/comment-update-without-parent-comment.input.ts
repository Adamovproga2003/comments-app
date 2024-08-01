import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutCommentsNestedInput } from '../user/user-update-one-without-comments-nested.input';
import { CommentUpdateManyWithoutParentCommentNestedInput } from './comment-update-many-without-parent-comment-nested.input';

@InputType()
export class CommentUpdateWithoutParentCommentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutCommentsNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutCommentsNestedInput;

    @Field(() => CommentUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replyComments?: CommentUpdateManyWithoutParentCommentNestedInput;
}
