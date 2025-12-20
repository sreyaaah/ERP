
import { useState } from "react";
import { Link } from "react-router-dom";
import { leavedata } from "../../core/json/leavesdata";
import AddHolidays from "../../core/modals/hrm/addholidays";
import EditHolidays from "../../core/modals/hrm/editholidays";
import TableTopHead from "../../components/table-top-head";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import PrimeDataTable from "../../components/data-table";
import CommonFooter from "../../components/footer/commonFooter";

const Holidays = () => {
  const datas = leavedata;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [searchText] = useState("");
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const filteredData = datas.filter((entry: any) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });

  const columns = [
    {
      field: "name",
      header: "Name",
      sortable: true,
      sortFunction: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
      field: "date",
      header: "Date",
      sortable: true,
      sortFunction: (a: any, b: any) => a.date.length - b.date.length,
    },
    {
      field: "duration",
      header: "Duration",
      sortable: true,
      sortFunction: (a: any, b: any) => a.duration.length - b.duration.length,
    },
    {
      field: "createdon",
      header: "Created On",
      sortable: true,
      sortFunction: (a: any, b: any) => a.createdon.length - b.createdon.length,
    },
    {
      field: "status",
      header: "Status",
      sortable: true,
      sortFunction: (a: any, b: any) => a.status.length - b.status.length,
      body: (rowData: any) => (
        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
          <i className="ti ti-point-filled me-1"></i>
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
                <h4>Holiday</h4>
                <h6>Manage your holidays</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary custom-btn"
                data-bs-toggle="modal"
                data-bs-target="#add-holiday"
              >
                <i className="feather icon-plus-circle me-2" />
                Add Holiday
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
                    Status
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
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        New Joiners
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body pb-0">
              {/* product list */}
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
              {/* /product list */}
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
      <AddHolidays />
      <EditHolidays />
    <DeleteModal />
    </div>
  );
};

export default Holidays;
