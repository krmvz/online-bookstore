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
    // Base delivery fee
    const baseFee = 150; // 150 som base delivery fee

    // Additional fee for different cities
    const cityFees: { [key: string]: number } = {
      'Бишкек': 0,
      'Ош': 200,
      'Жалал-Абад': 250,
      'Каракол': 300,
      'Нарын': 250,
      'Талас': 250,
      'Баткен': 300
    };

    return baseFee + (cityFees[city] || 350); // 350 som additional fee for unlisted cities
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