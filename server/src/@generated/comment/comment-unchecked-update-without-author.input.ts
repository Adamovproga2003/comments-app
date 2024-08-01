import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutParentCommentNestedInput } from './comment-unchecked-update-many-without-parent-comment-nested.input';

@InputType()
export class CommentUncheckedUpdateWithoutAuthorInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentCommentId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutParentCommentNestedInput, {nullable:true})
    replyComments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput;
}
