import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../../components/data-table";
import TableTopHead from "../../../components/table-top-head";
import CommonSelect from "../../../components/select/common-select";
import DeleteModal from "../../../components/delete-modal";
import SearchFromApi from "../../../components/data-table/search";

const Cities = () => {
  const data = [
    {
      CityName: "Los Angles",
      StateName: "California",
      CountryName: "United States",
    },
    {
      CityName: "New York City",
      StateName: "New York",
      CountryName: "United States",
    },
    {
      CityName: "Houston",
      StateName: "Texas",
      CountryName: "United States",
    },
    {
      CityName: "Munich",
      StateName: "Bavaria",
      CountryName: "Germany",
    },
    {
      CityName: "Montreal",
      StateName: "Quebec",
      CountryName: "Canada",
    },
    {
      CityName: "Montreal",
      StateName: "Ontario",
      CountryName: "Canada",
    },
    {
      CityName: "Miami",
      StateName: "Florida",
      CountryName: "United States",
    },
    {
      CityName: "Calgary",
      StateName: "Berlin",
      CountryName: "Germany",
    },
    {
      CityName: "Melbourne",
      StateName: "Victoria",
      CountryName: "Australia",
    },
    {
      CityName: "Johannesburg",
      StateName: "Gauteng",
      CountryName: "Egypt",
    },
  ];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(data.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const columns = [
    {
      header: "CityName",
      field: "CityName",
      className: "text-gray-9",
    },
    {
      header: "StateName",
      field: "StateName",
    },
    {
      header: "CountryName",
      field: "CountryName",
    },

    {
      header: "Status",
      field: "Status",
      body: () => (
        <>
          <span
            className={` badge badge-success d-inline-flex align-items-center badge-xs`}
          >
            <i className="ti ti-point-filled me-1" />
            Active
          </span>
        </>
      ),
    },

    {
      header: "",
      field: "action",
      className: "action-table-data",
      body: () => (
        <div className="action-icon d-inline-flex">
          <Link
            to="#"
            className="p-2 d-flex align-items-center border rounded me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit-city"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="p-2 d-flex align-items-center border rounded"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
    },
  ];
  const option = [
    { value: "1", label: "California" },
    { value: "2", label: "New York" },
    { value: "2", label: "Texas" },
  ];
  const option2 = [
    { value: "1", label: "United States" },
    { value: "2", label: "Canada" },
    { value: "3", label: "United Kingdom" },
  ];
  const [selectedState, setSelectedState] = React.useState(option[0]);
  const [selectedCountry, setSelectedCountry] = React.useState(option2[0]);
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Cities</h4>
                <h6>Manage Your Cities</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-city"
              >
                <i className="feather icon-plus-circle me-1" />
                Add City
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
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        New Joiners
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
            <div className="card-body pb-0">
              <div className=" table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={data}
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
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* Add cities */}
      <div className="modal fade" id="add-city">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add City</h4>
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
                  <div className="mb-3">
                    <label className="form-label">
                      City Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      State Name <span className="text-danger">*</span>
                    </label>

                    <CommonSelect
                      className="w-100"
                      options={option}
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.value)}
                      placeholder="Choose"
                      filter={false}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Country Name <span className="text-danger">*</span>
                    </label>

                    <CommonSelect
                      className="w-100"
                      options={option2}
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.value)}
                      placeholder="Choose"
                      filter={false}
                    />
                  </div>
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
                  Add City
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add cities */}
      {/* Edit cities */}
      <div className="modal fade" id="edit-city">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit City</h4>
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
                  <div className="mb-3">
                    <label className="form-label">
                      City Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Los Angels"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      State Name <span className="text-danger">*</span>
                    </label>
                    <CommonSelect
                      className="w-100"
                      options={option}
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.value)}
                      placeholder="Choose"
                      filter={false}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Country Name <span className="text-danger">*</span>
                    </label>
                    <CommonSelect
                      className="w-100"
                      options={option2}
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.value)}
                      placeholder="Choose"
                      filter={false}
                    />
                  </div>
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
            </form>
          </div>
        </div>
      </div>
      {/* /Edit cities */}
      {/* Delete Modal */}
      <DeleteModal />
      {/* /Delete Modal */}
    </>
  );
};

export default Cities;
