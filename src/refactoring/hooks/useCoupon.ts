import { useState } from 'react';
import { Coupon } from '../../types';

export const useCoupons = (initialCoupons: Coupon[]) => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);

  const addCoupon = (newCoupon: Coupon) => {
    setCoupons((prev: Coupon[]) => [...prev, newCoupon]);
  };

  return {
    coupons,
    addCoupon,
  };
};
