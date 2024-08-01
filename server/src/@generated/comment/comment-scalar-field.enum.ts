import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    text = "text",
    authorId = "authorId",
    createdAt = "createdAt",
    parentCommentId = "parentCommentId"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
