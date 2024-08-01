import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AddReplyCommentDto } from 'src/dto/comment/add-reply-to-comment.dto';
import { CreateCommentDto } from 'src/dto/comment/create-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { Comment } from './comments.model';

type ResponseCommentDto = {
  id: number;
  createdAt: Date;
  text: string;
};

@Injectable()
export class CommentsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create({
    text,
    authorId,
  }: CreateCommentDto): Promise<ResponseCommentDto> {
    try {
      const comment = await this.prisma.comment.create({
        data: {
          text,
          authorId,
        },
      });
      return comment;
    } catch (error) {
      throw error;
    }
  }

  async addReply({
    parentCommentId,
    authorId,
    text,
  }: AddReplyCommentDto): Promise<ResponseCommentDto> {
    const parentComment = await this.prisma.comment.findUnique({
      where: { id: parentCommentId },
    });

    if (!parentComment) {
      throw new Error('Parent comment not found');
    }

    const comment = await this.prisma.comment.create({
      data: {
        text,
        authorId,
        parentCommentId,
      },
    });

    return comment;
  }

  async getAllComments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CommentWhereUniqueInput;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput;
  }): Promise<Comment[]> {
    const {
      skip,
      take = 25,
      cursor,
      where,
      orderBy = { createdAt: 'desc' },
    } = params;

    return this.prisma.comment.findMany({
      skip,
      take,
      cursor,
      where: {
        ...where,
        parentCommentId: null,
      },
      orderBy,
      include: {
        replyComments: true,
      },
    });
  }
}
