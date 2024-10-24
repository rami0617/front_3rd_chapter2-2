import { Discount, Product } from '../../types';

export const addDiscountToProduct = (product: Product, discount: Discount) => {
  return {
    ...product,
    discounts: [...product.discounts, discount],
  };
};

export const removeDiscountToProduct = (product: Product, discountIndex: number) => {
  return {
    ...product,
    discounts: product.discounts.filter((_, i) => i !== discountIndex),
  };
};
