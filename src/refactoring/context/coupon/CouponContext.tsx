import { createContext, useContext, useState, ReactNode } from 'react';
import { Coupon } from '../../../types';

interface CouponContextType {
  coupons: Coupon[];
  addCoupon: (newCoupon: Coupon) => void;
}

const CouponContext = createContext<CouponContextType | undefined>(undefined);

export const useCoupons = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error('useCoupons must be used within a CouponProvider');
  }
  return context;
};

export const CouponProvider = ({ children }: { children: ReactNode }) => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  const addCoupon = (newCoupon: Coupon) => setCoupons((prev) => [...prev, newCoupon]);

  return <CouponContext.Provider value={{ coupons, addCoupon }}>{children}</CouponContext.Provider>;
};
