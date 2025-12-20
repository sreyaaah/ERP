import { PlusCircle } from "react-feather";

import { Link } from "react-router-dom";
import { employeeListData } from "../../core/json/employeeListData.js";
import PrimeDataTable from "../../components/data-table";
import { all_routes } from "../../routes/all_routes.js";
import { useState } from "react";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons.js";
import CollapesIcon from "../../components/tooltip-content/collapes.js";
import RefreshIcon from "../../components/tooltip-content/refresh.js";
import SearchFromApi from "../../components/data-table/search";
import ImageWithBasePath from "../../components/image-with-base-path/index.js";

const EmployeesList = () => {
  const dataSource = employeeListData;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
    const [_searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
    const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
    
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const columns = [
    {
      header: "ID",
      field: "ID",
      sortable: true,
      key: "ID",
      body: (rowData: any) => (
        <Link to={all_routes.employeedetails}>{rowData.ID}</Link>
      ),
    },
    {
      header: "Employee",
      field: "Employee",
      sortable: true,
      key: "Employee",
      body: (rowData: any) => (
        <div className="d-flex align-items-center">
          <Link to={all_routes.employeedetails} className="avatar avatar-md">
            <ImageWithBasePath
              src={`assets/img/users/${rowData.img}`}
              className="img-fluid"
              alt="img"
            />
          </Link>
          <div className="ms-2">
            <p className="text-dark mb-0">
              <Link to={all_routes.employeedetails}>{rowData.Employee}</Link>
            </p>
          </div>
        </div>
      ),
    },
    {
      header: "Designation",
      field: "Designation",
      sortable: true,
      key: "Designation",
    },
    {
      header: "Email",
      field: "Email",
      sortable: true,
      key: "Email",
    },
    {
      header: "Phone",
      field: "Phone",
      sortable: true,
      key: "Phone",
    },
    {
      header: "Shift",
      field: "Shift",
      sortable: true,
      key: "Shift",
    },
    {
      header: "Status",
      field: "Status",
      sortable: true,
      key: "Status",
      body: (rowData: any) => (
        <span
          className={`badge  ${
            rowData.Status === "Active" ? "badge-success" : "badge-danger"
          } d-inline-flex align-items-center badge-xs`}
        >
          <i className="ti ti-point-filled me-1" />
          {rowData.Status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      sortable: false,
      key: "actions",
      body: () => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 d-flex align-items-center border rounded p-2"
            to={all_routes.employeedetails}
          >
            <i data-feather="eye" className="feather-eye" />
          </Link>
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to={all_routes.editemployee}
          >
            <i data-feather="edit" className="feather-edit" />
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="p-2 d-flex align-items-center border rounded"
            to="#"
          >
            <i data-feather="trash-2" className="feather-trash-2" />
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Employees</h4>
              <h6>Manage your employees</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <li>
              <div className="d-flex me-2 pe-2 border-end">
                <Link
                  to={all_routes.employeelist}
                  className="btn-list active  bg-primary me-2"
                >
                  <i data-feather="list" className="feather-list text-white" />
                </Link>
                <Link to={all_routes.employeegrid} className="btn-grid me-2">
                  <i data-feather="grid" className="feather-grid " />
                </Link>
              </div>
            </li>
            <TooltipIcons />
            <RefreshIcon />
            <CollapesIcon />
          </ul>
          <div className="page-btn">
            <Link to={all_routes.addemployee} className="btn btn-primary">
              <PlusCircle data-feather="plus-circle" className=" me-2" />
              Add Employee
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card bg-purple border-0">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-1 text-white">Total Employee</p>
                  <h4 className="text-white">1007</h4>
                </div>
                <div>
                  <span className="avatar avatar-lg bg-purple-900">
                    <i className="ti ti-users-group" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-teal border-0">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-1 text-white">Active</p>
                  <h4 className="text-white">1007</h4>
                </div>
                <div>
                  <span className="avatar avatar-lg bg-teal-900">
                    <i className="ti ti-user-star" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-secondary border-0">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-1 text-white">Inactive</p>
                  <h4 className="text-white">1007</h4>
                </div>
                <div>
                  <span className="avatar avatar-lg bg-secondary-900">
                    <i className="ti ti-user-exclamation" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-info border-0">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-1 text-white">New Joiners</p>
                  <h4 className="text-white">67</h4>
                </div>
                <div>
                  <span className="avatar avatar-lg bg-info-900">
                    <i className="ti ti-user-check" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /product list */}
        <div className="card table-list-card employee-table">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3 ">
            <div className="search-set">
                <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
            </div>
            <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Select Employees
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-3">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Anthony Lewis
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Brian Villalobos
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Harvey Smith
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Stephan Peralt
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
                  Designation
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-3">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      System Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Designer
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Tech Lead
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Database administrator
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
                  Select Status
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
            <div className="custom-datatable-filter table-responsive">
              <PrimeDataTable
                column={columns}
                data={dataSource}
                rows={rows}
                setRows={setRows}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalRecords={dataSource.length}
                searchQuery={_searchQuery}
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
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                  Delete Employee
                </h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete employee?
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
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
                    className="btn btn-submit fs-13 fw-medium p-2 px-3"
                  >
                    Yes Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;
