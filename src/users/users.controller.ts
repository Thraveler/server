import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { UserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }
  
  @Post()
  async createUSer(@Body() user: UserDto) {
    return await this.usersService.createUser(user);
  }
  
  @Get(':id')
  async getUser(@Param('id') id: String) {
    return await this.usersService.getUser(id);
  }
  
}
