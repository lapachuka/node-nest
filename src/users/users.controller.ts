import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

export class CreateUserDto {
  name: string;
  age: number;
}

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService){

  }

  @Get()
  getAllUsers(): [] {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): any {
    return 'this add new user';
  }
}
