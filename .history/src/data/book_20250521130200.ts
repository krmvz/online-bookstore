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

// Sample stores data
const stores: BookStore[] = [
  {
    id: "bookhouse",
    name: "Book House",
    location: {
      address: "Bishkek, Chui Avenue 123",
      coordinates: {
        lat: 42.8746,
        lng: 74.5698
      }
    },
    workingHours: {
      open: "09:00",
      close: "20:00"
    },
    contacts: {
      phone: "+996 312 123456",
      email: "info@bookhouse.kg"
    },
    rating: 4.5,
    reviews: 128
  },
  {
    id: "raritet",
    name: "Raritet",
    location: {
      address: "Bishkek, Manas Avenue 54",
      coordinates: {
        lat: 42.8700,
        lng: 74.5900
      }
    },
    workingHours: {
      open: "10:00",
      close: "19:00"
    },
    contacts: {
      phone: "+996 312 234567"
    },
    rating: 4.3,
    reviews: 95
  }
];

// Export all interfaces and data
export type { BookStore, Book, BookAvailability, Category };
export { stores };