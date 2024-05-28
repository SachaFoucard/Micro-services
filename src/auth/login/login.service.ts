// src/auth-microservice/login/login.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './models/user.schema';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async login(userType: User): Promise<User> {
    const { email, password } = userType;
  
    // Find user by email
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials: User not found');
    }

    // Compare password1 with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password); // Check against 'password' field
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials: Incorrect password');
    }

    return user;
  }
}
