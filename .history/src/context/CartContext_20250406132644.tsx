import React, { createContext, useContext, useState } from 'react';
import { Book } from '../data/books.data';

interface CartItem extends Book {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (book: Book) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === book.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentItems, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId: string, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === bookId ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => {
    let itemPrice = item.price;
    if (item.format === 'ebook') {
      itemPrice = item.e_price;
    } else if (item.format === 'audio') {
      itemPrice = item.audio_price;
    }
    return sum + itemPrice * item.quantity;
  }, 0);
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
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