import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Comment } from '../comment/comment.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    username!: string | null;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
