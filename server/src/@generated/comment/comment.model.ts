import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { CommentCount } from './comment-count.output';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    authorId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:true})
    parentCommentId!: number | null;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => [Comment], {nullable:true})
    replyComments?: Array<Comment>;

    @Field(() => Comment, {nullable:true})
    parentComment?: Comment | null;

    @Field(() => CommentCount, {nullable:false})
    _count?: CommentCount;
}
