import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RegisterModule } from './auth/register/register.module';
import { EmailModule } from './auth/register/email/email.module';
import { UserModule } from './users/user.module';
import { LoginModule } from './auth/login/login.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const mongoConfig = {
          uri: configService.get<string>('MONGO_URI'),
        };
        return mongoConfig;
      },
    }),
    RegisterModule,
    EmailModule,
    UserModule,
    LoginModule
  ],
})
export class AppModule {}
