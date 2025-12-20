import { stockTransferData } from "../../core/json/stock-transfer-data";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import DeleteModal from "../../components/delete-modal";
import CommonSelect from "../../components/select/common-select";
import TableTopHead from "../../components/table-top-head";
import CommonFooter from "../../components/footer/commonFooter";
import { downloadImg, stockImg02 } from "../../utils/imagepath";
import  { useState } from "react";
import { Link } from "react-router";

const StockTransfer = () => {
  const [listData, _setListData] = useState<any[]>(stockTransferData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedWarehouseFrom, setSelectedWarehouseFrom] = useState("");
  const [selectedWarehouseTo, setSelectedWarehouseTo] = useState("");
  const [selectedImportFrom, setSelectedImportFrom] = useState("");
  const [selectedImportTo, setSelectedImportTo] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const warehouseFromOptions = [
    { label: "Select", value: "" },
    { label: "Lobar Handy", value: "lobar" },
    { label: "Quaint Warehouse", value: "quaint" },
  ];

  const warehouseToOptions = [
    { label: "Select", value: "" },
    { label: "Selosy", value: "selosy" },
    { label: "Logerro", value: "logerro" },
  ];

  const importFromOptions = [
    { label: "select", value: "" },
    { label: "Lavish Warehouse", value: "lavish" },
    { label: "Lobar Handy", value: "lobar" },
    { label: "Quaint Warehouse", value: "quaint" },
  ];

  const importToOptions = [
    { label: "Select", value: "" },
    { label: "North Zone Warehouse", value: "north" },
    { label: "Nova Storage Hub", value: "nova" },
    { label: "Cool Warehouse", value: "cool" },
  ];

  const statusOptions = [
    { label: "Select", value: "" },
    { label: "Sent", value: "sent" },
    { label: "Pending", value: "pending" },
  ];

  const columns = [
    { header: "From Warehouse", field: "fromWarehouse", key: "fromWarehouse" },
    { header: "To Warehouse", field: "toWarehouse", key: "toWarehouse" },
    { header: "No of Products", field: "noOfProducts", key: "noOfProducts" },
    {
      header: "Quantity Transfered",
      field: "quantityTransferred",
      key: "quantityTransferred",
    },
    { header: "Ref Number", field: "refNumber", key: "refNumber" },
    { header: "Date", field: "date", key: "date" },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: () => (
        <div className="edit-delete-action d-flex align-items-center justify-content-center">
          <Link
            className="me-2 p-2 d-flex align-items-center justify-content-between border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-stock-transfer"
          >
            <i className="feather icon-edit" />
          </Link>
          <Link
            className="p-2 d-flex align-items-center justify-content-between border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
          >
            <i className="feather icon-trash-2" />
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
      {" "}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Stock Transfer</h4>
                <h6>Manage your stock transfer</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-stock-transfer"
              >
                <i className="ti ti-circle-plus me-1" />
                Add New
              </Link>
            </div>
            <div className="page-btn import">
              <Link
                to="#"
                className="btn btn-secondary color"
                data-bs-toggle="modal"
                data-bs-target="#view-notes"
              >
                <i className="feather icon-download me-1" />
                Import Transfer
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card">
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
                    From Warehouse
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Lavish Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Quaint Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Traditional Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Cool Warehouse
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    To Warehouse
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        North Zone Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Nova Storage Hub
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Cool Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Retail Supply Hub
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
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      {/* Add Stock */}
      <div className="modal fade" id="add-stock-transfer">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Transfer</h4>
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
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse From{" "}
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={warehouseFromOptions}
                        value={selectedWarehouseFrom}
                        onChange={(e) => setSelectedWarehouseFrom(e.value)}
                        placeholder="Warehouse From"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse To <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={warehouseToOptions}
                        value={selectedWarehouseTo}
                        onChange={(e) => setSelectedWarehouseTo(e.value)}
                        placeholder="Warehouse To"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Reference Number{" "}
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="search-form mb-3">
                      <label className="form-label">
                        Product<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Product"
                        />
                        <i className="feather icon-search feather-search" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="search-form mb-0">
                      <label className="form-label">
                        Notes <span className="text-danger ms-1">*</span>
                      </label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Stock */}
      {/* Edit Stock */}
      <div className="modal fade" id="edit-stock-transfer">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit Transfer</h4>
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
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse From
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={warehouseFromOptions}
                        value={selectedWarehouseFrom}
                        onChange={(e) => setSelectedWarehouseFrom(e.value)}
                        placeholder="Warehouse From"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse To<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={warehouseToOptions}
                        value={selectedWarehouseTo}
                        onChange={(e) => setSelectedWarehouseTo(e.value)}
                        placeholder="Warehouse To"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Reference No<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={32434545}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 search-form">
                      <label className="form-label">
                        Product<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Nike Jordan"
                        />
                        <i className="feather icon-search feather-search" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="modal-body-table">
                      <div className="table-responsive">
                        <table className="table  datanew">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>SKU</th>
                              <th>Category</th>
                              <th>Qty</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
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
                              <td>PT002</td>
                              <td>Nike</td>
                              <td>
                                <div className="product-quantity bg-gray-transparent border-0">
                                  <span className="quantity-btn">
                                    <i className="feather icon-minus-circle feather-search" />
                                  </span>
                                  <input
                                    type="text"
                                    className="quntity-input bg-transparent"
                                    defaultValue={2}
                                  />
                                  <span className="quantity-btn">
                                    +
                                    <i className="feather icon-plus-circle plus-circle" />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="edit-delete-action d-flex align-items-center justify-content-center">
                                  <Link
                                    className="p-2 d-flex align-items-center justify-content-center border rounded"
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 search-form mb-0">
                      <label className="form-label">
                        Notes<span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        defaultValue={
                          "The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. "
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Stock */}
      {/* Import Transfer */}
      <div className="modal fade" id="view-notes">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Import Transfer</h4>
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
                        From<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={importFromOptions}
                        value={selectedImportFrom}
                        onChange={(e) => setSelectedImportFrom(e.value)}
                        placeholder="From"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        To<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={importToOptions}
                        value={selectedImportTo}
                        onChange={(e) => setSelectedImportTo(e.value)}
                        placeholder="To"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Status<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={statusOptions}
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.value)}
                        placeholder="Status"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-12">
                    <div className="row">
                      <div>
                        <div className="modal-footer-btn download-file">
                          <Link
                            to="#"
                            className="btn btn-submit"
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
                  <div className="col-lg-12 col-sm-6 col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Shipping<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
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
      {/* /Import Transfer */}
      <DeleteModal />
    </>
  );
};

export default StockTransfer;
