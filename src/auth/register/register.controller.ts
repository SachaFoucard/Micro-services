import {
  Body,
  // Controller,
  // Delete,
  // Get,
  // Param,
  Post,
  // Put,
} from '@nestjs/common';
import { User } from './Types/user.dto';
import { Controller } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async register(@Body() newUser: User): Promise<User> {
    return this.registerService.register(newUser);
  }


}
