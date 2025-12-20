import  { useState } from "react";
import { Link } from "react-router-dom";
import { user33 } from "../../../utils/imagepath";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";
import CommonSelect from "../../../components/select/common-select";

const GiftCardModals = () => {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const options = [
    { value: "1", label: "Lenovo" },
    { value: "2", label: "Electronics" },
  ];
  return (
    <>
      {/* Add gift */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Gift Card</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">
                        Gift Card<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3 add-product">
                      <div className="add-newplus">
                        <label className="form-label">
                          Customer<span className="text-danger ms-1">*</span>
                        </label>
                        <Link to="#">
                          <i className="feather icon-plus-circle plus-down-add" />
                          <span>Add New</span>
                        </Link>
                      </div>
                      <CommonSelect
                        className="w-100"
                        options={options}
                        value={selectedCustomer}
                        onChange={(e) => setSelectedCustomer(e.value)}
                        placeholder="Choose"
                        filter={false}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-12 mb-2">
                        <div className="mb-3">
                          <label className="form-label">
                            Issued Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <i className="feather icon-calendar info-img" />

                            <CommonDatePicker
                              value={date1}
                              onChange={setDate1}
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 mb-2">
                        <div className="mb-3">
                          <label className="form-label">
                            Expiry Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <i className="feather icon-calendar info-img" />
                            <CommonDatePicker
                              value={date2}
                              onChange={setDate2}
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-12 mb-2">
                        <div className="mb-3">
                          <label className="form-label">
                            Amount<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6 col-12 mb-2">
                        <div className="mb-3">
                          <label className="form-label">
                            Balance<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input type="checkbox" id="user2" className="check" />
                        <label htmlFor="user2" className="checktoggle" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Add Gift Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add gift */}
      {/* Edit gift */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Gift Card </h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">
                        Gift Card<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="GFT1110"
                      />
                    </div>
                    <div className="mb-3 add-product">
                      <div className="add-newplus">
                        <label className="form-label">
                          Customer<span className="text-danger ms-1">*</span>
                        </label>
                        <Link to="#">
                          <i className="feather icon-plus-circle plus-down-add" />
                          <span>Add New</span>
                        </Link>
                      </div>
                      <CommonSelect
                        className="w-100"
                        options={options}
                        value={selectedCustomer}
                        onChange={(e) => setSelectedCustomer(e.value)}
                        placeholder="Choose"
                        filter={false}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-12 mb-2">
                        <div className="mb-3">
                          <label className="form-label">
                            Issued Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <i className="feather icon-calendar info-img" />

                            <CommonDatePicker
                              value={date1}
                              onChange={setDate1}
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 mb-2">
                        <div className="mb-3">
                          <label className="form-label">
                            Expiry Date
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <i className="feather icon-calendar info-img" />
                            <CommonDatePicker
                              value={date2}
                              onChange={setDate2}
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-12 mb-2">
                        <div className="mb-3">
                          <label className="form-label">
                            Amount<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="$200"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12 mb-2">
                        <div className="mb-3">
                          <label className="form-label">
                            Balance<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="$100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input type="checkbox" id="user3" className="check" />
                        <label htmlFor="user3" className="checktoggle" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit gift */}
      {/* gift card details */}
      <div className="modal fade" id="gift-card-details">
        <div className="modal-dialog modal-dialog-centered gift-card-details">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Gift Card Details</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="gift-card-header border p-3 rounded-1 bg-light">
                    <div className="row row-gap-3">
                      <div className="col-6 col-sm-4 col-md-3">
                        <p className="mb-0 fw-medium text-gray-9">Gift Card</p>
                        <p>GFT1110</p>
                      </div>
                      <div className="col-6 col-sm-4 col-md-3">
                        <p className="mb-0 fw-medium text-gray-9">Amount</p>
                        <p>$200</p>
                      </div>
                      <div className="col-6 col-sm-4 col-md-3">
                        <p className="mb-0 fw-medium text-gray-9">Balance</p>
                        <p>$100</p>
                      </div>
                      <div className="col-6 col-sm-4 col-md-3">
                        <p className="mb-0 fw-medium text-gray-9">Customer</p>
                        <div className="userimgname d-flex align-items-center">
                          <span className="avatar avatar-sm">
                            <Link to="#" className="product-img w-75">
                              <img src={user33} alt="user" />
                            </Link>
                          </span>
                          <Link to="#">Carl Evans</Link>
                        </div>
                      </div>
                      <div className="col-6 col-sm-4 col-md-3">
                        <p className="mb-0 fw-medium text-gray-9">
                          Issued Date
                        </p>
                        <p>24 Dec 2024</p>
                      </div>
                      <div className="col-6 col-sm-4 col-md-3">
                        <p className="mb-0 fw-medium text-gray-9">
                          Expiry Date
                        </p>
                        <p>24 Jan 2025</p>
                      </div>
                      <div className="col-6 col-sm-4 col-md-3">
                        <p className="mb-0 fw-medium text-gray-9">Issued By</p>
                        <p>Admin</p>
                      </div>
                      <div className="col-6 col-sm-4 col-md-3">
                        <p className="mb-0 fw-medium text-gray-9">Status</p>
                        <span className="p-1 pe-2 rounded-1 text-white bg-success fs-10">
                          <i className="ti ti-point-filled me-1 fs-11" />
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="gift-card-body mt-3">
                    <h4>Transaction Details</h4>
                    <div className="table-responsive no-pagination mt-2">
                      <table className="table datatable border">
                        <thead className="thead-light">
                          <tr>
                            <th>
                              Date
                              <i className="ti ti-arrows-up-down fs-11 fw-medium ms-1" />
                            </th>
                            <th>Transaction Type</th>
                            <th>Store</th>
                            <th>
                              Amount
                              <i className="ti ti-arrows-up-down fs-11 fw-medium ms-1" />
                            </th>
                            <th>
                              Balance
                              <i className="ti ti-arrows-up-down fs-11 fw-medium ms-1" />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3">16 Jan 2025</td>
                            <td className="p-3">Purchase</td>
                            <td className="p-3">Electro Mart</td>
                            <td className="p-3">$75</td>
                            <td className="p-3">$100</td>
                          </tr>
                          <tr>
                            <td className="p-3">04 Jan 2025</td>
                            <td className="p-3">Refund</td>
                            <td className="p-3">Online</td>
                            <td className="p-3">$25</td>
                            <td className="p-3">$175</td>
                          </tr>
                          <tr>
                            <td className="p-3">26 Dec 2024</td>
                            <td className="p-3">Purchase</td>
                            <td className="p-3">Gadget World</td>
                            <td className="p-3">$50</td>
                            <td className="p-3">$150</td>
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
      {/* gift card details */}
      {/* delete modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Gift Card</h4>
                <p className="mb-0 fs-16">
                  Are you sure you want to delete gift card?
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
                    type="button"
                    data-bs-dismiss="modal"
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
    </>
  );
};

export default GiftCardModals;
