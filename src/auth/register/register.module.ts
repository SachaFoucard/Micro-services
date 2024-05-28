// src/register/register.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { User } from './Types/user.dto';
import { RegisterSchema } from './Models/register.schema';
import { EmailService } from './email/email.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: RegisterSchema }]),
  ],
  controllers: [RegisterController],
  providers: [RegisterService, EmailService],
})
export class RegisterModule {}
