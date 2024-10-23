# 리팩토링 과정 기록

- 한번에 큰 변화를 주기보다 점진적으로 리팩토링 해 나간다.
- 테스트코드를 통과하고, 기존 UI와 기능이 유지되도록 한다.

1. 컴포넌트 분리 : 관심사별로 나눠보기로 한다.

   1. CartPage -> 상품 목록(ProductList), 장바구니 내역(CartList), 쿠폰 적용(CouponSection), 주문 요약(CartSummary)
   2. AdminPage -> 상품관리(ProductManagement), 쿠폰관리(CouponManagement)
   3. App -> Navigation, Content
   4. props drilling을 통해 데이터와 함수들을 전달한다.
   5. App에 위치해 있던 data들을 폴더를 만들어 entity(product, coupon)에 따라 파일을 다르게 해 넣어주었다.

2.
