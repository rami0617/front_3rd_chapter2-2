# 리팩토링 과정 기록

- 한번에 큰 변화를 주기보다 점진적으로 리팩토링 해 나간다.
- 테스트코드를 통과하고, 기존 UI와 기능이 유지되도록 한다.

1. 컴포넌트 분리 : 관심사별로 나눠보기로 한다.

   1. CartPage -> 상품 목록(ProductList), 장바구니 내역(CartList), 쿠폰 적용(CouponSection), 주문 요약(CartSummary)
   2. AdminPage -> 상품관리(ProductManagement), 쿠폰관리(CouponManagement)
   3. App -> Navigation, Content
   4. props drilling을 통해 데이터와 함수들을 전달한다.
   5. App에 위치해 있던 data들을 폴더를 만들어 entity(product, coupon)에 따라 파일을 다르게 해 넣어주었다.

2. 과제에는 어떤 entity들이 있는지 확인하고 entity에 따른 컴포넌트 분리를 생각해본다.
   1. user(admin 여부), product(상품), coupon(쿠폰)
3. App -> admin여부에 따른 컴포넌트 분리

   1. 기존에 App -> Navigation, Content 컴포넌트로 분리했었는데 entity를 기준으로 분리한다면 AdminLayout, UserLayout으로 나눌 수 있을 것 같다. 하지만 그렇게 나눈다면 기존에 AdminPage, CartPage와 다를 것이 없다.

4. 기존에 나눠져 있는 컴포넌트들을 다시 살펴보니 관심사에 따라 더 나눌 수 있을 것이라는 생각이 들었다. 다시 분리 작업시작.
   1. admin, cart, coupon에 동일하게 타이틀 부분이 같은 style을 사용하고 있어 하나의 컴포넌트로 묶어줌(TitleContainer)
5. 나누다보니 크게 user, coupon, product 3개의 entity로 나눌 수 있게 되었다.
   1. 결국 cart에 있는 것들도 product, coupon으로 나눌 수 있다.
6. props drilling이 3번 이상 일어나는 일이 빈번해져 중앙에서 상태관리를 해 줄 수 있는 뭔가가 필요해졌다.
7. 디펜던시 추가 없이 상태관리를 할 수 있는 contenxt api를 사용하기로 했다.
8. refactoring > context 폴더를 만들어 context provider들을 정의해주었다.
9.
