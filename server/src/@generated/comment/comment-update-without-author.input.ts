import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommentUpdateManyWithoutParentCommentNestedInput } from './comment-update-many-without-parent-comment-nested.input';
import { CommentUpdateOneWithoutReplyCommentsNestedInput } from './comment-update-one-without-reply-comments-nested.input';

@InputType()
export class CommentUpdateWithoutAuthorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CommentUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replyComments?: CommentUpdateManyWithoutParentCommentNestedInput;

    @Field(() => CommentUpdateOneWithoutReplyCommentsNestedInput, {nullable:true})
    parentComment?: CommentUpdateOneWithoutReplyCommentsNestedInput;
}
