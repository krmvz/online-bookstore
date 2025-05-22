import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, query, where, deleteDoc, doc, updateDoc, onSnapshot, writeBatch } from 'firebase/firestore';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

interface CartItem {
  id?: string;
  bookId: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
  userId?: string;
  storeId: string; // Which store the book is being purchased from
}

interface CartContextType {
  addToCart: (book: CartItem) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  cartItems: CartItem[];
  loading: boolean;
  isAddingToCart: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let cartUnsubscribe: () => void;

    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user?.uid || null);
      if (user) {
        const cartRef = collection(db, 'carts');
        const q = query(cartRef, where('userId', '==', user.uid));
        
        cartUnsubscribe = onSnapshot(q, (snapshot) => {
          const items: CartItem[] = [];
          snapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() } as CartItem);
          });
          setCartItems(items);
          setLoading(false);
        });
      } else {
        setCartItems([]);
        setLoading(false);
      }
    });

    return () => {
      authUnsubscribe();
      if (cartUnsubscribe) {
        cartUnsubscribe();
      }
    };
  }, []);

  const addToCart = async (book: CartItem) => {
    if (!userId) return;
    setIsAddingToCart(true);

    try {
      const existingItem = cartItems.find(item => item.bookId === book.bookId);
      
      if (existingItem) {
        const docRef = doc(db, 'carts', existingItem.id!);
        await updateDoc(docRef, { quantity: existingItem.quantity + 1 });
      } else {
        const cartRef = collection(db, 'carts');
        await addDoc(cartRef, {
          userId,
          bookId: book.bookId,
          title: book.title,
          price: book.price,
          quantity: 1,
          imageUrl: book.imageUrl,
          format: book.format
        });
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (!userId || quantity < 1) return;

    const updatedItems = cartItems.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);

    try {
      const docRef = doc(db, 'carts', itemId);
      await updateDoc(docRef, { quantity });
    } catch (error) {
      setCartItems(cartItems);
      console.error('Error updating quantity:', error);
    }
  };

  const removeFromCart = async (itemId: string) => {
    if (!userId) return;

    const filteredItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(filteredItems);

    try {
      await deleteDoc(doc(db, 'carts', itemId));
    } catch (error) {
      setCartItems(cartItems);
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    if (!userId) return;

    try {
      const batch = writeBatch(db);
      cartItems.forEach(item => {
        if (item.id) {
          const docRef = doc(db, 'carts', item.id);
          batch.delete(docRef);
        }
      });
      await batch.commit();
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
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