import { useState } from "react";
import { MinusCircle, PlusCircle } from "react-feather";

interface CounterTwoProps {
  defaultValue?: number;
}

const CounterTwo = ({ defaultValue = 0 }: CounterTwoProps) => {
  const [quantity, setQuantity] = useState(defaultValue);

  const handleIncrement = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  interface HandleChangeEvent {
    target: { value: string };
  }

  const handleChange = (e: HandleChangeEvent) => {
    const value = e.target.value;
    const numericValue = parseInt(value, 10);

    if (value === "") {
      setQuantity(0);
    } else if (
      !isNaN(numericValue) &&
      numericValue >= 0 &&
      numericValue <= 99
    ) {
      setQuantity(numericValue);
    }
  };

  return (
    <>
      <span className="quantity-btn ps-2" onClick={handleDecrement}>
        <MinusCircle size={18} />
      </span>
      <input
        type="text"
        className="quntity-input bg-transparent p-0"
        value={quantity.toString()}
        onChange={handleChange}
      />
      <span className="quantity-btn pe-2" onClick={handleIncrement}>
        <PlusCircle size={18} />
      </span>
    </>
  );
};

export default CounterTwo;
