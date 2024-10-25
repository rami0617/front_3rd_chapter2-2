import { useState } from 'react';
import { Coupon } from '../../types';

export const useNewCoupon = (addCoupon: (coupon: Coupon) => void) => {
  const [newCoupon, setNewCoupon] = useState<Coupon>({
    name: '',
    code: '',
    discountType: 'percentage',
    discountValue: 0,
  });

  const addNewCoupon = () => {
    addCoupon(newCoupon);
    setNewCoupon({
      name: '',
      code: '',
      discountType: 'percentage',
      discountValue: 0,
    });
  };

  return {
    newCoupon,
    setNewCoupon,
    addNewCoupon,
  };
};
