interface Address {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

interface Contact {
    phone: string;
    email: string;
}

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}

export interface Store {
    name: string;
    location: Address | string; // Adresse physique ou URL pour les magasins en ligne
    type: 'physical' | 'online' | 'hybrid';
    products: Product[];
    openingHours: string; // Peut être un format plus complexe si nécessaire
    contact: Contact;
    owner: string;
    description: string;
    services: string[];
    returnPolicy: string;
    rating: number; // Évaluation moyenne
}
