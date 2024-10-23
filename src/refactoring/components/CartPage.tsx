import { Coupon, Product } from '../../types';
import { useCart } from '../hooks';
import CartList from './cart/CartList';
import CartSummary from './cart/CartSummary';
import CouponSection from './cart/CouponSection';
import ProductList from './cart/ProductList';

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const { cart, addToCart, removeFromCart, updateQuantity, applyCoupon, calculateTotal, selectedCoupon } = useCart();

  const { totalBeforeDiscount, totalAfterDiscount, totalDiscount } = calculateTotal();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ProductList products={products} cart={cart} handleCart={addToCart} />
        </div>
        <div>
          <CartList cart={cart} handleUpdateQuantity={updateQuantity} handleRemoveFromCart={removeFromCart} />

          <CouponSection coupons={coupons} selectedCoupon={selectedCoupon} handleApplyCoupon={applyCoupon} />

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
