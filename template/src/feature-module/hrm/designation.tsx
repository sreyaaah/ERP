
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import { avatar15, avatar16, avatar18, avatar_17 } from "../../utils/imagepath";
import TableTopHead from "../../components/table-top-head";
import DeleteModal from "../../components/delete-modal";
import { useState } from "react";
import SearchFromApi from "../../components/data-table/search";
import AddDesignation from "../../core/modals/hrm/adddesignation";
import EditDesignation from "../../core/modals/hrm/editdesignation";

const Designation = () => {
  const [rows, setRows] = useState<number>(10);
    const [_searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  
   
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
                <h4>Designation</h4>
                <h6>Manage your designation</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-department"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Designation
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
                    Department
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Sales
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inventory
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Finance
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
              <div className="table-responsive">
                <table className="table datatable">
                  <thead className="thead-light">
                    <tr>
                      <th className="no-sort">
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks" />
                        </label>
                      </th>
                      <th>Designation</th>
                      <th>Department</th>
                      <th>Members</th>
                      <th>Total Members</th>
                      <th>Created On</th>
                      <th>Status</th>
                      <th className="no-sort" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Sales Manager</span>
                      </td>
                      <td>Sales</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>07</td>
                      <td>24 Dec 2024</td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Active
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Inventory Manager</span>
                      </td>
                      <td>Inventory</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>10</td>
                      <td>10 Dec 2024</td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Active
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Accountant</span>
                      </td>
                      <td>Finance</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>05</td>
                      <td>27 Nov 2024</td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Active
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">
                          System Administrator
                        </span>
                      </td>
                      <td>Admin</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>10</td>
                      <td>18 Nov 2024</td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Active
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">HR Manager</span>
                      </td>
                      <td>Human Resources</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>06</td>
                      <td>06 Nov 2024</td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Active
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Marketing Manager</span>
                      </td>
                      <td>Marketing</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>12</td>
                      <td>25 Oct 2024</td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Active
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">QA Analyst</span>
                      </td>
                      <td>Quality Assurance</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>08</td>
                      <td>14 Oct 2024</td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Active
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Research Analyst</span>
                      </td>
                      <td>R&amp;D</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>07</td>
                      <td>03 Oct 2024</td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Active
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Support Engineer</span>
                      </td>
                      <td>IT Support</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>10</td>
                      <td>20 Sep 2024</td>
                      <td>
                        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Active
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                          >
                            <i className="feather icon-trash-2" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <span className="text-gray-900">Content Writer</span>
                      </td>
                      <td>Content Creation</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-between">
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
                      </td>
                      <td>08</td>
                      <td>10 Sep 2024</td>
                      <td>
                        <span className="badge badge-danger d-inline-flex align-items-center badge-xs">
                          <i className="ti ti-point-filled me-1" />
                          Inactive
                        </span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
                          >
                            <i  className="feather icon-edit feather-edit" />
                          </Link>
                          <Link
                            className="p-2"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
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
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <AddDesignation />
      <EditDesignation />

      {/* delete modal */}
      <DeleteModal />
      {/* /delete modal -- */}
    </>
  );
};

export default Designation;
