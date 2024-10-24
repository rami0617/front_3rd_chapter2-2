import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../../../types';

interface ProductContextType {
  products: Product[];
  addProduct: (newProduct: Product) => void;
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (productId: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (newProduct: Product) => setProducts((prev) => [...prev, newProduct]);
  const updateProduct = (updatedProduct: Product) =>
    setProducts((prev) => prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  const deleteProduct = (productId: string) =>
    setProducts((prev) => prev.filter((product) => product.id !== productId));

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
