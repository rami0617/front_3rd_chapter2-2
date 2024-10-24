interface Props {
  handleClickButton: () => void;
  showNewProductForm: boolean;
}

const ProductManagementButton = ({ handleClickButton, showNewProductForm }: Props) => {
  return (
    <button onClick={handleClickButton} className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600">
      {showNewProductForm ? '취소' : '새 상품 추가'}
    </button>
  );
};

export default ProductManagementButton;
