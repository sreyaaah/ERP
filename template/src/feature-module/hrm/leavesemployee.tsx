import  { useState } from "react";
import { Link } from "react-router-dom";
import AddLeaveEmployee from "../../core/modals/hrm/addleaveemployee";
import EditLeaveEmployee from "../../core/modals/hrm/editleaveemployee";
import { leavesEmployee } from "../../core/json/leavesemployee";

import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";

const LeavesEmployee = () => {
  const leavesEmployeedata = leavesEmployee;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [date3, setDate3] = useState<Date | null>(new Date());

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const columns = [
    {
      field: "empId",
      header: "EmpId",
      sortable: true,
    },
    {
      field: "type",
      header: "Type",
      sortable: true,
    },
    {
      field: "date",
      header: "Date",
      sortable: true,
    },
    {
      field: "duration",
      header: "Duration",
      sortable: true,
    },
    {
      field: "appliedOn",
      header: "AppliedOn",
      sortable: true,
    },
    {
      field: "reason",
      header: "Reason",
      sortable: true,
    },
    {
      field: "approval",
      header: "Status",
      sortable: true,
      body: (rowData: any) => (
        <span
          className={`badge d-inline-flex align-items-center badge-xs ${
            rowData.approval === "Applied"
              ? "badge-purple"
              : rowData.approval === "Approved"
                ? "badge-success"
                : "badge-danger"
          }`}
        >
          <i className="ti ti-point-filled me-1" />
          {rowData.approval}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (_row: any) => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-customer"
          >
            <i  className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal" data-bs-target="#delete-modal"
          >
            <i  className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  const [searchText] = useState("");
  const filteredData = leavesEmployeedata.filter((entry: any) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Leaves</h4>
                <h6>Manage your Leaves</h6>
              </div>
            </div>
          <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-leave"
              >
                Apply Leave
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
                <div className="me-2 date-select-small">
                  <div className="input-addon-left position-relative attendance-datepicker">
                    <CommonDatePicker
                      value={date3}
                      onChange={setDate3}
                    />
                    <span className="cus-icon">
                      <i className="feather icon-calendar" />
                    </span>
                  </div>
                </div>
                <div className="dropdown">
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
                        Approved
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Rejected
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={filteredData}
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
        <CommonFooter />
      </div>
      <AddLeaveEmployee />
      <EditLeaveEmployee />
<DeleteModal />
    </div>
  );
};

export default LeavesEmployee;
