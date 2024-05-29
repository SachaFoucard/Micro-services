import { Controller, Get, Post, Body } from '@nestjs/common';
import { StoreService } from './stores.service';
import { StoreModel } from './Models/store.schema';

@Controller('stores')
export class StoreController {
    constructor(private readonly storeService: StoreService) {}

    @Post()
    async create(@Body() store: StoreModel) {
        return this.storeService.createStore(store);
    }

    @Get()
    async findAll() {
        return this.storeService.findAll();
    }

    // Autres routes...
}
