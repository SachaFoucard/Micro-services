import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './Types/users';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get(':id')
    findOne(@Param('/:id') _id: string): Promise<User> {
        return this.userService.findOne(_id)
    }
    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll()
    }
    @Post()
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<User> {
        return this.userService.remove(id);
    }


}
