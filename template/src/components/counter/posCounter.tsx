import { useState } from "react";
import { Link } from "react-router";

const PosCounter = () => {

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
      <Link
        to="#"
        className="dec dark d-flex justify-content-center align-items-center"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="minus" onClick={handleDecrement}
      >
        <i className="ti ti-minus" />
      </Link>
      <input
        type="text"
        className="form-control text-center"
        name="qty"
        value={quantity.toString()}
        onChange={handleChange}
      />
      <Link
        to="#"
        className="inc dark dark d-flex justify-content-center align-items-center"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="plus" onClick={handleIncrement}
      >
        <i className="ti ti-plus" />
      </Link>
    </>
  );
};

export default PosCounter;
