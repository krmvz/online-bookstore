import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { db } from '../config/firebase';
import { collection, query, where, getDocs, orderBy, startAt, endAt } from 'firebase/firestore';

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  description: string;
  storeId: string;
  category: string;
  rating?: number;
}

interface BookSearchContextType {
  searchResults: Book[];
  loading: boolean;
  error: string | null;
  searchBooks: (searchTerm: string, filters?: SearchFilters) => Promise<void>;
  compareBooks: (bookIds: string[]) => Promise<Book[]>;
  clearResults: () => void;
}

interface SearchFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
}

const BookSearchContext = createContext<BookSearchContextType | undefined>(undefined);

export function BookSearchProvider({ children }: { children: ReactNode }) {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchBooks = async (searchTerm: string, filters?: SearchFilters) => {
    setLoading(true);
    setError(null);
    try {
      // Import local books data
      const { books } = await import('../data/books.data');
      
      let filteredBooks = [...books];

      if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        filteredBooks = filteredBooks.filter(book =>
          book.title.toLowerCase().includes(searchTermLower) ||
          book.author.toLowerCase().includes(searchTermLower)
        );
      }

      if (filters) {
        if (filters.category) {
          filteredBooks = filteredBooks.filter(book => book.category === filters.category);
        }
        if (filters.minPrice !== undefined) {
          filteredBooks = filteredBooks.filter(book => book.price >= filters.minPrice!);
        }
        if (filters.maxPrice !== undefined) {
          filteredBooks = filteredBooks.filter(book => book.price <= filters.maxPrice!);
        }
        if (filters.rating !== undefined) {
          filteredBooks = filteredBooks.filter(book => (book.rating || 0) >= filters.rating!);
        }
      }

      // Import stores data
      const { stores } = await import('../data/book');

      // Transform the books data to match the Book interface
      const transformedBooks = filteredBooks.map(book => ({
        ...book,
        stores: book.availability.map(store => {
          const storeData = stores.find(s => s.id === store.storeId);
          if (!storeData) return null;
          return {
            store: storeData,
            price: store.price,
            inStock: store.inStock,
            quantity: store.quantity
          };
        }).filter(Boolean)
      }))
      );

      setSearchResults(transformedBooks);
    } catch (err) {
      setError('Error searching books: ' + (err instanceof Error ? err.message : String(err)));
      console.error('Error searching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const compareBooks = async (bookIds: string[]): Promise<Book[]> => {
    try {
      const booksRef = collection(db, 'books');
      const books: Book[] = [];

      for (const bookId of bookIds) {
        const q = query(booksRef, where('id', '==', bookId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          books.push({ id: doc.id, ...doc.data() } as Book);
        });
      }

      return books;
    } catch (err) {
      console.error('Error comparing books:', err);
      throw err;
    }
  };

  const clearResults = () => {
    setSearchResults([]);
    setError(null);
  };

  const value = {
    searchResults,
    loading,
    error,
    searchBooks,
    compareBooks,
    clearResults
  };

  return (
    <BookSearchContext.Provider value={value}>
      {children}
    </BookSearchContext.Provider>
  );
}

export function useBookSearch() {
  const context = useContext(BookSearchContext);
  if (context === undefined) {
    throw new Error('useBookSearch must be used within a BookSearchProvider');
  }
  return context;
}