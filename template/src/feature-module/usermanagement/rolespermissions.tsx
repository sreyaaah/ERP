import { useState } from "react";
import { Link } from "react-router-dom";
import AddRole from "../../core/modals/usermanagement/addrole";
import EditRole from "../../core/modals/usermanagement/editrole";
import { all_routes } from "../../routes/all_routes";
import PrimeDataTable from "../../components/data-table";
import { rolesList } from "../../core/json/roles-permission-data";
import SearchFromApi from "../../components/data-table/search";
import DeleteModal from "../../components/delete-modal";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

const RolesPermissions = () => {
  const [listData, _setListData] = useState<any[]>(rolesList);
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

  const columns = [
    { header: "Role", field: "role", key: "role" },
    { header: "Created Date", field: "createdDate", key: "createdDate" },
    {
      header: "Status",
      field: "status",
      key: "status",
      body: (row: any) => (
        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
          <i className="ti ti-point-filled me-1"></i>
          {row.status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (_row: any) => (
        <div className="action-icon d-inline-flex">
          <Link
            to={all_routes.permissions}
            className="me-2 d-flex align-items-center p-2 border rounded"
          >
            <i className="ti ti-shield"></i>
          </Link>
          <Link
            to="#"
            className="me-2 d-flex align-items-center p-2 border rounded"
            data-bs-toggle="modal"
            data-bs-target="#edit-role"
          >
            <i className="ti ti-edit"></i>
          </Link>
          <Link
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="d-flex align-items-center p-2 border rounded"
          >
            <i className="ti ti-trash"></i>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Roles & Permission</h4>
                <h6>Manage your roles</h6>
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
                data-bs-target="#add-units"
              >
                <i className="feather icon-plus-circle me-2" />
                Add Role
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
          {/* /product list */}
        </div>
      </div>
      <AddRole />
      <EditRole />
      <DeleteModal />
    </>
  );
};

export default RolesPermissions;
