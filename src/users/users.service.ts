// users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './types/users';

@Injectable()
export class UsersService {
  create(user: User): Promise<User> {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) { }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
  
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async update(id: string, updatedUser: User): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, updatedUser, { new: true })
      .exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
