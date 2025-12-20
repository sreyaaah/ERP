import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Tooltip } from "primereact/tooltip";
import { MinusCircle, PlusCircle } from "react-feather";

const CartCounter = () => {
  const [quantity, setQuantity] = useState(0);

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

  const handleChange = (e: any) => {
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
      <Tooltip target=".pr-tooltip">
        <Link
          to="#"
          className="dec d-flex justify-content-center align-items-center"
          onClick={handleDecrement}
          data-pr-tooltip="minus"
          data-pr-position="top"
        >
          <MinusCircle size={18} />
        </Link>
      </Tooltip>
      <input
        type="text"
        className="form-control text-center"
        name="qty"
        value={quantity.toString()}
        onChange={handleChange}
      />
      <Tooltip target=".pr-tooltip">
        <Link
          to="#"
          className="inc d-flex justify-content-center align-items-center"
          onClick={handleIncrement}
          data-pr-tooltip="plus"
          data-pr-position="top"
        >
          <PlusCircle size={18} />
        </Link>
      </Tooltip>
    </>
  );
};
CartCounter.propTypes = {
  defaultValue: PropTypes.any,
};
export default CartCounter;
