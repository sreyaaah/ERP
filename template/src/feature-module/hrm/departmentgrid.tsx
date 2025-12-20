import { useState } from "react";
import { Link } from "react-router-dom";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import { all_routes } from "../../routes/all_routes";
import {
  avatar15,
  avatar16,
  avatar18,
  avatar_17,
  user01,
  user02,
  user03,
  user04,
  user05,
  user06,
  user07,
  user08,
  user09,
  user11,
  user12,
  user13,
} from "../../utils/imagepath";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import { Editor } from "primereact/editor";

const DepartmentGrid = () => {
  const [selectedHOD, setSelectedHOD] = useState(null);
  const [text, setText] = useState("");


  const route = all_routes;
  const HOD = [
    { label: "Mitchum Daniel", value: "1" },
    { label: "Susan Lopez", value: "2" },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Departments</h4>
                <h6>Manage your departments</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                <div className="d-flex me-2 pe-2 border-end">
                  <Link to={route.departmentlist} className="btn-list me-2">
                    <i className="feather icon-list feather-user" />
                  </Link>
                  <Link
                    to={route.departmentgrid}
                    className="btn-grid active bg-primary me-2"
                  >
                    <i className="feather icon-grid feather-user text-white" />
                  </Link>
                </div>
              </li>
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-department"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Department
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div className="search-set mb-0">
                  <div className="search-input">
                    <Link to="#" className="btn btn-searchset">
                      <i className="feather icon-search" />
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
          <div className="employee-grid-widget">
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Inventory
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user01} alt="Img" />
                      </div>
                      <h4>Mitchum Daniel</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 08</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Human Resources
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user02} alt="Img" />
                      </div>
                      <h4>Susan Lopez</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 10</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Admin
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user03} alt="Img" />
                      </div>
                      <h4>Robert Grossman</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 05</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Sales
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user06} alt="Img" />
                      </div>
                      <h4>Janet Hembre</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 10</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Marketing
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user04} alt="Img" />
                      </div>
                      <h4>Russell Belle</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 06</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar_17}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Quality Assurance
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user05} alt="Img" />
                      </div>
                      <h4>Edward Muniz</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 06</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Finance
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user07} alt="Img" />
                      </div>
                      <h4>Susan Moore</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 08</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Maintenance
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user08} alt="Img" />
                      </div>
                      <h4>Lance Jackson</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 07</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        R&amp;D
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user11} alt="Img" />
                      </div>
                      <h4>Travis Marcotte</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 10</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Content Creation
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user12} alt="Img" />
                      </div>
                      <h4>Malinda Ruiz</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 08</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        Social Media
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user09} alt="Img" />
                      </div>
                      <h4>David Slater</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 06</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h5 className="d-inline-flex align-items-center">
                        <i className="ti ti-point-filled text-success fs-20" />
                        IT Support
                      </h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="action-icon border-0"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="feather-user feather icon-more-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end ">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
                            >
                              <i className="feather icon-edit info-img me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-modal"
                            >
                              <i className="feather icon-trash-2 info-img me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center mb-4">
                      <div className="avatar avatar-lg mb-2">
                        <img src={user13} alt="Img" />
                      </div>
                      <h4>Michele Kim</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Total Members: 04</p>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar15}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar16}
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar18}
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
                          to="#"
                        >
                          <img src={avatar_17} alt="img" />
                          <span className="position-absolute top-50 start-50 translate-middle text-center">
                            +2
                          </span>
                        </Link>
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

      {/* Add Department */}
      <div className="modal fade" id="add-department">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header custom-modal-header">
                  <div className="page-title">
                    <h4>Add Department</h4>
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
                            Department <span className="text-danger"> *</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            HOD <span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={HOD}
                            value={selectedHOD}
                            onChange={(e) => setSelectedHOD(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3 summer-description-box">
                          <label className="form-label">Description</label>
                          <Editor
                            value={text}
                            onTextChange={(e: any) => setText(e.htmlValue)}
                            style={{ height: "200px" }}
                          />
                        </div>
                      </div>
                      <div className="input-blocks m-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user5"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user5" className="checktoggle">
                            {" "}
                          </label>
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
                    <Link
                      to="#"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Save Changes
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Department */}
      {/* Edit Department */}
      <div className="modal fade" id="edit-department">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Department</h4>
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
                            Department <span className="text-danger"> *</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="UI/UX"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            HOD <span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={HOD}
                            value={selectedHOD}
                            onChange={(e) => setSelectedHOD(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3 summer-description-box">
                          <label className="form-label">Description</label>
                          <Editor
                            value={text}
                            onTextChange={(e: any) => setText(e.htmlValue)}
                            style={{ height: "200px" }}
                          />
                        </div>
                      </div>
                      <div className="input-blocks m-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user3"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="user3" className="checktoggle">
                            {" "}
                          </label>
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
                    <Link
                      to="#"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Save Changes
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Department */}
      {/* delete modal */}
      <DeleteModal />
      {/* /delete modal */}
    </div>
  );
};

export default DepartmentGrid;
