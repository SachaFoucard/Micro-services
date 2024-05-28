// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter<SentMessageInfo>;
  private emailUser = process.env.EMAIL_USER;
  private emailPass = process.env.EMAIL_PASS;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.emailUser,
        pass: this.emailPass,
      },
    });
  }

  async sendConfirmationEmail(email: string, token: string) {
    const mailOptions = {
      from: this.emailUser,
      to: email,
      subject: 'Confirm Registration',
      text: `Please click the following link to confirm your registration: http://yourwebsite.com/confirm?token=${token}`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
