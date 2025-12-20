import { useState } from "react";
import { Link } from "react-router-dom";
import FileModal from "./fileModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactApexChart from "react-apexcharts";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import {
  file04,
  avatar04,
  avatar05,
  avatar10,
  avatar12,
  avatar14,
  avatar15,
  avatar16,
  avatar27,
  avatar29,
  avatar_02,
  avatar_03,
  avator06,
  avator09,
  cloud,
  dropbox,
  file01,
  file02,
  file03,
  pdf,
  upgrade,
  drive,
  storage,
  image,
  xlsIcon,
  folderIcon,
  file05,
  video01,
  video02,
  video03,
  fileD,
} from "../../utils/imagepath";
import CommonSelect from "../../components/select/common-select";
import type { ApexOptions } from "apexcharts";

const FileManager = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [isOpen] = useState(false);

  const video = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 24,
    speed: 500,
    arrows: true, // Enable navigation buttons
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
  const [Storage] = useState<ApexOptions>({
    chart: {
      height: 200,
      type: "donut",
      toolbar: {
        show: false,
      },
      offsetY: -10,
      events: {},
    },
    plotOptions: {
      pie: {
        startAngle: -100,
        endAngle: 100,
        donut: {
          size: "80%",
          labels: {
            show: true,
            name: {
              show: true,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    colors: ["#0C4B5E", "#FFC107", "#1B84FF", "#AB47BC", "#FD3995"],
    series: [20, 20, 20, 20, 20],
    labels: ["Documents", "Video", "Music", "Photos", "Other"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    grid: {
      padding: {
        bottom: -60, // Reduce padding from the bottom
      },
    },
  });

  const file = [
    { label: "All Files", value: "1" },
    { label: "Music", value: "2" },
    { label: "Documents", value: "3" },
    { label: "Photos", value: "4" },
  ];

  return (
    <>
      <div
        className={`page-wrapper notes-page-wrapper file-manager ${
          isOpen && "notes-tag-left"
        }`}
      >
        <div className="content">
          <div className="page-header page-add-notes border-0 flex-sm-row flex-column">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>File Manager</h4>
                <h6 className="mb-0">Manage your files</h6>
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
                    <i className="feather icon-search feather-search" />
                  </Link>
                  <div
                    id="DataTables_Table_0_filter"
                    className="dataTables_filter"
                  >
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
              <div className="form-sort mx-2">
                <CommonSelect
                  className="w-100"
                  options={file}
                  value={selectedFile}
                  onChange={(e) => setSelectedFile(e.value)}
                  placeholder="Choose"
                  filter={false}
                />
              </div>
              <div className="page-btn">
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add_folder"
                >
                  <i className="feather icon-plus-circle me-2" /> Create Folder
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Dropbox */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card bg-lightdanger-gradient flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <img src={dropbox} alt="img" />
                      <h5 className="ms-2">Dropbox</h5>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-folder-open me-2" />
                            Open
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-trash me-1" />
                            Delete All
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-status-change me-1" />
                            Reset
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="progress progress-xs flex-grow-1 mb-2">
                    <div
                      className="progress-bar bg-pink rounded"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">200 Files</p>
                    <p className="text-title mb-0">28GB</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Dropbox */}
            {/* Google Drive */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card bg-lightpink-gradient flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <img src={drive} alt="img" />
                      <h5 className="ms-2">Google Drive</h5>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-folder-open me-2" />
                            Open
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-trash me-1" />
                            Delete All
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-status-change me-1" />
                            Reset
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="progress progress-xs flex-grow-1 mb-2">
                    <div
                      className="progress-bar bg-pink rounded"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">144 Files</p>
                    <p className="text-title mb-0">54GB</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Google Drive */}
            {/* Cloud Storage */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card bg-lightsuccess-gradient flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <img src={cloud} alt="img" />
                      <h5 className="ms-2">Cloud Storage</h5>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-folder-open me-2" />
                            Open
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-trash me-1" />
                            Delete All
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-status-change me-1" />
                            Reset
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="progress progress-xs flex-grow-1 mb-2">
                    <div
                      className="progress-bar bg-purple rounded"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">144 Files</p>
                    <p className="text-title mb-0">54GB</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Cloud Storage */}
            {/* Internal Storage */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card bg-lightpurple-gradient flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <img src={storage} alt="img" />
                      <h5 className="ms-2">Internal Storage</h5>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-folder-open me-2" />
                            Open
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-trash me-1" />
                            Delete All
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            <i className="ti ti-status-change me-1" />
                            Reset
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="progress progress-xs flex-grow-1 mb-2">
                    <div
                      className="progress-bar bg-purple rounded"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">144 Files</p>
                    <p className="text-title mb-0">54GB</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Internal Storage */}
          </div>
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3  theiaStickySidebar">
              <div className="sticky-class">
                <div className="card ">
                  <div className="card-body p-3">
                    <div className="shadow-xs p-2 mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center overflow-hidden">
                          <span className="avatar">
                            <img
                              src={avatar29}
                              alt="img"
                              className="rounded-circle"
                            />
                          </span>
                          <div className="overflow-hidden ms-2">
                            <h5 className="text-truncate">James Hong</h5>
                            <p className="fs-12 text-truncate">
                              Jnh343@example.com
                            </p>
                          </div>
                        </div>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu  dropdown-menu-end p-3">
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-edit me-1" />
                                Edit
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="file-drop mb-3 text-center">
                      <span className="avatar avatar-sm bg-primary text-white mb-2">
                        <i className="ti ti-upload fs-16" />
                      </span>
                      <h6 className="mb-2">Drop files here</h6>
                      <p className="fs-12 mb-0">
                        Browse and chose the files you want to upload from your
                        computer
                      </p>
                      <input type="file" />
                    </div>
                    <div className="files-list nav d-block">
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-medium p-2 active"
                      >
                        <i className="ti ti-folder-up me-2" />
                        All Folder / Files
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-star me-2" />
                        Drive
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-octahedron me-2" />
                        Dropbox
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-share-2 me-2" />
                        Shared with Me
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-file me-2" />
                        Document
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-clock-hour-11 me-2" />
                        Recent File
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-star me-2" />
                        Important
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-music me-2" />
                        Media
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Storage Details */}
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="mb-2">Storage Details</h4>
                      <span className="badge badge-success mb-2">Used 77%</span>
                    </div>
                    <ReactApexChart
                      id="emp-department"
                      options={Storage}
                      series={Storage.series}
                      type="donut"
                      height={210}
                    />
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-info">
                          <i className="ti ti-music fs-20 text-info" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Music</h6>
                          <p className="text-truncate">35 Files</p>
                        </div>
                      </div>
                      <p className="text-title">8.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-warning">
                          <i className="fa-regular fa-file-audio fs-20 text-warning" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Video</h6>
                          <p className="text-truncate">145 Files</p>
                        </div>
                      </div>
                      <p className="text-title">2 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-secondary">
                          <i className="ti ti-file-description fs-20 text-secondary" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Documents</h6>
                          <p className="text-truncate">487 Files</p>
                        </div>
                      </div>
                      <p className="text-title">24.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-purple">
                          <i className="ti ti-photo fs-20 text-purple" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Photos</h6>
                          <p className="text-truncate">35 Files</p>
                        </div>
                      </div>
                      <p className="text-title">8.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-0">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-purple">
                          <i className="ti ti-file-type-doc fs-20 text-pink" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Other</h6>
                          <p className="text-truncate">487 Files</p>
                        </div>
                      </div>
                      <p className="text-title">16.2 GB</p>
                    </div>
                  </div>
                </div>
                {/* /Storage Details */}
                {/* Upgrade Details */}
                <div className="card bg-black bg-01">
                  <div className="card-body text-center">
                    <img src={upgrade} alt="img" className="mb-3" />
                    <h6 className="mb-3 text-white">
                      Upgrade to Pro for Unlimited Storage
                    </h6>
                    <Link to="#" className="btn btn-white btn-sm">
                      Upgrade Now
                      <i className="ti ti-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
                {/* /Upgrade Details */}
              </div>
            </div>
            {/* /Sidebar */}
            <div className="col-xl-9">
              {/* Quick Access */}
              <div className="border-bottom mb-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="mb-2">Quick Access</h4>
                  <div>
                    <Link to="#" className="mb-2 me-3 fw-medium link-default">
                      Close
                    </Link>
                    <Link to="#" className="mb-2 fw-medium link-default">
                      View All
                    </Link>
                  </div>
                </div>
                <div className="row row-cols-xxl-5 row-cols-xl-3 row-cols-sm-3 row-cols-1 justify-content-center">
                  <div className="col d-flex">
                    <div className="card access-wrap flex-fill">
                      <div className="card-body text-center">
                        <img src={fileD} alt="img" className="mb-3" />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Final.doc
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">
                          2.4 GB
                        </span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star-filled filled" />
                      </span>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="card access-wrap flex-fill">
                      <div className="card-body text-center">
                        <img src={pdf} alt="img" className="mb-3" />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Marklist.pdf
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">
                          2.4 GB
                        </span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star" />
                      </span>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="card access-wrap flex-fill">
                      <div className="card-body text-center">
                        <img src={image} alt="img" className="mb-3" />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Nature.png
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">
                          2.4 GB
                        </span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star-filled filled" />
                      </span>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="card access-wrap flex-fill">
                      <div className="card-body text-center">
                        <img src={xlsIcon} alt="img" className="mb-3" />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            List.xlsx
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">
                          2.4 GB
                        </span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star" />
                      </span>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="card access-wrap flex-fill">
                      <div className="card-body text-center">
                        <img src={folderIcon} alt="img" className="mb-3" />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Group Photos
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">
                          2.4 GB
                        </span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Quick Access */}
              {/* Recent Videos */}
              <div className="border-bottom mb-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="mb-2">Recent Videos</h4>
                  <div className="dropdown mb-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white"
                      data-bs-toggle="dropdown"
                    >
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
                  <Slider {...video} className="owl-carousel video-section">
                    <div className="video-wrap">
                      <video
                        width={100}
                        height={100}
                        className="js-player"
                        crossOrigin=""
                        playsInline
                        controls
                        poster={video01}
                      >
                        <source
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <div className="d-flex align-items-center justify-content-between video-content">
                        <h6 className="fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Inertia Movie
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="rating-select">
                            <i className="ti ti-star-filled filled" />
                          </Link>
                          <div className="dropdown ms-2">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="video-wrap">
                      <video
                        width={100}
                        height={100}
                        className="js-player"
                        crossOrigin=""
                        playsInline
                        controls
                        poster={video02}
                      >
                        <source
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <div className="d-flex align-items-center justify-content-between video-content">
                        <h6 className="fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            2028/11/10.mp4
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="rating-select">
                            <i className="ti ti-star-filled filled" />
                          </Link>
                          <div className="dropdown ms-2">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="video-wrap">
                      <video
                        width={100}
                        height={100}
                        className="js-player"
                        crossOrigin=""
                        playsInline
                        controls
                        poster={video03}
                      >
                        <source
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                          type="video/mp4"
                        />
                      </video>
                      {/* <div className="plyr__poster" style={{backgroundImage: `url('src/assets/img/file-manager/video-03.jpg')`}}></div> */}
                      <div className="d-flex align-items-center justify-content-between video-content">
                        <h6 className="fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            AI Liquid Color
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="rating-select">
                            <i className="ti ti-star-filled filled" />
                          </Link>
                          <div className="dropdown ms-2">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="video-wrap">
                      <video
                        width={100}
                        height={100}
                        className="js-player"
                        crossOrigin=""
                        playsInline
                        controls
                        poster={video01}
                      >
                        <source
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <div className="d-flex align-items-center justify-content-between video-content">
                        <h6 className="fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Inertia Movie
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="rating-select">
                            <i className="ti ti-star-filled filled" />
                          </Link>
                          <div className="dropdown ms-2">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="video-wrap">
                      <video
                        width={100}
                        height={100}
                        className="js-player"
                        crossOrigin=""
                        playsInline
                        controls
                        poster={video02}
                      >
                        <source
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <div className="d-flex align-items-center justify-content-between video-content">
                        <h6 className="fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            2028/11/10.mp4
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="rating-select">
                            <i className="ti ti-star-filled filled" />
                          </Link>
                          <div className="dropdown ms-2">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="video-wrap">
                      <video
                        width={100}
                        height={100}
                        className="js-player"
                        crossOrigin=""
                        playsInline
                        controls
                        poster={video03}
                      >
                        <source
                          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                          type="video/mp4"
                        />
                      </video>
                      {/* <div className="plyr__poster" style={{backgroundImage: `url('src/assets/img/file-manager/video-03.jpg')`}}></div> */}
                      <div className="d-flex align-items-center justify-content-between video-content">
                        <h6 className="fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            AI Liquid Color
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="rating-select">
                            <i className="ti ti-star-filled filled" />
                          </Link>
                          <div className="dropdown ms-2">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item rounded-1">
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
              </div>
              {/* /Recent Videos */}
              {/* Recent Folders */}
              <div className="border-bottom mb-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="mb-2">Recent Folders</h4>
                  <div className="dropdown mb-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white"
                      data-bs-toggle="dropdown"
                    >
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
                <Slider {...video} className="owl-carousel folders-carousel">
                  <div className="folder-wrap bg-white d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="text-warning fs-30">
                        <i className="ti ti-folder-filled" />
                      </span>
                      <div className="ms-2">
                        <h6 className="mb-1">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                            className="text-truncate"
                          >
                            Personal Assets
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <p className="fs-12 mb-0 me-2">2.4 GB</p>
                          <p className="fs-12 mb-0 d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-6 me-2 text-title" />
                            135&nbsp;files
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avator09}
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
                      </div>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="folder-wrap bg-white d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="text-warning fs-30">
                        <i className="ti ti-folder-filled" />
                      </span>
                      <div className="ms-2">
                        <h6 className="mb-1">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Document
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <p className="fs-12 mb-0 me-2">4 GB</p>
                          <p className="fs-12 mb-0 d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-6 me-2 text-title" />
                            15&nbsp;files
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <img
                            className="border border-white"
                            src={avatar05}
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
                      </div>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="folder-wrap bg-white d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="text-warning fs-30">
                        <i className="ti ti-folder-filled" />
                      </span>
                      <div className="ms-2">
                        <h6 className="mb-1">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Handyimages
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <p className="fs-12 mb-0 me-2">1.4 GB</p>
                          <p className="fs-12 mb-0 d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-6 me-2 text-title" />
                            115&nbsp;files
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              {/* /Recent Folders */}
              {/* Recent Files */}
              <div className="border-bottom mb-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="mb-2">
                    <Link
                      to="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#preview"
                    >
                      Recent Files
                    </Link>
                  </h4>
                  <div className="dropdown mb-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white"
                      data-bs-toggle="dropdown"
                    >
                      Last Modified
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Newest to Oldest
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Last Modified
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Oldest to Newest
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <Slider {...video} className="owl-carousel files-carousel">
                  <div className="files-wrap">
                    <div className="bg-transparent-dark p-5 d-flex align-items-center justify-content-center  files-icon">
                      <i className="ti ti-file-description fs-24 text-title" />
                    </div>
                    <div className="bg-white d-flex align-items-center justify-content-between p-3 files-content">
                      <h6 className="fw-medium">customer_data.txt</h6>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="files-wrap">
                    <div className="bg-secondary-transparent p-5 d-flex align-items-center justify-content-center files-icon">
                      <i className="ti ti-file-type-pdf fs-24 text-title" />
                    </div>
                    <div className="bg-white d-flex align-items-center justify-content-between p-3 files-content">
                      <h6 className="fw-medium text-truncate">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          video_player_installer_setup.rar
                        </Link>
                      </h6>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="files-wrap">
                    <div className="bg-secondary-transparent p-5 d-flex align-items-center justify-content-center files-icon">
                      <i className="fa-regular fa-file-audio fs-24 text-title" />
                    </div>
                    <div className="bg-white d-flex align-items-center justify-content-between p-3 files-content">
                      <h6 className="fw-medium text-truncate">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          recording.mp3
                        </Link>
                      </h6>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="files-wrap">
                    <div className="bg-secondary-transparent p-5 d-flex align-items-center justify-content-center files-icon">
                      <i className="fa-solid fa-file-zipper fs-24 text-title" />
                    </div>
                    <div className="bg-white d-flex align-items-center justify-content-between p-3 files-content">
                      <h6 className="fw-medium">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          header_file.zip
                        </Link>
                      </h6>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              {/* /Recent Files */}
              {/* Student List */}
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="mb-2">Files</h4>
                <div className="d-flex align-items-center">
                  <div className="dropdown mb-2 me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white"
                      data-bs-toggle="dropdown"
                    >
                      Sort By : Docs Type
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Docs
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Pdf
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Image
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Folder
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Xml
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="link-primary fw-medium mb-2">
                    View All
                  </Link>
                </div>
              </div>
              <div className="table-responsive mb-4">
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
                      <th>Name</th>
                      <th>Size</th>
                      <th>Type</th>
                      <th>Modified</th>
                      <th>Share</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md bg-light"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            <img src={file01} className="img-fluid" alt="img" />
                          </Link>
                          <div className="ms-2">
                            <p className="text-title fw-medium  mb-0">
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                              >
                                Secret
                              </Link>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>7.6 MB</td>
                      <td>Doc</td>
                      <td>
                        <p className="text-title mb-0">Mar 15, 2025</p>
                        <span>05:00:14 PM</span>
                      </td>
                      <td>
                        <div className="avatar-list-stacked avatar-group-sm">
                          <span className="avatar avatar-rounded">
                            <img
                              className="border border-white"
                              src={avatar27}
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
                              src={avatar12}
                              alt="img"
                            />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="rating-select me-2">
                            <Link to="#">
                              <i className="ti ti-star" />
                            </Link>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-flex align-items-center justify-content-center"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots fs-14" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-right p-3">
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Permanent Delete
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-edit-circle me-2" />
                                  Restore File
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md bg-light"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            <img src={file02} className="img-fluid" alt="img" />
                          </Link>
                          <div className="ms-2">
                            <p className="text-title fw-medium  mb-0">
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                              >
                                Sophie Headrick
                              </Link>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>7.4 MB</td>
                      <td>PDF</td>
                      <td>
                        <p className="text-title mb-0">Jan 8, 2025</p>
                        <span>08:20:13 PM</span>
                      </td>
                      <td>
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
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="rating-select me-2">
                            <Link to="#">
                              <i className="ti ti-star" />
                            </Link>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-flex align-items-center justify-content-center"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots fs-14" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-right p-3">
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Permanent Delete
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-edit-circle me-2" />
                                  Restore File
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md bg-light"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            <img src={file03} className="img-fluid" alt="img" />
                          </Link>
                          <div className="ms-2">
                            <p className="text-title fw-medium  mb-0">
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                              >
                                Gallery
                              </Link>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>6.1 MB</td>
                      <td>Image</td>
                      <td>
                        <p className="text-title mb-0">Aug 6, 2025</p>
                        <span>04:10:12 PM</span>
                      </td>
                      <td>
                        <div className="avatar-list-stacked avatar-group-sm">
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
                          <span className="avatar avatar-rounded">
                            <img
                              className="border border-white"
                              src={avatar05}
                              alt="img"
                            />
                          </span>
                          <span className="avatar avatar-rounded">
                            <img
                              className="border border-white"
                              src={avator06}
                              alt="img"
                            />
                          </span>
                          <Link
                            className="avatar bg-primary avatar-rounded text-fixed-white"
                            to="#"
                          >
                            +1
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="rating-select me-2">
                            <Link to="#">
                              <i className="ti ti-star" />
                            </Link>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-flex align-items-center justify-content-center"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots fs-14" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-right p-3">
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Permanent Delete
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-edit-circle me-2" />
                                  Restore File
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md bg-light"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            <img src={file04} className="img-fluid" alt="img" />
                          </Link>
                          <div className="ms-2">
                            <p className="text-title fw-medium  mb-0">
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                              >
                                Doris Crowley
                              </Link>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>5.2 MB</td>
                      <td>Folder</td>
                      <td>
                        <p className="text-title mb-0">Jan 6, 2025</p>
                        <span>03:40:14 PM</span>
                      </td>
                      <td>
                        <div className="avatar-list-stacked avatar-group-sm">
                          <span className="avatar avatar-rounded">
                            <img
                              className="border border-white"
                              src={avator06}
                              alt="img"
                            />
                          </span>
                          <span className="avatar avatar-rounded">
                            <img
                              className="border border-white"
                              src={avatar10}
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
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="rating-select me-2">
                            <Link to="#">
                              <i className="ti ti-star" />
                            </Link>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-flex align-items-center justify-content-center"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots fs-14" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-right p-3">
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Permanent Delete
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-edit-circle me-2" />
                                  Restore File
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md bg-light"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            <img src={file05} className="img-fluid" alt="img" />
                          </Link>
                          <div className="ms-2">
                            <p className="text-title fw-medium  mb-0">
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                              >
                                Cheat_codez
                              </Link>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>8 MB</td>
                      <td>Xml</td>
                      <td>
                        <p className="text-title mb-0">Oct 12, 2025</p>
                        <span>05:00:14 PM</span>
                      </td>
                      <td>
                        <div className="avatar-list-stacked avatar-group-sm">
                          <span className="avatar avatar-rounded">
                            <img
                              className="border border-white"
                              src={avatar04}
                              alt="img"
                            />
                          </span>
                          <span className="avatar avatar-rounded">
                            <img
                              className="border border-white"
                              src={avatar27}
                              alt="img"
                            />
                          </span>
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
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="rating-select me-2">
                            <Link to="#">
                              <i className="ti ti-star" />
                            </Link>
                          </div>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="d-flex align-items-center justify-content-center"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots fs-14" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-right p-3">
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Permanent Delete
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                >
                                  <i className="ti ti-edit-circle me-2" />
                                  Restore File
                                </Link>
                              </li>
                            </ul>
                          </div>
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
      </div>
      <FileModal />
    </>
  );
};

export default FileManager;
