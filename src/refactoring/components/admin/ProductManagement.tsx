import { useState } from 'react';
import { Product } from '../../../types';
import { useAccordion, useDiscount, useProductItemUpdate } from '../../hooks';
import TitleContainer from '../common/Subtitle';
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
  const [showNewProductForm, setShowNewProductForm] = useState<boolean>(false);

  const { productItem, updateName, updatePrice, updateStock, setProductItem, selectEditProduct, completeEditProduct } =
    useProductItemUpdate(null, updateProduct);
  const { openItems, toggleItems } = useAccordion();
  const { newDiscount, setNewDiscount, addDiscount, removeDiscount } = useDiscount(
    products,
    updateProduct,
    setProductItem,
  );

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
              handleButtonClick={() => toggleItems(product.id)}
            />
            {openItems.has(product.id) && (
              <div className="mt-2">
                {productItem && productItem.id === product.id ? (
                  <ProductEditForm
                    editingProduct={productItem}
                    newDiscount={newDiscount}
                    handleProductNameUpdate={(name: string) => updateName(name)}
                    handlePriceUpdate={(price: number) => updatePrice(price)}
                    handleStockUpdate={(stock: number) => updateStock(stock)}
                    handleRemoveDiscount={() => removeDiscount(product.id, index)}
                    handleAddDiscount={() => addDiscount(product.id)}
                    handleEditComplete={() => completeEditProduct()}
                    handleDiscount={(discount) => setNewDiscount({ ...discount })}
                  />
                ) : (
                  <ProductDetail
                    discounts={product.discounts}
                    handleEditButtonClick={() => selectEditProduct(product)}
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
