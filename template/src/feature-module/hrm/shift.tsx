import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import AddShift from "../../core/modals/hrm/addshift";
import EditShift from "../../core/modals/hrm/editshift";
import TableTopHead from "../../components/table-top-head";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";

export const shiftlistdata = [
  {
    id: 1,
    shiftname: "Fixed",
    time: "09:00 AM - 6:00 PM",
    weekoff: "Sunday, Monday",
    createdon: "04 Aug 2023",
    status: "Active",
  },
  {
    id: 2,
    shiftname: "Rotating",
    time: "06:00 AM - 3:00 PM",
    weekoff: "Saturday, Sunday",
    createdon: "21 July 2023",
    status: "Inactive",
  },
  {
    id: 3,
    shiftname: "Split",
    time: "03:00 AM - 9:00 PM",
    weekoff: "Tuesday, Saturday",
    createdon: "31 Jan 2022",
    status: "Active",
  },
  {
    id: 4,
    shiftname: "On-Call",
    time: "09:00 AM - 6:00 PM",
    weekoff: "Monday",
    createdon: "15 May 2023",
    status: "Active",
  },
  {
    id: 5,
    shiftname: "Weekend",
    time: "06:00 AM - 3:00 PM",
    weekoff: "Friday",
    createdon: "04 Aug 2023",
    status: "Active",
  },
];

const Shift = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [_searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const columns = [
    {
      field: "shiftname",
      header: "Shift Name",
      sortable: true,
    },
    {
      field: "time",
      header: "Time",
      sortable: true,
    },
    {
      field: "weekoff",
      header: "Week Off",
      sortable: true,
    },
    {
      field: "createdon",
      header: "Created On",
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      sortable: true,
      body: (rowData: any) => (
        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
          {rowData.status}
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

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Shifts</h4>
                <h6>Manage your shifts</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-shift"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Shift
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
            <div className="card-body">
              <div className="table-responsive">
                {/* <Table columns={columns} dataSource={shiftlistdata} /> */}
                <PrimeDataTable
                  column={columns}
                  data={shiftlistdata}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={totalRecords}
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <AddShift />
      <EditShift />
    <DeleteModal />
    </div>
  );
};

export default Shift;
