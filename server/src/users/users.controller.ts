import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from 'src/dto/user/create-user.dto';
import { GetUserByIdDto } from 'src/dto/user/get-user-by-id.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOneByEmail(@Param(new ValidationPipe()) { id }: GetUserByIdDto) {
    return this.usersService.findOneById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
