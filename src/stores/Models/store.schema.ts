import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Adresse physique
class Address {
    @Prop({ required: true })
    street: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    country: string;
}


// Produit
class Product {
    @Prop({ required: true })
    id: number;

    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop()
    imageUrl: string;

}

@Schema()
export class StoreModel extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, type: Object }) // Utilisation de type: Object pour Address ou string
    location: Address | string;

    @Prop({ required: true, type: [Object] }) // Liste des produits
    products: Product[];

    @Prop({ required: true })
    openingHours: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    rating: number;
}

export const StoreSchema = SchemaFactory.createForClass(StoreModel);
