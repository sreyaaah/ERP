import { useState } from "react";
import { Link } from "react-router-dom";
import NotesModal from "../../core/modals/applications/notesModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Select from "react-select";
import { Edit, Eye, Star, Trash2 } from "react-feather";
import CommonFooter from "../../components/footer/commonFooter";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const Notes = () => {
  const [isOpen] = useState(false);

  const recentChoose = [
    { value: "Recent", label: "Recent" },
    { value: "Last Modified", label: "Last Modified" },
    { value: "Last Modified by me", label: "Last Modified by me" },
  ];

  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    margin: 24,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={`page-wrapper notes-page-wrapper ${
          isOpen && "notes-tag-left"
        }`}
      >
        <div className="content">
          <div className="page-header page-add-notes border-0 flex-sm-row flex-column">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Notes</h4>
                <h6 className="mb-0">Manage your notes</h6>
              </div>
            </div>
            <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">
              <ul className="table-top-head me-2">
                <RefreshIcon />
                <CollapesIcon />
              </ul>
              <div className="search-set">
                <div className="search-input">
                  <Link to="#" className="btn btn-searchset">
                    <i data-feather="search" className="feather-search" />
                  </Link>
                  <div className="dataTables_filter">
                    <label>
                      {" "}
                      <input
                        type="search"
                        className="form-control form-control-sm py-0"
                        placeholder="Search"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="page-btn">
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#note-units"
                >
                  <i className="ti ti-circle-plus me-1"></i> Add Note
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget">
              <div className="border rounded-3 bg-white p-3">
                <div className="mb-3 pb-3 border-bottom">
                  <h4 className="d-flex align-items-center">
                    <i className="ti ti-file-text me-2" />
                    Notes List
                  </h4>
                </div>
                <div className="border-bottom pb-3 ">
                  <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="d-flex text-start align-items-center fw-medium fs-15 nav-link active mb-1"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="true"
                    >
                      <i className="ti ti-inbox me-2" />
                      All Notes<span className="ms-2">1</span>
                    </button>
                    <button
                      className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-1"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <i className="ti ti-star me-2" />
                      Important
                    </button>
                    <button
                      className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="ti ti-trash me-2" />
                      Trash
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="border-bottom px-2 pb-3 mb-3">
                    <h5 className="mb-2">Tags</h5>
                    <div className="d-flex flex-column mt-2">
                      <Link to="#" className="text-info mb-2">
                        <span className="text-info me-2">
                          <i className="fas fa-square square-rotate fs-10" />
                        </span>
                        Pending
                      </Link>
                      <Link to="#" className="text-danger mb-2">
                        <span className="text-danger me-2">
                          <i className="fas fa-square square-rotate fs-10" />
                        </span>
                        Onhold
                      </Link>
                      <Link to="#" className="text-warning mb-2">
                        <span className="text-warning me-2">
                          <i className="fas fa-square square-rotate fs-10" />
                        </span>
                        Inprogress
                      </Link>
                      <Link to="#" className="text-success">
                        <span className="text-success me-2">
                          <i className="fas fa-square square-rotate fs-10" />
                        </span>
                        Done
                      </Link>
                    </div>
                  </div>
                  <div className="px-2">
                    <h5 className="mb-2">Priority</h5>
                    <div className="d-flex flex-column mt-2">
                      <Link to="#" className="text-warning mb-2">
                        <span className="text-warning me-2">
                          <i className="fas fa-square square-rotate fs-10" />
                        </span>
                        Medium
                      </Link>
                      <Link to="#" className="text-success mb-2">
                        <span className="text-success me-2">
                          <i className="fas fa-square square-rotate fs-10" />
                        </span>
                        High
                      </Link>
                      <Link to="#" className="text-danger">
                        <span className="text-danger me-2">
                          <i className="fas fa-square square-rotate fs-10" />
                        </span>
                        Low
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 budget-role-notes">
              <div className="bg-white rounded-3 d-flex align-items-center justify-content-between flex-wrap mb-4 p-3 pb-0">
                <div className="form-sort me-2 mb-3">
                  <i data-feather="sliders" className="info-img" />
                  <Select
                    classNamePrefix="react-select"
                    options={recentChoose}
                    placeholder="Choose"
                  />
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="input-icon-start me-2 position-relative">
                    <span className="icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                    <CommonDateRangePicker />
                  </div>
                  <div className="search-set">
                    <div className="search-input">
                      <Link to="#" className="btn btn-searchset">
                        <i data-feather="search" className="feather-search" />
                      </Link>
                      <div className="dataTables_filter">
                        <label>
                          {" "}
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder="Search"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-content" id="v-pills-tabContent2">
                <div
                  className="tab-pane fade active show"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="border-bottom mb-4 pb-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                          <div className="d-flex align-items-center mb-3">
                            <h4>Important Notes </h4>
                            <div className="owl-nav slide-nav5 text-end nav-control ms-3" />
                          </div>
                          <div className="notes-close mb-3">
                            <Link to="#" className="text-danger fs-15">
                              <i className="fas fa-times me-1" /> Close{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <Slider
                          {...settings}
                          className="notes-slider owl-carousel"
                        >
                          <div className="card rounded-3 mb-0">
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="badge bg-outline-warning d-inline-flex align-items-center">
                                  <i className="fas fa-circle fs-6 me-1" />
                                  Medium
                                </span>
                                <div>
                                  <Link
                                    to="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </Link>
                                  <div className="dropdown-menu notes-menu dropdown-menu-end">
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#edit-note-units"
                                    >
                                      <span>
                                        <Edit />
                                      </span>
                                      Edit
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#delete_modal"
                                    >
                                      <span>
                                        <Trash2 />
                                      </span>
                                      Delete
                                    </Link>
                                    <Link to="#" className="dropdown-item">
                                      <span>
                                        <Star />
                                      </span>
                                      Not Important
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#view-note-units"
                                    >
                                      <span>
                                        <Eye />
                                      </span>
                                      View
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="my-3">
                                <h5 className="text-truncate mb-1">
                                  <Link to="#">
                                    Plan a trip to another country
                                  </Link>
                                </h5>
                                <p className="mb-3 d-flex align-items-center text-dark">
                                  <i className="ti ti-calendar me-1" />
                                  20 Jan 2024
                                </p>
                                <p className="text-truncate line-clamb-2 text-wrap">
                                  Space, the final frontier. These are the
                                  voyages of the Starship Enterprise.
                                </p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="avatar avatar-md me-2"
                                  >
                                    <img
                                      src="src/assets/img/profiles/avatar-01.jpg"
                                      alt="Profile"
                                      className="img-fluid rounded-circle"
                                    />
                                  </Link>
                                  <span className="text-info d-flex align-items-center">
                                    <i className="fas fa-square square-rotate fs-10 me-1" />
                                    Personal
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="me-2">
                                    <span>
                                      <i className="fas fa-star text-warning" />
                                    </span>
                                  </Link>
                                  <Link to="#">
                                    <span>
                                      <i className="ti ti-trash text-danger" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card rounded-3 mb-0">
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="badge bg-outline-danger d-inline-flex align-items-center">
                                  <i className="fas fa-circle fs-6 me-1" />
                                  Low
                                </span>
                                <div>
                                  <Link
                                    to="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </Link>
                                  <div className="dropdown-menu notes-menu dropdown-menu-end">
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#edit-note-units"
                                    >
                                      <span>
                                        <Edit />
                                      </span>
                                      Edit
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#delete_modal"
                                    >
                                      <span>
                                        <Trash2 />
                                      </span>
                                      Delete
                                    </Link>
                                    <Link to="#" className="dropdown-item">
                                      <span>
                                        <Star />
                                      </span>
                                      Not Important
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#view-note-units"
                                    >
                                      <span>
                                        <Eye />
                                      </span>
                                      View
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="my-3">
                                <h5 className="text-truncate mb-1">
                                  <Link to="#">Improve touch typing</Link>
                                </h5>
                                <p className="mb-3 d-flex align-items-center text-dark">
                                  <i className="ti ti-calendar me-1" />
                                  22 Jan 2024
                                </p>
                                <p className="text-truncate line-clamb-2 text-wrap">
                                  Well, the way they make shows is, they make
                                  one show.
                                </p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="avatar avatar-md me-2"
                                  >
                                   <img
                                      src="src/assets/img/profiles/avatar-02.jpg"
                                      alt="Profile"
                                      className="img-fluid rounded-circle"
                                    />
                                  </Link>
                                  <span className="text-success d-flex align-items-center">
                                    <i className="fas fa-square square-rotate fs-10 me-1" />
                                    Work
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="me-2">
                                    <span>
                                      <i className="fas fa-star text-warning" />
                                    </span>
                                  </Link>
                                  <Link to="#">
                                    <span>
                                      <i className="ti ti-trash text-danger" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card rounded-3 mb-0">
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="badge bg-outline-danger d-inline-flex align-items-center">
                                  <i className="fas fa-circle fs-6 me-1" />
                                  Low
                                </span>
                                <div>
                                  <Link
                                    to="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </Link>
                                  <div className="dropdown-menu notes-menu dropdown-menu-end">
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#edit-note-units"
                                    >
                                      <span>
                                        <Edit />
                                      </span>
                                      Edit
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#delete_modal"
                                    >
                                      <span>
                                        <Trash2 />
                                      </span>
                                      Delete
                                    </Link>
                                    <Link to="#" className="dropdown-item">
                                      <span>
                                        <Star />
                                      </span>
                                      Not Important
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#view-note-units"
                                    >
                                      <span>
                                        <Eye />
                                      </span>
                                      View
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="my-3">
                                <h5 className="text-truncate mb-1">
                                  <Link to="#">Learn calligraphy</Link>
                                </h5>
                                <p className="mb-3 d-flex align-items-center text-dark">
                                  <i className="ti ti-calendar me-1" />
                                  24 Jan 2024
                                </p>
                                <p className="text-truncate line-clamb-2 text-wrap">
                                  Calligraphy, the art of beautiful handwriting.
                                  The term may derive from the Greek words.{" "}
                                </p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="avatar avatar-md me-2"
                                  >
                                   <img
                                      src="src/assets/img/profiles/avatar-03.jpg"
                                      alt="Profile"
                                      className="img-fluid rounded-circle"
                                    />
                                  </Link>
                                  <span className="text-info d-flex align-items-center">
                                    <i className="fas fa-square square-rotate fs-10 me-1" />
                                    Social
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="me-2">
                                    <span>
                                      <i className="fas fa-star text-warning" />
                                    </span>
                                  </Link>
                                  <Link to="#">
                                    <span>
                                      <i className="ti ti-trash text-danger" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card rounded-3 mb-0">
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="badge bg-outline-warning d-inline-flex align-items-center">
                                  <i className="fas fa-circle fs-6 me-1" />
                                  Medium
                                </span>
                                <div>
                                  <Link
                                    to="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </Link>
                                  <div className="dropdown-menu notes-menu dropdown-menu-end">
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#edit-note-units"
                                    >
                                      <span>
                                        <Edit />
                                      </span>
                                      Edit
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#delete_modal"
                                    >
                                      <span>
                                        <Trash2 />
                                      </span>
                                      Delete
                                    </Link>
                                    <Link to="#" className="dropdown-item">
                                      <span>
                                        <Star />
                                      </span>
                                      Not Important
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#view-note-units"
                                    >
                                      <span>
                                        <Eye />
                                      </span>
                                      View
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="my-3">
                                <h5 className="text-truncate mb-1">
                                  <Link to="#">
                                    Plan a trip to another country
                                  </Link>
                                </h5>
                                <p className="mb-3 d-flex align-items-center text-dark">
                                  <i className="ti ti-calendar me-1" />
                                  25 Jan 2024
                                </p>
                                <p className="text-truncate line-clamb-2 text-wrap">
                                  Space, the final frontier. These are the
                                  voyages of the Starship Enterprise.
                                </p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="avatar avatar-md me-2"
                                  >
                                   <img
                                      src="src/assets/img/profiles/avatar-01.jpg"
                                      alt="Profile"
                                      className="img-fluid rounded-circle"
                                    />
                                  </Link>
                                  <span className="text-info d-flex align-items-center">
                                    <i className="fas fa-square square-rotate fs-10 me-1" />
                                    Personal
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="me-2">
                                    <span>
                                      <i className="fas fa-star text-warning" />
                                    </span>
                                  </Link>
                                  <Link to="#">
                                    <span>
                                      <i className="ti ti-trash text-danger" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card rounded-3 mb-0">
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="badge bg-outline-danger d-inline-flex align-items-center">
                                  <i className="fas fa-circle fs-6 me-1" />
                                  Low
                                </span>
                                <div>
                                  <Link
                                    to="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fas fa-ellipsis-v" />
                                  </Link>
                                  <div className="dropdown-menu notes-menu dropdown-menu-end">
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#edit-note-units"
                                    >
                                      <span>
                                        <Edit />
                                      </span>
                                      Edit
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#delete_modal"
                                    >
                                      <span>
                                        <Trash2 />
                                      </span>
                                      Delete
                                    </Link>
                                    <Link to="#" className="dropdown-item">
                                      <span>
                                        <Star />
                                      </span>
                                      Not Important
                                    </Link>
                                    <Link
                                      to="#"
                                      className="dropdown-item"
                                      data-bs-toggle="modal"
                                      data-inert={true}
                                      data-bs-target="#view-note-units"
                                    >
                                      <span>
                                        <Eye />
                                      </span>
                                      View
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="my-3">
                                <h5 className="text-truncate mb-1">
                                  <Link to="#">Improve touch typing</Link>
                                </h5>
                                <p className="mb-3 d-flex align-items-center text-dark">
                                  <i className="ti ti-calendar me-1" />
                                  26 Jan 2024
                                </p>
                                <p className="text-truncate line-clamb-2 text-wrap">
                                  Well, the way they make shows is, they make
                                  one show.
                                </p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="avatar avatar-md me-2"
                                  >
                                   <img
                                      src="src/assets/img/profiles/avatar-02.jpg"
                                      alt="Profile"
                                      className="img-fluid rounded-circle"
                                    />
                                  </Link>
                                  <span className="text-success d-flex align-items-center">
                                    <i className="fas fa-square square-rotate fs-10 me-1" />
                                    Work
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="me-2">
                                    <span>
                                      <i className="fas fa-star text-warning" />
                                    </span>
                                  </Link>
                                  <Link to="#">
                                    <span>
                                      <i className="ti ti-trash text-danger" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-success d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Backup Files EOD</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              20 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Project files should be took backup before end of
                              the day.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-05.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-danger d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Download Server Logs</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              25 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Server log is a text document that contains a
                              record of all activity.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-06.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-warning d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              Medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Team meet at Starbucks</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              26 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Meeting all teamets at Starbucks for identifying
                              them all.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-07.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-success d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Create a compost pile</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              27 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Compost pile refers to fruit and vegetable scraps,
                              used tea, coffee grounds etc..
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-08.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-danger d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Take a hike at a local park</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Hiking involves a long energetic walk in a natural
                              environment.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-09.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-info d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Research a topic interested</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Research a topic interested by listen actively and
                              attentively.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-10.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row">
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-success d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Backup Files EOD</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              20 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Project files should be took backup before end of
                              the day.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-05.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-danger d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Download Server Logs</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              25 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Server log is a text document that contains a
                              record of all activity.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-06.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-warning d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              Medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Team meet at Starbucks</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              26 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Meeting all teamets at Starbucks for identifying
                              them all.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-07.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-success d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Create a compost pile</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              27 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Compost pile refers to fruit and vegetable scraps,
                              used tea, coffee grounds etc..
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-08.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-danger d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Take a hike at a local park</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Hiking involves a long energetic walk in a natural
                              environment.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                               <img
                                  src="src/assets/img/profiles/avatar-09.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-info d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Research a topic interested</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Research a topic interested by listen actively and
                              attentively.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                                <img
                                  src="src/assets/img/profiles/avatar-10.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-end">
                      <Link to="#" className="btn btn-danger mb-4">
                        <span>
                          {" "}
                          <i className="ti ti-trash f-20 me-2" />{" "}
                        </span>
                        Restore all
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-success d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Create a compost pile</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              27 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Compost pile refers to fruit and vegetable scraps,
                              used tea, coffee grounds etc..
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                                <img
                                  src="src/assets/img/profiles/avatar-08.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-danger d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Take a hike at a local park</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Hiking involves a long energetic walk in a natural
                              environment.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                                <img
                                  src="src/assets/img/profiles/avatar-09.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card rounded-3 mb-4 flex-fill">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge bg-outline-info d-inline-flex align-items-center">
                              <i className="fas fa-circle fs-6 me-1" />
                              medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <Edit />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <Trash2 />
                                  </span>
                                  Delete
                                </Link>
                                <Link to="#" className="dropdown-item">
                                  <span>
                                    <Star />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-inert={true}
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <Eye />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h5 className="text-truncate mb-1">
                              <Link to="#">Research a topic interested</Link>
                            </h5>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Research a topic interested by listen actively and
                              attentively.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar avatar-md me-2">
                                <img
                                  src="src/assets/img/profiles/avatar-10.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="fas fa-square square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="fas fa-star text-warning" />
                                </span>
                              </Link>
                              <Link to="#">
                                <span>
                                  <i className="ti ti-trash text-danger" />
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
              <div className="row custom-pagination">
                <div className="col-md-12">
                  <div className="paginations d-flex justify-content-end">
                    <span>
                      <i className="fas fa-chevron-left" />
                    </span>
                    <ul className="d-flex align-items-center page-wrap">
                      <li>
                        <Link to="#" className="active">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">4</Link>
                      </li>
                    </ul>
                    <span>
                      <i className="fas fa-chevron-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
      <NotesModal />
    </>
  );
};

export default Notes;
