import  { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import { payrollListData } from "../../core/json/payrollList";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search"; 
import { all_routes } from "../../routes/all_routes";

const PayrollList = () => {
  const route = all_routes;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const datas = payrollListData;
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const columns = [
    {
      header: "Employee",
      field: "name",
      sortable: true,
      body: (rowData: any) => (
        <div className="d-flex align-items-center">
          <Link to={route.employeedetails} className="avatar avatar-md">
            <img src={rowData.image} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <p className="text-dark mb-0">
              <Link to={route.employeedetails}>{rowData.name}</Link>
            </p>
            <p>{rowData.role}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Employee ID",
      field: "id2",
      sortable: true,
    },
    {
      header: "Email",
      field: "email",
      sortable: true,
    },
    {
      header: "Salary",
      field: "salary",
      sortable: true,
    },
    {
      header: "Status",
      field: "status",
      sortable: true,
      body: (rowData: any) => (
        <span
          className={`badge ${
            rowData.status === "Paid" ? "badge-success" : "badge-danger"
          } d-inline-flex align-items-center badge-xs`}
        >
          <i className="ti ti-point-filled me-1" />
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
  const Employee = [
    { value: "Choose", label: "Choose" },
    { value: "Carl Evans", label: "Carl Evans" },
    { value: "Minerva Rameriz", label: "Minerva Rameriz" },
    { value: "Robert Lamon", label: "Robert Lamon" },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Employee Salary</h4>
                <h6>Manage your employee salaries</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-department"
              >
                <i className="feather icon-plus-circle me-2" />
                Add Payroll
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
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Unpaid
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                {/* <Table columns={columns} dataSource={datas} /> */}
                <PrimeDataTable
                  column={columns}
                  data={datas}
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
        <CommonFooter />
      </div>
      <>
        {/* Add Department */}
        <div className="modal fade" id="add-department">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Payroll</h4>
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
                    <div className="col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Select Employee <span>*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={Employee}
                          value={selectedEmployee}
                          onChange={(e) => setSelectedEmployee(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="text-title">
                      <h5 className="mb-2">Salary Information</h5>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Basic Salary <span>*</span>
                      </label>
                      <input type="text" className="text-form form-control" />
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="fw-semibold text-gray-9 mb-2">Status</p>
                      <div className="d-flex align-items-center">
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Radio"
                            id="Radio-sm1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Radio-sm1"
                          >
                            Paid
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Radio"
                            id="Radio-sm2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Radio-sm2"
                          >
                            Unpaid
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Allowances</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          HRA Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Conveyance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Medical Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Bonus <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="d-flex align-items-end border-bottom mb-3">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn mb-3 ms-3">
                        <Link
                          to="#"
                          className="btn btn-icon btn-secondary btn-add"
                        >
                          <i className="ti ti-circle-plus fs-16" />
                        </Link>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Deductions</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          PF <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Professional Tax <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          TDS <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Loans &amp; Others <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="d-flex align-items-end border-bottom mb-3">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn mb-3 ms-3">
                        <Link
                          to="#"
                          className="btn btn-icon btn-secondary btn-add"
                        >
                          <i className="ti ti-circle-plus fs-16" />
                        </Link>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Deductions</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Deduction <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Net Salary <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex align-items-center justify-content-end">
                        <button type="button" className="btn btn-previw me-2">
                          Preview
                        </button>
                        <button type="button" className="btn btn-reset me-2">
                          Reset
                        </button>
                        <Link
                          to="#"
                          className="btn btn-save"
                          data-bs-dismiss="modal"
                        >
                          Save
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Department */}
        {/* Edit Department */}
        <div className="modal fade" id="edit-department">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Payroll</h4>
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
                    <div className="col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Select Employee <span>*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={Employee}
                          value={selectedEmployee}
                          onChange={(e) => setSelectedEmployee(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="text-title">
                      <h5 className="mb-2">Salary Information</h5>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Basic Salary <span>*</span>
                      </label>
                      <input type="text" className="text-form form-control" />
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="fw-semibold text-gray-9 mb-2">Status</p>
                      <div className="d-flex align-items-center">
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Radio"
                            id="Radio-sm3"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Radio-sm3"
                          >
                            Paid
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Radio"
                            id="Radio-sm4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Radio-sm4"
                          >
                            Unpaid
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Allowances</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          HRA Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Conveyance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Medical Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Bonus <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="d-flex align-items-end border-bottom mb-3">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn mb-3 ms-3">
                        <Link
                          to="#"
                          className="btn btn-icon btn-secondary btn-add"
                        >
                          <i className="ti ti-circle-plus fs-16" />
                        </Link>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Deductions</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          PF <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Professional Tax <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          TDS <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Loans &amp; Others <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="d-flex align-items-end border-bottom mb-3">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn mb-3 ms-3">
                        <Link
                          to="#"
                          className="btn btn-icon btn-secondary btn-add"
                        >
                          <i className="ti ti-circle-plus fs-16" />
                        </Link>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p className="fw-semibold text-gray-9 mb-2">Deductions</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Allowance <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Deduction <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Net Salary <span>*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex align-items-center justify-content-end">
                        <button type="button" className="btn btn-previw me-2">
                          Preview
                        </button>
                        <button type="button" className="btn btn-reset me-2">
                          Reset
                        </button>
                        <Link
                          to="#"
                          className="btn btn-save"
                          data-bs-dismiss="modal"
                        >
                          Save
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Department */}
      <DeleteModal />
      </>
    </>
  );
};

export default PayrollList;
