import  { useState } from "react";
import { Link } from "react-router-dom";
import { saleslist } from "../../core/json/saleslistdata";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import {
  closeIcon,
  excel,
  pdf,
  qrCodeImage,
  scanners,
  stockImg02,
  stockImg03,
  stockImg05,
} from "../../utils/imagepath";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import TableTopHead from "../../components/table-top-head";
import CommonSelect from "../../components/select/common-select";

const SalesList = () => {
  type SalesEntry = {
    id: string;
    customerName: string;
    reference: string;
    date: string;
    status: string;
    grandTotal: string;
    paid: string;
    due: string;
    paymentStatus: string;
    biller: string;
  };

  const saleslistdata: SalesEntry[] = saleslist;
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [date3, setDate3] = useState<Date | null>(new Date());
  const [selectedSortDate, setSelectedSortDate] = useState<string | null>(null);
  const [selectedCustomerName, setSelectedCustomerName] = useState<
    string | null
  >(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState<
    string | null
  >(null);
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null);
  const [selectedStatusUpdate, setSelectedStatusUpdate] = useState<
    string | null
  >(null);
  const [selectedPaymentType, setSelectedPaymentType] = useState<string | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const oldandlatestvalue = [
    { value: "Sort by Date", label: "Sort by Date" },
    { value: "07 09 23", label: "07 09 23" },
    { value: "21 09 23", label: "21 09 23" },
  ];
  const customername = [
    { value: "Choose Customer Name", label: "Choose Customer Name" },
    { value: "Macbook pro", label: "Macbook pro" },
    { value: "Orange", label: "Orange" },
  ];
  const status = [
    { value: "Choose Status", label: "Choose Status" },
    { value: "Computers", label: "Computers" },
    { value: "Fruits", label: "Fruits" },
  ];
  const paymentstatus = [
    { value: "Choose Payment Status", label: "Choose Payment Status" },
    { value: "Computers", label: "Computers" },
    { value: "Fruits", label: "Fruits" },
  ];
  const customer = [
    { value: "Choose Customer", label: "Choose Customer" },
    { value: "Customer Name", label: "Customer Name" },
  ];
  const suppliername = [
    { value: "Supplier", label: "Supplier" },
    { value: "Supplier Name", label: "Supplier Name" },
  ];
  const statusupdate = [
    { value: "Supplier", label: "Choose" },
    { value: "Completed", label: "Completed" },
    { value: "InProgress", label: "InProgress" },
  ];
  const paymenttype = [
    { value: "Choose", label: "Choose" },
    { value: "Cash", label: "Cash" },
    { value: "Online", label: "Online" },
  ];
 
  
  const columns = [
    {
      header: "CustomerName",
      field: "customerName",
    },
    {
      header: "Reference",
      field: "reference",
    },

    {
      header: "Date",
      field: "date",
    },

    {
      header: "Status",
      field: "status",
      body: (text: any) => (
        <span
          className={`badge ${
            text?.Status === "Completed" ? "badge-bgsuccess" : "badge-bgdanger"
          }`}
        >
          {text?.Status}
        </span>
      ),
    },
    {
      header: "GrandTotal",
      field: "grandTotal",
    },
    {
      header: "Paid",
      field: "paid",
    },
    {
      header: "Due",
      field: "due",
    },
    {
      header: "PaymentStatus",
      field: "paymentStatus",
      body: (text: any) => {
        return (
          <span
            className={`badge ${
              text?.paymentStatus === "Paid"
                ? "badge-linesuccess"
                : "badge-linedanger"
            }`}
          >
            {text?.paymentStatus}
          </span>
        );
      },
    },
    {
      header: "Biller",
      field: "biller",
    },
    {
      header: "Actions",
      field: "actions",
      key: "actions",
      body: () => (
        <div className="text-center">
          <Link
            className="action-set"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="#"
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#sales-details-new"
              >
                <i className="ti ti-eye" />
                Sale Detail
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#edit-sales-new"
              >
                <i className="ti ti-edit" />
                Edit Sale
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#showpayment"
              >
                <i className="ti ti-currency-dollar" />
                Show Payments
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#createpayment"
              >
                <i className="ti ti-circle-plus me-2" />
                Create Payment
              </Link>
            </li>
            <li>
              <Link to="#" className="dropdown-item">
                <i className="ti ti-download me-2" />
                Download pdf
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item confirm-text mb-0"
                // onClick={showConfirmationAlert}
              >
                <i className="ti ti-trash" />
                Delete Sale
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Sales List</h4>
                <h6>Manage Your Sales</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-added"
                data-bs-toggle="modal"
                data-bs-target="#add-sales-new"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add New Sales
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
            </div>
            <div className="card-body">
              <div className="table-top">
                <div className="search-path">
                  <div className="d-flex align-items-center">
                    <div className="search-path">
                      <Link
                        to="#"
                        className={`btn btn-filter ${
                          isFilterVisible ? "setclose" : ""
                        }`}
                        id="filter_search"
                      >
                        <i
                          className="feather icon-filter filter-icon"
                          onClick={toggleFilterVisibility}
                        />
                        <span onClick={toggleFilterVisibility}>
                          <img src={closeIcon} alt="img" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="form-sort">
                  <i className="info-img feather icon-sliders" />
                  <CommonSelect
                    className="img-select"
                    options={oldandlatestvalue}
                    value={selectedSortDate}
                    onChange={(e) => setSelectedSortDate(e.value)}
                    placeholder="Newest"
                    filter={false}
                  />
                </div>
              </div>
              {/* /Filter */}
              <div
                className={`card${isFilterVisible ? " visible" : ""}`}
                id="filter_inputs"
                style={{ display: isFilterVisible ? "block" : "none" }}
              >
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="input-blocks">
                        <i className="feather icon-user info-img" />
                        <i className="feather icon-user info-img"></i>
                        <CommonSelect
                          className="img-select"
                          options={customername}
                          value={selectedCustomerName}
                          onChange={(e) => setSelectedCustomerName(e.value)}
                          placeholder="Newest"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="input-blocks">
                        <i className="info-img feather icon-stop-circle" />
                        <CommonSelect
                          className="img-select"
                          options={status}
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.value)}
                          placeholder="Newest"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="input-blocks">
                        <i className="info-img feather icon-file-text" />
                        <input
                          type="text"
                          placeholder="Enter Reference"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="input-blocks">
                        <i className="info-img feather icon-stop-circle" />
                        <CommonSelect
                          className="img-select"
                          options={paymentstatus}
                          value={selectedPaymentStatus}
                          onChange={(e) => setSelectedPaymentStatus(e.value)}
                          placeholder="Choose Payment Status"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="input-blocks">
                        <Link to="#" className="btn btn-filters ms-auto">
                          {" "}
                          <i className="ti ti-search" /> Search{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Filter */}
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={saleslistdata}
                  totalRecords={saleslistdata.length}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedProducts}
                  onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      <>
        {/*add popup */}
        <div className="modal fade" id="add-sales-new">
          <div className="modal-dialog add-centered">
            <div className="modal-content">
              <div className="page-wrapper p-0 m-0">
                <div className="content p-0">
                  <div className="modal-header border-0 custom-modal-header">
                    <div className="page-title">
                      <h4> Add Sales</h4>
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
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Customer Name</label>
                              <div className="row">
                                <div className="col-lg-10 col-sm-10 col-10">
                                  <CommonSelect
                                    options={customer}
                                    value={selectedCustomer}
                                    onChange={(e) =>
                                      setSelectedCustomer(e.value)
                                    }
                                    placeholder="Newest"
                                    filter={false}
                                  />
                                </div>
                                <div className="col-lg-2 col-sm-2 col-2 ps-0">
                                  <div className="add-icon">
                                    <Link to="#" className="choose-add">
                                      <i className="feather icon-plus-circle plus" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Date</label>
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
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Supplier</label>
                              <CommonSelect
                                options={suppliername}
                                value={selectedSupplier}
                                onChange={(e) => setSelectedSupplier(e.value)}
                                placeholder="Newest"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Product Name</label>
                              <div className="input-groupicon select-code">
                                <input
                                  type="text"
                                  placeholder="Please type product code and select"
                                />
                                <div className="addonset">
                                  <img src={qrCodeImage} alt="img" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive no-pagination">
                          <table className="table  datanew">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Purchase Price($)</th>
                                <th>Discount($)</th>
                                <th>Tax(%)</th>
                                <th>Tax Amount($)</th>
                                <th>Unit Cost($)</th>
                                <th>Total Cost(%)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 ms-auto">
                            <div className="total-order w-100 max-widthauto m-auto mb-4">
                              <ul>
                                <li>
                                  <h4>Order Tax</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                                <li>
                                  <h4>Discount</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                                <li>
                                  <h4>Shipping</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                                <li>
                                  <h4>Grand Total</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Order Tax</label>
                              <div className="input-groupicon select-code">
                                <input
                                  type="text"
                                  defaultValue={0}
                                  className="p-2"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Discount</label>
                              <div className="input-groupicon select-code">
                                <input
                                  type="text"
                                  defaultValue={0}
                                  className="p-2"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Shipping</label>
                              <div className="input-groupicon select-code">
                                <input
                                  type="text"
                                  defaultValue={0}
                                  className="p-2"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks mb-5">
                              <label>Status</label>
                              <CommonSelect
                                options={statusupdate}
                                value={selectedStatusUpdate}
                                onChange={(e) =>
                                  setSelectedStatusUpdate(e.value)
                                }
                                placeholder="Status"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 text-end">
                            <button
                              type="button"
                              className="btn btn-cancel add-cancel me-3"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <Link to="#" className="btn btn-submit add-sale">
                              Submit
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /add popup */}
        {/* details popup */}
        <div className="modal fade" id="sales-details-new">
          <div className="modal-dialog sales-details-modal">
            <div className="modal-content">
              <div className="page-wrapper details-blk">
                <div className="content p-0">
                  <div className="page-header p-4 mb-0">
                    <div className="add-item d-flex">
                      <div className="page-title modal-datail">
                        <h4>Sales Detail : SL0101</h4>
                      </div>
                      <div className="page-btn">
                        <Link
                          to="#"
                          className="btn btn-added"
                          data-bs-dismiss="modal"
                        >
                          <i className="ti ti-circle-plus me-1"></i>
                          Add New Sales
                        </Link>
                      </div>
                    </div>
                    <ul className="table-top-head">
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Pdf"
                        >
                          <i className="ti ti-edit sales-action" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Pdf"
                        >
                          <img src={pdf} alt="img" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Excel"
                        >
                          <img src={excel} alt="img" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Print"
                        >
                          <i className="ti ti-printer" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="invoice-box table-height">
                          <div className="sales-details-items d-flex">
                            <div className="details-item">
                              <h6>Customer Info</h6>
                              <p>
                                walk-in-customer
                                <br />
                                walk-in-customer@example.com
                                <br />
                                123456780
                                <br />
                                N45 , Dhaka
                              </p>
                            </div>
                            <div className="details-item">
                              <h6>Company Info</h6>
                              <p>
                                DGT
                                <br />
                                admin@example.com
                                <br />
                                6315996770
                                <br />
                                3618 Abia Martin Drive
                              </p>
                            </div>
                            <div className="details-item">
                              <h6>Invoice Info</h6>
                              <p>
                                Reference
                                <br />
                                Payment Status
                                <br />
                                Status
                              </p>
                            </div>
                            <div className="details-item">
                              <h5>
                                <span>SL0101</span>Paid
                                <br /> Completed
                              </h5>
                            </div>
                          </div>
                          <h5 className="order-text">Order Summary</h5>
                          <div className="table-responsive no-pagination">
                            <table className="table  datanew">
                              <thead>
                                <tr>
                                  <th>Product</th>
                                  <th>Qty</th>
                                  <th>Purchase Price($)</th>
                                  <th>Discount($)</th>
                                  <th>Tax(%)</th>
                                  <th>Tax Amount($)</th>
                                  <th>Unit Cost($)</th>
                                  <th>Total Cost(%)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="productimgname">
                                      <Link
                                        to="#"
                                        className="product-img stock-img"
                                      >
                                        <img src={stockImg02} alt="product" />
                                      </Link>
                                      <Link to="#">Nike Jordan</Link>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="product-quantity">
                                      <span className="quantity-btn">
                                        +
                                        <i className="feather icon-plus-circle" />
                                      </span>
                                      <input
                                        type="text"
                                        className="quntity-input"
                                        defaultValue={2}
                                      />
                                      <span className="quantity-btn">
                                        <i className="feather icon-minus-circle" />
                                      </span>
                                    </div>
                                  </td>
                                  <td>2000</td>
                                  <td>500</td>
                                  <td>0.00</td>
                                  <td>0.00</td>
                                  <td>0.00</td>
                                  <td>1500</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="productimgname">
                                      <Link
                                        to="#"
                                        className="product-img stock-img"
                                      >
                                        <img src={stockImg03} alt="product" />
                                      </Link>
                                      <Link to="#">Apple Series 5 Watch</Link>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="product-quantity">
                                      <span className="quantity-btn">
                                        +
                                        <i className="feather icon-plus-circle" />
                                      </span>
                                      <input
                                        type="text"
                                        className="quntity-input"
                                        defaultValue={2}
                                      />
                                      <span className="quantity-btn">
                                        <i className="feather icon-minus-circle" />
                                      </span>
                                    </div>
                                  </td>
                                  <td>3000</td>
                                  <td>400</td>
                                  <td>0.00</td>
                                  <td>0.00</td>
                                  <td>0.00</td>
                                  <td>1700</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="productimgname">
                                      <Link
                                        to="#"
                                        className="product-img stock-img"
                                      >
                                        <img src={stockImg05} alt="product" />
                                      </Link>
                                      <Link to="#">Lobar Handy</Link>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="product-quantity">
                                      <span className="quantity-btn">
                                        +
                                        <i className="feather icon-plus-circle" />
                                      </span>
                                      <input
                                        type="text"
                                        className="quntity-input"
                                        defaultValue={2}
                                      />
                                      <span className="quantity-btn">
                                        <i className="feather icon-minus-circle" />
                                      </span>
                                    </div>
                                  </td>
                                  <td>2500</td>
                                  <td>500</td>
                                  <td>0.00</td>
                                  <td>0.00</td>
                                  <td>0.00</td>
                                  <td>2000</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row">
                          <div className="row">
                            <div className="col-lg-6 ms-auto">
                              <div className="total-order w-100 max-widthauto m-auto mb-4">
                                <ul>
                                  <li>
                                    <h4>Order Tax</h4>
                                    <h5>$ 0.00</h5>
                                  </li>
                                  <li>
                                    <h4>Discount</h4>
                                    <h5>$ 0.00</h5>
                                  </li>
                                  <li>
                                    <h4>Grand Total</h4>
                                    <h5>$ 5200.00</h5>
                                  </li>
                                  <li>
                                    <h4>Paid</h4>
                                    <h5>$ 5200.00</h5>
                                  </li>
                                  <li>
                                    <h4>Due</h4>
                                    <h5>$ 0.00</h5>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /details popup */}
        {/* edit popup */}
        <div className="modal fade" id="edit-sales-new">
          <div className="modal-dialog edit-sales-modal">
            <div className="modal-content">
              <div className="page-wrapper p-0 m-0">
                <div className="content p-0">
                  <div className="page-header p-4 mb-0">
                    <div className="add-item new-sale-items d-flex">
                      <div className="page-title">
                        <h4>Edit Sales</h4>
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
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Customer</label>
                              <div className="row">
                                <div className="col-lg-10 col-sm-10 col-10">
                                  <CommonSelect
                                    options={customer}
                                    value={selectedCustomer}
                                    onChange={(e) =>
                                      setSelectedCustomer(e.value)
                                    }
                                    placeholder="Newest"
                                    filter={false}
                                  />
                                </div>
                                <div className="col-lg-2 col-sm-2 col-2 ps-0">
                                  <div className="add-icon">
                                    <Link to="#" className="choose-add">
                                      <i className="feather icon-plus-circle plus" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Purchase Date</label>
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
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Supplier</label>
                              <CommonSelect
                                options={suppliername}
                                value={selectedSupplier}
                                onChange={(e) => setSelectedSupplier(e.value)}
                                placeholder="Newest"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Product Name</label>
                              <div className="input-groupicon select-code">
                                <input
                                  type="text"
                                  placeholder="Please type product code and select"
                                />
                                <div className="addonset">
                                  <img src={scanners} alt="img" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive no-pagination">
                          <table className="table  datanew">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Purchase Price($)</th>
                                <th>Discount($)</th>
                                <th>Tax(%)</th>
                                <th>Tax Amount($)</th>
                                <th>Unit Cost($)</th>
                                <th>Total Cost(%)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="productimgname">
                                    <Link
                                      to="#"
                                      className="product-img stock-img"
                                    >
                                      <img src={stockImg02} alt="product" />
                                    </Link>
                                    <Link to="#">Nike Jordan</Link>
                                  </div>
                                </td>
                                <td>
                                  <div className="product-quantity">
                                    <span className="quantity-btn">
                                      +
                                      <i className="feather icon-plus-circle" />
                                    </span>
                                    <input
                                      type="text"
                                      className="quntity-input"
                                      defaultValue={2}
                                    />
                                    <span className="quantity-btn">
                                      <i className="feather icon-minus-circle" />
                                    </span>
                                  </div>
                                </td>
                                <td>2000</td>
                                <td>500</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>1500</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="productimgname">
                                    <Link
                                      to="#"
                                      className="product-img stock-img"
                                    >
                                      <img src={stockImg03} alt="product" />
                                    </Link>
                                    <Link to="#">Apple Series 5 Watch</Link>
                                  </div>
                                </td>
                                <td>
                                  <div className="product-quantity">
                                    <span className="quantity-btn">
                                      +
                                      <i className="feather icon-plus-circle" />
                                    </span>
                                    <input
                                      type="text"
                                      className="quntity-input"
                                      defaultValue={2}
                                    />
                                    <span className="quantity-btn">
                                      <i className="feather icon-minus-circle" />
                                    </span>
                                  </div>
                                </td>
                                <td>3000</td>
                                <td>400</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>1700</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="productimgname">
                                    <Link
                                      to="#"
                                      className="product-img stock-img"
                                    >
                                      <img src={stockImg05} alt="product" />
                                    </Link>
                                    <Link to="#">Lobar Handy</Link>
                                  </div>
                                </td>
                                <td>
                                  <div className="product-quantity">
                                    <span className="quantity-btn">
                                      +
                                      <i className="feather icon-plus-circle" />
                                    </span>
                                    <input
                                      type="text"
                                      className="quntity-input"
                                      defaultValue={2}
                                    />
                                    <span className="quantity-btn">
                                      <i className="feather icon-minus-circle" />
                                    </span>
                                  </div>
                                </td>
                                <td>2500</td>
                                <td>500</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>2000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 ms-auto">
                            <div className="total-order w-100 max-widthauto m-auto mb-4">
                              <ul>
                                <li>
                                  <h4>Order Tax</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                                <li>
                                  <h4>Discount</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                                <li>
                                  <h4>Shipping</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                                <li>
                                  <h4>Grand Total</h4>
                                  <h5>$5200.00</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Order Tax</label>
                              <div className="input-groupicon select-code">
                                <input type="text" placeholder={"0"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Discount</label>
                              <div className="input-groupicon select-code">
                                <input type="text" placeholder={"0"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Shipping</label>
                              <div className="input-groupicon select-code">
                                <input type="text" placeholder={"0"} />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks mb-5">
                              <label>Status</label>
                              <CommonSelect
                                options={statusupdate}
                                value={selectedStatusUpdate}
                                onChange={(e) =>
                                  setSelectedStatusUpdate(e.value)
                                }
                                placeholder="Status"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-blocks">
                              <label>Notes</label>
                              <textarea
                                className="form-control"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 text-end">
                            <button
                              type="button"
                              className="btn btn-cancel add-cancel me-3"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <Link to="#" className="btn btn-submit add-sale">
                              Submit
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /edit popup */}
        {/* show payment Modal */}
        <div
          className="modal fade"
          id="showpayment"
          tabIndex={-1}
          aria-labelledby="showpayment"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header border-0 custom-modal-header">
                    <div className="page-title">
                      <h4>Show Payments</h4>
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
                  <div className="modal-body custom-modal-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="modal-body-table total-orders">
                          <div className="table-responsive">
                            <table className="table  datanew">
                              <thead>
                                <tr>
                                  <th>Date</th>
                                  <th>Reference</th>
                                  <th>Amount</th>
                                  <th>Paid By</th>
                                  <th className="no-sort">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>19 Jan 2023</td>
                                  <td>INV/SL0101</td>
                                  <td>$1500</td>
                                  <td>Cash</td>
                                  <td className="action-table-data">
                                    <div className="edit-delete-action">
                                      <Link className="me-3 p-2" to="#">
                                        <i className="ti ti-printer" />
                                      </Link>
                                      <Link
                                        className="me-3 p-2"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editpayment"
                                      >
                                        <i className="ti ti-edit" />
                                      </Link>
                                      <Link className="confirm-text p-2" to="#">
                                        <i className="ti ti-trash" />
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
        {/* show payment Modal */}
        {/* Create payment Modal */}
        <div
          className="modal fade"
          id="createpayment"
          tabIndex={-1}
          aria-labelledby="createpayment"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 custom-modal-header">
                <div className="page-title">
                  <h4>Create Payments</h4>
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
              <div className="modal-body custom-modal-body">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-blocks">
                        <label> Date</label>
                        <div className="input-groupicon calender-input ">
                          <i className="feather icon-calendar info-img" />

                          <CommonDatePicker
                            value={date3}
                            onChange={setDate3}
                            className="w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                      <div className="input-blocks">
                        <label>Reference</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-sm-12 col-12">
                      <div className="input-blocks">
                        <label>Received Amount</label>
                        <div className="input-groupicon calender-input">
                          <i className="feather icon-dollar-sign info-img" />
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12">
                      <div className="input-blocks">
                        <label>Paying Amount</label>
                        <div className="input-groupicon calender-input">
                          <i className="feather icon-dollar-sign info-img" />
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12">
                      <div className="input-blocks">
                        <label>Payment type</label>
                        <CommonSelect
                          options={paymenttype}
                          value={selectedPaymentType}
                          onChange={(e) => setSelectedPaymentType(e.value)}
                          placeholder="Newest"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-blocks">
                        <label>Description</label>
                        <textarea className="form-control" defaultValue={""} />
                        <p>Maximum 60 Characters</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="modal-footer-btn">
                      <button
                        type="button"
                        className="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <Link to="#" className="btn btn-submit">
                        Submit
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Create payment Modal */}
        {/* edit payment Modal */}
        <div
          className="modal fade"
          id="editpayment"
          tabIndex={-1}
          aria-labelledby="editpayment"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 custom-modal-header">
                <div className="page-title">
                  <h4>Edit Payments</h4>
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
              <div className="modal-body custom-modal-body">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-blocks">
                        <label>19 Jan 2023</label>
                        <div className="input-groupicon calender-input">
                          <i className="feather icon-calendar info-img" />
                          <input
                            type="text"
                            className="datetimepicker form-control"
                            placeholder="Select Date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                      <div className="input-blocks">
                        <label>Reference</label>
                        <input type="text" defaultValue="INV/SL0101" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-sm-12 col-12">
                      <div className="input-blocks">
                        <label>Received Amount</label>
                        <div className="input-groupicon calender-input">
                          <i className="feather icon-dollar-sign info-img" />
                          <input type="text" defaultValue={1500} />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12">
                      <div className="input-blocks">
                        <label>Paying Amount</label>
                        <div className="input-groupicon calender-input">
                          <i className="feather icon-dollar-sign info-img" />
                          <input type="text" defaultValue={1500} />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12">
                      <div className="input-blocks">
                        <label>Payment type</label>
                        <select>
                          <option>Cash</option>
                          <option>Online</option>
                          <option>Inprogress</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-blocks summer-description-box transfer">
                        <label>Description</label>
                        <textarea className="form-control" defaultValue={""} />
                      </div>
                      <p>Maximum 60 Characters</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="modal-footer-btn mb-3 me-3">
                      <button
                        type="button"
                        className="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-submit">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* edit payment Modal */}
        <div className="customizer-links" id="setdata">
          <ul className="sticky-sidebar">
            <li className="sidebar-icons">
              <Link
                to="#"
                className="navigation-add"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                data-bs-original-title="Theme"
              >
                <i className="ti ti-settings" />
              </Link>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default SalesList;
