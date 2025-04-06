import React, { createContext, useContext, useState } from 'react';
import { Book } from '../data/books.data';

interface CartItem extends Book {
  quantity: number;
  format: 'physical' | 'ebook' | 'audio';
}

interface CartContextType {
  items: CartItem[];
  addToCart: (book: Book, format: 'physical' | 'ebook' | 'audio') => void;
  removeFromCart: (bookId: string, format: 'physical' | 'ebook' | 'audio') => void;
  updateQuantity: (bookId: string, format: 'physical' | 'ebook' | 'audio', quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (book: Book, format: 'physical' | 'ebook' | 'audio') => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => 
        item.id === book.id && item.format === format
      );
      
      const price = format === 'physical' ? book.price 
                  : format === 'ebook' ? book.e_price 
                  : book.audio_price;

      if (existingItem) {
        return currentItems.map(item =>
          (item.id === book.id && item.format === format) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...currentItems, { ...book, quantity: 1, format }];
    });
  };

  const removeFromCart = (bookId: string, format: 'physical' | 'ebook' | 'audio') => {
    setItems(currentItems => 
      currentItems.filter(item => !(item.id === bookId && item.format === format))
    );
  };

  const updateQuantity = (bookId: string, format: 'physical' | 'ebook' | 'audio', quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        (item.id === bookId && item.format === format) 
          ? { ...item, quantity: Math.max(0, quantity) } 
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => {
    const price = item.format === 'physical' ? item.price 
                : item.format === 'ebook' ? item.e_price 
                : item.audio_price;
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      total 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}