import { useState } from 'react';
import { Discount, Product } from '../../types';
import { addDiscountToProduct, findProductId, removeDiscountToProduct } from '../utils';

export const useDiscount = (
  products: Product[],
  updateProduct: (product: Product) => void,
  setProductItem: (product: Product) => void,
) => {
  const [newDiscount, setNewDiscount] = useState<Discount>({ quantity: 0, rate: 0 });

  const addDiscount = (id: string) => {
    const updatedProduct = findProductId(products, id);

    if (updatedProduct) {
      const newProduct = addDiscountToProduct(updatedProduct, newDiscount);

      updateProduct(newProduct);
      setProductItem(newProduct);
      setNewDiscount({ quantity: 0, rate: 0 });
    }
  };

  const removeDiscount = (id: string, index: number) => {
    const updatedProduct = findProductId(products, id);

    if (updatedProduct) {
      const newProduct = removeDiscountToProduct(updatedProduct, index);

      updateProduct(newProduct);
      setProductItem(newProduct);
    }
  };

  return { newDiscount, setNewDiscount, addDiscount, removeDiscount };
};
