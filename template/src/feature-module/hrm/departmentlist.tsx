import  { useState } from "react";

import { Link } from "react-router-dom";

import { all_routes } from "../../routes/all_routes";
import { useSelector } from "react-redux";
import AddDepartmentList from "../../core/modals/hrm/adddepartmentlist";
import EditDepartmentList from "../../core/modals/hrm/editdepartmentlist";
import CommonFooter from "../../components/footer/commonFooter";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import PrimeDataTable from "../../components/data-table";
import { avatar15, avatar16, avatar18, avatar_17 } from "../../utils/imagepath";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";

const DepartmentList = () => {
  const route = all_routes;
  const dataSource = useSelector(
    (state: any) => state.rootReducer.departmentlist_data
  );

  const columns = [
    {
      header: "Department",
      field: "department",
    },
    {
      header: "HOD",
      field: "hod",
    },
    {
      header: "HOD",
      field: "hod",
      body: (text: any) => {
        console.log("HODATATATA", text);
        return (
          <span className="userimgname">
            <Link to="/profile" className="avatar avatar-md">
              <img alt="" src={text?.img} className="product-img" />
            </Link>
            <Link to="/profile">{text?.hod}</Link>
          </span>
        );
      },
    },
    {
      header: "Members",
      field: "members",
      body: () => (
        <div className="d-flex align-items-center justify-content-between">
          <div className="avatar-list-stacked avatar-group-sm">
            <span className="avatar avatar-rounded">
              <img className="border border-white" src={avatar15} alt="img" />
            </span>
            <span className="avatar avatar-rounded">
              <img className="border border-white" src={avatar16} alt="img" />
            </span>
            <span className="avatar avatar-rounded">
              <img className="border border-white" src={avatar18} alt="img" />
            </span>
            <Link
              className="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative"
              to="#"
            >
              <img src={avatar_17} alt="img" />
              <span className="position-absolute top-50 start-50 translate-middle text-center">
                +2
              </span>
            </Link>
          </div>
        </div>
      ),
    },
    {
      header: "Total Members",
      field: "totalmembers",
    },

    {
      header: "Creaded On",
      field: "creadedon",
    },
    {
      header: "Status",
      field: "status",
      body: (text: any) => (
        <span
          className={`badge d-inline-flex align-items-center badge-xs ${
            text?.status === "Active" ? "badge-success" : "badge-danger"
          }`}
        >
          <i className="ti ti-point-filled me-1"></i>
          {text?.status}
        </span>
      ),
    },

    {
      header: "Actions",
      field: "actions",
      key: "actions",
      body: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-department"
            >
              <i className="ti ti-edit" />
            </Link>
            <Link
              className="confirm-text p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
            >
              <i className="ti ti-trash" />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(dataSource.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Departments</h4>
                <h6>Manage your departments</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                <div className="d-flex me-2 pe-2 border-end">
                  <Link
                    to={route.departmentlist}
                    className="btn-list active bg-primary me-2"
                  >
                    <i className="feather icon-list feather-user text-white" />
                  </Link>
                  <Link to={route.departmentgrid} className="btn-grid me-2">
                    <i className="feather icon-grid feather-user" />
                  </Link>
                </div>
              </li>
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-department"
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Department
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
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        New Joiners
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
                  totalRecords={totalRecords}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
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
      <AddDepartmentList />
      <EditDepartmentList />
      <>
        {/* delete modal */}
       <DeleteModal />
        {/* /delete modal */}
      </>
    </div>
  );
};

export default DepartmentList;
