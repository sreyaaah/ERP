import { useState } from "react";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../../components/data-table";
import SearchFromApi from "../../../components/data-table/search";
import TooltipIcons from "../../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";

const BlogCategories = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const data = [
    {
      Category: "Evlovution",
      Created_Date: "12 Sep 2024",
      Status: "Active",
    },
    {
      Category: "Guide",
      Created_Date: "24 Oct 2024",
      Status: "Active",
    },
    {
      Category: "Security",
      Created_Date: "18 Feb 2024",
      Status: "Active",
    },
    {
      Category: "Recruitment",
      Created_Date: "17 Oct 2024",
      Status: "Active",
    },
    {
      Category: "Payroll",
      Created_Date: "20 Jul 2024",
      Status: "Active",
    },
    {
      Category: "Benefits",
      Created_Date: "10 Apr 2024",
      Status: "Active",
    },
    {
      Category: "Employee",
      Created_Date: "29 Aug 2024",
      Status: "Active",
    },
    {
      Category: "Onboarding",
      Created_Date: "22 Feb 2024",
      Status: "Active",
    },
    {
      Category: "Implementation",
      Created_Date: "03 Nov 2024",
      Status: "Active",
    },
    {
      Category: "Management",
      Created_Date: "17 Dec 2024",
      Status: "Active",
    },
  ];

  const columns = [
    {
      header: "Category",
      field: "Category",
    },
    {
      header: "Created Date",
      field: "Created_Date",
    },

    {
      header: "Status",
      field: "Status",
      body: () => (
        <>
          <span
            className={` badge badge-success d-inline-flex align-items-center badge-xs`}
          >
            <i className="ti ti-point-filled me-1" />
            Active
          </span>
        </>
      ),
    },

    {
      header: "",
      field: "action",
      sortable: false,
      body: () => (
        <div className="action-icon d-inline-flex">
          <Link
            to="#"
            className="p-2 d-flex align-items-center border rounded me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit_blog-category"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
            className="p-2 d-flex align-items-center border rounded"
          >
            <i className="ti ti-trash" />
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
                <h4>Blogs</h4>
                <h6>Manage your blogs</h6>
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
                data-bs-target="#add_blog-category"
              >
                <i className="feather icon-plus-circle me-1" />
                Add Categories
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
            <div className="card-body p-0">
              <div className=" table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={data}
                  totalRecords={10}
                  rows={10}
                  setRows={() => {}}
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
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0 text-gray-9">
            2014-2025 © DreamsPOS. All Right Reserved
          </p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* Add Tag */}
      <div className="modal fade" id="add_blog-category">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Category</h4>
              <button
                type="button"
                className="btn-close custom-btn-close p-0 p-0"
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
                      <label className="form-label">
                        Category<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        className="input-tags form-control"
                        type="text"
                        data-role="tagsinput"
                        name="Label"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <label className="form-label">Status</label>
                      <label className="switch">
                        <input type="checkbox" checked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary border me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Add Tag
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Tag */}
      {/* Edit Tag */}
      <div className="modal fade" id="edit_blog-category">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Category</h4>
              <button
                type="button"
                className="btn-close custom-btn-close p-0 p-0"
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
                      <label className="form-label">
                        Category<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        className="input-tags form-control"
                        type="text"
                        data-role="tagsinput"
                        name="Label"
                        defaultValue="Innovations"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <label className="form-label">Status</label>
                      <label className="switch">
                        <input type="checkbox" checked />
                        <span className="slider round" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary border me-2"
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
      {/* /Edit Tag */}

      {/* Delete Modal */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-xl bg-soft-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-36" />
              </span>
              <h4 className="mb-1">Delete Category</h4>
              <p className="mb-3">Are you sure you want to delete category?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-secondary me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </>
  );
};

export default BlogCategories;
