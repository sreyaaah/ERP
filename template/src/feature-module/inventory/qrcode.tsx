import  { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import { stockImg02 } from "../../utils/imagepath";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import QRcodeModelPopup from "../../core/modals/inventory/qrcode";

const QRcode = () => {
  const [quantity, setQuantity] = useState(4);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedPaperSize, setSelectedPaperSize] = useState(null);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const WareHouse = [
    { value: "main", label: "Main Warehouse" },
    { value: "secondary", label: "Secondary Warehouse" },
  ];
  const Store = [
    { value: "store1", label: "Store 1" },
    { value: "store2", label: "Store 2" },
  ];
  const PaperSize = [
    { value: "A4", label: "A4" },
    { value: "A5", label: "A5" },
  ];
  return (
    <div>
      <div className="page-wrapper notes-page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Print QR Code</h4>
                <h6>Manage your QR code</h6>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <ul className="table-top-head">
                <RefreshIcon />
                <CollapesIcon />
              </ul>
            </div>
          </div>
          <div className="barcode-content-list">
            <form>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="row seacrh-barcode-item">
                    <div className="col-sm-6 seacrh-barcode-item-one">
                      <label className="form-label">
                        Warehouse<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={WareHouse}
                        value={selectedWarehouse}
                        onChange={(e) => setSelectedWarehouse(e.value)}
                        placeholder="Choose"
                        filter={false}
                      />
                    </div>
                    <div className="col-sm-6 seacrh-barcode-item-one">
                      <label className="form-label">
                        Store<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={Store}
                        value={selectedStore}
                        onChange={(e) => setSelectedStore(e.value)}
                        placeholder="Choose"
                        filter={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="search-form  seacrh-barcode-item">
                    <div className="searchInput">
                      <label className="form-label">
                        Product<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="dropdownsearchClickable"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        className="form-control"
                        placeholder="Search Product by Code"
                      />
                      <div className="resultBox"></div>
                      <div className="icon">
                        <i className="fas fa-search mt-4" />
                      </div>
                      <div
                        className="dropdown-menu search-dropdown w-100 h-auto rounded-1 mt-2"
                        aria-labelledby="dropdownsearchClickable"
                      >
                        <ul>
                          <li className="fs-14 text-gray-9 mb-2">
                            Amazon Echo Dot
                          </li>
                          <li className="fs-14 text-gray-9 mb-2">
                            Armani Belt
                          </li>
                          <li className="fs-14 text-gray-9 mb-2">
                            Apple Watch
                          </li>
                          <li className="fs-14 text-gray-9">
                            Apple Iphone 14 Pro
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="col-lg-12">
              <div className="modal-body-table search-modal-header bg-light p-2 p-sm-4">
                <div className="table-responsive rounded-1 qrcode-table">
                  <table className="table  datatable">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>SKU</th>
                        <th>Code</th>
                        <th>Reference Number</th>
                        <th>Qty</th>
                        <th className="text-center no-sort bg-secondary-transparent" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="avatar avatar-md me-2">
                              <img src={stockImg02} alt="product" />
                            </Link>
                            <Link to="#">Nike Jordan</Link>
                          </div>
                        </td>
                        <td>PT002</td>
                        <td>HG3FK</td>
                        <td>32RRR554</td>
                        <td>
                          <div className="product-quantity">
                            <span
                              className="quantity-btn"
                              onClick={handleDecrement}
                            >
                              <i className="feather icon-minus-circle" />
                            </span>
                            <input
                              type="text"
                              className="quntity-input"
                              defaultValue={4}
                            />
                            <span
                              className="quantity-btn"
                              onClick={handleIncrement}
                            >
                              +
                              <i className="feather icon-plus-circle plus-circle" />
                            </span>
                          </div>
                        </td>
                        <td className="action-table-data justify-content-center">
                          <div className="edit-delete-action">
                            <Link
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                              className="barcode-delete-icon"
                              to="#"
                            >
                              <i className="feather icon-trash-2" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="paper-search-size">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <form>
                    <label className="form-label">
                      Paper Size<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      className="w-100"
                      options={PaperSize}
                      value={selectedPaperSize}
                      onChange={(e) => setSelectedPaperSize(e.value)}
                      placeholder="Choose"
                      filter={false}
                    />
                  </form>
                </div>
                <div className="col-lg-6 pt-3">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="search-toggle-list">
                        <p>Reference Number</p>
                        <div className="m-0">
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <input
                              type="checkbox"
                              id="user7"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user7" className="checktoggle mb-0">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-barcode-button">
              <Link
                to="#"
                className="btn btn-submit me-2 mt-0 fs-13 btn-primary shadow-none"
                data-bs-toggle="modal"
                data-bs-target="#prints-barcode"
              >
                <span>
                  <i className="fas fa-eye me-2" />
                </span>
                Generate QR Code
              </Link>
              <Link
                to="#"
                className="btn btn-cancel me-2 fs-13 btn-secondary shadow-none"
              >
                <span>
                  <i className="fas fa-power-off me-2" />
                </span>
                Reset
              </Link>
              <Link
                to="#"
                className="btn btn-cancel close-btn fs-13 btn-danger shadow-none"
              >
                <span>
                  <i className="fas fa-print me-2" />
                </span>
                Print QRcode
              </Link>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      <QRcodeModelPopup />
      <DeleteModal />
    </div>
  );
};

export default QRcode;
