import { all_routes } from "../../routes/all_routes";

import { Link } from "react-router-dom";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import {
  user02,
  user03,
  user04,
  user06,
  user08,
  user11,
  user17,
  user19,
  user26,
  user28,
  user30,
  user32,
} from "../../utils/imagepath";
const EmployeesGrid = () => {
  return (
    <>
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
                  <Link to={all_routes.employeelist} className="btn-list me-2">
                    <i className="feather icon-list" />
                  </Link>
                  <Link
                    to={all_routes.employeegrid}
                    className="btn-grid active bg-primary me-2"
                  >
                    <i className="feather icon-grid text-white" />
                  </Link>
                </div>
              </li>
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link to={all_routes.addemployee} className="btn btn-primary">
                <i className="feather icon-plus-circle me-2" />
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
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div className="search-set mb-0">
                  <div className="search-input">
                    <Link to="#" className="btn btn-searchset">
                      <i className="feather icon-search feather-search" />
                    </Link>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
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
            </div>
          </div>
          {/* /product list */}
          <div className="employee-grid-widget">
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user32}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS001</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Anthony Lewis
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>HR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user02}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS002</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Brian Villalobos
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        Software Developer
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>UI/IX</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user03}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS003</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Harvey Smith
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>Admin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user06}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS004</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Stephan Peralt
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>Admin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user08}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS005</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Doglas Martini
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>IT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user19}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS006</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>Linda Ray</Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user28}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS007</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Elliot Murray
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>UI/UX</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user17}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS008</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Rebecca Smtih
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>HR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user30}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS009</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Connie Waters
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>Admin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user26}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS010</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Lori Broaddus
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>React JS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user11}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS011</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Trent Frazier
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div>
                        <Link
                          to={all_routes.employeedetails}
                          className="avatar avatar-xl avatar-rounded border p-1 rounded-circle"
                        >
                          <img
                            src={user04}
                            className="img-fluid h-auto w-auto"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to={all_routes.editemployee}
                              className="dropdown-item"
                            >
                              <i className="feather icon-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item confirm-text mb-0"
                            >
                              <i className="me-2 feather icon-trash-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-primary mb-2">EMP ID : POS012</p>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1">
                        <Link to={all_routes.employeedetails}>
                          Norene Valle
                        </Link>
                      </h6>
                      <span className="badge bg-secondary-transparent text-gray-9 fs-10 fw-medium">
                        System Admin
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between bg-light rounded p-3">
                      <div className="text-start">
                        <h6 className="mb-1">Joined</h6>
                        <p>30 May 2023</p>
                      </div>
                      <div className="text-start">
                        <h6 className="mb-1">Department</h6>
                        <p>Admin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      {/* delete modal */}
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
                    type="submit"
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
      {/* /delete modal */}
    </>
  );
};

export default EmployeesGrid;
