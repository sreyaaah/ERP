import { useState } from "react";
import { all_routes } from "../../../routes/all_routes";
import { Link } from "react-router-dom";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog06,
  blog07,
  blog08,
  blog09,
  user02,
  user03,
  user04,
  user05,
  user06,
  user07,
  user08,
  user09,
  user10,
} from "../../../utils/imagepath";
import CommonSelect from "../../../components/select/common-select";
import CommonChipsInput from "../../../components/chip";
import { Editor } from "primereact/editor";
import TooltipIcons from "../../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";

const AllBlogs = () => {
  const [tags, setTags] = useState(["PointOfSale"]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [text, setText] = useState("");
  const option1 = [
    { label: "1", value: "Evlovution" },
    { label: "2", value: "Guide" },
    { label: "3", value: "Security" },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Blogs</h4>
                <h6>Manage your blogs</h6>
              </div>
            </div>
              <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add_blog"
              >
                <i className="feather icon-plus-circle me-1" />
                Add Blog
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div className="position-relative input-icon me-3">
                  <span className="input-icon-addon">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
                <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                  <div className="dropdown me-3">
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
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogDetails}>
                      <img
                        src={blog01}
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <Link
                        to={all_routes.blogDetails}
                        className="trend-tag badge bg-soft-info shadow-none fs-10 fw-medium"
                      >
                        Features
                      </Link>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 24 Dec 2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center d-inline-flex align-items-center"
                      >
                        <img
                          src={user02}
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Gertrude Bowie
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5>
                      <Link
                        to={all_routes.blogDetails}
                        className="fs-16  text-truncate"
                      >
                        What is a POS System? A Beginner’s Guide
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogDetails}>
                      <img
                        src={blog02}
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <Link
                        to={all_routes.blogDetails}
                        className="trend-tag badge bg-soft-info shadow-none"
                      >
                        Business
                      </Link>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 20 Dec 2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"
                      >
                        <img
                          src={user03}
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Edward Marcus
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-defau p-1 d-flex align-items-centerlt"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5>
                      <Link
                        to={all_routes.blogDetails}
                        className="fs-16 text-truncate"
                      >
                        Best POS Systems for Retail Businesses
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogDetails}>
                      <img
                        src={blog03}
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <Link
                        to={all_routes.blogDetails}
                        className="trend-tag badge bg-soft-info shadow-none"
                      >
                        Features
                      </Link>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 11 Dec 2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"
                      >
                        <img
                          src={user05}
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Mark Phillips
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-defau p-1 d-flex align-items-centerlt"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5>
                      <Link
                        to={all_routes.blogDetails}
                        className="fs-16 text-truncate"
                      >
                        Key Features of a Modern POS
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogDetails}>
                      <img
                        src={blog04}
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <Link
                        to={all_routes.blogDetails}
                        className="trend-tag badge bg-soft-info shadow-none"
                      >
                        Business
                      </Link>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 25 Nov 2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"
                      >
                        <img
                          src={user04}
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Nidia Hale
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-defau p-1 d-flex align-items-centerlt"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5>
                      <Link
                        to={all_routes.blogDetails}
                        className="fs-16 text-truncate"
                      >
                        Integrating POS with E-Commerce
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogDetails}>
                      <img
                        src={blog05}
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <Link
                        to={all_routes.blogDetails}
                        className="trend-tag badge bg-soft-info shadow-none"
                      >
                        Features
                      </Link>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 16 Nov 2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"
                      >
                        <img
                          src={user06}
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Rebecca Dale
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-defau p-1 d-flex align-items-centerlt"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5>
                      <Link
                        to={all_routes.blogDetails}
                        className="fs-16 text-truncate"
                      >
                        AI &amp; the Future of POS Systems
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogDetails}>
                      <img
                        src={blog06}
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <Link
                        to={all_routes.blogDetails}
                        className="trend-tag badge bg-soft-info shadow-none"
                      >
                        Technology
                      </Link>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 10 Nov 2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"
                      >
                        <img
                          src={user08}
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Jimmy Johnson
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-defau p-1 d-flex align-items-centerlt"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5>
                      <Link
                        to={all_routes.blogDetails}
                        className="fs-16 text-truncate"
                      >
                        Retail vs Restaurant POS: Key Differences
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogDetails}>
                      <img
                        src={blog07}
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <Link
                        to={all_routes.blogDetails}
                        className="trend-tag badge bg-soft-info shadow-none"
                      >
                        Features
                      </Link>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 23 Oct 2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"
                      >
                        <img
                          src={user07}
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Stanley Pierre
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-defau p-1 d-flex align-items-centerlt"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5>
                      <Link
                        to={all_routes.blogDetails}
                        className="fs-16 text-truncate"
                      >
                        Understanding PCI Compliance for POS{" "}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogDetails}>
                      <img
                        src={blog08}
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <Link
                        to={all_routes.blogDetails}
                        className="trend-tag badge bg-soft-info shadow-none"
                      >
                        Technology
                      </Link>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 14 Oct 2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"
                      >
                        <img
                          src={user10}
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Alice Garcia
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-defau p-1 d-flex align-items-centerlt"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5>
                      <Link
                        to={all_routes.blogDetails}
                        className="fs-16 text-truncate"
                      >
                        Cloud vs On-Premise POS: Which is Better?
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogDetails}>
                      <img
                        src={blog09}
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <Link
                        to={all_routes.blogDetails}
                        className="trend-tag badge bg-soft-info shadow-none"
                      >
                        Features
                      </Link>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 08 Oct 2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"
                      >
                        <img
                          src={user09}
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        James Currier
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default p-1 d-flex align-items-center me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-defau p-1 d-flex align-items-centerlt"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5>
                      <Link
                        to={all_routes.blogDetails}
                        className="fs-16 text-truncate"
                      >
                        The Role of POS in Inventory Management
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0 text-gray-9">
            2014 - 2025 © DreamsPOS. All Right Reserved
          </p>
          <p>
            Designed &amp; Developed by{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* Add Blog */}
      <div className="modal fade" id="add_blog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Blog</h4>
              <button
                type="button"
                className="btn-close custom-btn-close p-0 p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-12">
                    <div className="new-employee-field">
                      <div className="profile-pic-upload">
                        <div className="profile-pic">
                          <span>
                            <i className="feather icon-plus-circle plus-down-add" />{" "}
                            Add Image
                          </span>
                        </div>
                        <div className="mb-3">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Upload Image</h4>
                            </div>
                            <p className="mb-0 mt-1 fs-13 no-wrap">
                              Upload an image below 2 MB, Accepted File format
                              JPG, PNG
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Blog Title<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Category<span className="text-danger ms-1">*</span>
                      </label>

                      <CommonSelect
                        filter={false}
                        options={option1}
                        placeholder="Choose"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Tags<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonChipsInput
                        value={tags}
                        onChange={setTags}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Description<span className="text-danger ms-1">*</span>
                      </label>
                      <Editor
                        value={text}
                        onTextChange={(e: any) => setText(e.htmlValue)}
                        style={{ height: "200px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <label className="form-label">Status</label>
                      <label className="switch">
                        <input type="checkbox" checked />
                        <span className="slider round" />
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
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Add Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Blog */}
      {/* Edit Blog */}
      <div className="modal fade" id="edit_blog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Blog</h4>
              <button
                type="button"
                className="btn-close custom-btn-close p-0 p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-12">
                    <div className="new-employee-field">
                      <div className="profile-pic-upload">
                        <div className="profile-pic edit-review people-profile-pic p-2 border rounded">
                          <img src={user08} alt="Img" />
                          <Link to="#">
                            <i className="feather icon-x-square x-square-add" />
                          </Link>
                        </div>
                        <div className="mb-3">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Upload Image</h4>
                            </div>
                            <p className="mb-0 mt-1 fs-13 no-wrap">
                              Upload an image below 2 MB, Accepted File format
                              JPG, PNG
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Blog Title <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="What is a POS System? A Beginner’s Guide"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Category <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        filter={false}
                        options={option1}
                        placeholder="Choose"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Tags <span className="text-danger"> *</span>
                      </label>
                      <CommonChipsInput
                        value={tags}
                        onChange={setTags}
                        placeholder="Add new"
                        className=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Description<span className="text-danger"> *</span>
                      </label>
                      <div id="summernote2" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <label className="form-label">Status</label>
                      <label className="switch">
                        <input type="checkbox" checked />
                        <span className="slider round" />
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
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Blog */}
      
      {/* Delete Modal */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-xl bg-soft-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-36" />
          </span>
          <h4 className="mb-1">Delete Blog</h4>
          <p className="mb-3">Are you sure you want to delete blog?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-secondary me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.allBlogs} className="btn btn-primary">
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

export default AllBlogs;
