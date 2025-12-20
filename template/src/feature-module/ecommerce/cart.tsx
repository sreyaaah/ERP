import CommonFooter from "../../components/footer/commonFooter";
import { Link } from "react-router-dom";
import CounterThree from "../../components/counter/counterThree";
import {
  stockImg01,
  stockImg02,
  stockImg04,
  stockImg06,
} from "../../utils/imagepath";
import { useState } from "react";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      // Select all items (assuming 5 rows based on the table)
      setSelectedItems(new Set([0, 1, 2, 3, 4]));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleRowCheckbox =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      const newSelected = new Set(selectedItems);
      if (isChecked) {
        newSelected.add(index);
      } else {
        newSelected.delete(index);
      }
      setSelectedItems(newSelected);
      // Update select-all checkbox state
      setSelectAll(newSelected.size === 5);
    };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Cart</h4>
                <h6>Manage your cart</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <table className="table mb-4">
            <thead>
              <tr>
                <th className="no-sort">
                  <label className="checkboxs">
                    <input
                      type="checkbox"
                      id="select-all"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                    <span className="checkmarks" />
                  </label>
                </th>
                <th>
                  Code{" "}
                  <i className="ti ti-arrows-up-down fs-11 fw-medium ms-1" />
                </th>
                <th>Product</th>
                <th>Amount</th>
                <th>Quantity</th>
                <th>Total</th>
                <th className="no-sort" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label className="checkboxs">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(0)}
                      onChange={handleRowCheckbox(0)}
                    />
                    <span className="checkmarks" />
                  </label>
                </td>
                <td>CU001 </td>
                <td>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md me-2">
                      <img src={stockImg01} alt="product" />
                    </Link>
                    <Link to="#">Lenovo IdeaPad 3</Link>
                  </div>
                </td>
                <td>$600</td>
                <td>
                  <CounterThree />
                </td>
                <td>$160</td>
                <td>
                  <div className="edit-delete-action d-flex align-items-center">
                    <Link
                      className="p-2 d-flex align-items-center border rounded"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                    >
                      <i className="feather icon-trash-2" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="checkboxs">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(1)}
                      onChange={handleRowCheckbox(1)}
                    />
                    <span className="checkmarks" />
                  </label>
                </td>
                <td>CU002 </td>
                <td>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md me-2">
                      <img src={stockImg06} alt="product" />
                    </Link>
                    <Link to="#">Beats Pro</Link>
                  </div>
                </td>
                <td>$160</td>
                <td>
                  <CounterThree />
                </td>
                <td>$1200</td>
                <td>
                  <div className="edit-delete-action d-flex align-items-center">
                    <Link
                      className="p-2 d-flex align-items-center border rounded"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                    >
                      <i className="feather icon-trash-2" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="checkboxs">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(2)}
                      onChange={handleRowCheckbox(2)}
                    />
                    <span className="checkmarks" />
                  </label>
                </td>
                <td>CU003 </td>
                <td>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md me-2">
                      <img src={stockImg02} alt="product" />
                    </Link>
                    <Link to="#">Nike Jordan</Link>
                  </div>
                </td>
                <td>$110</td>
                <td>
                  <CounterThree />
                </td>
                <td>$330</td>
                <td>
                  <div className="edit-delete-action d-flex align-items-center">
                    <Link
                      className="p-2 d-flex align-items-center border rounded"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                    >
                      <i className="feather icon-trash-2" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="checkboxs">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(3)}
                      onChange={handleRowCheckbox(3)}
                    />
                    <span className="checkmarks" />
                  </label>
                </td>
                <td>CU004 </td>
                <td>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md me-2">
                      <img src={stockImg02} alt="product" />
                    </Link>
                    <Link to="#">Apple Series 5 Watch</Link>
                  </div>
                </td>
                <td>$120</td>
                <td>
                  <CounterThree />
                </td>
                <td>$1420</td>
                <td>
                  <div className="edit-delete-action d-flex align-items-center">
                    <Link
                      className="p-2 d-flex align-items-center border rounded"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                    >
                      <i className="feather icon-trash-2" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="checkboxs">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(4)}
                      onChange={handleRowCheckbox(4)}
                    />
                    <span className="checkmarks" />
                  </label>
                </td>
                <td>CU005 </td>
                <td>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md me-2">
                      <img src={stockImg04} alt="product" />
                    </Link>
                    <Link to="#">Amazon Echo Dot</Link>
                  </div>
                </td>
                <td>$80</td>
                <td>
                  <CounterThree />
                </td>
                <td>$1200</td>
                <td>
                  <div className="edit-delete-action d-flex align-items-center">
                    <Link
                      className="p-2 d-flex align-items-center border rounded"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                    >
                      <i className="feather icon-trash-2" />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex align-items-center justify-content-between bg-white rounded border-gray p-4 mb-4">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Enter Coupon Code"
              />
              <Link to="#" className="btn btn-primary">
                Apply
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <p className="mb-0 me-2">Total Price : </p>
              <p className="text-gray-9">Total 2230</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-end mb-4">
            <Link to="#" className="btn btn-secondary me-2">
              Checkout
            </Link>
            <Link to="#" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
        <CommonFooter />
      </div>

      {/* delete modal */}
      <div className="modal fade" id="delete">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                  Delete Product
                </h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete product?
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Yes Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </div>
  );
};

export default Cart;
