import { purchaseListData } from "../../core/json/purchase-list";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import DeleteModal from "../../components/delete-modal";
import CommonSelect from "../../components/select/common-select";
import TableTopHead from "../../components/table-top-head";
import CommonFooter from "../../components/footer/commonFooter";
import { downloadImg, stockImg02 } from "../../utils/imagepath";
import { useState } from "react";
import { Link } from "react-router";

const PurchasesList = () => {
  const [listData, _setListData] = useState<any[]>(purchaseListData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const supplierOptions = [
    { label: "Select", value: "" },
    { label: "Apex Computers", value: "apex-computers" },
    { label: "Dazzle Shoes", value: "dazzle-shoes" },
    { label: "Best Accessories", value: "best-accessories" },
  ];

  const statusOptions = [
    { label: "Select", value: "" },
    { label: "Received", value: "received" },
    { label: "Pending", value: "pending" },
  ];

  const columns = [
    
    { header: "Supplier Name", field: "supplierName", key: "supplierName" },
    { header: "Reference", field: "reference", key: "reference" },
    { header: "Date", field: "date", key: "date" },
    {
      header: "Status",
      field: "status",
      key: "status",
      body: (data: any) => (
        <span
          className={`badges status-badge fs-10 p-1 px-2 rounded-1 ${
            data.status === "Pending"
              ? "badge-pending"
              : data.status === "Ordered"
                ? "bg-warning"
                : ""
          }`}
        >
          {data.status}
        </span>
      ),
    },
    { header: "Total", field: "total", key: "total" },
    { header: "Paid", field: "paid", key: "paid" },
    { header: "Due", field: "due", key: "due" },
    {
      header: "Payment Status",
      field: "paymentStatus",
      key: "paymentStatus",
      body: (data: any) => (
        <span
          className={`p-1 pe-2 rounded-1 fs-10 ${
            data.paymentStatus === "Paid"
              ? "text-success bg-success-transparent"
              : data.paymentStatus === "Unpaid"
                ? "text-danger bg-danger-transparent"
                : "text-warning bg-warning-transparent"
          }`}
        >
          <i className="ti ti-point-filled me-1 fs-11"></i>
          {data.paymentStatus}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (_row: any) => (
        <div className="edit-delete-action">
          <Link className="me-2 p-2" to="#">
            <i className="feather icon-eye action-eye"></i>
          </Link>
          <Link
            to="#"
            className="me-2 p-2"
            data-bs-toggle="modal"
            data-bs-target="#edit-purchase"
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="p-2"
            to="#"
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header transfer">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Purchase</h4>
                <h6>Manage your purchases</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="d-flex purchase-pg-btn">
              <div className="page-btn">
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add-purchase"
                >
                  <i className="me-1 feather icon-plus-circle" />
                  Add Purchase
                </Link>
              </div>
              <div className="page-btn import">
                <Link
                  to="#"
                  className="btn btn-secondary color"
                  data-bs-toggle="modal"
                  data-bs-target="#view-notes"
                >
                  <i className="feather icon-download me-2" />
                  Import Purchase
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Payment Status
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
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Overdue
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
                  data={listData}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={totalRecords}
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
      {/* Add Purchase */}
      <div className="modal fade" id="add-purchase">
        <div className="modal-dialog purchase modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Purchase</h4>
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
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3 add-product">
                      <label className="form-label">
                        Supplier Name<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="row">
                        <div className="col-lg-10 col-sm-10 col-10">
                          <CommonSelect
                            className="w-100"
                            options={supplierOptions}
                            value={selectedSupplier}
                            onChange={(e) => setSelectedSupplier(e.value)}
                            placeholder="Select Supplier"
                            filter={false}
                          />
                        </div>
                        <div className="col-lg-2 col-sm-2 col-2 ps-0">
                          <div className="add-icon tab">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_customer"
                            >
                              <i className="feather icon-plus-circle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Date<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon calender-input">
                        <i className="feather icon-plus-calendar info-img" />
                        <CommonDatePicker
                          appendTo={"self"}
                          value={date}
                          onChange={setDate}
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Reference<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Product<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Product"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="modal-body-table mt-3">
                      <div className="table-responsive">
                        <table className="table datatable rounded-1">
                          <thead>
                            <tr>
                              <th className="bg-secondary-transparent p-3">
                                Product
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Qty
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Purchase Price($)
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Discount($)
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Tax(%)
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Tax Amount($)
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Unit Cost($)
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Total Cost(%)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-0" />
                              <td className="p-0" />
                              <td className="p-0" />
                              <td className="p-0" />
                              <td className="p-0" />
                              <td className="p-0" />
                              <td className="p-0" />
                              <td className="p-0" />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Order Tax<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Discount<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Shipping<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Status<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={statusOptions}
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.value)}
                          placeholder="Select Status"
                          filter={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="mb-3 summer-description-box">
                    <label className="form-label">Description</label>
                    <div id="summernote" />
                    <p className="mt-1">Maximum 60 Words</p>
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
      {/* /Add Purchase */}
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
      {/* Edit Purchase */}
      <div className="modal fade" id="edit-purchase">
        <div className="modal-dialog purchase modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit Purchase</h4>
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
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3 add-product">
                      <label className="form-label">
                        Supplier Name<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="row">
                        <div className="col-lg-10 col-sm-10 col-10">
                          <CommonSelect
                            className="w-100"
                            options={supplierOptions}
                            value={selectedSupplier}
                            onChange={(e) => setSelectedSupplier(e.value)}
                            placeholder="Select Supplier"
                            filter={false}
                          />
                        </div>
                        <div className="col-lg-2 col-sm-2 col-2 ps-0">
                          <div className="add-icon tab">
                            <Link to="#">
                              <i className="feather icon-plus-circle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Date<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-groupicon calender-input">
                        <i className="feather icon-plus-calendar info-img" />
                        <CommonDatePicker
                          appendTo={"self"}
                          value={date}
                          onChange={setDate}
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Supplier<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Elite Retail"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Product<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Product"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="modal-body-table">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="bg-secondary-transparent p-3">
                                Product Name
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                QTY
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Purchase Price($){" "}
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Discount($){" "}
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Tax %
                              </th>
                              <th className="bg-secondary-transparent p-3">
                                Tax Amount($)
                              </th>
                              <th className="text-end bg-secondary-transparent p-3">
                                Unit Cost($)
                              </th>
                              <th className="text-end bg-secondary-transparent p-3">
                                Total Cost ($){" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-4">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="avatar avatar-md me-2"
                                  >
                                    <img src={stockImg02} alt="product" />
                                  </Link>
                                  <Link to="#">Nike Jordan</Link>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="product-quantity">
                                  <span className="quantity-btn">
                                    +
                                    <i className="plus-circle feather icon-plus-circle" />
                                  </span>
                                  <input
                                    type="text"
                                    className="quntity-input"
                                    defaultValue={10}
                                  />
                                  <span className="quantity-btn">
                                    <i className="feather icon-minus-circle feather icon-search" />
                                  </span>
                                </div>
                              </td>
                              <td className="p-4">300</td>
                              <td className="p-4">50</td>
                              <td className="p-4">0</td>
                              <td className="p-4">0.00</td>
                              <td className="p-4">300</td>
                              <td className="p-4">600</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 float-md-right">
                    <div className="total-order m-2 mb-3 ms-auto">
                      <ul className="border-1 rounded-1">
                        <li className="border-0 border-bottom">
                          <h4 className="border-0">Order Tax</h4>
                          <h5>$ 0.00</h5>
                        </li>
                        <li className="border-0 border-bottom">
                          <h4 className="border-0">Discount</h4>
                          <h5>$ 0.00</h5>
                        </li>
                        <li className="border-0 border-bottom">
                          <h4 className="border-0">Shipping</h4>
                          <h5>$ 0.00</h5>
                        </li>
                        <li className="total border-0">
                          <h4 className="border-0">Grand Total</h4>
                          <h5>$1800.00</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Order Tax<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={0}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Discount<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={0}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Shipping<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={0}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Status<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={statusOptions}
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.value)}
                        placeholder="Select Status"
                        filter={false}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3 summer-description-box">
                      <label className="form-label">Description</label>
                      <div id="summernote2"></div>
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
                  Save Changes{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Purchase */}
      {/* Import Purchase */}
      <div className="modal fade" id="view-notes">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Import Purchase</h4>
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
                      <div className="col-lg-6 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Supplier Name
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="row">
                            <div className="col-lg-10 col-sm-10 col-10">
                              <CommonSelect
                                className="w-100"
                                options={supplierOptions}
                                value={selectedSupplier}
                                onChange={(e) => setSelectedSupplier(e.value)}
                                placeholder="Select Supplier"
                                filter={false}
                              />
                            </div>
                            <div className="col-lg-2 col-sm-2 col-2 ps-0">
                              <div className="add-icon tab">
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add_customer"
                                >
                                  <i className="feather icon-plus-circle" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            {" "}
                            Status<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={statusOptions}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
                            placeholder="Select Status"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-12">
                        <div className="row">
                          <div>
                            <div className="modal-footer-btn download-file">
                              <Link
                                to="#"
                                className="btn btn-submit fs-13 fw-medium"
                              >
                                Download Sample File
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3 image-upload-down">
                          <label className="form-label"> Upload CSV File</label>
                          <div className="image-upload download">
                            <input type="file" />
                            <div className="image-uploads">
                              <img src={downloadImg} alt="img" />
                              <h4>
                                Drag and drop a <span>file to upload</span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Order Tax<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Discount<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Shipping<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="mb-3 summer-description-box transfer">
                        <label className="form-label">Description</label>
                        <div id="summernote3"></div>
                        <p>Maximum 60 Characters</p>
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
        </div>
      </div>
      {/* /Import Purchase */}
      <DeleteModal />
    </>
  );
};

export default PurchasesList;
