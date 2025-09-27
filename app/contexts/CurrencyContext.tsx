'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'NGN' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (price: number, fromCurrency: Currency) => number;
  formatPrice: (price: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Conversion rate: 1 USD = 1550 NGN (approximate)
const USD_TO_NGN_RATE = 1550;

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('NGN');

  // Load currency preference from localStorage
  useEffect(() => {
    const savedCurrency = localStorage.getItem('preferredCurrency') as Currency;
    if (savedCurrency && (savedCurrency === 'NGN' || savedCurrency === 'USD')) {
      setCurrency(savedCurrency);
    }
  }, []);

  // Save currency preference to localStorage
  const updateCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    localStorage.setItem('preferredCurrency', newCurrency);
  };

  const convertPrice = (price: number, fromCurrency: Currency): number => {
    if (fromCurrency === currency) {
      return price;
    }

    if (fromCurrency === 'USD' && currency === 'NGN') {
      return price * USD_TO_NGN_RATE;
    }

    if (fromCurrency === 'NGN' && currency === 'USD') {
      return price / USD_TO_NGN_RATE;
    }

    return price;
  };

  const formatPrice = (price: number): string => {
    if (currency === 'NGN') {
      return `₦${price.toLocaleString('en-NG')}`;
    }
    return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <CurrencyContext.Provider 
      value={{ 
        currency, 
        setCurrency: updateCurrency, 
        convertPrice,
        formatPrice 
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
