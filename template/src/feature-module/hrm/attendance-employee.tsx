import { useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { hand1, timesBigIcon } from "../../utils/imagepath/index";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import SearchFromApi from "../../components/data-table/search";
const AttendanceEmployee = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(
    undefined
  );
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const dataSource = useSelector(
    (state: any) => state.rootReducer.attendenceemployee_data
  );

  const columns = [
    {
      field: "date",
      header: "Date",
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      sortable: true,
      body: (rowData: any) => (
        <span
          className={`badge d-inline-flex align-items-center badge-xs ${
            rowData.status === "Present"
              ? "badge-success"
              : rowData.status === "Holiday"
              ? "badge-purple"
              : "badge-danger"
          }`}
        >
          <i className="ti ti-point-filled me-1"></i> {rowData.status}
        </span>
      ),
    },
    {
      field: "clockin",
      header: "Clock In",
      sortable: true,
    },
    {
      field: "clockout",
      header: "Clock Out",
      sortable: true,
    },
    {
      field: "production",
      header: "Production",
      sortable: true,
    },
    {
      field: "break",
      header: "Break",
      sortable: true,
    },
    {
      field: "overtime",
      header: "OverTime",
      sortable: true,
    },
    {
      field: "progress",
      header: "Progress",
      body: (rowData: any) => (
        <div>
          {rowData.progress && rowData.progress.length > 0 ? (
            <div className="progress attendance">
              {rowData.progress.map((value: number, index: number) => (
                <div
                  key={index}
                  className={`progress-bar ${
                    index === 0
                      ? "progress-bar-success"
                      : index === 1
                      ? "progress-bar-warning"
                      : "progress-bar-danger"
                  }`}
                  role="progressbar"
                  style={{ width: `${value}%` }}
                ></div>
              ))}
            </div>
          ) : null}
        </div>
      ),
    },
    {
      field: "totalhours",
      header: "TotalHours",
      sortable: true,
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="attendance-header">
            <div className="attendance-content">
              <img src={hand1} className="hand-img" alt="img" />
              <h3>
                Good Morning, <span>John Smilga</span>
              </h3>
            </div>
            <div>
              <TableTopHead />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-12 d-flex">
              <div className="card w-100 border-0">
                <div className="card-body">
                  <h5 className="mb-3 pb-3 border-bottom d-flex justify-content-between align-items-center fs-18">
                    Attendance
                    <span className="text-purple fs-14">22 Aug 2023</span>
                  </h5>
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-2">
                      <img src={timesBigIcon} alt="time-img" />
                    </div>
                    <div>
                      <h2>05:45:22</h2>
                      <p>Current Time</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="btn btn-primary w-100 me-2">
                      Clock Out
                    </Link>
                    <Link to="#" className="btn btn-secondary me-2 w-100">
                      Break
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 d-flex">
              <div className="card w-100 border-0">
                <div className="card-body">
                  <h5 className="border-bottom pb-3 mb-3">
                    Days Overview This Month
                  </h5>
                  <div className="row gy-3">
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-primary-transparent fw-bold fs-20 mb-2 mx-auto">
                          31
                        </span>
                        <p className="fs-14">
                          Total Working <br /> Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-danger-transparent fw-bold fs-20 mb-2 mx-auto">
                          05
                        </span>
                        <p className="fs-14">
                          Abesent <br />
                          Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-purple-transparent text-purple fw-bold fs-20 mb-2 mx-auto">
                          28
                        </span>
                        <p className="fs-14">
                          Present <br />
                          Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-warning-transparent fw-bold fs-20 mb-2 mx-auto">
                          02
                        </span>
                        <p className="fs-14">
                          Half
                          <br /> Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-cyan-transparent text-cyan fw-bold fs-20 mb-2 mx-auto">
                          01
                        </span>
                        <p className="fs-14">
                          Late <br />
                          Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-success-transparent text-success fw-bold fs-20 mb-2 mx-auto">
                          02
                        </span>
                        <p className="fs-14">Holidays</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    Select Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Present
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Absent
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Holiday
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
                <PrimeDataTable
                  column={columns}
                  data={dataSource}
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
          {/* /product list */}
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
    </div>
  );
};

export default AttendanceEmployee;
