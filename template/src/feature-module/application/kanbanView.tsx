import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import dragula from "dragula";
import "dragula/dist/dragula.css";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import CommonSelect from "../../components/select/common-select";
import { avatar01, avatar16, avatar19, avatar29, avatar_02, avatar_03, kanbanArrow } from "../../utils/imagepath";
const KanbanView = () => {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [selectedSort, setSelectedSort] = useState(null);

  const options = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "Ascending", label: "Ascending" },
    { value: "Descending", label: "Descending" },
    { value: "Recently Viewed", label: "Recently Viewed" },
    { value: "Recently Added", label: "Recently Added" },
    { value: "Creation Date", label: "Creation Date" },
  ];

  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);
  const container4Ref = useRef(null);
  const container5Ref = useRef(null);
  const container6Ref = useRef(null);
  const container7Ref = useRef(null);
  const container8Ref = useRef(null);
  const container9Ref = useRef(null);
  const container10Ref = useRef(null);
  const container11Ref = useRef(null);
  const container12Ref = useRef(null);
  const container13Ref = useRef(null);
  const container14Ref = useRef(null);
  const container15Ref = useRef(null);
  const container16Ref = useRef(null);

  useEffect(() => {
    const containers = [
      container1Ref.current,
      container2Ref.current,
      container3Ref.current,
      container4Ref.current,
      container5Ref.current,
      container6Ref.current,
      container7Ref.current,
      container8Ref.current,
      container9Ref.current,
      container10Ref.current,
      container11Ref.current,
      container12Ref.current,
      container13Ref.current,
      container14Ref.current,
      container15Ref.current,
      container16Ref.current,
    ].filter((container) => container !== null);

    const drake = dragula(containers);
    return () => {
      drake.destroy();
    };
  }, []);

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper notes-page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Kanban View</h4>
                <h6>Manage your tasks</h6>
              </div>
            </div>
            <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">
              <div className="form-sort me-2 mb-sm-0 mb-3">
                <i className="feather icon-sliders info-img" />
                <CommonSelect
                  className="img-select"
                  options={options}
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.value)}
                  placeholder="Sort by Date"
                  filter={false}
                />
              </div>
              <ul className="table-top-head">
                <RefreshIcon />
                <CollapesIcon />
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h4>Projects</h4>
              <div className="d-flex align-items-center flex-wrap row-gap-3">
                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                  <span className="avatar avatar-rounded bg-primary fs-12">
                    1+
                  </span>
                </div>
                <div className="d-flex align-items-center me-3">
                  <p className="mb-0 me-3 pe-3 border-end fs-14">
                    Total Task : <span className="text-dark"> 55 </span>
                  </p>
                  <p className="mb-0 me-3 pe-3 border-end fs-14">
                    Pending : <span className="text-dark"> 15 </span>
                  </p>
                  <p className="mb-0 fs-14">
                    Completed : <span className="text-dark"> 40 </span>
                  </p>
                </div>
                <div className="input-icon-start position-relative">
                  <span className="input-icon-addon">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Project"
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                    <h6 className="me-2">Priority</h6>
                    <ul
                      className="nav nav-pills border d-inline-flex p-1 rounded bg-light todo-tabs"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto active"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          All
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          High
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-medium"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Medium
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-low"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Low
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex align-items-center justify-content-lg-end flex-wrap row-gap-3 mb-3">
                    <div className="input-icon w-120 position-relative me-2">
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar text-gray-9" />
                      </span>
                      <CommonDatePicker
                        value={date1}
                        onChange={setDate1}
                        className="w-100"
                      />
                    </div>
                    <div className="input-icon w-120 position-relative me-2">
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar text-gray-9" />
                      </span>
                      <CommonDatePicker
                        value={date2}
                        onChange={setDate2}
                        className="w-100"
                      />
                    </div>
                    <div className="dropdown me-2">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center p-2"
                        data-bs-toggle="dropdown"
                      >
                        Select Status
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Inprogress
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            On-hold
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Completed
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex align-items-center border p-2 rounded">
                      <span className="d-inline-flex me-2">Sort By : </span>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle btn btn-white d-inline-flex align-items-center border-0 bg-transparent p-0 text-dark"
                          data-bs-toggle="dropdown"
                        >
                          Created Date
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Created Date
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Last 7 Days
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Due Date
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                >
                  <div className="d-flex align-items-start overflow-auto project-status pb-4">
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                              <span className="bg-pink rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">New</h5>
                            <span className="badge bg-light rounded-pill">
                              02
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container1Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-154
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-155
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                              <span className="bg-skyblue rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Inprogress</h5>
                            <span className="badge bg-light rounded-pill">
                              13
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container2Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-156
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-157
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-158
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-danger p-1 d-flex rounded-circle me-2">
                              <span className="bg-danger rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">On-hold</h5>
                            <span className="badge bg-light rounded-pill">
                              04
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container3Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-159
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-160
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                              <span className="bg-success rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Completed</h5>
                            <span className="badge bg-light rounded-pill">
                              10
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container4Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-161
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                >
                  <div className="d-flex align-items-start overflow-auto project-status pb-4">
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                              <span className="bg-pink rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">New</h5>
                            <span className="badge bg-light rounded-pill">
                              02
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container5Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-154
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-155
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                              <span className="bg-skyblue rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Inprogress</h5>
                            <span className="badge bg-light rounded-pill">
                              13
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container6Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-156
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-157
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-danger p-1 d-flex rounded-circle me-2">
                              <span className="bg-danger rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">On-hold</h5>
                            <span className="badge bg-light rounded-pill">
                              04
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container7Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-159
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                              <span className="bg-success rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Completed</h5>
                            <span className="badge bg-light rounded-pill">
                              10
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container8Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-161
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-medium"
                  role="tabpanel"
                >
                  <div className="d-flex align-items-start overflow-auto project-status pb-4">
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                              <span className="bg-pink rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">New</h5>
                            <span className="badge bg-light rounded-pill">
                              02
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container9Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-154
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-155
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                              <span className="bg-skyblue rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Inprogress</h5>
                            <span className="badge bg-light rounded-pill">
                              13
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container10Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-156
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-157
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-danger p-1 d-flex rounded-circle me-2">
                              <span className="bg-danger rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">On-hold</h5>
                            <span className="badge bg-light rounded-pill">
                              04
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container11Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-159
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                              <span className="bg-success rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Completed</h5>
                            <span className="badge bg-light rounded-pill">
                              10
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container12Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-161
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-low" role="tabpanel">
                  <div className="d-flex align-items-start overflow-auto project-status pb-4">
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                              <span className="bg-pink rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">New</h5>
                            <span className="badge bg-light rounded-pill">
                              02
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container13Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-154
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-155
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                              <span className="bg-skyblue rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Inprogress</h5>
                            <span className="badge bg-light rounded-pill">
                              13
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container14Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-156
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-157
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-danger p-1 d-flex rounded-circle me-2">
                              <span className="bg-danger rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">On-hold</h5>
                            <span className="badge bg-light rounded-pill">
                              04
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container15Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-159
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                              <span className="bg-success rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Completed</h5>
                            <span className="badge bg-light rounded-pill">
                              10
                            </span>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container16Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                      >
                                        <i className="ti ti-edit me-2" />
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item rounded-1"
                                        data-bs-toggle="modal"
                                        data-inert={true}
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash me-2" />
                                        Delete
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <img
                                    src={kanbanArrow}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-161
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
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
  );
};

export default KanbanView;
