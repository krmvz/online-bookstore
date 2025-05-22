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
  rating?: number;
  reviews?: number;
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
  pageCount?: number;
  averageRating?: number;
  ratingCount?: number;
  stores: {
    store: BookStore;
    price: number;
    inStock: boolean;
    quantity?: number;
  }[];
}

// Book Availability in Different Stores
interface BookAvailability {
  storeId: string;
  price: number;
  inStock: boolean;
  quantity?: number;
  lastUpdated: string;
  discount?: {
    percentage: number;
    validUntil: string;
  };
}

// Book Category
interface Category {
  id: string;
  name: string;
  description?: string;
  parentId?: string;
}

// Export all interfaces
export type { BookStore, Book, BookAvailability, Category };