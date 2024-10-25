import { useState } from 'react';
import { Product } from '../../types';

export const useNewProudct = (
  onProductAdd: (newProduct: Product) => void,
  setShowNewProductForm: (showNewProductForm: boolean) => void,
) => {
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    stock: 0,
    discounts: [],
  });

  const addNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    onProductAdd(productWithId);
    setNewProduct({
      name: '',
      price: 0,
      stock: 0,
      discounts: [],
    });
    setShowNewProductForm(false);
  };

  return {
    newProduct,
    setNewProduct,
    addNewProduct,
  };
};
