import { useState } from "react";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../../components/data-table";
import SearchFromApi from "../../../components/data-table/search";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import TooltipIcons from "../../../components/tooltip-content/tooltipIcons";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";

const BlogTags = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const data = [
    {
      Tag: "PointOfSale",
      Created_Date: "12 Sep 2024",
    },
    {
      Tag: "Business",
      Created_Date: "24 Oct 2024",
    },
    {
      Tag: "RetailTech",
      Created_Date: "18 Feb 2024",
    },
    {
      Tag: "POSIntegration",
      Created_Date: "17 Oct 2024",
    },
    {
      Tag: "Payments",
      Created_Date: "20 Jul 2024",
    },
    {
      Tag: "Software",
      Created_Date: "10 Apr 2024",
    },
    {
      Tag: "Software Tips",
      Created_Date: "29 Aug 2024",
    },
    {
      Tag: "Features",
      Created_Date: "22 Feb 2024",
    },
    {
      Tag: "Budgeting",
      Created_Date: "03 Nov 2024",
    },
    {
      Tag: "Benefits",
      Created_Date: "17 Dec 2024",
    },
  ];
  const columns = [
    {
      header: "Tag",
      field: "Tag",
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
          <span className={` bg-success fs-10 text-white p-1 rounded`}>
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
            data-bs-target="#edit_blog-tags"
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
                <h4>Blog Tags</h4>
                <h6>Manage your blog tags</h6>
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
                data-bs-target="#add_blog-tags"
              >
                <i className="feather icon-plus-circle me-1" />
                Add Tag
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
                  rows={10}
                  setRows={() => {}}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={10}
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
      {/* Add Tag */}
      <div className="modal fade" id="add_blog-tags">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Tag</h4>
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
                        Tag<span className="text-danger ms-1">*</span>
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
      <div className="modal fade" id="edit_blog-tags">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">EditTag</h4>
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
                        Tag<span className="text-danger ms-1">*</span>
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Tag */}
      {/* Delete Modal */}

      {/* delete modal */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
                  Delete Tag
                </h4>
                <p className="text-gray-6 mb-0 fs-16">
                  Are you sure you want to delete tag?
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
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
                    Yes Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}

      {/* /Delete Modal */}
    </>
  );
};

export default BlogTags;
