
import { useState } from "react";
import { Link } from "react-router";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import { warehouseData } from "../../core/json/warehouse-data";

const Warehouse = () => {
  const [listData, _setListData] = useState<any[]>(warehouseData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedContactPerson, setSelectedContactPerson] = useState("");
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const cityOptions = [
    { label: "Select", value: "" },
    { label: "Los Angles", value: "los-angles" },
    { label: "New York City", value: "new-york-city" },
    { label: "Houston", value: "houston" },
  ];

  const stateOptions = [
    { label: "Select", value: "" },
    { label: "California", value: "california" },
    { label: "New York", value: "new-york" },
    { label: "Texas", value: "texas" },
  ];

  const countryOptions = [
    { label: "Select", value: "" },
    { label: "United States", value: "united-states" },
    { label: "Canada", value: "canada" },
    { label: "Germany", value: "germany" },
  ];
  const contactPersonOptions = [
    { label: "Select", value: "" },
    { label: "Steven", value: "steven" },
    { label: "Gravely", value: "gravely" },
  ];
  const columns = [
    { header: "Warehouse", field: "warehouse", key: "warehouse" },
    {
      header: "Contact Person",
      field: "contactPerson",
      key: "contactPerson",
      body: (data: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <img src={data.avatar} className="img-fluid rounded-2" alt="img" />
          </Link>
          <div className="ms-2">
            <p className="mb-0">
              <Link to="#" className="text-default">
                {data.contactPerson}
              </Link>
            </p>
          </div>
        </div>
      ),
    },
    { header: "Phone", field: "phone", key: "phone" },
    { header: "Total Products", field: "totalProducts", key: "totalProducts" },
    { header: "Stock", field: "stock", key: "stock" },
    { header: "Qty", field: "qty", key: "qty" },
    { header: "Created On", field: "createdOn", key: "createdOn" },
    {
      header: "Status",
      field: "status",
      key: "status",
      body: (data: any) => (
        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
          <i className="ti ti-point-filled me-1"></i>
          {data.status}
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
            <i  className="feather icon-eye"></i>
          </Link>
          <Link
            className="me-2 p-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-warehouse"
          >
            <i  className="feather icon-edit"></i>
          </Link>
          <Link className="p-2" to="#"  data-bs-toggle="modal" data-bs-target="#delete-modal">
            <i  className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Warehouses</h4>
                <h6>Manage your warehouses</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-warehouse"
              >
                <i className="ti ti-circle-plus me-1" />
                Add Warehouse
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
                <div className="dropdown">
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
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
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
      {/* Add Warehouse */}
      <div className="modal fade" id="add-warehouse">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Warehouse</h4>
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
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Contact Person <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={contactPersonOptions}
                        value={selectedContactPerson}
                        onChange={(e:any) => setSelectedContactPerson(e.value)}
                        placeholder="Select Contact Person"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Phone(Work)</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-10 col-10">
                    <div className="mb-3">
                      <label className="form-label">
                        City <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={cityOptions}
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        placeholder="Select City"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-10 col-10">
                    <div className="mb-3">
                      <label className="form-label">
                        State <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={stateOptions}
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.value)}
                        placeholder="Select State"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-10 col-10">
                    <div className="mb-3">
                      <label className="form-label">
                        Country <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.value)}
                        placeholder="Select Country"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Postal Code <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="users5"
                          className="check"
                          defaultChecked
                        />
                        <label htmlFor="users5" className="checktoggle mb-0" />
                      </div>
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
                  Add Warehouse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Warehouse */}
      {/* Edit Warehouse */}
      <div className="modal fade" id="edit-warehouse">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit Warehouse</h4>
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
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Warehouse <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Lavish Warehouse"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Contact Person <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={contactPersonOptions}
                        value={selectedContactPerson}
                        onChange={(e) => setSelectedContactPerson(e.value)}
                        placeholder="Select Contact Person"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="electromart@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={+12498345785}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Phone(Work)</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={+17538647943}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="46 Perry Street"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-10 col-10">
                    <div className="mb-3">
                      <label className="form-label">
                        City <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={cityOptions}
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        placeholder="Select City"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-10 col-10">
                    <div className="mb-3">
                      <label className="form-label">
                        State <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={stateOptions}
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.value)}
                        placeholder="Select State"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-10 col-10">
                    <div className="mb-3">
                      <label className="form-label">
                        Country <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className="w-100"
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.value)}
                        placeholder="Select Country"
                        filter={false}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Postal Code <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={10176}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="users6"
                          className="check"
                          defaultChecked
                        />
                        <label htmlFor="users6" className="checktoggle mb-0" />
                      </div>
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Warehouse */}
     <DeleteModal />
    </>
  );
};

export default Warehouse;
