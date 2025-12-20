import { useState } from "react";
import { Link } from "react-router-dom";
import SearchFromApi from "../../components/data-table/search";
import PrimeDataTable from "../../components/data-table";
import { pagesData } from "../../core/json/pages-data";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import DeleteModal from "../../components/delete-modal";

const PagesList = () => {
  const dataSource = pagesData;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedPages, setSelectedPages] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  const columns = [
    {
      header: "Page",
      field: "page",
      sortable: true,
      key: "page",
      body: (rowData: any) => (
        <h6 className="mb-0">{rowData.page}</h6>
      ),
    },
    {
      header: "Page Slug",
      field: "pageSlug",
      sortable: true,
      key: "pageSlug",
    },
    {
      header: "Last Edited",
      field: "lastEdited",
      sortable: true,
      key: "lastEdited",
    },
    {
      header: "Status",
      field: "status",
      sortable: true,
      key: "status",
      body: (rowData: any) => (
        <span className="badge badge-success d-inline-flex align-items-center badge-xs">
          <i className="ti ti-point-filled me-1" />
          {rowData.status}
        </span>
      ),
    },
    {
      header: "Actions",
      field: "actions",
      sortable: false,
      key: "actions",
      body: () => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <Link
              className="me-2 p-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-testimonial"
            >
              <i className="ti ti-edit" />
            </Link>
            <Link
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
              className="p-2"
              to="#"
            >
              <i className="ti ti-trash" />
            </Link>
          </div>
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
                <h4>Pages</h4>
                <h6>Manage your pages</h6>
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
                data-bs-target="#add-testimonial"
              >
                <i className="feather icon-plus-circle me-1" />
                Add Page
              </Link>
            </div>
          </div>
          {/* product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="search-set">
                 <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              </div>
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
            <div className="card-body">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={dataSource}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={dataSource.length}
                  searchQuery={searchQuery}
                  selectionMode="checkbox"
                  selection={selectedPages}
                  onSelectionChange={(e: any) => setSelectedPages(e.value)}
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
      <>
        {/* Add Testimonial */}
        <div className="modal fade" id="add-testimonial">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Page</h4>
                </div>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Title <span className="text-danger">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Slug <span className="text-danger">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Keywords <span className="text-danger">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label">Status</span>
                      <input
                        type="checkbox"
                        id="users6"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="users6" className="checktoggle mb-0" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Add Page
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Testimonial */}
        {/* Edit Testimonial */}
        <div className="modal fade" id="edit-testimonial">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Page</h4>
                </div>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="Products"
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Slug <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="products"
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Keywords <span className="text-danger">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label">Status</span>
                      <input
                        type="checkbox"
                        id="users7"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="users7" className="checktoggle mb-0" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Testimonial */}
        {/* delete modal */}
        <DeleteModal />
        {/* /delete modal */}
      </>
    </>
  );
};

export default PagesList;
