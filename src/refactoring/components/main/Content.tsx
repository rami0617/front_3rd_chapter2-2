import { initialCoupons, initialProducts } from '../../data';
import { useCoupons, useProducts } from '../../hooks';
import { AdminPage } from '../AdminPage';
import { CartPage } from '../CartPage';

interface ContentProps {
  isAdmin: boolean;
}

const Content = ({ isAdmin }: ContentProps) => {
  const { products, updateProduct, addProduct } = useProducts([]);
  const { coupons, addCoupon } = useCoupons([]);

  return (
    <main className="container mx-auto mt-6">
      {isAdmin ? (
        <AdminPage
          products={products}
          coupons={coupons}
          onProductUpdate={updateProduct}
          onProductAdd={addProduct}
          onCouponAdd={addCoupon}
        />
      ) : (
        <CartPage products={initialProducts} coupons={initialCoupons} />
      )}
    </main>
  );
};

export default Content;
