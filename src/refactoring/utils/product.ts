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
