import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from './CartContext';

interface DeliveryAddress {
  street: string;
  city: string;
  postalCode: string;
  phone: string;
}

interface PaymentContextType {
  deliveryAddress: DeliveryAddress | null;
  setDeliveryAddress: (address: DeliveryAddress) => void;
  calculateDeliveryFee: (city: string) => number;
  calculateTotal: (items: CartItem[], deliveryFee: number) => number;
  isProcessingPayment: boolean;
  processPayment: (items: CartItem[], deliveryAddress: DeliveryAddress) => Promise<boolean>;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const calculateDeliveryFee = (city: string): number => {
    // Two-tier pricing structure
    return city === 'Бишкек' ? 100 : 250; // 100 som for Bishkek, 250 som for other regions
  };

  const calculateTotal = (items: CartItem[], deliveryFee: number): number => {
    const itemsTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    return itemsTotal + deliveryFee;
  };

  const processPayment = async (items: CartItem[], deliveryAddress: DeliveryAddress): Promise<boolean> => {
    setIsProcessingPayment(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would integrate with a payment gateway here
      // For now, we'll just simulate a successful payment
      
      setIsProcessingPayment(false);
      return true;
    } catch (error) {
      console.error('Payment processing error:', error);
      setIsProcessingPayment(false);
      return false;
    }
  };

  const value = {
    deliveryAddress,
    setDeliveryAddress,
    calculateDeliveryFee,
    calculateTotal,
    isProcessingPayment,
    processPayment
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
}