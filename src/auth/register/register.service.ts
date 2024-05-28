import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './Types/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { EmailService } from './email/email.service'; // Import EmailService
import { generateToken } from './utils/tokenUtils'; // Import generateToken function

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private emailService: EmailService,
  ) { }


  async register(newUser: User): Promise<User> {
    const { email, phone } = newUser;

    // Check if the email or number already exists in the database
    const existingUser = await this.userModel.findOne({
      $or: [{ email }, { phone }],
    });
    if (existingUser) {
      throw new ConflictException(
        'User with the provided email or number already exists',
      );
    }
    const { password, ...userData } = newUser;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new this.userModel({
      ...userData,
      password: hashedPassword,
    });

    // Generate token for user
    const token = generateToken({ email });

    await this.emailService.sendConfirmationEmail(email, token);

    return createdUser.save();
  }

}
