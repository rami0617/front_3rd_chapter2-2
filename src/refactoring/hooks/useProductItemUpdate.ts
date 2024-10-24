import { useState } from 'react';
import { Product } from '../../types';

export const useProductItemUpdate = (initialProduct: Product | null, updateProduct: (product: Product) => void) => {
  const [productItem, setProductItem] = useState<Product | null>(initialProduct);

  const updateName = (newName: string) => {
    if (productItem) {
      setProductItem((prev) => (prev ? { ...prev, name: newName } : null));
    }
  };

  const updatePrice = (newPrice: number) => {
    if (productItem) {
      setProductItem((prev) => (prev ? { ...prev, price: newPrice } : null));
    }
  };

  const updateStock = (newStock: number) => {
    if (productItem) {
      setProductItem((prev) => (prev ? { ...prev, stock: newStock } : null));
    }
  };

  const selectEditProduct = (product: Product) => {
    setProductItem(null);
    setProductItem(product);
  };

  const completeEditProduct = () => {
    if (productItem) {
      updateProduct(productItem);
      setProductItem(null);
    }
  };

  return {
    productItem,
    updateName,
    updatePrice,
    updateStock,
    setProductItem,
    selectEditProduct,
    completeEditProduct,
  };
};
