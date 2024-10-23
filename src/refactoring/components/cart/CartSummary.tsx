import { useCart } from '../../hooks';
import { calculateCartTotal } from '../../hooks/utils/cartUtils';

interface CartSummaryProps {
  totalProductAmount: number;
  discountAmount: number;
  totalAmount: number;
}

const CartSummary = ({ totalProductAmount, discountAmount, totalAmount }: CartSummaryProps) => {
  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">주문 요약</h2>
      <div className="space-y-1">
        <p>상품 금액: {totalProductAmount.toLocaleString()}원</p>
        <p className="text-green-600">할인 금액: {discountAmount.toLocaleString()}원</p>
        <p className="text-xl font-bold">최종 결제 금액: {totalAmount.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default CartSummary;