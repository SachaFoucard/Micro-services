import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StoreModel } from './Models/store.schema';

@Injectable()
export class StoreService {
    constructor(@InjectModel(StoreModel.name) private storeModel: Model<StoreModel>) {}

    async createStore(store: StoreModel): Promise<StoreModel> {
        const newStore = new this.storeModel(store);
        return newStore.save();
    }

    async findAll(): Promise<StoreModel[]> {
        return this.storeModel.find().exec();
    }

    // Autres méthodes CRUD...
}
