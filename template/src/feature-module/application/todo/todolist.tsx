import { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../routes/all_routes";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonDateRangePicker from "../../../components/date-range-picker/common-date-range-picker";
import TodoModal from "../../../core/modals/todoModal";
import { avatar01, avatar12, avatar14, avatar15, avatar16, avatar18, avatar19, avatar20, avatar21, avatar22, avatar23, avatar24, avatar25, avatar29, avatar_02, avatar_03, avatar_04, avatar_05, avatar_06, avatar_07, avatar_08, avatar_09, avatar_10, avatar_11, avatar_13, avatar_17 } from "../../../utils/imagepath";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";

const TodoList = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const route = all_routes;

  return (
    <>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Todo</h4>
                  <h6>Manage Your Todo</h6>
                </div>
              </div>
              <ul className="table-top-head">
                <li>
                  <Link to={route.todo} className="todo-grid-view">
                    <i className="feather icon-grid feather-grid" />
                  </Link>
                </li>
                <li>
                  <Link to={route.todolist} className="todo-list-view active">
                    <i className="feather icon-list feather-list" />
                  </Link>
                </li>
                <RefreshIcon />
                <CollapesIcon />
              </ul>
              <div className="page-btn">
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add_todo"
                >
                  <i className="ti ti-circle-plus me-1"></i>
                  Create New
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <h5 className="d-flex align-items-center">
                  Todo Lists{" "}
                  <span className="badge bg-soft-pink ms-2">200 Employees</span>
                </h5>
                <div className="d-flex align-items-center flex-wrap row-gap-3">
                  <div className="me-3">
                    <div className="input-icon-end position-relative">
                      <CommonDateRangePicker/>
                      <span className="input-icon-addon">
                        <i className="ti ti-chevron-down" />
                      </span>
                    </div>
                  </div>
                  <div className="input-icon position-relative w-120 me-2">
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                <CommonDatePicker
                            value={date}
                            onChange={setDate}
                            className="w-100"
                          />
                  </div>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Tags
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          All Tags
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Urgent
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          High
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Medium
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Assignee
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Sophie
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Cameron
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Doris
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Rufana
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Select Status
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Completed
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Pending
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Inprogress
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Onhold
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center fs-12"
                      data-bs-toggle="dropdown"
                    >
                      <span className="fs-12 d-inline-flex me-1">
                        Sort By :{" "}
                      </span>
                      Last 7 Days
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Last 7 Days
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Last 1 month
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Last 1 year
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                {/* Student List */}
                <div className="custom-datatable-filter table-responsive">
                  <table className="table datatable">
                    <thead className="thead-light">
                      <tr>
                        <th className="no-sort">
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="select-all"
                            />
                          </div>
                        </th>
                        <th>Company Name</th>
                        <th>Tags</th>
                        <th>Assignee</th>
                        <th>Created On</th>
                        <th>Progress</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th className="no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-danger me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Respond to any pending messages
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-info">Social</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar19}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar29}
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
                          </div>
                        </td>
                        <td>14/01/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 100%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-success rounded"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>14/01/2024</td>
                        <td>
                          <span className="badge badge-soft-success d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star-filled filled" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-purple me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Update calendar and schedule
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-purple">Meetings</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar01}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_02}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_03}
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>21/01/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 15%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-danger rounded"
                              role="progressbar"
                              style={{ width: "15%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>21/01/2024</td>
                        <td>
                          <span className="badge badge-soft-dark d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-purple me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Respond to any pending messages
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-pink">Research</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_04}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_05}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_06}
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>20/02/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 45%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-warning rounded"
                              role="progressbar"
                              style={{ width: "45%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>20/02/2024</td>
                        <td>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Inprogress
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-warning me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Attend team meeting at 10:00 AM
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-skyblue">Web Design</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_05}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_06}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_07}
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>15/03/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 40%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-warning rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>15/03/2024</td>
                        <td>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Inprogress
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-purple me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Check and respond to emails
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-secondary">
                            Reminder
                          </span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_08}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_09}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_10}
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>12/04/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 65%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-purple rounded"
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>12/04/2024</td>
                        <td>
                          <span className="badge badge-soft-dark d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-warning me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Coordinate with department head
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-danger">Internal</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_11}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar12}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar_13}
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>20/05/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 85%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-pink rounded"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>20/05/2024</td>
                        <td>
                          <span className="badge bg-soft-pink d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Onhold
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-success me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Plan tasks for the next day
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-info">Social</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar14}
                                alt="img"
                              />
                            </span>
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
                          </div>
                        </td>
                        <td>06/07/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 100%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-success rounded"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>06/07/2024</td>
                        <td>
                          <span className="badge badge-soft-success d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-success me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Finalize project proposal
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-success">Projects</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
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
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar19}
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>02/09/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 65%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-danger rounded"
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>02/09/2024</td>
                        <td>
                          <span className="badge bg-soft-pink d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Onhold
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-purple me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Submit to supervisor by EOD
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-secondary">
                            Reminder
                          </span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar20}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar21}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar22}
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>15/11/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 75%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-purple rounded"
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>15/11/2024</td>
                        <td>
                          <span className="badge badge-soft-purple d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Inprogress
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-success me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Prepare presentation slides
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-pink">Research</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar23}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar24}
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <img
                                className="border border-white"
                                src={avatar25}
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>10/12/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 90%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-pink rounded"
                              role="progressbar"
                              style={{ width: "90%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>10/12/2024</td>
                        <td>
                          <span className="badge badge-soft-dark d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal"
                              data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /Student List */}
              </div>
            </div>
          </div>
          <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
            <p className="mb-0">2014 - 2025 © SmartHR.</p>
            <p>
              Designed &amp; Developed By{" "}
              <Link to="#" className="text-primary">
                Dreams
              </Link>
            </p>
          </div>
        </div>
        {/* /Page Wrapper */}
      </>

      <TodoModal />

      {/* Delete Modal */}
    <div className="modal fade" id="delete_modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body text-center">
            <span className="avatar avatar-xl bg-transparent-danger text-danger mb-3">
              <i className="ti ti-trash-x fs-36" />
            </span>
            <h4 className="mb-1">Confirm Delete</h4>
            <p className="mb-3">Are you sure you want to delete todo?</p>
            <div className="d-flex justify-content-center">
              <Link
                to="#"
                className="btn btn-secondary me-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <Link to={all_routes.todolist} className="btn btn-primary">
                Yes, Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Delete Modal */}
    </>
  );
};

export default TodoList;
