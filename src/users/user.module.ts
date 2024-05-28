import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './Models/users.schema';
import { User } from './Types/users';

@Module({ imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UserModule { }