// Book Store Interface
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
    workingHours: {
      open: string;
      close: string;
    };
    contacts: {
      phone: string;
      email?: string;
    };
  }
  
  // Book Interface
  interface Book {
    id: string;
    isbn: string;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    category: string;
    language: string;
    publisher: string;
    publishedDate: string;
    availability: BookAvailability[];
  }
  
  // Book Availability in Different Stores
  interface BookAvailability {
    storeId: string;
    price: number;
    inStock: boolean;
    quantity?: number;
    lastUpdated: string;
  }
  
  // Book Category
  interface Category {
    id: string;
    name: string;
    description?: string;
    parentId?: string;
  }