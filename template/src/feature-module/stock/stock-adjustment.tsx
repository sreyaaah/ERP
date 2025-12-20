import { stockData } from "../../core/json/stock-data";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import DeleteModal from "../../components/delete-modal";
import CommonSelect from "../../components/select/common-select";
import TableTopHead from "../../components/table-top-head";
import CommonFooter from "../../components/footer/commonFooter";
import { stockImg02 } from "../../utils/imagepath";
import { useState } from "react";
import { Link } from "react-router";

const StockAdjustment = () => {
  const [listData, _setListData] = useState<any[]>(stockData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const warehouseOptions = [
    { label: "Lavish Warehouse", value: "lavish" },
    { label: "Quaint Warehouse", value: "quaint" },
    { label: "Traditional Warehouse", value: "traditional" },
    { label: "Cool Warehouse", value: "cool" },
  ];

  const storeOptions = [
    { label: "Electro Mart", value: "electro" },
    { label: "Quantum Gadgets", value: "quantum" },
    { label: "Prime Bazaar", value: "prime" },
    { label: "Gadget World", value: "gadget" },
  ];

  const personOptions = [
    { label: "James Kirwin", value: "james" },
    { label: "Francis Chang", value: "francis" },
    { label: "Steven", value: "steven" },
    { label: "Gravely", value: "gravely" },
  ];
  const typeOptions = [
    { label: "Addition", value: "Addition" },
    { label: "Addition", value: "Addition" },
    { label: "Addition", value: "Addition" },
  ];

  const columns = [
    { header: "Warehouse", field: "warehouse", key: "warehouse" },
    { header: "Store", field: "store", key: "store" },
    {
      header: "Product",
      field: "product",
      key: "product",
      body: (data: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={data?.product?.image} alt="product" />
          </Link>
          <Link to="#">Lenovo IdeaPad 3</Link>
        </div>
      ),
    },
    { header: "Date", field: "date", key: "date" },
    {
      header: "Person",
      field: "person",
      key: "person",
      body: (data: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={data?.person?.image} alt="product" />
          </Link>
          <Link to="#">James Kirwin</Link>
        </div>
      ),
    },
    { header: "Qty", field: "qty", key: "qty" },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (_row: any) => (
        <div className="d-flex align-items-center edit-delete-action">
          <Link
            className="me-2 border rounded d-flex align-items-center p-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#view-notes"
          >
            <i className="feather icon-file-text" />
          </Link>
          <Link
            className="me-2 border rounded d-flex align-items-center p-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-stock-adjustment"
          >
            <i  className="feather icon-edit" />
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="p-2 border rounded d-flex align-items-center"
            to="#"
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
                <h4>Stock Adjustment</h4>
                <h6>Manage your stock adjustment</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-stock-adjustment"
              >
                <i className="ti ti-circle-plus me-1" />
                Add Adjustment
              </Link>
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
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Warehouse
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Lavish Warehouse
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Quaint Warehouse{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Cool Warehouse
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
      {/* Add Adjustment */}
      <div className="modal fade" id="add-stock-adjustment">
        <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Adjustment</h4>
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
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={warehouseOptions}
                        value={selectedWarehouse}
                        onChange={(e) => setSelectedWarehouse(e.value)}
                        placeholder="Select Warehouse"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Reference Number
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Store<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={storeOptions}
                        value={selectedStore}
                        onChange={(e) => setSelectedStore(e.value)}
                        placeholder="Select Store"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Responsible Person
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={personOptions}
                        value={selectedPerson}
                        onChange={(e) => setSelectedPerson(e.value)}
                        placeholder="Select Person"
                        filter={false}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div>
                    <label className="form-label">
                      Notes<span className="text-danger ms-1">*</span>
                    </label>
                    <textarea className="form-control" defaultValue={""} />
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
                  Create Adjustment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Adjustment */}
      {/* Edit Adjustment */}
      <div className="modal fade" id="edit-stock-adjustment">
        <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit Adjustment</h4>
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
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={warehouseOptions}
                        value={selectedWarehouse}
                        onChange={(e) => setSelectedWarehouse(e.value)}
                        placeholder="Select Warehouse"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Reference Number
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="PT003"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="p-3 border bg-light rounded mb-3">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>SKU</th>
                              <th>Category</th>
                              <th>Qty</th>
                              <th>Type</th>
                              <th />
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
                                <div className="product-quantity border-0 bg-gray-transparent">
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
                                    <i
                                      
                                      className="feather icon-plus-circle plus-circle"
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <CommonSelect
                                  className="w-100"
                                  options={typeOptions}
                                  value={selectedType}
                                  onChange={(e) => setSelectedType(e.value)}
                                  placeholder="Select"
                                  filter={false}
                                />
                              </td>
                              <td>
                                <div className="edit-delete-action d-flex align-items-center">
                                  <Link
                                    className="p-2 border rounded d-flex align-items-center"
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
                    <div className="mb-3">
                      <label className="form-label">
                        Store<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={storeOptions}
                        value={selectedStore}
                        onChange={(e) => setSelectedStore(e.value)}
                        placeholder="Select Store"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Responsible Person
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={personOptions}
                        value={selectedPerson}
                        onChange={(e) => setSelectedPerson(e.value)}
                        placeholder="Select Person"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
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
      {/* /Edit Adjustment */}
      {/* View Notes */}
      <div className="modal fade" id="view-notes">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Notes</h4>
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
              <p>
                The Jordan brand is owned by Nike (owned by the Knight family),
                as, at the time, the company was building its strategy to work
                with athletes to launch shows that could inspire
                consumers.Although Jordan preferred Converse and Adidas, they
                simply could not match the offer Nike made. Jordan also signed
                with Nike because he loved the way they wanted to market him
                with the banned colored shoes. Nike promised to cover the fine
                Jordan would receive from the NBA.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /View Notes */}
      <DeleteModal />
    </>
  );
};

export default StockAdjustment;
