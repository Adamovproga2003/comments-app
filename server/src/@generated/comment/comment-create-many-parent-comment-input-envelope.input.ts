import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyParentCommentInput } from './comment-create-many-parent-comment.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyParentCommentInputEnvelope {

    @Field(() => [CommentCreateManyParentCommentInput], {nullable:false})
    @Type(() => CommentCreateManyParentCommentInput)
    data!: Array<CommentCreateManyParentCommentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
