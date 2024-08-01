import { UseGuards, ValidationPipe } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentOrderByWithRelationInput } from 'src/@generated/comment/comment-order-by-with-relation.input';
import { CommentWhereUniqueInput } from 'src/@generated/comment/comment-where-unique.input';
import { CommentWhereInput } from 'src/@generated/comment/comment-where.input';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Public } from 'src/auth/strategy/public-strategy';
import { AddReplyCommentDto } from 'src/dto/comment/add-reply-to-comment.dto';
import { CreateCommentDto } from 'src/dto/comment/create-comment.dto';
import { Comment } from './comments.model';
import { CommentsService } from './comments.service';
import { GqlJwtAuthGuard } from './graphql-jwt.guard';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private commentsService: CommentsService) {}

  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Comment)
  async createComment(
    @Args('commentData', new ValidationPipe()) commentData: CreateCommentDto,
  ) {
    try {
      return this.commentsService.create(commentData);
    } catch (err) {
      console.log('Error creating comment');
    }
  }

  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Comment)
  async addReply(
    @Args('replyData', new ValidationPipe()) replyData: AddReplyCommentDto,
  ) {
    return this.commentsService.addReply(replyData);
  }

  @Public()
  @Query(() => [Comment])
  async getAllComments(
    @Args('skip', { nullable: true, type: () => Int }) skip?: number,
    @Args('take', { nullable: true, type: () => Int }) take?: number,
    @Args('cursor', {
      nullable: true,
      type: () => CommentWhereUniqueInput,
    })
    cursor?: Prisma.CommentWhereUniqueInput,
    @Args('where', {
      nullable: true,
      type: () => CommentWhereInput,
    })
    where?: Prisma.CommentWhereInput,
    @Args('orderBy', {
      nullable: true,
      type: () => CommentOrderByWithRelationInput,
    })
    orderBy?: Prisma.CommentOrderByWithRelationInput,
  ): Promise<Comment[]> {
    return this.commentsService.getAllComments({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
