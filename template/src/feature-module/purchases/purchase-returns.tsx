import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import { purchasesreturn } from "../../core/json/purchasereturn";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import SearchFromApi from "../../components/data-table/search";
import DeleteModal from "../../components/delete-modal";
import { qrCodeImage, stockImg01 } from "../../utils/imagepath";
import CommonSelect from "../../components/select/common-select";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import { Editor } from "primereact/editor";
const PurchaseReturns = () => {
  const dataSource = purchasesreturn;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(dataSource.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [text, setText] = useState("");

  const columns = [
    {
      header: "Product Image",
      field: "img",
      body: (text: any) => (
        <Link to="#" className="avatar avatar-md me-2">
          <img src={text?.img} alt="product" />
        </Link>
      ),
    },
    {
      header: "Date",
      field: "date",
    },

    {
      header: "Supplier Name",
      field: "supplier",
    },
    {
      header: "Reference",
      field: "reference",
    },

    {
      header: "Status",
      field: "status",
      body: (text: any) => (
        <span
          className={`badges status-badge fs-10 p-1 px-2 rounded-1 ${
            text?.status === "Pending"
              ? "badge-pending"
              : text?.status === "Pending"
                ? "bg-warning"
                : ""
          }`}
        >
          {text?.status}
        </span>
      ),
    },
    {
      header: "Total",
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
      header: "Payment Status",
      field: "paymentStatus",
      body: (text: any) => (
        <span
          className={`p-1 pe-2 rounded-1  fs-10 ${
            text?.paymentStatus === "Paid"
              ? "text-success bg-success-transparent"
              : text?.paymentStatus === "Overdue"
                ? "text-warning bg-warning-transparent "
                : "text-danger bg-danger-transparent "
          }`}
        >
          <i className="ti ti-point-filled me-1 fs-11"> </i>{" "}
          {text?.paymentStatus}
        </span>
      ),
    },

    {
      header: "Actions",
      field: "actions",
      key: "actions",
      body: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link
              to="#"
              className="me-2 p-2"
              data-bs-toggle="modal"
              data-bs-target="#edit-sales-new"
            >
              <i className="ti ti-edit" />
            </Link>
            <Link
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              className="p-2"
              to="#"
            >
              <i className="ti ti-trash" />
            </Link>
          </div>
        </div>
      ),
    },
  ];
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const supplierOptions = [
    { label: "Select", value: "" },
    { label: "Electro Mart", value: "Electro Mart" },
    { label: "Quantum Gadgets", value: "Quantum Gadgets" },
    { label: "Prime Bazaar", value: "Prime Bazaar" },
    { label: "Modern Automobile", value: "Modern Automobile" },
    { label: "AIM Infotech", value: "AIM Infotech" },
  ];

  const statusOptions = [
    { label: "Select", value: "" },
    { label: "Pending", value: "Pending" },
    { label: "Received", value: "Received" },
  ];
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Purchase Return List</h4>
                <h6>Manage your purchase return</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-sales-new"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Purchase Return
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
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Unpaid
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={dataSource}
                  totalRecords={totalRecords}
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
        <CommonFooter />
      </div>
      {/*add popup */}
      <div className="modal fade" id="add-sales-new">
        <div className="modal-dialog add-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4> Add Purchase Return</h4>
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
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Supplier Name<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="row">
                        <div className="col-lg-10 col-sm-10 col-10">
                          <CommonSelect
                            filter={false}
                            className="w-100"
                            options={supplierOptions}
                            value={selectedSupplier}
                            onChange={(opt) => setSelectedSupplier(opt.value)}
                            placeholder="Select Supplier"
                          />
                        </div>
                        <div className="col-lg-2 col-sm-2 col-2 ps-0">
                          <div className="add-icon">
                            <Link
                              to="#"
                              className="choose-add"
                              data-bs-toggle="modal"
                              data-bs-target="#add_customer"
                            >
                              <i className="plus feather icon-plus-circle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Date<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon calender-input">
                        <i className="info-img feather icon-calendar" />
                        <CommonDatePicker
                          appendTo={"self"}
                          value={date}
                          onChange={setDate}
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Reference<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Product<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon select-code">
                        <input
                          type="text"
                          placeholder="Search Product"
                          className="form-control p-2"
                        />
                        <div className="addonset">
                          <img src={qrCodeImage} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-body-table mt-3">
                  <div className="table-responsive no-pagination">
                    <table className="table datanew bg-light-9 p-3">
                      <thead>
                        <tr>
                          <th className="bg-secondary-transparent p-3">
                            Image
                          </th>
                          <th>Date</th>
                          <th>Supplier</th>
                          <th>Reference</th>
                          <th>Status</th>
                          <th>Total ($)</th>
                          <th>Paid ($)</th>
                          <th>Due ($)</th>
                          <th>Payment Status</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Order Tax<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon select-code">
                        <input
                          type="text"
                          defaultValue={0}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Discount<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon select-code">
                        <input
                          type="text"
                          defaultValue={0}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Shipping<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon select-code">
                        <input
                          type="text"
                          defaultValue={0}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Status<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        filter={false}
                        className="w-100"
                        options={statusOptions}
                        value={selectedStatus}
                        onChange={(opt) => setSelectedStatus(opt.value)}
                        placeholder="Select Status"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 summer-description-box">
                      <label className="form-label">Description</label>
                      <Editor
                        value={text}
                        onTextChange={(e: any) => setText(e.htmlValue)}
                        style={{ height: "200px" }}
                      />
                      <p className="mt-1">Maximum 60 Words</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn me-2 btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /add popup */}
      {/* Add Supplier */}
      <div className="modal fade" id="add_customer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Supplier</h4>
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
            <form>
              <div className="modal-body">
                <div>
                  <label className="form-label">
                    Supplier<span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
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
                  type="submit"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Add Supplier
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Supplier */}
      {/*Edit popup */}
      <div className="modal fade" id="edit-sales-new">
        <div className="modal-dialog add-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit Purchase Return</h4>
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
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Supplier Name<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="row">
                        <div className="col-lg-10 col-sm-10 col-10">
                          <CommonSelect
                            filter={false}
                            className="w-100"
                            options={supplierOptions}
                            value={selectedSupplier}
                            onChange={(opt) => setSelectedSupplier(opt.value)}
                            placeholder="Select Supplier"
                          />
                        </div>
                        <div className="col-lg-2 col-sm-2 col-2 ps-0">
                          <div className="add-icon">
                            <Link
                              to="#"
                              className="choose-add"
                              data-bs-toggle="modal"
                              data-bs-target="#add_customer"
                            >
                              <i className="plus feather icon-plus-circle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Date<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon calender-input">
                        <i className="info-img feather icon-calendar" />
                        <CommonDatePicker
                          appendTo={"self"}
                          value={date}
                          onChange={setDate}
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Supplier<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        filter={false}
                        className="w-100"
                        options={supplierOptions}
                        value={selectedSupplier}
                        onChange={(opt) => setSelectedSupplier(opt.value)}
                        placeholder="Select Supplier"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Product<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon select-code">
                        <input
                          type="text"
                          placeholder="Search Product"
                          className="form-control p-2"
                        />
                        <div className="addonset">
                          <img src={qrCodeImage} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-body-table mt-3 mb-1">
                  <div className="table-responsive no-pagination">
                    <table className="table  datanew">
                      <thead>
                        <tr>
                          <th className="bg-secondary-transparent p-3">
                            Image
                          </th>
                          <th>Date</th>
                          <th>Supplier</th>
                          <th>Reference</th>
                          <th>Status</th>
                          <th>Total ($)</th>
                          <th>Paid ($)</th>
                          <th>Due ($)</th>
                          <th>Payment Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to="#" className="avatar avatar-md me-2">
                              <img src={stockImg01} alt="product" />
                            </Link>
                          </td>
                          <td>24 Dec 2024</td>
                          <td>Electro Mart</td>
                          <td>PT001</td>
                          <td>
                            <span className="badges status-badge fs-10 p-1 px-2 rounded-1">
                              Received
                            </span>
                          </td>
                          <td>$1000</td>
                          <td>$1000</td>
                          <td>$600</td>
                          <td>
                            <span className="p-1 pe-2 rounded-1 text-success bg-success-transparent fs-10">
                              <i className="ti ti-point-filled me-1 fs-11" />
                              Paid
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 ms-auto">
                    <div className="total-order m-2 mb-3 ms-auto">
                      <ul className="border-1 rounded-1">
                        <li className="border-0 border-bottom">
                          <h4 className="border-0 text-gray-9">Order Tax</h4>
                          <h5 className="text-gray-9">$ 0.00</h5>
                        </li>
                        <li className="border-0 border-bottom">
                          <h4 className="border-0 text-gray-9">Discount</h4>
                          <h5 className="text-gray-9">$ 0.00</h5>
                        </li>
                        <li className="border-0 border-bottom">
                          <h4 className="border-0 text-gray-9">Shipping</h4>
                          <h5 className="text-gray-9">$ 0.00</h5>
                        </li>
                        <li className="total border-0 border-bottom">
                          <h4 className="border-0 text-gray-9">Grand Total</h4>
                          <h5 className="text-gray-9">$ 0.00</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Order Tax<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon select-code">
                        <input
                          type="text"
                          defaultValue={0}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Discount<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon select-code">
                        <input
                          type="text"
                          defaultValue={0}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Shipping<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon select-code">
                        <input
                          type="text"
                          defaultValue={0}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Status<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        filter={false}
                        className="w-100"
                        options={statusOptions}
                        value={selectedStatus}
                        onChange={(opt) => setSelectedStatus(opt.value)}
                        placeholder="Select Status"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="summer-description-box">
                      <label className="form-label">Description</label>
                      <Editor
                        value={text}
                        onTextChange={(e: any) => setText(e.htmlValue)}
                        style={{ height: "200px" }}
                      />
                      <p className="mt-1">Maximum 60 Words</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn me-2 btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Edit popup */}
      <DeleteModal />
    </div>
  );
};

export default PurchaseReturns;
