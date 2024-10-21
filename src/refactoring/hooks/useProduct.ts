import { useState } from 'react';
import { Product } from '../../types.ts';

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (newProduct: Product[]) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (newProduct: Product) => {
    setProducts((prev) =>
      prev.map((product) => (product.name === newProduct.name ? { ...product } : { ...newProduct })),
    );
  };

  return {
    products,
    addProduct,
    updateProduct,
  };
};
