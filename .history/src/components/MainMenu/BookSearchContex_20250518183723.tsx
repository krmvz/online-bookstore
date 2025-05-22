import React, { createContext, useContext, useState } from 'react';
import { Book, BookStore } from '../data/book';

interface SearchResult {
  book: Book;
  stores: {
    store: BookStore;
    price: number;
    inStock: boolean;
    distance: number; // in kilometers
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
      // Here you would implement the actual search logic
      // For now, we'll just simulate a search
      const results = await simulateBookSearch(query);
      setSearchResults(results);
    } catch (err) {
      setError('Search failed. Please try again.');
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