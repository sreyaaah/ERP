import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../../components/footer/commonFooter";
import TableTopHead from "../../../components/table-top-head";
import PrimeDataTable from "../../../components/data-table";
import { domainData } from "../../../core/json/domain-data";
import { company01 } from "../../../utils/imagepath";
import SearchFromApi from "../../../components/data-table/search";
import DeleteModal from "../../../components/delete-modal";

const Domain = () => {
  const [listData, _setListData] = useState<any[]>(domainData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const columns = [
    {
      header: "Name",
      field: "name",
      key: "name",
      body: (row: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-md border rounded-circle">
            <img src={row.img} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{row.name}</Link>
            </h6>
          </div>
        </div>
      ),
    },
    { header: "Domain URL", field: "domainUrl", key: "domainUrl" },
    { header: "Plan", field: "plan", key: "plan" },
    { header: "Created Date", field: "createdDate", key: "createdDate" },
    {
      header: "Status",
      field: "status",
      key: "status",
      body: (row: any) => {
        let badgeClass = "";
        let icon: any = "";
        if (row.status === "Approved") {
          badgeClass = "badge-soft-success";
          icon = <i className="ti ti-checks me-1"></i>;
        } else if (row.status === "Pending") {
          badgeClass = "badge-soft-skyblue";
          icon = <i className="ti ti-clock me-1"></i>;
        } else {
          badgeClass = "badge-soft-danger";
          icon = <i className="ti ti-x me-1"></i>;
        }
        return (
          <Link
            to="#"
            className={`badge ${badgeClass} d-inline-flex align-items-center badge-xs shadow-none`}
          >
            {icon}
            {row.status}
          </Link>
        );
      },
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (row: any) => (
        <div className="action-icon d-inline-flex align-items-center">
          <Link
            to="#"
            className="p-2 d-flex align-items-center border rounded me-2"
            data-bs-toggle="modal"
            data-bs-target={
              row.status === "Approved"
                ? "#domain_approved"
                : row.status === "Pending"
                  ? "#domain_pending"
                  : "#domain_rejected"
            }
          >
            <i className="ti ti-eye"></i>
          </Link>
          <Link
            to="#"
            className="p-2 d-flex align-items-center border rounded"
             data-bs-toggle="modal" data-bs-target="#delete-modal"
          >
            <i className="ti ti-trash"></i>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Domain</h4>
                <h6>Manage your domain</h6>
              </div>
            </div>
            <TableTopHead />
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Plan Type
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Monthly
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Yearly
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
                        Approved
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Pending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Rejected
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
                  data={listData}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={totalRecords}
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
      {/* Domain Details */}
      <div className="modal fade" id="domain_approved">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title d-flex align-items-center">
                Domain Detail
                <span className="badge bg-outline-success d-inline-flex align-items-center badge-xs ms-2">
                  <i className="ti ti-point-filled" />
                  Approved
                </span>
              </h4>
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
                    <div className="mb-3">
                      <div className="p-3 mb-3 br-5 bg-transparent-light">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <img
                                  src={company01}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-14">
                                  <Link to="#">BrightWave Innovations</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Name</span>
                      <h6 className="fw-normal">Advanced</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Type</span>
                      <h6 className="fw-normal">Monthly</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Account URL</span>
                      <h6 className="fw-normal">bwi.example.com</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Price</span>
                      <h6 className="fw-normal">200</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Register Date</span>
                      <h6 className="fw-normal">12 Sep 2024</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Expiring On</span>
                      <h6 className="fw-normal">11 Oct 2024</h6>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Domain Details */}
      {/* Domain Details */}
      <div className="modal fade" id="domain_pending">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title d-flex align-items-center">
                Domain Detail
                <span className="badge bg-outline-skyblue d-inline-flex align-items-center badge-xs ms-2">
                  <i className="ti ti-point-filled" />
                  Pending
                </span>
              </h4>
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
                    <div className="mb-3">
                      <div className="p-3 mb-3 br-5 bg-transparent-light">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <img
                                  src={company01}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-14">
                                  <Link to="#">BrightWave Innovations</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 text-end">
                            <span className="badge badge-success d-inline-flex align-items-center badge-xs ms-2">
                              <i className="ti ti-check me-1" />
                              Approve
                            </span>
                            <span className="badge badge-danger d-inline-flex align-items-center badge-xs ms-2">
                              <i className="ti ti-x me-1" />
                              Reject
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Name</span>
                      <h6 className="fw-normal">Advanced</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Type</span>
                      <h6 className="fw-normal">Monthly</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Account URL</span>
                      <h6 className="fw-normal">bwi.example.com</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Price</span>
                      <h6 className="fw-normal">200</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Register Date</span>
                      <h6 className="fw-normal">12 Sep 2024</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Expiring On</span>
                      <h6 className="fw-normal">11 Oct 2024</h6>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Domain Details */}
      {/* Domain Details */}
      <div className="modal fade" id="domain_rejected">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title d-flex align-items-center">
                Domain Detail
                <span className="badge bg-outline-danger d-inline-flex align-items-center badge-xs ms-2">
                  <i className="ti ti-point-filled" />
                  Rejected
                </span>
              </h4>
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
                    <div className="mb-3">
                      <div className="p-3 mb-3 br-5 bg-transparent-light">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <img
                                  src={company01}
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-14">
                                  <Link to="#">BrightWave Innovations</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Name</span>
                      <h6 className="fw-normal">Advanced</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Type</span>
                      <h6 className="fw-normal">Monthly</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Account URL</span>
                      <h6 className="fw-normal">bwi.example.com</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Price</span>
                      <h6 className="fw-normal">200</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Register Date</span>
                      <h6 className="fw-normal">12 Sep 2024</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Expiring On</span>
                      <h6 className="fw-normal">11 Oct 2024</h6>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Domain Details */}
    <DeleteModal />
    </>
  );
};

export default Domain;
