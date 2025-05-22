interface BookStore {
    id: string;
    name: string;
    location: {
      address: string;
      coordinates: {
        lat: number;
        lng: number;
      }
    };
    phone: string;
  }
  
  interface BookAvailability {
    storeId: string;
    price: number;
    inStock: boolean;
    quantity?: number;
  }
  
  interface Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    imageUrl: string;
    description: string;
    availability: BookAvailability[];
  }