"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Models
import { User } from '@/models/User';
import { Product } from '@/models/Product';
import { Payment } from '@/models/Payment';
import { ProductView } from '@/models/ProductView';

// Services
import { productService } from '@/lib/servies/productService';
import { paymentService } from '@/lib/servies/paymentService';
import { productViewService } from '@/lib/servies/productViewService';
import { userService } from '@/lib/servies/userService';

type DataContextType = {
  users: User[];
  products: Product[];
  payments: Payment[];
  productViews: ProductView[];

  loading: boolean;
  error: string | null;

  refreshData: () => Promise<void>;
  getProductsByUserId: (userId: string) => Promise<void>;
  getPaymentsByProductId: (productId: string) => Promise<void>;
  getProductViewsByProductId: (productId: string) => Promise<void>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [productViews, setProductViews] = useState<ProductView[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getProductsByUserId = async (userId: string) => {
    try {
      const productsData = await productService.getByUserId(userId);
      setProducts(productsData);
    } catch (err) {
      console.error('Error fetching user products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch user products');
    }
  };

  const getPaymentsByProductId = async (productId: string) => {
    try {
      const paymentsData = await paymentService.getByProductId(productId);
      setPayments(paymentsData);
    } catch (err) {
      console.error('Error fetching product payments:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch product payments');
    }
  };

  const getProductViewsByProductId = async (productId: string) => {
    try {
      const productViewsData = await productViewService.getByProductId(productId);
      setProductViews(productViewsData);
    } catch (err) {
      console.error('Error fetching product views:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch product views');
    }
  };

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        usersData,
        productsData,
        paymentsData,
        productViewsData
      ] = await Promise.all([
        userService.getAll(),
        productService.getAll(),
        paymentService.getAll(),
        productViewService.getAll()
      ]);

      setUsers(usersData);
      setProducts(productsData);
      setPayments(paymentsData);
      setProductViews(productViewsData);

    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const value: DataContextType = {
    users,
    products,
    payments,
    productViews,
    loading,
    error,
    refreshData: fetchAllData,
    getProductsByUserId,
    getPaymentsByProductId,
    getProductViewsByProductId,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
};

export default DataContext;