import { Coupon, Product } from '../../types';
import { useCart } from '../hooks';
import CartList from './cart/CartList';
import CartSummary from './cart/CartSummary';
import CouponSection from './cart/CouponSection';
import ProductList from './cart/ProductList';
import PageTitle from './common/PageTitle';

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const { cart, addToCart, removeFromCart, updateQuantity, applyCoupon, calculateTotal, selectedCoupon } = useCart();
  const { totalBeforeDiscount, totalAfterDiscount, totalDiscount } = calculateTotal();

  return (
    <div className="container mx-auto p-4">
      <PageTitle title="장바구니" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ProductList cart={cart} handleCart={addToCart} products={products} />
        </div>
        <div>
          <CartList cart={cart} handleUpdateQuantity={updateQuantity} handleRemoveFromCart={removeFromCart} />
          <CouponSection selectedCoupon={selectedCoupon} handleApplyCoupon={applyCoupon} coupons={coupons} />
          <CartSummary
            totalProductAmount={totalBeforeDiscount}
            totalAmount={totalAfterDiscount}
            discountAmount={totalDiscount}
          />
        </div>
      </div>
    </div>
  );
};
