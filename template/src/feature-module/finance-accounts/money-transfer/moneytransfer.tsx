import React, { useState } from "react";
import { MoneyTransferData } from "../../../core/json/moneytransferData";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../../components/data-table";
import CommonFooter from "../../../components/footer/commonFooter";
import TableTopHead from "../../../components/table-top-head";
import CommonSelect from "../../../components/select/common-select";
import DeleteModal from "../../../components/delete-modal";
import SearchFromApi from "../../../components/data-table/search";

const Moneytransfer = () => {
  const dataSource = MoneyTransferData;
  const [selectedAccountType, setSelectedAccountType] = React.useState(null);
  const AccountType = [
    { label: "Current Account", value: "1" },
    { label: "Salary Account", value: "2" },
  ];

  const columns = [
    {
      header: "Date",
      field: "Date",
    },
    {
      header: "Reference Number",
      field: "Reference_Number",
    },
    {
      header: "From Account",
      field: "From_Account",
    },
    {
      header: "To Account",
      field: "To_Account",
    },
    {
      header: "Amount",
      field: "Amount",
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      body: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
            >
              <i className="ti ti-edit" />
            </Link>
            <Link
              className="confirm-text p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
            >
              <i className="ti ti-trash" />
            </Link>
          </div>
        </div>
      ),
      sortable: false,
    },
  ];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(dataSource.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Money Transfer</h4>
                <h6>Manage Money Transfer List</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary text-white"
                data-bs-toggle="modal"
                data-bs-target="#add-units"
              >
                <i className="feather icon-plus-circle me-2" />
                Add Money Transfer
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
            <div className="card-body">
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
                />{" "}
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      {/* Add account*/}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Create Account</h4>
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
                  <form>
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Account Type
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={AccountType}
                          value={selectedAccountType}
                          onChange={(e) => setSelectedAccountType(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Account Type
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={AccountType}
                          value={selectedAccountType}
                          onChange={(e) => setSelectedAccountType(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-2 amount position-relative">
                          <label className="form-label">
                            Amount<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={1800}
                          />
                          <i className="ti ti-currency-dollar text-dark" />
                        </div>
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
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Submit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add account*/}

      {/* Edit ac*/}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Account</h4>
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
                  <form>
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Account Type
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={AccountType}
                          value={selectedAccountType}
                          onChange={(e) => setSelectedAccountType(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Account Type
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={AccountType}
                          value={selectedAccountType}
                          onChange={(e) => setSelectedAccountType(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-2 amount position-relative">
                          <label className="form-label">
                            Amount<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={1800}
                          />
                          <i className="ti ti-currency-dollar text-dark" />
                        </div>
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
                  <Link
                    to="#"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit ac */}
      {/* delete modal */}
     <DeleteModal />
    </>
  );
};

export default Moneytransfer;
