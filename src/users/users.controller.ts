import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/users.entities';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'List all the users',
  })
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List user by id',
  })
  getById(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
  })
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a user',
  })
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a user',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, dto);
  }
}
