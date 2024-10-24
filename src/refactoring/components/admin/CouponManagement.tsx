import { Coupon } from '../../../types';
import TitleContainer from '../common/TitleContainer';
import CouponAddForm from '../coupon/CouponAddForm';
import CurrentCouponList from '../coupon/CurrentCouponList';

interface Props {
  coupons: Coupon[];
  onCouponAdd: (coupon: Coupon) => void;
}

const CouponManagement = ({ coupons, onCouponAdd }: Props) => {
  return (
    <div>
      <TitleContainer title="쿠폰 관리" />
      <div className="bg-white p-4 rounded shadow">
        <CouponAddForm onCouponAdd={onCouponAdd} />
        <CurrentCouponList coupons={coupons} />
      </div>
    </div>
  );
};

export default CouponManagement;
