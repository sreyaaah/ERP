import { useState } from "react";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../components/data-table";
import SearchFromApi from "../../components/data-table/search";
import TableTopHead from "../../components/table-top-head";
import DeleteModal from "../../components/delete-modal";

const Faq = () => {
  const data = [
    {
      Questions: "What is a POS platform?",
      Answers:
        "A software system that processes sales, manages inventory, and handles transactions.	",
      Category: "General",
    },
    {
      Questions: "Who uses it?",
      Answers: "Retailers, restaurants, and service businesses.",
      Category: "General",
    },
    {
      Questions: "What are the key features?",
      Answers:
        "Billing, inventory tracking, CRM, employee management, and reports.",
      Category: "Features",
    },
    {
      Questions: "Does it support multiple payment methods?",
      Answers:
        "Yes, including cash, credit/debit cards, mobile wallets, and online payments.",
      Category: "Features",
    },
    {
      Questions: "Does it support barcode scanning?",
      Answers: "Yes, barcode scanners can be integrated for faster checkouts.",
      Category: "Features",
    },
    {
      Questions: "Does it work with thermal receipt printers?",
      Answers:
        "Yes, many POS platforms support thermal and standard receipt printers.",
      Category: "Hardware",
    },
    {
      Questions: "Is a POS platform secure?",
      Answers:
        "Yes, it uses encryption, authentication, and secure payment processing.",
      Category: "Secure",
    },
    {
      Questions: "Can a POS platform track inventory?",
      Answers:
        "Yes, it helps track stock levels, manage suppliers, and set reorder alerts.",
      Category: "Features",
    },
    {
      Questions: "Can a POS platform generate reports?",
      Answers:
        "Yes, it provides sales, inventory, and customer analytics reports.",
      Category: "Australia",
    },
  ];
  const columns = [
    {
      header: "Questions",
      field: "Questions",
    },
    {
      header: "Answers",
      field: "Answers",
    },
    {
      header: "Category",
      field: "Category",
    },

    {
      header: "",
      field: "action",
      className: "action-table-data",
      sortable: false,
      body: () => (
        <div className="edit-delete-action">
          <Link
            className="me-2 p-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-faq"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link
            className="p-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(data.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>FAQ</h4>
                <h6>Manage your FAQ</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-faq"
              >
                <i className="feather icon-plus-circle me-1" />
                Add FAQ
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
                    Category
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        General
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Hardware
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
            <div className="card-body p-0">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={data}
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
      {/* Add FAQ */}
      <div className="modal fade" id="add-faq">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Faq</h4>
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
                  <div className="mb-3">
                    <label className="form-label">
                      Category <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Question <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Answer <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows={3}
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
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Add Faq
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add FAQ */}
      {/* Edit FAQ */}
      <div className="modal fade" id="edit-faq">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Edit Faq</h4>
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
                  <div className="mb-3">
                    <label className="form-label">
                      Category <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="General"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Question <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="What is a POS platform?"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Answer <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={
                        "A software system that processes sales, manages inventory, and handles transactions."
                      }
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
                  className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit FAQ */}
      {/* Delete Modal */}
     <DeleteModal />
      {/* /Delete Modal */}
    </>
  );
};

export default Faq;
