import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModel } from './Models/store.schema';
import { StoreService } from './stores.service';
import { StoreController } from './stores.controllers';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: StoreModel.name, schema: StoreModel }])
    ],
    controllers: [StoreController],
    providers: [StoreService],
})
export class StoreModule {}
