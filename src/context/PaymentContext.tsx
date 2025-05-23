import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from './CartContext';

interface DeliveryAddress {
  street: string;
  city: string;
  phone: string;
  deliverySpeed: 'express' | 'standard' | 'economy';
}

interface PaymentVerification {
  transactionId: string;
  receiptImage: File | null;
  verificationStatus: 'pending' | 'verified' | 'rejected';
}

interface PaymentContextType {
  deliveryAddress: DeliveryAddress | null;
  setDeliveryAddress: (address: DeliveryAddress) => void;
  calculateDeliveryFee: (city: string, deliverySpeed: 'express' | 'standard' | 'economy') => number;
  calculateTotal: (items: CartItem[], deliveryFee: number) => number;
  isProcessingPayment: boolean;
  processPayment: (items: CartItem[], deliveryAddress: DeliveryAddress, paymentVerification: PaymentVerification) => Promise<boolean>;
  verifyPayment: (transactionId: string, receiptImage: File) => Promise<boolean>;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentVerification, setPaymentVerification] = useState<PaymentVerification | null>(null);

  const calculateDeliveryFee = (city: string, deliverySpeed: 'express' | 'standard' | 'economy'): number => {
    // Base delivery fees by zone
    const baseDeliveryFees = {
      'Бишкек': 100,    // Zone 1 - Capital
      'Ош': 200,        // Zone 2 - Major city
      'Жалал-Абад': 250,// Zone 3 - Regional center
      'Каракол': 300,   // Zone 4 - Remote city
      'Нарын': 300,     // Zone 4 - Remote city
      'Талас': 300,     // Zone 4 - Remote city
      'Баткен': 350     // Zone 5 - Far remote city
    };

    // Get base fee for the city
    const baseFee = baseDeliveryFees[city as keyof typeof baseDeliveryFees] || 350;
    
    // Apply multiplier based on delivery speed
    const speedMultiplier = {
      'express': 2,    // 1-day delivery (2x base fee)
      'standard': 1.5, // 3-day delivery (1.5x base fee)
      'economy': 1     // 5-day delivery (base fee)
    }[deliverySpeed];
    
    return Math.round(baseFee * speedMultiplier);
  };

  const calculateTotal = (items: CartItem[], deliveryFee: number): number => {
    const itemsTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    return itemsTotal + deliveryFee;
  };

  const verifyPayment = async (transactionId: string, receiptImage: File): Promise<boolean> => {
    try {
      // Here you would typically:
      // 1. Upload the receipt image to your server
      // 2. Verify the transaction ID with your payment provider
      // 3. Update the verification status
      
      // For now, we'll simulate verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful verification
      return true;
    } catch (error) {
      console.error('Payment verification error:', error);
      return false;
    }
  };

  const processPayment = async (items: CartItem[], deliveryAddress: DeliveryAddress, paymentVerification: PaymentVerification): Promise<boolean> => {
    setIsProcessingPayment(true);
    try {
      // First verify the payment
      const isVerified = await verifyPayment(paymentVerification.transactionId, paymentVerification.receiptImage!);
      
      if (!isVerified) {
        throw new Error('Payment verification failed');
      }
      
      // Process the order
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
    processPayment,
    verifyPayment
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