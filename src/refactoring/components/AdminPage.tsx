import { Coupon, Product } from '../../types';
import CouponManagement from './admin/CouponManagement';
import ProductManagement from './admin/ProductManagement';

interface Props {
  products: Product[];
  coupons: Coupon[];
  onProductUpdate: (updatedProduct: Product) => void;
  onProductAdd: (newProduct: Product) => void;
  onCouponAdd: (newCoupon: Coupon) => void;
}

export const AdminPage = ({ products, coupons, onProductUpdate, onProductAdd, onCouponAdd }: Props) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">관리자 페이지</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductManagement onProductAdd={onProductAdd} onProductUpdate={onProductUpdate} products={products} />
        <CouponManagement coupons={coupons} onCouponAdd={onCouponAdd} />
      </div>
    </div>
  );
};
