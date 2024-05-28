// src/auth-microservice/login/login.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { User } from './models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: User }]),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
