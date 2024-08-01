import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comments/comments.model';

@ObjectType({ description: 'users' })
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  username?: string;

  @Field()
  hashedPassword: string;

  @Field(() => [Comment], { nullable: 'items' })
  comments: Comment[];
}
