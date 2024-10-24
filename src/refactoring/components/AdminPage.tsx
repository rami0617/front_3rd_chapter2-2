import { Coupon, Product } from '../../types';
import { useCoupons, useProducts } from '../hooks';
import CouponManagement from './admin/CouponManagement';
import ProductManagement from './admin/ProductManagement';

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const AdminPage = ({ products, coupons }: Props) => {
  const { addProduct, updateProduct, products: productList } = useProducts(products);
  const { coupons: couponList, addCoupon } = useCoupons(coupons);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">관리자 페이지</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductManagement products={productList} updateProduct={updateProduct} addProduct={addProduct} />
        <CouponManagement coupons={couponList} addCoupon={addCoupon} />
      </div>
    </div>
  );
};
