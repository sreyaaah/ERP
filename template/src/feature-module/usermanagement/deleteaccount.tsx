import { useState } from "react";
import { Link } from "react-router-dom";
import SearchFromApi from "../../components/data-table/search";
import PrimeDataTable from "../../components/data-table";
import { deleteAccountData } from "../../core/json/delete-account-list-data";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

const DeleteAccount = () => {
  const [listData, _setListData] = useState<any[]>(deleteAccountData);
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
  
    {
      header: "User Name",
      field: "username",
      key: "username",
      body: (row: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={row.img} alt="user" />
          </Link>
          <div>
            <Link to="#">{row.username}</Link>
          </div>
        </div>
      ),
    },
    {
      header: "Requisition Date",
      field: "requisitionDate",
      key: "requisitionDate",
    },
    {
      header: "Delete Request Date",
      field: "deleteRequestDate",
      key: "deleteRequestDate",
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (_row: any) => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="p-2 d-flex align-items-center p-1 border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            <i className="feather icon-trash-2"></i>
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
                <h4>Delete Account Request</h4>
              </div>
            </div>
             <ul className="table-top-head">
              <TooltipIcons />
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3"></div>
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
      {/* Delete Product */}
      <div className="modal fade modal-default" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="success-wrap text-center">
                <form action="delete-account.html">
                  <div className="icon-success bg-danger-transparent text-danger mb-2">
                    <i className="ti ti-trash" />
                  </div>
                  <h3 className="mb-2">Delete Request Account</h3>
                  <p className="fs-16 mb-3">
                    Are you sure you want to delete this account?
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                    <button
                      type="button"
                      className="btn btn-md btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-md btn-primary">
                      Yes, Delete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Product */}
    </div>
  );
};

export default DeleteAccount;
