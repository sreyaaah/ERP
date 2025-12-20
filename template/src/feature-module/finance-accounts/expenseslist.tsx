import  { useState } from "react";
import { Link } from "react-router-dom";
import { expenselist } from "../../core/json/expenselistdata";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import { Editor } from "primereact/editor";
import SearchFromApi from "../../components/data-table/search";

const ExpensesList = () => {
  const [text, setText] = useState("");

  const data = expenselist;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [date, setDate] = useState<Date | null>(new Date());
  const columns = [
    {
      header: "Reference",
      field: "reference",
    },
    {
      header: "CategoryName",
      field: "categoryName",
    },
    {
      header: "Description",
      field: "description",
    },
    {
      header: "Date",
      field: "date",
    },

    {
      header: "Amount",
      field: "amount",
    },

    {
      header: "Status",
      field: "status",
      body: (text: any) => (
        <span
          className={`badges status-badge fs-10 p-1 px-2 rounded-1 ${
            text?.status === "Approved" ? "" : "badge-pending"
          }`}
        >
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
            <Link className="me-2 p-2 mb-0" to="#">
              <i className="ti ti-eye" />
            </Link>
            <Link
              to="#"
              className="me-2 p-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#edit-units"
            >
              <i className="ti ti-edit" />
            </Link>
            <Link
              className="me-3 confirm-text p-2 mb-0"
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

  const options = [
    { value: "Active", label: "Approved" },
    { value: "InActive", label: "Pending" },
  ];
  const optionsModalOne = [
    { value: "choose", label: "Choose" },
    { value: "foodsSnacks", label: "Foods & Snacks" },
    { value: "employeeBenefits", label: "Employee Benefits" },
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
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Expenses</h4>
                <h6>Manage your Expenses</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#add-units"
                className="btn btn-primary"
              >
                <i className="feather icon-plus-circle me-2" />
                Add Expenses
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
                        Utilities
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Office Supplies
                      </Link>
                    </li>
                  </ul>
                </div>

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
                        Approved
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Pending
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

        <DeleteModal />
      </div>
      <>
        <div className="modal fade" id="add-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Add Expense</h4>
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
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Expense<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3 summer-description-box">
                          <label className="form-label">Description</label>
                          <Editor
                            value={text}
                            onTextChange={(e: any) => setText(e.htmlValue)}
                            style={{ height: "200px" }}
                          />
                          <p className="mt-1">Maximum 60 Words</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Category<span className="text-danger ms-1">*</span>
                          </label>

                          <CommonSelect
                            className="w-100"
                            options={optionsModalOne}
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label">
                          Date<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="mb-3 date-group mt-0">
                          <div className="input-groupicon calender-input">
                            <i className="feather icon-calendar info-img" />
                            <CommonDatePicker
                              value={date}
                              onChange={setDate}
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Amount<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Status<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={options}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
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
                      Add Expense
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="edit-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Edit Expense</h4>
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
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Expense<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Electricity Payment"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-3">
                        <div className="mb-3 summer-description-box">
                          <label className="form-label">Description</label>
                          <Editor
                            value={text}
                            onTextChange={(e: any) => setText(e.htmlValue)}
                            style={{ height: "200px" }}
                          />
                          <p className="mt-1">Maximum 60 Words</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Category<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={optionsModalOne}
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label">
                          Date<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="mb-3 date-group mt-0">
                          <div className="input-groupicon calender-input">
                            <i className="feather icon-calendar info-img" />
                            <CommonDatePicker
                              value={date}
                              onChange={setDate}
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Amount<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="$200"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Status<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            className="w-100"
                            options={options}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ExpensesList;
