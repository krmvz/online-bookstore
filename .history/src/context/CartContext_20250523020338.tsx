import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  bookId: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
  storeId: string;
  storeName: string;
  format?: string;
}

interface CartContextType {
  addToCart: (book: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartItems: CartItem[];
  loading: boolean;
  isAddingToCart: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setLoading(false);
  }, []);

  const saveToLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const addToCart = (book: CartItem) => {
    setIsAddingToCart(true);
    try {
      const existingItem = cartItems.find(item => item.bookId === book.bookId && item.storeId === book.storeId);
      
      if (existingItem) {
        const updatedItems = cartItems.map(item =>
          item.bookId === book.bookId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updatedItems);
        saveToLocalStorage(updatedItems);
      } else {
        const newItem = {
          ...book,
          id: `${book.bookId}-${Date.now()}`,
          quantity: 1,
          format: book.format || 'paperback'
        };
        const updatedItems = [...cartItems, newItem];
        setCartItems(updatedItems);
        saveToLocalStorage(updatedItems);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) return;

    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    saveToLocalStorage(updatedItems);
  };

  const removeFromCart = (itemId: string) => {
    const filteredItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(filteredItems);
    saveToLocalStorage(filteredItems);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const value = {
    cartItems,
    loading,
    isAddingToCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
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