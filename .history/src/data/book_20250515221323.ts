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
      }
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
      }
    }
  ];
  
  // Export all interfaces and data
  export type { BookStore, Book, BookAvailability, Category };
  export { stores };