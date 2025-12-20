
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import PrimeDataTable from "../../../components/data-table";
import { account_list } from "../../../core/json/accountList";
import { account_type } from "../../../core/json/accountType";
import CommonFooter from "../../../components/footer/commonFooter";
import { Link } from "react-router-dom";
import AccountListModal from "./accountListModal";
import TableTopHead from "../../../components/table-top-head";
import DeleteModal from "../../../components/delete-modal";
import SearchFromApi from "../../../components/data-table/search";
import { useState } from "react";

const Accountlist = () => {
  const dataSource = account_list;
  const dataSource2 = account_type;
  const columns = [
    {
      header: "Account Holder Name",
      field: "accountholder",
    },
    {
      header: "Account No",
      field: "accountno",
    },
    {
      header: "Type",
      field: "type",
    },
    {
      header: "Opening Balance",
      field: "balance",
    },
    {
      header: "Notes",
      field: "note",
    },
    {
      header: "Status",
      field: "status",
      body: (text: any) => (
        <div>
          {text?.status === "Active" && (
            <span className="badge table-badge bg-success fw-medium fs-10">
              {text?.status}
            </span>
          )}
          {text?.status === "Closed" && (
            <span className="badge table-badge bg-danger fw-medium fs-10">
              {text?.status}
            </span>
          )}
        </div>
      ),
      sortable: false,
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
  const column = [
    {
      header: "Type",
      field: "Type",
    },
    {
      header: "Created Date",
      field: "Created_Date",
    },
    {
      header: "Status",
      field: "Status",
      body: (text: any) => (
        <div>
          {text?.Status === "Active" && (
            <span className="badge table-badge bg-success fw-medium fs-10">
              {text?.Status}
            </span>
          )}
          {text?.Status === "Inactive" && (
            <span className="badge table-badge bg-danger fw-medium fs-10">
              {text?.Status}
            </span>
          )}
        </div>
      ),
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
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
            <ul
              className="nav nav-pills low-stock-tab d-flex me-2 mb-0"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Accounts List
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Account Type
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="page-header">
                <div className="add-item d-flex">
                  <div className="page-title">
                    <h4 className="fw-bold">Accounts List</h4>
                    <h6>Manage your Accounts List</h6>
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
                    <i className="ti ti-circle-plus me-1"></i>
                    Add Account List
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
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="page-header">
                <div className="add-item d-flex">
                  <div className="page-title">
                    <h4 className="fw-bold">Accounts Type</h4>
                    <h6>Manage your Accounts Type</h6>
                  </div>
                </div>
                <ul className="table-top-head">
                  <RefreshIcon />
                  <CollapesIcon />
                </ul>
                <div className="page-btn">
                  <Link
                    to="#"
                    className="btn btn-primary text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#add-units2"
                  >
                    <i className="feather icon-plus-circle me-2" />
                    Add Account Type
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
                <div className="card-body">
                  <div className="table-responsive">
                    <PrimeDataTable
                      column={column}
                      data={dataSource2}
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
          </div>
        </div>
        <CommonFooter />
      </div>
      <AccountListModal />
      <DeleteModal />
    </>
  );
};

export default Accountlist;
