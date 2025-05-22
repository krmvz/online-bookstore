import React, { createContext, useContext, useState } from 'react';
import { Book, BookStore } from '../../data/book';
import { db } from '../../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

interface SearchResult {
  book: Book;
  stores: {
    store: BookStore;
    price: number;
    inStock: boolean;
    distance: number;
  }[];
}

interface BookSearchContextType {
  searchResults: SearchResult[];
  loading: boolean;
  error: string | null;
  searchBooks: (query: string) => Promise<void>;
}

const BookSearchContext = createContext<BookSearchContextType | undefined>(undefined);

export function BookSearchProvider({ children }: { children: React.ReactNode }) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchBooks = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      // Query books collection
      const booksRef = collection(db, 'books');
      const q = query(booksRef, where('title', '>=', query), where('title', '<=', query + '\uf8ff'));
      const querySnapshot = await getDocs(q);
      
      const results: SearchResult[] = [];
      
      for (const doc of querySnapshot.docs) {
        const bookData = doc.data() as Book;
        results.push({
          book: bookData,
          stores: bookData.availability.map(avail => ({
            store: stores.find(s => s.id === avail.storeId)!,
            price: avail.price,
            inStock: avail.inStock,
            distance: 0 // Will be calculated when implementing location features
          }))
        });
      }
      
      setSearchResults(results);
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookSearchContext.Provider value={{ searchResults, loading, error, searchBooks }}>
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