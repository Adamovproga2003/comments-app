import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type RequestCreateCommentDto = {
  text: string;
  author: User;
};

type ResponseCommentDto = {
  id: number;
  createdAt: Date;
  text: string;
};

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create({
    text,
    author,
  }: RequestCreateCommentDto): Promise<ResponseCommentDto> {
    const comment = await this.prisma.comment.create({
      data: {
        text,
        authorId: author.id,
      },
    });

    return comment;
  }
}
