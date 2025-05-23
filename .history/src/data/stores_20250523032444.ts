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
    id: 'oku-kg',
    name: 'Oku.kg',
    location: {
      address: '178 Toktogul Street, Bishkek',
      coordinates: {
        lat: 42.8712,
        lng: 74.5845
      }
    },
    workingHours: {
      open: '09:00',
      close: '20:00'
    },
    contacts: {
      phone: '+996 312 979797',
      email: 'info@oku.kg'
    },
    rating: 4.8,
    reviews: 203
  }
];