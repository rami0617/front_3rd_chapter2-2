import { useState } from 'react';
import { Product } from '../../types';

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (newProduct: Product) => {
    setProducts((prev: Product[]) => {
      return [...prev, newProduct];
    });
  };

  const updateProduct = (newProduct: Product) => {
    setProducts((prev: Product[]) =>
      prev.map((product: Product) => (product.id === newProduct.id ? { ...newProduct } : { ...product })),
    );
  };

  return {
    products,
    addProduct,
    updateProduct,
  };
};
