import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/users.model';

@ObjectType({ description: 'comment' })
export class Comment {
  @Field(() => ID)
  id: number;

  @Field()
  text: string;

  @Field(() => User, { nullable: true })
  author?: User;

  @Field({ nullable: true })
  authorId?: string;

  @Field()
  createdAt: Date;

  @Field(() => [Comment], { nullable: true })
  replyComments?: Comment[];

  @Field(() => Comment, { nullable: true })
  parentComment?: Comment;

  @Field({ nullable: true })
  parentCommentId?: number;
}
