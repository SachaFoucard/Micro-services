import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = (): MongooseModuleOptions => ({
  uri: process.env.MONGO_URI || 'mongodb://localhost/nest',
});
