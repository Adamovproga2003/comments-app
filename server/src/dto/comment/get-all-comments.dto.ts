import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsOptional } from 'class-validator';

@ArgsType()
export class GetAllCommentsDto {
  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  skip?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  take?: number;

  //   @Field(() => Prisma.CommentWhereUniqueInput, { nullable: true })
  //   @Type(() => Prisma.CommentWhereUniqueInput)
  //   @IsOptional()
  //   cursor?: Prisma.CommentWhereUniqueInput;

  //   @Field(() => Prisma.CommentWhereInput, { nullable: true })
  //   @Type(() => Prisma.CommentWhereInput)
  //   @IsOptional()
  //   where?: Prisma.CommentWhereInput;

  //   @Field(() => [Prisma.CommentOrderByWithRelationInput], { nullable: true })
  //   @Type(() => Prisma.CommentOrderByWithRelationInput)
  //   @IsOptional()
  //   orderBy?: Prisma.CommentOrderByWithRelationInput[];
}
