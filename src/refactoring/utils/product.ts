import { Product } from '../../types';

export const findProductId = (products: Product[], productId: string) => {
  return products.find((p) => p.id === productId);
};

export const updateProductItem = <K extends keyof Product>(editingProduct: Product, key: K, value: Product[K]) => {
  return {
    ...editingProduct,
    [key]: value,
  };
};

export const getMaxDiscount = (discounts: { quantity: number; rate: number }[]) => {
  return discounts.reduce((max, discount) => Math.max(max, discount.rate), 0);
};

export const getRemainingStock = (product: Product, cartItemQuantity: number) => {
  return product.stock - cartItemQuantity;
};
