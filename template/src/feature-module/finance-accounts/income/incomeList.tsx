import { useState } from "react";
import { Link } from "react-router-dom";
import PrimeDataTable from "../../../components/data-table";
import { incomelists } from "../../../core/json/incomelist";
import TableTopHead from "../../../components/table-top-head";

import CommonSelect from "../../../components/select/common-select";
import CommonDateRangePicker from "../../../components/date-range-picker/common-date-range-picker";
import DeleteModal from "../../../components/delete-modal";
import SearchFromApi from "../../../components/data-table/search";

const IncomeList = () => {
  const dataSource = incomelists;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const columns = [
    {
      header: "Date",
      field: "Date",
    },

    {
      header: "Reference",
      field: "Reference",
    },
    {
      header: "Store",
      field: "Store",
    },
    {
      header: "Category",
      field: "Category",
    },
    {
      header: "Notes",
      field: "Notes",
    },
    {
      header: "Amount",
      field: "Amount",
    },

    {
      header: "",
      field: "actions",
      key: "actions",
      className: "action-table-data",
      body: () => (
        <div className="edit-delete-action">
          <Link
            to="#"
            className="me-2 p-2 mb-0"
            data-bs-toggle="modal"
            data-bs-target="#edit-units"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="me-0 p-2 mb-0"
            to="#"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
      sortable: false,
    },
  ];

  const Category = [
    { label: "Foreign investment", value: "1" },
    { label: "Product Export", value: "2" },
  ];
  const Store = [
    { label: "Foreign investment", value: "1" },
    { label: "Product Export", value: "2" },
  ];
  const Account = [
    { label: "Approved", value: "1" },
    { label: "Approved", value: "2" },
  ];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(dataSource.length);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(
    undefined
  );
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
                <h4>Income</h4>
                <h6>Manage your Income</h6>
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
                Add Income
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
                  <div className="input-groupicon calender-input balance-sheet-date">
                    <i className="feather icon-calendar" />
                    <CommonDateRangePicker />
                  </div>
                </div>
                <div className="dropdown">
                  <Link
                    to="#;"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Store
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#;" className="dropdown-item rounded-1">
                        Distribution center
                      </Link>
                    </li>
                    <li>
                      <Link to="#;" className="dropdown-item rounded-1">
                        Intelligent warehouse
                      </Link>
                    </li>
                    <li>
                      <Link to="#;" className="dropdown-item rounded-1">
                        Mahin Logistics
                      </Link>
                    </li>
                    <li>
                      <Link to="#;" className="dropdown-item rounded-1">
                        Allcargo Logistics
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body pb-0">
              <div className=" table-responsive">
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
                />{" "}
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
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Income</h4>
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
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Date<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <i className="feather icon-plus-calendar info-img" />
                            <input
                              type="text"
                              className="datetimepicker form-control p-2"
                              placeholder="24 Dec 2024"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Category<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={Category}
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Store<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Store}
                          value={selectedStore}
                          onChange={(e) => setSelectedStore(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Amount<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="$200"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Account<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={Account}
                          value={selectedAccount}
                          onChange={(e) => setSelectedAccount(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="summer-description-box">
                          <label className="form-label">Description</label>
                          <div id="summernote">Electricity Bill</div>
                          <p className="mt-1">Maximum 60 Words</p>
                        </div>
                      </div>
                    </div>
                  </form>
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
                    Add Income
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
                    <h4>Edit Expense Category</h4>
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
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Date<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-groupicon calender-input">
                            <i className="feather icon-plus-calendar info-img" />
                            <input
                              type="text"
                              className="datetimepicker form-control p-2"
                              placeholder="24 Dec 2024"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Category<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={Category}
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">
                          Store<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Store}
                          value={selectedStore}
                          onChange={(e) => setSelectedStore(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Amount<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="$200"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          Account<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={Account}
                          value={selectedAccount}
                          onChange={(e) => setSelectedAccount(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="summer-description-box">
                          <label className="form-label">Description</label>
                          <div id="summernote2">Electricity Bill</div>
                          <p className="mt-1">Maximum 60 Words</p>
                        </div>
                      </div>
                    </div>
                  </form>
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
      <DeleteModal />
    </>
  );
};

export default IncomeList;
