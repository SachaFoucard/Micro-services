import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from './models/user.schema';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    @Post()
    async login(@Body() user: User): Promise<User> {
        return this.loginService.login(user);
    }
}