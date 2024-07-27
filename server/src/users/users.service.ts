import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { hashingConstants } from 'src/auth/constants';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async findOneByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email } });
  }
  async findOneById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }
  async create({ email, username, password }: CreateUserDto) {
    const userDB = await this.findOneByEmail(email);

    if (userDB) {
      throw new HttpException('Username already taken', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(
      password,
      hashingConstants.saltOrRounds,
    );

    return await this.prisma.user.create({
      data: {
        email,
        username,
        hashedPassword,
      },
    });
  }
}
