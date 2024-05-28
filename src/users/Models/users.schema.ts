import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class UserModel extends Document {
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: number;

    @Prop()
    phone: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);