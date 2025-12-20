import { customersData } from "../../core/json/customers-data";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import DeleteModal from "../../components/delete-modal";
import CommonSelect from "../../components/select/common-select";
import { user41 } from "../../utils/imagepath";
import { useState } from "react";
import { Link } from "react-router";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

const Customers = () => {
  const [listData, _setListData] = useState<any[]>(customersData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const columns = [
    { header: "Code", field: "code", key: "code" },
    {
      header: "Customer",
      field: "customer",
      key: "customer",
      body: (data: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={data.avatar} alt="product" />
          </Link>
          <Link to="#">{data.customer}</Link>
        </div>
      ),
    },
    { header: "Email", field: "email", key: "email" },
    { header: "Phone", field: "phone", key: "phone" },
    { header: "Country", field: "country", key: "country" },
    {
      header: "Status",
      field: "status",
      key: "status",
      body: (data: any) => (
        <span
          className={`d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-${
            data.status === "Active" ? "success" : "danger"
          } fs-10`}
        >
          <i className="ti ti-point-filled me-1 fs-11"></i>
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
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
          >
            <i className="feather icon-eye"></i>
          </Link>
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-customer"
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
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

  return (
    <>
      {" "}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Customers</h4>
                <h6>Manage your customers</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary text-white"
                data-bs-toggle="modal"
                data-bs-target="#add-customer"
              >
                <i className="ti ti-circle-plus me-1" />
                Add Customer
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
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0 text-gray-9">
            2014 - 2025 © DreamsPOS. All Right Reserved
          </p>
          <p>
            Designed &amp; Developed by{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* Add Customer */}
      <div className="modal fade" id="add-customer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Customer</h4>
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
                <div className="new-employee-field">
                  <div className="profile-pic-upload">
                    <div className="profile-pic">
                      <span>
                        <i className="feather icon-plus-circle plus-down-add" />{" "}
                        Add Image
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="image-upload mb-0">
                        <input type="file" />
                        <div className="image-uploads">
                          <h4>Upload Image</h4>
                        </div>
                      </div>
                      <p className="mt-2">JPEG, PNG up to 2 MB</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Phone<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="tel" className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Address<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      City<span className="text-danger ms-1">*</span>
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
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      State<span className="text-danger ms-1">*</span>
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
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Country<span className="text-danger ms-1">*</span>
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
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Postal Code<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-lg-12">
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label">Status</span>
                      <input
                        type="checkbox"
                        id="user1"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="user1" className="checktoggle">
                        {" "}
                      </label>
                    </div>
                  </div>
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
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Customer */}
      {/* Edit Customer */}
      <div className="modal fade" id="edit-customer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Customer</h4>
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
                    <div className="new-employee-field">
                      <div className="profile-pic-upload image-field">
                        <div className="profile-pic p-2">
                          <img
                            src={user41}
                            className="object-fit-cover h-100 rounded-1"
                            alt="user"
                          />
                          <button type="button" className="close rounded-1">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="mb-3">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Change Image</h4>
                            </div>
                          </div>
                          <p className="mt-2">JPEG, PNG up to 2 MB</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          First Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Carl"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Last Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Evans"
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Email<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          defaultValue="carlevans@example.com"
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Phone<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          defaultValue={+12163547758}
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Address<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="87 Griffin Street"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          City<span className="text-danger ms-1">*</span>
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
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          State<span className="text-danger ms-1">*</span>
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
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Country<span className="text-danger ms-1">*</span>
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
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Postal Code<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={90001}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user2"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user2" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
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
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Customer */}
      <DeleteModal />
    </>
  );
};

export default Customers;
