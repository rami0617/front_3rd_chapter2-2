import { useState } from 'react';
import { Discount, Product } from '../../../types';
import TitleContainer from '../common/TitleContainer';
import NewProductForm from '../product/NewProductForm';
import ProductDetail from '../product/ProductDetail';
import ProductEditForm from '../product/ProductEditForm';
import ProductManagementButton from '../product/ProductManagementButton';
import ProductToggleButton from '../product/ProductToggleButton';

interface Props {
  products: Product[];
  updateProduct: (product: Product) => void;
  addProduct: (product: Product) => void;
}

const ProductManagement = ({ products, updateProduct, addProduct }: Props) => {
  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const [openProductIds, setOpenProductIds] = useState<Set<string>>(new Set());
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newDiscount, setNewDiscount] = useState<Discount>({ quantity: 0, rate: 0 });

  const toggleProductAccordion = (productId: string) => {
    setOpenProductIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct({ ...product });
  };

  // 새로운 핸들러 함수 추가
  const handleProductNameUpdate = (productId: string, newName: string) => {
    if (editingProduct && editingProduct.id === productId) {
      const updatedProduct = { ...editingProduct, name: newName };
      setEditingProduct(updatedProduct);
    }
  };

  // 새로운 핸들러 함수 추가
  const handlePriceUpdate = (productId: string, newPrice: number) => {
    if (editingProduct && editingProduct.id === productId) {
      const updatedProduct = { ...editingProduct, price: newPrice };
      setEditingProduct(updatedProduct);
    }
  };

  // 수정 완료 핸들러 함수 추가
  const handleEditComplete = () => {
    if (editingProduct) {
      updateProduct(editingProduct);
      setEditingProduct(null);
    }
  };

  const handleStockUpdate = (productId: string, newStock: number) => {
    const updatedProduct = products.find((p) => p.id === productId);
    if (updatedProduct) {
      const newProduct = { ...updatedProduct, stock: newStock };
      updateProduct(newProduct);
      setEditingProduct(newProduct);
    }
  };

  const handleAddDiscount = (productId: string) => {
    const updatedProduct = products.find((p) => p.id === productId);
    if (updatedProduct && editingProduct) {
      const newProduct = {
        ...updatedProduct,
        discounts: [...updatedProduct.discounts, newDiscount],
      };
      updateProduct(newProduct);
      setEditingProduct(newProduct);
      setNewDiscount({ quantity: 0, rate: 0 });
    }
  };

  const handleRemoveDiscount = (productId: string, index: number) => {
    console.log(productId, index);
    const updatedProduct = products.find((p) => p.id === productId);
    if (updatedProduct) {
      const newProduct = {
        ...updatedProduct,
        discounts: updatedProduct.discounts.filter((_, i) => i !== index),
      };
      updateProduct(newProduct);
      setEditingProduct(newProduct);
    }
  };

  return (
    <div>
      <TitleContainer title="상품 관리" />
      <ProductManagementButton
        handleClickButton={() => setShowNewProductForm(!showNewProductForm)}
        showNewProductForm={showNewProductForm}
      />
      {showNewProductForm && <NewProductForm setShowNewProductForm={setShowNewProductForm} onProductAdd={addProduct} />}
      <div className="space-y-2">
        {products.map((product, index) => (
          <div key={product.id} data-testid={`product-${index + 1}`} className="bg-white p-4 rounded shadow">
            <ProductToggleButton
              name={product.name}
              price={product.price}
              stock={product.stock}
              handleButtonClick={() => toggleProductAccordion(product.id)}
            />
            {openProductIds.has(product.id) && (
              <div className="mt-2">
                {editingProduct && editingProduct.id === product.id ? (
                  <ProductEditForm
                    editingProduct={editingProduct}
                    newDiscount={newDiscount}
                    handleProductNameUpdate={(name: string) => handleProductNameUpdate(product.id, name)}
                    handlePriceUpdate={(price: number) => handlePriceUpdate(product.id, price)}
                    handleStockUpdate={(stock: number) => handleStockUpdate(product.id, stock)}
                    handleRemoveDiscount={() => handleRemoveDiscount(product.id, index)}
                    handleAddDiscount={() => handleAddDiscount(product.id)}
                    handleEditComplete={() => handleEditComplete()}
                    handleDiscount={(discount) => setNewDiscount({ ...discount })}
                  />
                ) : (
                  <ProductDetail
                    discounts={product.discounts}
                    handleEditButtonClick={() => handleEditProduct(product)}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
