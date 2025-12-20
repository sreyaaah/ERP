import { useState } from "react";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import ReactApexChart from "react-apexcharts";
import Select from "react-select";
import { companies_details } from "../../../core/json/companiesdetails";
import PrimeDataTable from "../../../components/data-table";
import SearchFromApi from "../../../components/data-table/search";
import type { ApexOptions } from "apexcharts";
import TooltipIcons from "../../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import CommonDateRangePicker from "../../../components/date-range-picker/common-date-range-picker";
import { avatar30, company01 } from "../../../utils/imagepath";
type PasswordField = "password" | "confirmPassword";

const Companies = () => {
  const data = companies_details;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  
  const columns = [
    {
      header: "Company Name",
      field: "CompanyName",
      sortable: true,
      key: "CompanyName",
      body: (rowData: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-md border rounded-circle">
            <img
              src={`src/assets/img/company/${rowData.Image}`}
              className="img-fluid"
              alt="img"
            />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{rowData.CompanyName}</Link>
            </h6>
          </div>
        </div>
      ),
    },
    {
      header: "Email",
      field: "Email",
      sortable: true,
      key: "Email",
    },
    {
      header: "Account URL",
      field: "AccountURL",
      sortable: true,
      key: "AccountURL",
    },
    {
      header: "Plan",
      field: "Plan",
      sortable: true,
      key: "Plan",
      body: (rowData: any) => (
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 me-2">{rowData.Plan}</p>
          <Link
            to="#"
            data-bs-toggle="modal"
            className="badge badge-purple badge-xs"
            data-bs-target="#upgrade_info"
          >
            Upgrade
          </Link>
        </div>
      ),
    },
    {
      header: "Created Date",
      field: "CreatedDate",
      sortable: true,
      key: "CreatedDate",
    },
    {
      header: "Status",
      field: "Status",
      sortable: true,
      key: "Status",
      body: (rowData: any) => (
        <span
          className={`badge ${
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
        <div className="action-icon d-inline-flex align-items-center">
          <Link
            to="#"
            className="p-2 d-flex align-items-center border rounded me-2"
            data-bs-toggle="modal"
            data-bs-target="#company_detail"
          >
            <i className="ti ti-eye" />
          </Link>
          <Link
            to="#"
            className="p-2 d-flex align-items-center border rounded me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit_company"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link
            to="#"
            className="p-2 d-flex align-items-center border rounded"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
    },
  ];
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const planName = [
    { value: "Advanced", label: "Advanced" },
    { value: "Basic", label: "Basic" },
    { value: "Enterprise", label: "Enterprise" },
  ];
  const planType = [
    { value: "Monthly", label: "Monthly" },
    { value: "Yearly", label: "Yearly" },
  ];
  const currency = [
    { value: "USD", label: "USD" },
    { value: "Euro", label: "Euro" },
  ];
  const language = [
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
  ];
  const statusChoose = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const [totalChart] = useState<ApexOptions>({
    series: [
      {
        name: "Messages",
        data: [25, 66, 41, 12, 36, 9, 21],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0, // Start with 0 opacity (transparent)
        opacityTo: 0, // End with 0 opacity (transparent)
      },
    },
    chart: {
      foreColor: "#fff",
      type: "area",
      width: 50,
      toolbar: {
        show: !1,
      },
      zoom: {
        enabled: !1,
      },
      dropShadow: {
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.12,
        color: "#fff",
      },
      sparkline: {
        enabled: !0,
      },
    },
    markers: {
      size: 0,
      colors: ["#F26522"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "35%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      show: !0,
      width: 2.5,
      curve: "smooth",
    },
    colors: ["#F26522"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
      marker: {
        show: !1,
      },
    },
  });
  const [activeChart] = useState<ApexOptions>({
    series: [
      {
        name: "Active Company",
        data: [25, 40, 35, 20, 36, 9, 21],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0, // Start with 0 opacity (transparent)
        opacityTo: 0, // End with 0 opacity (transparent)
      },
    },
    chart: {
      foreColor: "#fff",
      type: "area",
      width: 50,
      toolbar: {
        show: !1,
      },
      zoom: {
        enabled: !1,
      },
      dropShadow: {
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.12,
        color: "#fff",
      },
      sparkline: {
        enabled: !0,
      },
    },
    markers: {
      size: 0,
      colors: ["#F26522"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "35%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      show: !0,
      width: 2.5,
      curve: "smooth",
    },
    colors: ["#F26522"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
      marker: {
        show: !1,
      },
    },
  });
  const [inactiveChart] = useState<ApexOptions>({
    series: [
      {
        name: "Inactive Company",
        data: [25, 10, 35, 5, 25, 28, 21],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0, // Start with 0 opacity (transparent)
        opacityTo: 0, // End with 0 opacity (transparent)
      },
    },
    chart: {
      foreColor: "#fff",
      type: "area",
      width: 50,
      toolbar: {
        show: !1,
      },
      zoom: {
        enabled: !1,
      },
      dropShadow: {
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.12,
        color: "#fff",
      },
      sparkline: {
        enabled: !0,
      },
    },
    markers: {
      size: 0,
      colors: ["#F26522"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "35%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      show: !0,
      width: 2.5,
      curve: "smooth",
    },
    colors: ["#F26522"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
      marker: {
        show: !1,
      },
    },
  });
  const [locationChart] = useState<ApexOptions>({
    series: [
      {
        name: "Inactive Company",
        data: [30, 40, 15, 23, 20, 23, 25],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0, // Start with 0 opacity (transparent)
        opacityTo: 0, // End with 0 opacity (transparent)
      },
    },
    chart: {
      foreColor: "#fff",
      type: "area",
      width: 50,
      toolbar: {
        show: !1,
      },
      zoom: {
        enabled: !1,
      },
      dropShadow: {
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.12,
        color: "#fff",
      },
      sparkline: {
        enabled: !0,
      },
    },
    markers: {
      size: 0,
      colors: ["#F26522"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "35%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      show: !0,
      width: 2.5,
      curve: "smooth",
    },
    colors: ["#F26522"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
      marker: {
        show: !1,
      },
    },
  });

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Companies</h4>
                <h6>Manage your companies</h6>
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
                data-bs-target="#add_company"
              >
                <i className="ti ti-circle-plus me-1"></i> Add Company
              </Link>
            </div>
          </div>

          <div className="row">
            {/* Total Companies */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <span className="avatar avatar-lg bg-primary flex-shrink-0">
                      <i className="ti ti-building fs-16" />
                    </span>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">
                        Total Companies
                      </p>
                      <h4>950</h4>
                    </div>
                  </div>
                  <ReactApexChart
                    options={totalChart}
                    series={totalChart.series}
                    type="area"
                    width={50}
                  />
                </div>
              </div>
            </div>
            {/* /Total Companies */}
            {/* Total Companies */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <span className="avatar avatar-lg bg-success flex-shrink-0">
                      <i className="ti ti-building fs-16" />
                    </span>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">
                        Active Companies
                      </p>
                      <h4>920</h4>
                    </div>
                  </div>
                  <ReactApexChart
                    options={activeChart}
                    series={activeChart.series}
                    type="area"
                    width={50}
                  />
                </div>
              </div>
            </div>
            {/* /Total Companies */}
            {/* Inactive Companies */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <span className="avatar avatar-lg bg-danger flex-shrink-0">
                      <i className="ti ti-building fs-16" />
                    </span>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">
                        Inactive Companies
                      </p>
                      <h4>30</h4>
                    </div>
                  </div>
                  <ReactApexChart
                    options={inactiveChart}
                    series={inactiveChart.series}
                    type="area"
                    width={50}
                  />
                </div>
              </div>
            </div>
            {/* /Inactive Companies */}
            {/* Company Location */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <span className="avatar avatar-lg bg-skyblue flex-shrink-0">
                      <i className="ti ti-map-pin-check fs-16" />
                    </span>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">
                        Company Location
                      </p>
                      <h4>180</h4>
                    </div>
                  </div>
                  <ReactApexChart
                    options={locationChart}
                    series={locationChart.series}
                    type="area"
                    width={50}
                  />
                </div>
              </div>
            </div>
            {/* /Company Location */}
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="me-3">
                  <div className="input-icon-end position-relative">
                    <CommonDateRangePicker />
                    <span className="input-icon-addon">
                      <i className="ti ti-chevron-down" />
                    </span>
                  </div>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Plan
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Advanced
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Basic
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Enterprise
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-3">
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
            <div className="card-body p-0">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={data}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={data.length}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedProducts}
                  onSelectionChange={(e: any) => setSelectedProducts(e.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
      {/* /Page Wrapper */}
      {/* Add Company */}
      <div className="modal fade" id="add_company">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Company</h4>
              <button
                type="button"
                className="btn-close custom-btn-close p-0"
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
                    <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                      <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                        <i className="ti ti-photo" />
                      </div>
                      <div className="profile-upload">
                        <div className="mb-2">
                          <h6 className="mb-1">Upload Profile Image</h6>
                          <p className="fs-12">Image should be below 4 mb</p>
                        </div>
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                            />
                          </div>
                          <Link to="#" className="btn btn-secondary btn-sm">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Name <span className="text-danger"> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Account URL</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger"> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Website</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.password ? "text" : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${
                            passwordVisibility.password
                              ? "ti-eye"
                              : "ti-eye-off"
                          }`}
                          onClick={() => togglePasswordVisibility("password")}
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Confirm Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.confirmPassword
                              ? "text"
                              : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${
                            passwordVisibility.confirmPassword
                              ? "ti-eye"
                              : "ti-eye-off"
                          }`}
                          onClick={() =>
                            togglePasswordVisibility("confirmPassword")
                          }
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Name <span className="text-danger"> *</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={planName}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Type <span className="text-danger"> *</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={planType}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Currency <span className="text-danger"> *</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={currency}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Language <span className="text-danger"> *</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={language}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">Status</label>
                      <Select
                        classNamePrefix="react-select"
                        options={statusChoose}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Add Company
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Company */}
      {/* Edit Company */}
      <div className="modal fade" id="edit_company">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Company</h4>
              <button
                type="button"
                className="btn-close custom-btn-close p-0"
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
                    <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                      <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                        <img
                          src={avatar30}
                          alt="img"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="profile-upload">
                        <div className="mb-2">
                          <h6 className="mb-1">Upload Profile Image</h6>
                          <p className="fs-12">Image should be below 4 mb</p>
                        </div>
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                            />
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="btn btn-secondary btn-sm"
                          >
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Name <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Stellar Dynamics"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="sophie@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Account URL</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="sd.example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="+1 895455450"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Website</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Admin Website"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.password ? "text" : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${
                            passwordVisibility.password
                              ? "ti-eye"
                              : "ti-eye-off"
                          }`}
                          onClick={() => togglePasswordVisibility("password")}
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Confirm Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.confirmPassword
                              ? "text"
                              : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${
                            passwordVisibility.confirmPassword
                              ? "ti-eye"
                              : "ti-eye-off"
                          }`}
                          onClick={() =>
                            togglePasswordVisibility("confirmPassword")
                          }
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Name <span className="text-danger"> *</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={planName}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Type <span className="text-danger"> *</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={planType}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Currency <span className="text-danger"> *</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={currency}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Language <span className="text-danger"> *</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={language}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">Status</label>
                      <Select
                        classNamePrefix="react-select"
                        options={statusChoose}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light me-2"
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
      {/* /Edit Company */}
      {/* Upgrade Information */}
      <div className="modal fade" id="upgrade_info">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Upgrade Package</h4>
              <button
                type="button"
                className="btn-close custom-btn-close p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="p-3 mb-1">
              <div className="rounded bg-light p-3">
                <h5 className="mb-3">Current Plan Details</h5>
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Company Name</p>
                      <p className="text-gray-9">BrightWave Innovations</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Plan Name</p>
                      <p className="text-gray-9">Advanced</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Plan Type</p>
                      <p className="text-gray-9">Monthly</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Price</p>
                      <p className="text-gray-9">200</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Register Date</p>
                      <p className="text-gray-9">12 Sep 2024</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Expiring On</p>
                      <p className="text-gray-9">11 Oct 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form>
              <div className="modal-body pb-0">
                <h5 className="mb-4">Change Plan</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Name <span className="text-danger">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={planName}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Type <span className="text-danger">*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={planType}
                        placeholder="Choose"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Ammount<span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Payment Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Next Payment Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Expiring On <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light me-2"
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
      {/* /Upgrade Information */}
      {/* Company Detail */}
      <div className="modal fade" id="company_detail">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Company Detail</h4>
              <button
                type="button"
                className="btn-close custom-btn-close p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="moday-body">
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center rounded bg-light p-3">
                  <div className="file-name-icon d-flex align-items-center">
                    <Link
                      to="#"
                      className="avatar avatar-md border rounded-circle flex-shrink-0 me-2"
                    >
                      <img src={company01} className="img-fluid" alt="img" />
                    </Link>
                    <div>
                      <p className="text-gray-9 fw-medium mb-0">
                        BrightWave Innovations
                      </p>
                      <p>michael@example.com</p>
                    </div>
                  </div>
                  <span className="badge badge-success">
                    <i className="ti ti-point-filled" />
                    Active
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-9 fw-medium">Basic Info</p>
                <div className="pb-1 border-bottom mb-4">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Account URL</p>
                        <p className="text-gray-9">bwi.example.com</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Phone Number</p>
                        <p className="text-gray-9">(163) 2459 315</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Website</p>
                        <p className="text-gray-9">www.exmple.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Currency</p>
                        <p className="text-gray-9">
                          United Stated Dollar (USD)
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Language</p>
                        <p className="text-gray-9">English</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Addresss</p>
                        <p className="text-gray-9">
                          3705 Lynn Avenue, Phelps, WI 54554
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-9 fw-medium">Plan Details</p>
                <div>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Plan Name</p>
                        <p className="text-gray-9">Advanced</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Plan Type</p>
                        <p className="text-gray-9">Monthly</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Price</p>
                        <p className="text-gray-9">$200</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Register Date</p>
                        <p className="text-gray-9">12 Sep 2024</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Expiring On</p>
                        <p className="text-gray-9">11 Oct 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Company Detail */}
      <>
        {/* Delete Modal */}
        <div className="modal fade" id="delete_modal">
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body text-center">
                <span className="avatar avatar-xl bg-danger-transparent rounded-circle text-danger mb-3">
                  <i className="ti ti-trash-x fs-36" />
                </span>
                <h4 className="mb-1">Confirm Delete</h4>
                <p className="mb-3">
                  You want to delete all the marked items, this cant be undone
                  once you delete.
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-secondary me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>
    </>
  );
};

export default Companies;
