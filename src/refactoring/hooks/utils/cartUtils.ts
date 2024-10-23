import { CartItem, Coupon } from '../../../types'

export const calculateItemTotal = (item: CartItem) => {
  const discount = item.product.discounts.filter((discount) => discount.quantity <= item.quantity)

  let total = item.product.price * item.quantity

  if (discount.length > 0) {
    total -= total * discount[discount.length - 1].rate
  }

  return total
}

export const getMaxApplicableDiscount = (item: CartItem) => {
  if (item.product.discounts.find((discount) => discount.quantity > item.quantity)) {
    return 0
  }

  const filteredDiscount = item.product.discounts.filter((discount) => discount.quantity <= item.quantity)

  return filteredDiscount[filteredDiscount.length - 1].rate
}

export const calculateCartTotal = (cart: CartItem[], selectedCoupon: Coupon | null) => {
  let totalBeforeDiscount = 0
  let totalAfterDiscount = 0

  cart.forEach((item) => {
    let itemTotal = item.product.price * item.quantity
    totalBeforeDiscount += itemTotal

    item.product.discounts.forEach((discount) => {
      if (item.quantity >= discount.quantity) {
        itemTotal -= itemTotal * discount.rate
      }
    })

    totalAfterDiscount += itemTotal
  })

  if (selectedCoupon) {
    if (selectedCoupon.discountType === 'amount') {
      totalAfterDiscount -= selectedCoupon.discountValue
    } else if (selectedCoupon.discountType === 'percentage') {
      totalAfterDiscount -= totalAfterDiscount * (selectedCoupon.discountValue / 100)
    }
  }

  const totalDiscount = Math.floor(totalBeforeDiscount - totalAfterDiscount)

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    totalDiscount,
  }
}

export const updateCartItemQuantity = (cart: CartItem[], productId: string, newQuantity: number): CartItem[] => {
  if (newQuantity === 0) {
    return cart.filter((item) => item.product.id !== productId)
  }

  return cart.map((item) =>
    item.product.id === productId ? { ...item, quantity: Math.min(newQuantity, item.product.stock) } : item,
  )
}
