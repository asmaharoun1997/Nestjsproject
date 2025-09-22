import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // toutes les routes commenceront par /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): string[] {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body('name') name: string): string {
    return this.usersService.create(name);
  }
}
