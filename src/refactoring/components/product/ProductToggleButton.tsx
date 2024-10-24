interface Props {
  name: string;
  price: number;
  stock: number;
  handleButtonClick: () => void;
}

const ProductToggleButton = ({ name, price, stock, handleButtonClick }: Props) => {
  return (
    <button data-testid="toggle-button" onClick={() => handleButtonClick()} className="w-full text-left font-semibold">
      {name} - {price}원 (재고: {stock})
    </button>
  );
};

export default ProductToggleButton;
