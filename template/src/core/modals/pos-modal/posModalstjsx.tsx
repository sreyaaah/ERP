import { useState } from "react";
import { Link } from "react-router-dom";
import TableTopHead from "../../../components/table-top-head";
import CommonSelect from "../../../components/select/common-select";
import {
  barcodeImg3,
  excel,
  giftCard,
  logo,
  logoWhite,
  pdf,
  posProduct16,
  posProduct17,
  scanImg,
  scanImgWhite,
  user02,
  user03,
  user05,
  user06,
  user12,
  user22,
  user27,
} from "../../../utils/imagepath";

const PosModals = () => {
  const [selectedTaxType, setSelectedTaxType] = useState<string | null>(null);
  const [selectedDiscountType, setSelectedDiscountType] = useState<
    string | null
  >(null);
  const [selectedWeightUnit, setSelectedWeightUnit] = useState<string | null>(
    null
  );
  const [selectedTaxRate, setSelectedTaxRate] = useState<string | null>(null);
  const [selectedCouponCode, setSelectedCouponCode] = useState<string | null>(
    null
  );
  const [selectedDiscountMode, setSelectedDiscountMode] = useState<
    string | null
  >(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const [selectedPaymentType, setSelectedPaymentType] = useState<string | null>(
    null
  );

  const [input, setInput] = useState("");

  const handleButtonClick = (value: any) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const safeEvaluateExpression = (expression: string): number => {
    // Remove all whitespace
    let cleanExpr = expression.replace(/\s/g, "");
    
    // Validate expression only contains allowed characters: numbers, operators, and decimal point
    if (!/^[0-9+\-*/().%]+$/.test(cleanExpr)) {
      throw new Error("Invalid expression");
    }

    // Handle percentage conversion: convert X% to (X/100)
    cleanExpr = cleanExpr.replace(/(\d+\.?\d*)%/g, "($1/100)");

    // Simple recursive descent parser for basic arithmetic
    // This avoids eval() and Function() completely, preventing minification issues
    
    let index = 0;
    
    const parseNumber = (): number => {
      let numStr = "";
      while (index < cleanExpr.length && /[0-9.]/.test(cleanExpr[index])) {
        numStr += cleanExpr[index];
        index++;
      }
      const num = parseFloat(numStr);
      if (isNaN(num)) throw new Error("Invalid number");
      return num;
    };
    
    const parseExpression = (): number => {
      let result = parseTerm();
      while (index < cleanExpr.length && (cleanExpr[index] === "+" || cleanExpr[index] === "-")) {
        const op = cleanExpr[index];
        index++;
        const term = parseTerm();
        result = op === "+" ? result + term : result - term;
      }
      return result;
    };
    
    const parseTerm = (): number => {
      let result = parseFactor();
      while (index < cleanExpr.length && (cleanExpr[index] === "*" || cleanExpr[index] === "/")) {
        const op = cleanExpr[index];
        index++;
        const factor = parseFactor();
        if (op === "*") {
          result = result * factor;
        } else {
          if (factor === 0) throw new Error("Division by zero");
          result = result / factor;
        }
      }
      return result;
    };
    
    const parseFactor = (): number => {
      if (index >= cleanExpr.length) throw new Error("Unexpected end of expression");
      
      if (cleanExpr[index] === "(") {
        index++; // skip '('
        const result = parseExpression();
        if (index >= cleanExpr.length || cleanExpr[index] !== ")") {
          throw new Error("Unmatched parenthesis");
        }
        index++; // skip ')'
        return result;
      }
      
      if (cleanExpr[index] === "-") {
        index++; // skip unary minus
        return -parseFactor();
      }
      
      if (cleanExpr[index] === "+") {
        index++; // skip unary plus
        return parseFactor();
      }
      
      return parseNumber();
    };
    
    try {
      const result = parseExpression();
      if (index < cleanExpr.length) {
        throw new Error("Unexpected characters at end of expression");
      }
      if (!isFinite(result)) {
        throw new Error("Invalid result");
      }
      return result;
    } catch (error) {
      throw new Error("Evaluation error");
    }
  };

  const handleSolve = () => {
    try {
      if (!input.trim()) {
        return;
      }
      const result = safeEvaluateExpression(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleKeyPress = (event: any) => {
    if (/[0-9+\-*/%.]/.test(event.key)) {
      setInput((prev) => prev + event.key);
    } else if (event.key === "Backspace") {
      handleBackspace();
    } else if (event.key === "Enter") {
      handleSolve();
    } else if (event.key === "c") {
      handleClear();
    }
  };
  const options = {
    taxType: [
      { value: "exclusive", label: "Exclusive" },
      { value: "inclusive", label: "Inclusive" },
    ],
    discountType: [
      { value: "percentage", label: "Percentage" },
      { value: "early_payment", label: "Early payment discounts" },
    ],
    weightUnits: [
      { value: "kg", label: "Kilogram" },
      { value: "g", label: "Grams" },
    ],
    taxRates: [
      { value: "select", label: "Select" },
      { value: "no_tax", label: "No Tax" },
      { value: "10", label: "@10" },
      { value: "15", label: "@15" },
      { value: "vat", label: "VAT" },
      { value: "sltax", label: "SLTAX" },
    ],
    couponCodes: [
      { value: "select", label: "Select" },
      { value: "newyear30", label: "NEWYEAR30" },
      { value: "christmas100", label: "CHRISTMAS100" },
      { value: "halloween20", label: "HALLOWEEN20" },
      { value: "blackfriday50", label: "BLACKFRIDAY50" },
    ],
    discountMode: [
      { value: "select", label: "Select" },
      { value: "flat", label: "Flat" },
      { value: "percentage", label: "Percentage" },
    ],
    paymentMethods: [
      { value: "cash", label: "Cash" },
      { value: "card", label: "Card" },
    ],
    paymentTypes: [
      { value: "credit", label: "Credit Card" },
      { value: "cash", label: "Cash" },
      { value: "cheque", label: "Cheque" },
      { value: "deposit", label: "Deposit" },
      { value: "points", label: "Points" },
    ],
  };

  return (
    <>
      {/* Payment Completed */}
      <div
        className="modal fade modal-default"
        id="payment-completed"
        aria-labelledby="payment-completed"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="success-wrap text-center">
                <form>
                  <div className="icon-success bg-success text-white mb-2">
                    <i className="ti ti-check" />
                  </div>
                  <h3 className="mb-2">Payment Completed</h3>
                  <p className="mb-3">
                    Do you want to Print Receipt for the Completed Order
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                    <button
                      type="button"
                      className="btn btn-md btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#print-receipt"
                    >
                      Print Receipt
                      <i className="feather-arrow-right-circle icon-me-5 ms-2" />
                    </button>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-md btn-primary"
                    >
                      Next Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Payment Completed */}
      {/* Print Receipt */}
      <div
        className="modal fade modal-default"
        id="print-receipt"
        aria-labelledby="print-receipt"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="icon-head text-center invoice-logo">
                <Link className="logo logo-normal" to="#">
                  <img
                    src={logo}
                    width="130"
                    className="img-fluid"
                    alt="logo"
                  />
                </Link>
                <Link className="logo logo-white" to="#">
                  <img
                    src={logoWhite}
                    width="130"
                    className="img-fluid"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="text-center info text-center">
                <h6>Dreamguys Technologies Pvt Ltd.,</h6>
                <p className="mb-0">Phone Number: +1 5656665656</p>
                <p className="mb-0">
                  Email:{" "}
                  <Link to="mailto:example@gmail.com">example@gmail.com</Link>
                </p>
              </div>
              <div className="tax-invoice">
                <h6 className="text-center">Tax Invoice</h6>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="invoice-user-name">
                      <span>Name: </span>John Doe
                    </div>
                    <div className="invoice-user-name">
                      <span>Invoice No: </span>CS132453
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="invoice-user-name">
                      <span>Customer Id: </span>#LL93784
                    </div>
                    <div className="invoice-user-name">
                      <span>Date: </span>01.07.2022
                    </div>
                  </div>
                </div>
              </div>
              <table className="table-borderless w-100 table-fit">
                <thead>
                  <tr>
                    <th># Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. Red Nike Laser</td>
                    <td>$50</td>
                    <td>3</td>
                    <td className="text-end">$150</td>
                  </tr>
                  <tr>
                    <td>2. Iphone 14</td>
                    <td>$50</td>
                    <td>2</td>
                    <td className="text-end">$100</td>
                  </tr>
                  <tr>
                    <td>3. Apple Series 8</td>
                    <td>$50</td>
                    <td>3</td>
                    <td className="text-end">$150</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <table className="table-borderless w-100 table-fit">
                        <tbody>
                          <tr>
                            <td className="fw-bold">Sub Total :</td>
                            <td className="text-end">$700.00</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Discount :</td>
                            <td className="text-end">-$50.00</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Shipping :</td>
                            <td className="text-end">0.00</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Tax (5%) :</td>
                            <td className="text-end">$5.00</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Total Bill :</td>
                            <td className="text-end">$655.00</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Due :</td>
                            <td className="text-end">$0.00</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Total Payable :</td>
                            <td className="text-end">$655.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center invoice-bar">
                <div className="border-bottom border-dashed">
                  <p>
                    **VAT against this challan is payable through central
                    registration. Thank you for your business!
                  </p>
                </div>
                <Link to="#">
                  <img src={barcodeImg3} alt="Barcode" />
                </Link>
                <p className="text-dark fw-bold">Sale 31</p>
                <p>Thank You For Shopping With Us. Please Come Again</p>
                <Link to="#" className="btn btn-md btn-primary">
                  Print Receipt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Print Receipt */}
      {/* Products */}
      <div
        className="modal fade modal-default pos-modal"
        id="products"
        aria-labelledby="products"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h5 className="me-4">Products</h5>
              </div>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card bg-light mb-3">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-3">
                    <span className="badge bg-dark fs-12">
                      Order ID : #45698
                    </span>
                    <p className="fs-16">Number of Products : 02</p>
                  </div>
                  <div className="product-wrap h-auto">
                    <div className="product-list bg-white align-items-center justify-content-between">
                      <div
                        className="d-flex align-items-center product-info"
                        data-bs-toggle="modal"
                        data-bs-target="#products"
                      >
                        <Link to="#" className="pro-img">
                          <img src={posProduct16} alt="Products" />
                        </Link>
                        <div className="info">
                          <h6>
                            <Link to="#">Red Nike Laser</Link>
                          </h6>
                          <p>Quantity : 04</p>
                        </div>
                      </div>
                      <p className="text-teal fw-bold">$2000</p>
                    </div>
                    <div className="product-list bg-white align-items-center justify-content-between">
                      <div
                        className="d-flex align-items-center product-info"
                        data-bs-toggle="modal"
                        data-bs-target="#products"
                      >
                        <Link to="#" className="pro-img">
                          <img src={posProduct17} alt="Products" />
                        </Link>
                        <div className="info">
                          <h6>
                            <Link to="#">Iphone 11S</Link>
                          </h6>
                          <p>Quantity : 04</p>
                        </div>
                      </div>
                      <p className="text-teal fw-bold">$3000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Products */}
      <div
        className="modal fade"
        id="create"
        tabIndex={-1}
        aria-labelledby="create"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Customer Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">City</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">Country</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end gap-2 flex-wrap">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Hold */}
      <div
        className="modal fade modal-default pos-modal"
        id="hold-order"
        aria-labelledby="hold-order"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Hold order</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="bg-light br-10 p-4 text-center mb-3">
                  <h2 className="display-1">4500.00</h2>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Order Reference <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue=""
                    placeholder=""
                  />
                </div>
                <p>
                  The current order will be set on hold. You can retreive this
                  order from the pending order button. Providing a reference to
                  it might help you to identify the order more quickly.
                </p>
              </div>
              <div className="modal-footer d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Hold */}
      {/* Edit Product */}
      <div
        className="modal fade modal-default pos-modal"
        id="edit-product"
        aria-labelledby="edit-product"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Product Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Red Nike Laser Show"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Product Price <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Tax Type <span className="text-danger">*</span>
                      </label>

                      <CommonSelect
                        className="w-100"
                        options={options.taxType}
                        value={selectedTaxType}
                        onChange={(e: any) => setSelectedTaxType(e.value)}
                        placeholder="Select Tax Type"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Tax <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-percentage" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={15}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Discount Type <span className="text-danger">*</span>
                      </label>

                      <CommonSelect
                        className="w-100"
                        options={options.discountType}
                        value={selectedDiscountType}
                        onChange={(e) => setSelectedDiscountType(e.value)}
                        placeholder="Select Discount Type"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Discount <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={15}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Sale Unit <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={options.weightUnits}
                        value={selectedWeightUnit}
                        onChange={(e) => setSelectedWeightUnit(e.value)}
                        placeholder="Select Sale Unit"
                        filter={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Product */}
      {/* Delete Product */}
      <div
        className="modal fade modal-default"
        id="delete"
        aria-labelledby="payment-completed"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="success-wrap text-center">
                <form>
                  <div className="icon-success bg-danger-transparent text-danger mb-2">
                    <i className="ti ti-trash" />
                  </div>
                  <h3 className="mb-2">Are you Sure!</h3>
                  <p className="fs-16 mb-3">
                    The current order will be deleted as no payment has been
                    made so far.
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                    <button
                      type="button"
                      className="btn btn-md btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      No, Cancel
                    </button>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-md btn-primary"
                    >
                      Yes, Delete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Product */}
      {/* Reset */}
      <div
        className="modal fade modal-default"
        id="reset"
        aria-labelledby="payment-completed"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="success-wrap text-center">
                <form>
                  <div className="icon-success bg-purple-transparent text-purple mb-2">
                    <i className="ti ti-transition-top" />
                  </div>
                  <h3 className="mb-2">Confirm Your Action</h3>
                  <p className="fs-16 mb-3">
                    The current order will be cleared. But not deleted if
                    it&apos;s persistent. Would you like to proceed ?
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                    <button
                      type="button"
                      className="btn btn-md btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      No, Cancel
                    </button>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      className="btn btn-md btn-primary"
                    >
                      Yes, Proceed
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Reset */}
      {/* Recent Transactions */}
      <div
        className="modal fade pos-modal"
        id="recents"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Recent Transactions</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="tabs-sets">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="purchase-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#purchase"
                      type="button"
                      aria-controls="purchase"
                      aria-selected="true"
                      role="tab"
                    >
                      Purchase
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="payment-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#payment"
                      type="button"
                      aria-controls="payment"
                      aria-selected="false"
                      role="tab"
                    >
                      Payment
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="return-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#return"
                      type="button"
                      aria-controls="return"
                      aria-selected="false"
                      role="tab"
                    >
                      Return
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="purchase"
                    role="tabpanel"
                    aria-labelledby="purchase-tab"
                  >
                    <div className="card table-list-card mb-0">
                      <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <div className="search-set">
                          <div className="search-input">
                            <Link to="#" className="btn btn-searchset">
                              <i className="ti ti-search fs-14 feather-search" />
                            </Link>
                            <div
                              id="DataTables_Table_0_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                {" "}
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder="Search"
                                  aria-controls="DataTables_Table_0"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <ul className="table-top-head">
                          <li>
                            <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf">
                              <img src={pdf} alt="img" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Excel">
                              <img src={excel} alt="img" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Print">
                              <i className="ti ti-printer" />
                            </Link>
                          </li>
                        </ul>

                      </div>
                      <div className="card-body">
                        <div className="custom-datatable-filter table-responsive">
                          <table className="table datatable">
                            <thead>
                              <tr>
                                <th className="no-sort">
                                  <label className="checkboxs">
                                    <input
                                      type="checkbox"
                                      className="select-all"
                                    />
                                    <span className="checkmarks" />
                                  </label>
                                </th>
                                <th>Customer</th>
                                <th>Reference</th>
                                <th>Date</th>
                                <th>Amount </th>
                                <th className="no-sort">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user27} alt="product" />
                                    </Link>
                                    <Link to="#">Carl Evans</Link>
                                  </div>
                                </td>
                                <td>INV/SL0101</td>
                                <td>24 Dec 2024</td>
                                <td>$1000</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user02} alt="product" />
                                    </Link>
                                    <Link to="#">Minerva Rameriz</Link>
                                  </div>
                                </td>
                                <td>INV/SL0102</td>
                                <td>10 Dec 2024</td>
                                <td>$1500</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user05} alt="product" />
                                    </Link>
                                    <Link to="#">Robert Lamon</Link>
                                  </div>
                                </td>
                                <td>INV/SL0103</td>
                                <td>27 Nov 2024</td>
                                <td>$1500</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user22} alt="product" />
                                    </Link>
                                    <Link to="#">Patricia Lewis</Link>
                                  </div>
                                </td>
                                <td>INV/SL0104</td>
                                <td>18 Nov 2024</td>
                                <td>$2000</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user03} alt="product" />
                                    </Link>
                                    <Link to="#">Mark Joslyn</Link>
                                  </div>
                                </td>
                                <td>INV/SL0105</td>
                                <td>06 Nov 2024</td>
                                <td>$800</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user12} alt="product" />
                                    </Link>
                                    <Link to="#">Marsha Betts</Link>
                                  </div>
                                </td>
                                <td>INV/SL0106</td>
                                <td>25 Oct 2024</td>
                                <td>$750</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user06} alt="product" />
                                    </Link>
                                    <Link to="#">Daniel Jude</Link>
                                  </div>
                                </td>
                                <td>INV/SL0107</td>
                                <td>14 Oct 2024</td>
                                <td>$1300</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="payment" role="tabpanel">
                    <div className="card table-list-card mb-0">
                      <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <div className="search-set">
                          <div className="search-input">
                            <Link to="#" className="btn btn-searchset">
                              <i className="ti ti-search fs-14 feather-search" />
                            </Link>
                            <div
                              id="DataTables_Table_0_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                {" "}
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder="Search"
                                  aria-controls="DataTables_Table_0"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <TableTopHead />
                      </div>
                      <div className="card-body">
                        <div className="custom-datatable-filter table-responsive">
                          <table className="table datatable">
                            <thead>
                              <tr>
                                <th className="no-sort">
                                  <label className="checkboxs">
                                    <input
                                      type="checkbox"
                                      className="select-all"
                                    />
                                    <span className="checkmarks" />
                                  </label>
                                </th>
                                <th>Customer</th>
                                <th>Reference</th>
                                <th>Date</th>
                                <th>Amount </th>
                                <th className="no-sort">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user27} alt="product" />
                                    </Link>
                                    <Link to="#">Carl Evans</Link>
                                  </div>
                                </td>
                                <td>INV/SL0101</td>
                                <td>24 Dec 2024</td>
                                <td>$1000</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user02} alt="product" />
                                    </Link>
                                    <Link to="#">Minerva Rameriz</Link>
                                  </div>
                                </td>
                                <td>INV/SL0102</td>
                                <td>10 Dec 2024</td>
                                <td>$1500</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user05} alt="product" />
                                    </Link>
                                    <Link to="#">Robert Lamon</Link>
                                  </div>
                                </td>
                                <td>INV/SL0103</td>
                                <td>27 Nov 2024</td>
                                <td>$1500</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user22} alt="product" />
                                    </Link>
                                    <Link to="#">Patricia Lewis</Link>
                                  </div>
                                </td>
                                <td>INV/SL0104</td>
                                <td>18 Nov 2024</td>
                                <td>$2000</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user03} alt="product" />
                                    </Link>
                                    <Link to="#">Mark Joslyn</Link>
                                  </div>
                                </td>
                                <td>INV/SL0105</td>
                                <td>06 Nov 2024</td>
                                <td>$800</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user12} alt="product" />
                                    </Link>
                                    <Link to="#">Marsha Betts</Link>
                                  </div>
                                </td>
                                <td>INV/SL0106</td>
                                <td>25 Oct 2024</td>
                                <td>$750</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user06} alt="product" />
                                    </Link>
                                    <Link to="#">Daniel Jude</Link>
                                  </div>
                                </td>
                                <td>INV/SL0107</td>
                                <td>14 Oct 2024</td>
                                <td>$1300</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="return" role="tabpanel">
                    <div className="card table-list-card mb-0">
                      <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <div className="search-set">
                          <div className="search-input">
                            <Link to="#" className="btn btn-searchset">
                              <i className="ti ti-search fs-14 feather-search" />
                            </Link>
                            <div
                              id="DataTables_Table_0_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                {" "}
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder="Search"
                                  aria-controls="DataTables_Table_0"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <TableTopHead />
                      </div>
                      <div className="card-body">
                        <div className="custom-datatable-filter table-responsive">
                          <table className="table datatable">
                            <thead>
                              <tr>
                                <th className="no-sort">
                                  <label className="checkboxs">
                                    <input
                                      type="checkbox"
                                      className="select-all"
                                    />
                                    <span className="checkmarks" />
                                  </label>
                                </th>
                                <th>Customer</th>
                                <th>Reference</th>
                                <th>Date</th>
                                <th>Amount </th>
                                <th className="no-sort">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user27} alt="product" />
                                    </Link>
                                    <Link to="#">Carl Evans</Link>
                                  </div>
                                </td>
                                <td>INV/SL0101</td>
                                <td>24 Dec 2024</td>
                                <td>$1000</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user02} alt="product" />
                                    </Link>
                                    <Link to="#">Minerva Rameriz</Link>
                                  </div>
                                </td>
                                <td>INV/SL0102</td>
                                <td>10 Dec 2024</td>
                                <td>$1500</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user05} alt="product" />
                                    </Link>
                                    <Link to="#">Robert Lamon</Link>
                                  </div>
                                </td>
                                <td>INV/SL0103</td>
                                <td>27 Nov 2024</td>
                                <td>$1500</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user22} alt="product" />
                                    </Link>
                                    <Link to="#">Patricia Lewis</Link>
                                  </div>
                                </td>
                                <td>INV/SL0104</td>
                                <td>18 Nov 2024</td>
                                <td>$2000</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user03} alt="product" />
                                    </Link>
                                    <Link to="#">Mark Joslyn</Link>
                                  </div>
                                </td>
                                <td>INV/SL0105</td>
                                <td>06 Nov 2024</td>
                                <td>$800</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user12} alt="product" />
                                    </Link>
                                    <Link to="#">Marsha Betts</Link>
                                  </div>
                                </td>
                                <td>INV/SL0106</td>
                                <td>25 Oct 2024</td>
                                <td>$750</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="checkboxs">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />
                                  </label>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <Link
                                      to="#"
                                      className="avatar avatar-md me-2"
                                    >
                                      <img src={user06} alt="product" />
                                    </Link>
                                    <Link to="#">Daniel Jude</Link>
                                  </div>
                                </td>
                                <td>INV/SL0107</td>
                                <td>14 Oct 2024</td>
                                <td>$1300</td>
                                <td className="action-table-data">
                                  <div className="edit-delete-action">
                                    <Link className="me-2 edit-icon p-2" to="#">
                                      <i className="feather icon-eye" />
                                    </Link>
                                    <Link className="me-2 p-2" to="#">
                                      <i className="feather icon-edit"></i>
                                    </Link>
                                    <Link className="p-2" to="#">
                                      <i className="feather icon-trash-2"></i>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Recent Transactions */}
      {/* Orders */}
      <div
        className="modal fade pos-modal"
        id="orders"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Orders</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="tabs-sets">
                <ul className="nav nav-tabs" id="myTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="onhold-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#onhold"
                      type="button"
                      aria-controls="onhold"
                      aria-selected="true"
                      role="tab"
                    >
                      Onhold
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="unpaid-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#unpaid"
                      type="button"
                      aria-controls="unpaid"
                      aria-selected="false"
                      role="tab"
                    >
                      Unpaid
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="paid-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#paid"
                      type="button"
                      aria-controls="paid"
                      aria-selected="false"
                      role="tab"
                    >
                      Paid
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="onhold"
                    role="tabpanel"
                    aria-labelledby="onhold-tab"
                  >
                    <div className="input-icon-start pos-search position-relative mb-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Product"
                      />
                    </div>
                    <div className="order-body">
                      <div className="card bg-light mb-3">
                        <div className="card-body">
                          <span className="badge bg-dark fs-12 mb-2">
                            Order ID : #45698
                          </span>
                          <div className="row g-3">
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Cashier :
                                </span>{" "}
                                admin
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Total :
                                </span>{" "}
                                $900
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Customer :
                                </span>{" "}
                                Botsford
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Date :
                                </span>{" "}
                                24 Dec 2024 13:39:11
                              </p>
                            </div>
                          </div>
                          <div className="bg-info-transparent p-1 rounded text-center my-3">
                            <p className="text-info fw-medium">
                              Customer need to recheck the product once
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
                            <Link to="#" className="btn btn-md btn-orange">
                              Open Order
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-md btn-teal"
                              data-bs-dismiss="modal"
                              data-bs-toggle="modal"
                              data-bs-target="#products"
                            >
                              View Products
                            </Link>
                            <Link to="#" className="btn btn-md btn-indigo">
                              Print
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card bg-light mb-0">
                        <div className="card-body">
                          <span className="badge bg-dark fs-12 mb-2">
                            Order ID : #666659
                          </span>
                          <div className="mb-3">
                            <div className="row g-3">
                              <div className="col-md-6">
                                <p className="fs-15 mb-1">
                                  <span className="fs-14 fw-bold text-gray-9">
                                    Cashier :
                                  </span>{" "}
                                  admin
                                </p>
                                <p className="fs-15">
                                  <span className="fs-14 fw-bold text-gray-9">
                                    Total :
                                  </span>{" "}
                                  $900
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p className="fs-15 mb-1">
                                  <span className="fs-14 fw-bold text-gray-9">
                                    Customer :
                                  </span>{" "}
                                  Botsford
                                </p>
                                <p className="fs-15">
                                  <span className="fs-14 fw-bold text-gray-9">
                                    Date :
                                  </span>{" "}
                                  24 Dec 2024 13:39:11
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="unpaid" role="tabpanel">
                    <div className="input-icon-start pos-search position-relative mb-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Product"
                      />
                    </div>
                    <div className="order-body">
                      <div className="card bg-light mb-3">
                        <div className="card-body">
                          <span className="badge bg-dark fs-12 mb-2">
                            Order ID : #45698
                          </span>
                          <div className="row g-3">
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Cashier :
                                </span>{" "}
                                admin
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Total :
                                </span>{" "}
                                $900
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Customer :
                                </span>{" "}
                                Anastasia
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Date :
                                </span>{" "}
                                24 Dec 2024 13:39:11
                              </p>
                            </div>
                          </div>
                          <div className="bg-info-transparent p-1 rounded text-center my-3">
                            <p className="text-info fw-medium">
                              Customer need to recheck the product once
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
                            <Link to="#" className="btn btn-md btn-orange">
                              Open Order
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-md btn-teal"
                              data-bs-dismiss="modal"
                              data-bs-toggle="modal"
                              data-bs-target="#products"
                            >
                              View Products
                            </Link>
                            <Link to="#" className="btn btn-md btn-indigo">
                              Print
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card bg-light mb-0">
                        <div className="card-body">
                          <span className="badge bg-dark fs-12 mb-2">
                            Order ID : #666659
                          </span>
                          <div className="row g-3">
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Cashier :
                                </span>{" "}
                                admin
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Total :
                                </span>{" "}
                                $900
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Customer :
                                </span>{" "}
                                Lucia
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Date :
                                </span>{" "}
                                24 Dec 2024 13:39:11
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="paid" role="tabpanel">
                    <div className="input-icon-start pos-search position-relative mb-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Product"
                      />
                    </div>
                    <div className="order-body">
                      <div className="card bg-light mb-3">
                        <div className="card-body">
                          <span className="badge bg-dark fs-12 mb-2">
                            Order ID : #45698
                          </span>
                          <div className="row g-3">
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Cashier :
                                </span>{" "}
                                admin
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Total :
                                </span>{" "}
                                $1000
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Customer :
                                </span>{" "}
                                Hugo
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Date :
                                </span>{" "}
                                24 Dec 2024 13:39:11
                              </p>
                            </div>
                          </div>
                          <div className="bg-info-transparent p-1 rounded text-center my-3">
                            <p className="text-info fw-medium">
                              Customer need to recheck the product once
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
                            <Link to="#" className="btn btn-md btn-orange">
                              Open Order
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-md btn-teal"
                              data-bs-dismiss="modal"
                              data-bs-toggle="modal"
                              data-bs-target="#products"
                            >
                              View Products
                            </Link>
                            <Link to="#" className="btn btn-md btn-indigo">
                              Print
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card bg-light mb-0">
                        <div className="card-body">
                          <span className="badge bg-dark fs-12 mb-2">
                            Order ID : #666659
                          </span>
                          <div className="row g-3">
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Cashier :
                                </span>{" "}
                                admin
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Total :
                                </span>{" "}
                                $9100
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p className="fs-15 mb-1">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Customer :
                                </span>{" "}
                                Antonio
                              </p>
                              <p className="fs-15">
                                <span className="fs-14 fw-bold text-gray-9">
                                  Date :
                                </span>{" "}
                                23 Dec 2024 13:39:11
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Orders */}
      {/* Scan */}
      <div className="modal fade modal-default" id="scan-payment">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="success-wrap scan-wrap text-center">
                <h5>
                  <span className="text-gray-6">Amount to Pay :</span> $150
                </h5>
                <div className="scan-img">
                  <img src={scanImg} className="scan-image" alt="img" />
                  <img src={scanImgWhite} className="scan-img-white" alt="img" />
                </div>
                <p className="mb-3">
                  Scan your Phone or UPI App to Complete the payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Scan */}
      {/* Order Tax */}
      <div className="modal fade modal-default" id="order-tax">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order Tax</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="mb-3">
                  <label className="form-label">
                    Order Tax <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    className="w-100"
                    options={options.taxRates}
                    value={selectedTaxRate}
                    onChange={(e) => setSelectedTaxRate(e.value)}
                    placeholder="Select Order Tax"
                    filter={false}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Order Tax */}
      {/* Shipping Cost */}
      <div className="modal fade modal-default" id="shipping-cost">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shipping Cost</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="mb-3">
                  <label className="form-label">
                    Shipping Cost <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Shipping Cost */}
      {/* Coupon Code */}
      <div className="modal fade modal-default" id="coupon-code">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Coupon Code</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="mb-3">
                  <label className="form-label">
                    Coupon Code <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    className="w-100"
                    options={options.couponCodes}
                    value={selectedCouponCode}
                    onChange={(e) => setSelectedCouponCode(e.value)}
                    placeholder="Select Coupon Code"
                    filter={false}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Coupon Code */}
      {/* Discount */}
      <div className="modal fade modal-default" id="discount">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Discount </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="mb-3">
                  <label className="form-label">
                    Order Discount Type <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    className="w-100"
                    options={options.discountMode}
                    value={selectedDiscountMode}
                    onChange={(e) => setSelectedDiscountMode(e.value)}
                    placeholder="Select Discount Type"
                    filter={false}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Value <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Discount */}
      {/* Cash Payment */}
      <div
        className="modal fade modal-default"
        id="cash-payment"
        aria-labelledby="payment-completed"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="success-wrap">
                <div className="text-center">
                  <div className="icon-success bg-success text-white mb-2">
                    <i className="ti ti-check" />
                  </div>
                  <h3 className="mb-2">Congratulations, Sale Completed</h3>
                  <div className="p-2 d-flex align-items-center justify-content-center gap-2 flex-wrap mb-3">
                    <p className="fs-13 fw-medium pe-2 border-end mb-0">
                      Bill Amount : <span className="text-gray-9">$150</span>
                    </p>
                    <p className="fs-13 fw-medium pe-2 border-end mb-0">
                      Total Paid : <span className="text-gray-9">$200</span>
                    </p>
                    <p className="fs-13 fw-medium mb-0">
                      Change : <span className="text-gray-9">$50</span>
                    </p>
                  </div>
                </div>
                <div className="bg-success-transparent p-2 mb-3 br-5 border-start border-success d-flex align-items-center">
                  <span className="avatar avatar-sm bg-success rounded-circle flex-shrink-0 fs-16 me-2">
                    <i className="ti ti-mail-opened" />
                  </span>
                  <p className="fs-13 fw-medium text-gray-9">
                    A receipt of this transaction will be sent to the registered
                    info@customer@example.com
                  </p>
                </div>
                <div className="resend-form mb-3">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="infocustomer@example.com"
                  />
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-primary btn-xs"
                  >
                    Resend Email
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                  <button
                    type="button"
                    className="btn btn-md btn-light flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#print-receipt"
                  >
                    <i className="ti ti-printer me-1" />
                    Print Receipt
                  </button>
                  <button
                    type="button"
                    className="btn btn-md btn-teal flex-fill"
                  >
                    <i className="ti ti-gift me-1" />
                    Gift Receipt
                  </button>
                  <Link to="#" className="btn btn-md btn-dark flex-fill">
                    <i className="ti ti-shopping-cart me-1" />
                    Next Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Cash Payment */}
      {/* Card Payment */}
      <div className="modal fade modal-default" id="card-payment">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="success-wrap">
                <div className="text-center">
                  <div className="icon-success bg-success text-white mb-2">
                    <i className="ti ti-check" />
                  </div>
                  <h3 className="mb-2">Congratulations, Sale Completed</h3>
                  <div className="p-2 text-center mb-3">
                    <p className="fs-13 fw-medium">
                      Bill Amount : <span className="text-gray-9">$150</span>
                    </p>
                  </div>
                </div>
                <div className="bg-success-transparent p-2 mb-3 br-5 border-start border-success d-flex align-items-center">
                  <span className="avatar avatar-sm bg-success rounded-circle flex-shrink-0 fs-16 me-2">
                    <i className="ti ti-mail-opened" />
                  </span>
                  <p className="fs-13 fw-medium text-gray-9">
                    A receipt of this transaction will be sent to the registered
                    info@customer@example.com
                  </p>
                </div>
                <div className="resend-form mb-3">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="infocustomer@example.com"
                  />
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-primary btn-xs"
                  >
                    Resend Email
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                  <button
                    type="button"
                    className="btn btn-md btn-light flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#print-receipt"
                  >
                    <i className="ti ti-printer me-1" />
                    Print Receipt
                  </button>
                  <button
                    type="button"
                    className="btn btn-md btn-teal flex-fill"
                  >
                    <i className="ti ti-gift me-1" />
                    Gift Receipt
                  </button>
                  <Link to="#" className="btn btn-md btn-dark flex-fill">
                    <i className="ti ti-shopping-cart me-1" />
                    Next Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Card Payment */}
      {/* Active Gift Card */}
      <div
        className="modal fade pos-modal"
        id="gift-payment"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Pay By Gift Card</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="mb-3">
                <img src={giftCard} alt="img" />
              </div>
              <div className="resend-form mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Scan Barcode / Enter Number"
                />
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary btn-xs"
                  data-bs-toggle="modal"
                  data-bs-target="#redeem-value"
                >
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Active Gift Card */}
      {/* Redeem Value */}
      <div
        className="modal fade pos-modal"
        id="redeem-value"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Redeem Value</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="bg-info-transparent p-2 br-8 mb-3">
                  <p className="text-info">
                    Balance isn’t enough to pay, you can still make a partial
                    payment
                  </p>
                </div>
                <div className="card bg-light shadow-none text-center">
                  <div className="card-body">
                    <p className="text-gray-5 mb-1">Gift Card Number</p>
                    <h2 className="display-1">5698</h2>
                  </div>
                </div>
                <div className="bg-danger-transparent p-2 mb-3 br-5 border-start border-danger d-flex align-items-center">
                  <span className="avatar avatar-sm bg-danger rounded-circle fs-16 me-2">
                    <i className="ti ti-gift" />
                  </span>
                  <p className="fs-16 text-gray-9">
                    Available gift card balance : $45.56
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Bill Amount"
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end gap-2 flex-wrap">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Make Partial Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Redeem Value */}
      {/* Redeem Value */}
      <div
        className="modal fade pos-modal"
        id="redeem-fullpayment"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Redeem Value</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="card bg-light shadow-none text-center">
                  <div className="card-body">
                    <p className="text-gray-5 mb-1">Gift Card Number</p>
                    <h2 className="display-1">5698</h2>
                  </div>
                </div>
                <div className="bg-success-transparent p-2 mb-3 br-5 border-start border-success">
                  <span className="avatar avatar-sm bg-success rounded-circle fs-16 me-2">
                    <i className="ti ti-gift" />
                  </span>
                  <p className="fs-16 text-gray-9">
                    Available gift card balance : $45.56
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Bill Amount"
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end gap-2 flex-wrap">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Make Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Redeem Value */}
      {/* Barcode */}
      <div
        className="modal fade pos-modal"
        id="barcode"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Barcode</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Barcode of the Product"
                  />
                </div>
                <div className="card bg-light shadow-none border-0 br-0 mb-0">
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div>
                      <p className="fs-13 mb-1">Tablet 1.02 inch</p>
                      <h6 className="fs-13 fw-semibold">$3000</h6>
                    </div>
                    <div className="qty-item m-0">
                      <Link
                        to="#"
                        className="dec d-flex justify-content-center align-items-center"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="minus"
                      >
                        <i className="ti ti-minus" />
                      </Link>
                      <input
                        type="text"
                        className="form-control text-center"
                        name="qty"
                        defaultValue={4}
                      />
                      <Link
                        to="#"
                        className="inc d-flex justify-content-center align-items-center"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="plus"
                      >
                        <i className="ti ti-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end gap-2 flex-wrap">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Barcode */}
      {/* Split Payment */}
      <div
        className="modal fade pos-modal"
        id="split-payment"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Split Payment</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="additem-info">
                  <div className="bg-light p-3 add-info">
                    <div className="row align-items-center g-2">
                      <div className="col-lg-2">
                        <h6 className="fs-14 fw-semibold">Payment 2</h6>
                      </div>
                      <div className="col-lg-4">
                        <CommonSelect
                          className="w-100"
                          options={options.paymentMethods}
                          value={selectedPaymentMethod}
                          onChange={(e) => setSelectedPaymentMethod(e.value)}
                          placeholder="Select Payment Method"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Amount"
                        />
                      </div>
                      <div className="col-lg-2">
                        <button className="btn btn-dark w-100">Charge</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light p-3 add-info">
                    <div className="row align-items-center g-2">
                      <div className="col-lg-2">
                        <h6 className="fs-14 fw-semibold">Payment 2</h6>
                      </div>
                      <div className="col-lg-4">
                        <CommonSelect
                          className="w-100"
                          options={options.paymentMethods}
                          value={selectedPaymentMethod}
                          onChange={(e) => setSelectedPaymentMethod(e.value)}
                          placeholder="Select Payment Method"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Amount"
                        />
                      </div>
                      <div className="col-lg-2">
                        <button className="btn btn-dark w-100">Charge</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <Link to="#" className="btn btn-primary btn-md add-item">
                    Add More
                  </Link>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end gap-2 flex-wrap">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <Link
                  to="#"
                  className="btn btn-md btn-primary"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#cash-payment"
                >
                  Complete Sale
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Split Payment */}
      {/* Payment Cash */}
      <div className="modal fade modal-default" id="payment-cash">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Finalize Sale</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Received Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Paying Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="change-item mb-3">
                      <label className="form-label">Change</label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={0.0}
                        />
                      </div>
                    </div>
                    {/* <div className="point-item mb-3">
                  <label className="form-label">Balance Point</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={200}
                  />
                </div> */}
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Payment Type <span className="text-danger">*</span>
                      </label>

                      <CommonSelect
                        className="w-100"
                        options={options.paymentTypes}
                        value={selectedPaymentType}
                        onChange={(e) => setSelectedPaymentType(e.value)}
                        placeholder="Select Payment Type"
                        filter={false}
                      />
                    </div>
                    <div className="quick-cash payment-content bg-light d-block mb-3">
                      <div className="d-flex align-items-center flex-wra gap-4">
                        <h5 className="text-nowrap">Quick Cash</h5>
                        <div className="d-flex align-items-center flex-wrap gap-3">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash1"
                              defaultChecked
                            />
                            <label className="btn btn-white" htmlFor="cash1">
                              10
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash2"
                            />
                            <label className="btn btn-white" htmlFor="cash2">
                              20
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash3"
                            />
                            <label className="btn btn-white" htmlFor="cash3">
                              50
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash4"
                            />
                            <label className="btn btn-white" htmlFor="cash4">
                              100
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash5"
                            />
                            <label className="btn btn-white" htmlFor="cash5">
                              500
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash6"
                            />
                            <label className="btn btn-white" htmlFor="cash6">
                              1000
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="point-wrap payment-content mb-3">
                      <div className=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                        <h6 className="fs-14 fw-bold text-success">
                          You have 2000 Points to Use
                        </h6>
                        <Link to="#" className="btn btn-dark btn-md">
                          Use for this Purchase
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Receiver</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Sale Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Staff Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Payment Cash  */}
      {/* Payment Card  */}
      <div className="modal fade modal-default" id="payment-card">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Finalize Sale</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Received Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Paying Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="change-item mb-3">
                      <label className="form-label">Change</label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={0.0}
                        />
                      </div>
                    </div>
                    <div className="point-item mb-3">
                      <label className="form-label">Balance Point</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Payment Type <span className="text-danger">*</span>
                      </label>

                      <CommonSelect
                        className="w-100"
                        options={options.paymentTypes}
                        value={selectedPaymentType}
                        onChange={(e) => setSelectedPaymentType(e.value)}
                        placeholder="Select Payment Type"
                        filter={false}
                      />
                    </div>
                    <div className="quick-cash payment-content bg-light  mb-3">
                      <div className="d-flex align-items-center flex-wra gap-4">
                        <h5 className="text-nowrap">Quick Cash</h5>
                        <div className="d-flex align-items-center flex-wrap gap-3">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash11"
                              defaultChecked
                            />
                            <label className="btn btn-white" htmlFor="cash11">
                              10
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash12"
                            />
                            <label className="btn btn-white" htmlFor="cash12">
                              20
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash13"
                            />
                            <label className="btn btn-white" htmlFor="cash13">
                              50
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash14"
                            />
                            <label className="btn btn-white" htmlFor="cash14">
                              100
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash15"
                            />
                            <label className="btn btn-white" htmlFor="cash15">
                              500
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash16"
                            />
                            <label className="btn btn-white" htmlFor="cash16">
                              1000
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="point-wrap payment-content mb-3">
                      <div className=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                        <h6 className="fs-14 fw-bold text-success">
                          You have 2000 Points to Use
                        </h6>
                        <Link to="#" className="btn btn-dark btn-md">
                          Use for this Purchase
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Receiver</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Sale Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Staff Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Payment Card  */}
      {/* Payment Cheque */}
      <div className="modal fade modal-default" id="payment-cheque">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Finalize Sale</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Received Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Paying Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="change-item mb-3">
                      <label className="form-label">Change</label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={0.0}
                        />
                      </div>
                    </div>
                    {/* <div className="point-item mb-3">
                  <label className="form-label">Balance Point</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={200}
                  />
                </div> */}
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Payment Type <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={options.paymentTypes}
                        value={selectedPaymentType}
                        onChange={(e) => setSelectedPaymentType(e.value)}
                        placeholder="Select Payment Type"
                        filter={false}
                      />
                    </div>
                    <div className="quick-cash payment-content bg-light  mb-3">
                      <div className="d-flex align-items-center flex-wra gap-4">
                        <h5 className="text-nowrap">Quick Cash</h5>
                        <div className="d-flex align-items-center flex-wrap gap-3">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash21"
                              defaultChecked
                            />
                            <label className="btn btn-white" htmlFor="cash21">
                              10
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash22"
                            />
                            <label className="btn btn-white" htmlFor="cash22">
                              20
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash23"
                            />
                            <label className="btn btn-white" htmlFor="cash23">
                              50
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash24"
                            />
                            <label className="btn btn-white" htmlFor="cash24">
                              100
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash25"
                            />
                            <label className="btn btn-white" htmlFor="cash25">
                              500
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash26"
                            />
                            <label className="btn btn-white" htmlFor="cash26">
                              1000
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="point-wrap payment-content mb-3">
                      <div className=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                        <h6 className="fs-14 fw-bold text-success">
                          You have 2000 Points to Use
                        </h6>
                        <Link to="#" className="btn btn-dark btn-md">
                          Use for this Purchase
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Receiver</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Sale Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Staff Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Payment Cheque */}
      {/*  Payment Deposit */}
      <div className="modal fade modal-default" id="payment-deposit">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Finalize Sale</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Received Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Paying Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="change-item mb-3">
                      <label className="form-label">Change</label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={0.0}
                        />
                      </div>
                    </div>
                    {/* <div className="point-item mb-3">
                  <label className="form-label">Balance Point</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={200}
                  />
                </div> */}
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Payment Type <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={options.paymentTypes}
                        value={selectedPaymentType}
                        onChange={(e) => setSelectedPaymentType(e.value)}
                        placeholder="Select Payment Type"
                        filter={false}
                      />
                    </div>
                    <div className="quick-cash payment-content bg-light  mb-3">
                      <div className="d-flex align-items-center flex-wra gap-4">
                        <h5 className="text-nowrap">Quick Cash</h5>
                        <div className="d-flex align-items-center flex-wrap gap-3">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash31"
                              defaultChecked
                            />
                            <label className="btn btn-white" htmlFor="cash31">
                              10
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash32"
                            />
                            <label className="btn btn-white" htmlFor="cash32">
                              20
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash33"
                            />
                            <label className="btn btn-white" htmlFor="cash33">
                              50
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash34"
                            />
                            <label className="btn btn-white" htmlFor="cash34">
                              100
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash35"
                            />
                            <label className="btn btn-white" htmlFor="cash35">
                              500
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash36"
                            />
                            <label className="btn btn-white" htmlFor="cash36">
                              1000
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="point-wrap payment-content mb-3">
                      <div className=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                        <h6 className="fs-14 fw-bold text-success">
                          You have 2000 Points to Use
                        </h6>
                        <Link to="#" className="btn btn-dark btn-md">
                          Use for this Purchase
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Receiver</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Sale Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Staff Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Payment Deposit */}
      {/* Payment Point */}
      <div className="modal fade modal-default" id="payment-points">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Finalize Sale</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Received Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Paying Amount <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-start position-relative">
                        <span className="input-icon-addon text-gray-9">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/* <div className="change-item mb-3">
                  <label className="form-label">Change</label>
                  <div className="input-icon-start position-relative">
                    <span className="input-icon-addon text-gray-9">
                      <i className="ti ti-currency-dollar" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={0.0}
                    />
                  </div>
                </div> */}
                    <div className="point-item mb-3">
                      <label className="form-label">Balance Point</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Payment Type <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={options.paymentTypes}
                        value={selectedPaymentType}
                        onChange={(e) => setSelectedPaymentType(e.value)}
                        placeholder="Select Payment Type"
                        filter={false}
                      />
                    </div>
                    <div className="quick-cash payment-content bg-light  mb-3">
                      <div className="d-flex align-items-center flex-wra gap-4">
                        <h5 className="text-nowrap">Quick Cash</h5>
                        <div className="d-flex align-items-center flex-wrap gap-3">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash41"
                              defaultChecked
                            />
                            <label className="btn btn-white" htmlFor="cash41">
                              10
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash42"
                            />
                            <label className="btn btn-white" htmlFor="cash42">
                              20
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash43"
                            />
                            <label className="btn btn-white" htmlFor="cash43">
                              50
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash44"
                            />
                            <label className="btn btn-white" htmlFor="cash44">
                              100
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash45"
                            />
                            <label className="btn btn-white" htmlFor="cash45">
                              500
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="btn-check"
                              name="cash"
                              id="cash46"
                            />
                            <label className="btn btn-white" htmlFor="cash46">
                              1000
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="point-wrap payment-content d-block mb-3">
                      <div className=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                        <h6 className="fs-14 fw-bold text-success">
                          You have 2000 Points to Use
                        </h6>
                        <Link to="#" className="btn btn-dark btn-md">
                          Use for this Purchase
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Receiver</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Payment Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Sale Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Staff Note</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Type your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-end flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-md btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-md btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Payment Point */}
      {/* Calculator */}
      <div
        className="modal fade pos-modal"
        id="calculator"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body p-0" onKeyDown={handleKeyPress}>
              <div className="calculator-wrap">
                <div className="p-3">
                  <div className="d-flex align-items-center">
                    <h3>Calculator</h3>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div>
                    <input
                      className="input"
                      type="text"
                      placeholder="0"
                      value={input}
                      readOnly
                    />
                  </div>
                </div>
                <div className="calculator-body d-flex justify-content-between">
                  {/* Column 1 */}
                  <div className="text-center">
                    <button className="btn btn-clear" onClick={handleClear}>
                      C
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("7")}
                    >
                      7
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("4")}
                    >
                      4
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("1")}
                    >
                      1
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick(",")}
                    >
                      ,
                    </button>
                  </div>

                  {/* Column 2 */}
                  <div className="text-center">
                    <button
                      className="btn btn-expression"
                      onClick={() => handleButtonClick("/")}
                    >
                      ÷
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("8")}
                    >
                      8
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("5")}
                    >
                      5
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("2")}
                    >
                      2
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("00")}
                    >
                      00
                    </button>
                  </div>

                  {/* Column 3 */}
                  <div className="text-center">
                    <button
                      className="btn btn-expression"
                      onClick={() => handleButtonClick("%")}
                    >
                      %
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("9")}
                    >
                      9
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("6")}
                    >
                      6
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick("3")}
                    >
                      3
                    </button>
                    <button
                      className="btn btn-number"
                      onClick={() => handleButtonClick(".")}
                    >
                      .
                    </button>
                  </div>

                  {/* Column 4 */}
                  <div className="text-center">
                    <button className="btn btn-clear" onClick={handleBackspace}>
                      <i className="ti ti-backspace" />
                    </button>
                    <button
                      className="btn btn-expression"
                      onClick={() => handleButtonClick("*")}
                    >
                      x
                    </button>
                    <button
                      className="btn btn-expression"
                      onClick={() => handleButtonClick("-")}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-expression"
                      onClick={() => handleButtonClick("+")}
                    >
                      +
                    </button>
                    <button className="btn btn-clear" onClick={handleSolve}>
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Calculator */}
      {/* Cash Register Details */}
      <div
        className="modal fade pos-modal"
        id="cash-register"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cash Register Details</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-striped border">
                  <tbody>
                    <tr>
                      <td>Cash in Hand</td>
                      <td className="text-gray-9 fw-medium text-end">$45689</td>
                    </tr>
                    <tr>
                      <td>Total Sale Amount</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Total Payment</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $566867.97
                      </td>
                    </tr>
                    <tr>
                      <td>Cash Payment</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $3355.84
                      </td>
                    </tr>
                    <tr>
                      <td>Total Sale Return</td>
                      <td className="text-gray-9 fw-medium text-end">$1959</td>
                    </tr>
                    <tr>
                      <td>Total Expense</td>
                      <td className="text-gray-9 fw-medium text-end">$0</td>
                    </tr>
                    <tr>
                      <td className="text-gray-9 fw-bold bg-secondary-transparent">
                        Total Cash
                      </td>
                      <td className="text-gray-9 fw-bold text-end bg-secondary-transparent">
                        $587130.97
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-end gap-2 flex-wrap">
              <button
                type="button"
                className="btn btn-md btn-primary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Cash Register Details */}
      {/* Today&apos;s Sale */}
      <div
        className="modal fade pos-modal"
        id="today-sale"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Today&apos;s Sale</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-striped border">
                  <tbody>
                    <tr>
                      <td>Total Sale Amount</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Cash Payment</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $3355.84
                      </td>
                    </tr>
                    <tr>
                      <td>Credit Card Payment</td>
                      <td className="text-gray-9 fw-medium text-end">$1959</td>
                    </tr>
                    <tr>
                      <td>Cheque Payment:</td>
                      <td className="text-gray-9 fw-medium text-end">$0</td>
                    </tr>
                    <tr>
                      <td>Deposit Payment</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Points Payment</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $3355.84
                      </td>
                    </tr>
                    <tr>
                      <td>Gift Card Payment</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Scan &amp; Pay</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $3355.84
                      </td>
                    </tr>
                    <tr>
                      <td>Pay Later</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $3355.84
                      </td>
                    </tr>
                    <tr>
                      <td>Total Payment</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Total Sale Return</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Total Expense:</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-9 fw-bold bg-secondary-transparent">
                        Total Cash
                      </td>
                      <td className="text-gray-9 fw-bold text-end bg-secondary-transparent">
                        $587130.97
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-end gap-2 flex-wrap">
              <button
                type="button"
                className="btn btn-md btn-primary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Today&apos;s Sale */}
      {/* Today&apos;s Profit */}
      <div
        className="modal fade pos-modal"
        id="today-profit"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Today&apos;s Profit</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center g-3 mb-3">
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="border border-success bg-success-transparent br-8 p-3 flex-fill">
                    <p className="fs-16 text-gray-9 mb-1">Total Sale</p>
                    <h3 className="text-success">$89954</h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="border border-danger bg-danger-transparent br-8 p-3 flex-fill">
                    <p className="fs-16 text-gray-9 mb-1">Expense</p>
                    <h3 className="text-danger">$89954</h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="border border-info bg-info-transparent br-8 p-3 flex-fill">
                    <p className="fs-16 text-gray-9 mb-1">Total Profit </p>
                    <h3 className="text-info">$2145</h3>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped border">
                  <tbody>
                    <tr>
                      <td>Product Revenue</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Product Cost</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $3355.84
                      </td>
                    </tr>
                    <tr>
                      <td>Expense</td>
                      <td className="text-gray-9 fw-medium text-end">$1959</td>
                    </tr>
                    <tr>
                      <td>Total Stock Adjustment</td>
                      <td className="text-gray-9 fw-medium text-end">$0</td>
                    </tr>
                    <tr>
                      <td>Deposit Payment</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Total Purchase Shipping Cost</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $3355.84
                      </td>
                    </tr>
                    <tr>
                      <td>Total Sell Discount</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Total Sell Return</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $3355.84
                      </td>
                    </tr>
                    <tr>
                      <td>Closing Stock</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $3355.84
                      </td>
                    </tr>
                    <tr>
                      <td>Total Sales</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Total Sale Return</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td>Total Expense</td>
                      <td className="text-gray-9 fw-medium text-end">
                        $565597.88
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-9 fw-bold bg-secondary-transparent">
                        Total Cash
                      </td>
                      <td className="text-gray-9 fw-bold text-end bg-secondary-transparent">
                        $587130.97
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-end gap-2 flex-wrap">
              <button
                type="button"
                className="btn btn-md btn-primary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Today&apos;s Profit */}
    </>
  );
};

export default PosModals;
