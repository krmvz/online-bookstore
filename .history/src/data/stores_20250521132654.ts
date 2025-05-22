import { BookStore } from './book';

export const stores: BookStore[] = [
  {
    id: 'book-house',
    name: 'Book House',
    location: {
      address: '7 Chuy Avenue, Bishkek',
      coordinates: {
        lat: 42.8746,
        lng: 74.5698
      }
    },
    workingHours: {
      open: '09:00',
      close: '20:00'
    },
    contacts: {
      phone: '+996 312 123456',
      email: 'info@bookhouse.kg'
    },
    rating: 4.5,
    reviews: 128
  },
  {
    id: 'raritet',
    name: 'Raritet',
    location: {
      address: '155 Abdrahmanov Street, Bishkek',
      coordinates: {
        lat: 42.8765,
        lng: 74.5899
      }
    },
    workingHours: {
      open: '10:00',
      close: '19:00'
    },
    contacts: {
      phone: '+996 312 234567'
    },
    rating: 4.3,
    reviews: 95
  },
  {
    id: 'my-book',
    name: 'My Book Store',
    location: {
      address: '43 Manas Avenue, Bishkek',
      coordinates: {
        lat: 42.8789,
        lng: 74.5923
      }
    },
    workingHours: {
      open: '09:30',
      close: '21:00'
    },
    contacts: {
      phone: '+996 312 345678',
      email: 'contact@mybookstore.kg'
    },
    rating: 4.7,
    reviews: 156
  }
];
