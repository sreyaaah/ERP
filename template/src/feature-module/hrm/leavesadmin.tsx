import  { useState } from "react";
import { Link } from "react-router-dom";
import { leavesadmindata } from "../../core/json/leavesadmin";
import CommonFooter from "../../components/footer/commonFooter";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import CommonDatePicker from "../../components/date-picker/common-date-picker";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import { Editor } from "primereact/editor";
import SearchFromApi from "../../components/data-table/search";

const LeavesAdmin = () => {
  const dataSource = leavesadmindata;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [date3, setDate3] = useState<Date | null>(new Date());
  const [selectedLeaveType, setSelectedLeaveType] = useState(null);
  const [text, setText] = useState("");

  const employee = [
    { value: "Choose Employee", label: "Choose Employee" },
    { value: "Mitchum Daniel", label: "Mitchum Daniel" },
    { value: "Susan Lopez", label: "Susan Lopez" },
    { value: "Robert Grossman", label: "Robert Grossman" },
    { value: "Janet Hembre", label: "Janet Hembre" },
  ];
  const leavetype = [
    { value: "Choose Type", label: "Choose Type" },
    { value: "Sick Leave", label: "Sick Leave" },
    { value: "Maternity", label: "Maternity" },
    { value: "Vacation", label: "Vacation" },
  ];
  const leavetype2 = [
    { value: "Full Day", label: "Full Day" },
    { value: "Half Day", label: "Half Day" },
  ];
  const [selectedLeaveDayType, setSelectedLeaveDayType] = useState(
    leavetype2[0]
  );

  const columns = [
    {
      field: "empname",
      header: "Emp Name",
      sortable: true,
    },
    {
      field: "empid",
      header: "Emp Id",
      sortable: true,
    },
    {
      field: "type",
      header: "Type",
      sortable: true,
    },
    {
      field: "fromdate",
      header: "From Date",
      sortable: true,
    },
    {
      field: "todate",
      header: "To Date",
      sortable: true,
    },
    {
      field: "days_hours",
      header: "Days/Hours",
      sortable: true,
    },
    {
      field: "shift",
      header: "Shift",
      sortable: true,
    },
    {
      field: "appliedon",
      header: "Applied On",
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      sortable: true,
      body: (rowData: any) => (
        <span
          className={`badge ${
            rowData.status === "Approved" ? "badge-success" : "badge-danger"
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
            data-bs-target="#edit-leave"
          >
            <i  className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
          >
            <i  className="feather icon-trash-2"></i>
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
                <h4>Leaves</h4>
                <h6>Manage your Leaves</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add-leave"
              >
                Apply Leave
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
                <div className="me-2 date-select-small">
                  <div className="input-addon-left position-relative attendance-datepicker">
                    <CommonDatePicker
                      value={date3}
                      onChange={setDate3}
                    />
                    <span className="cus-icon">
                      <i className="feather icon-calendar" />
                    </span>
                  </div>
                </div>
                <div className="dropdown">
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
                        Approved
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Rejected
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
            {/* /Filter */}
          </div>
        </div>
        <CommonFooter />
        {/* /product list */}
      </div>
      <>
        {/* Add Leave */}
        <div className="modal fade" id="add-leave">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Apply Leave</h4>
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
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Employee <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={employee}
                          value={selectedEmployee}
                          onChange={(e) => setSelectedEmployee(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Leave Type <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={leavetype}
                          value={selectedLeaveType}
                          onChange={(e) => setSelectedLeaveType(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              From <span className="text-danger"> *</span>
                            </label>
                            <div className="input-addon-right position-relative attendance-datepicker">
                              <CommonDatePicker
                                value={date1}
                                onChange={setDate1}
                                className="w-100"
                              />
                              <span className="cus-icon"><i data-feather="calendar" className="feather icon-calendar"></i></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              To <span className="text-danger"> *</span>
                            </label>
                            <div className="input-addon-right position-relative">
                              <CommonDatePicker
                                value={date2}
                                onChange={setDate2}
                                className="w-100"
                              />
                              <span className="cus-icon"><i data-feather="calendar" className="feather icon-calendar"></i></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <div className="input-addon-right position-relative">
                              <CommonDatePicker
                                value={date3}
                                onChange={setDate3}
                                className="w-100"
                              />
                              <span className="cus-icon"><i data-feather="calendar" className="feather icon-calendar"></i></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <CommonSelect
                              className="w-100"
                              options={leavetype2}
                              value={selectedLeaveDayType}
                              onChange={(e) => setSelectedLeaveDayType(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="bg-light rounded p-3 pb-0 mb-3">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">No of Days</label>
                              <input
                                type="text"
                                className="form-control bg-light "
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Remaining Leaves
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="summer-description-box mb-0">
                        <label className="form-label">Reason</label>
                        <Editor
                          value={text}
                          onTextChange={(e: any) => setText(e.htmlValue)}
                          style={{ height: "200px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Leave */}
        {/* Edit Leave */}
        <div className="modal fade" id="edit-leave">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Leave</h4>
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
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Employee <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={employee}
                          value={selectedEmployee}
                          onChange={(e) => setSelectedEmployee(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Leave Type <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={leavetype}
                          value={selectedLeaveType}
                          onChange={(e) => setSelectedLeaveType(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              From <span className="text-danger"> *</span>
                            </label>
                            <div className="input-addon-right position-relative">
                              <CommonDatePicker
                                value={date1}
                                onChange={setDate1}
                                className="w-100"
                              />
                              <span className="cus-icon"><i data-feather="calendar" className="feather icon-calendar"></i></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <label className="form-label">
                              To <span className="text-danger"> *</span>
                            </label>
                            <div className="input-addon-right position-relative">
                              <CommonDatePicker
                                value={date2}
                                onChange={setDate2}
                                className="w-100"
                              />
                              <span className="cus-icon"><i data-feather="calendar" className="feather icon-calendar"></i></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <div className="input-addon-right position-relative">
                              <CommonDatePicker
                                value={date3}
                                onChange={setDate3}
                                className="w-100"
                              />
                              <span className="cus-icon"><i data-feather="calendar" className="feather icon-calendar"></i></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3">
                            <CommonSelect
                              className="w-100"
                              options={leavetype2}
                              value={selectedLeaveDayType}
                              onChange={(e) => setSelectedLeaveDayType(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="bg-light rounded p-3 pb-0 mb-3">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">No of Days</label>
                              <input
                                type="text"
                                className="form-control bg-light "
                                defaultValue={"01"}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Remaining Leaves
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light "
                                defaultValue={"08"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="summer-description-box mb-0">
                        <label className="form-label">Reason</label>
                        <Editor
                          value={text}
                          onTextChange={(e: any) => setText(e.htmlValue)}
                          style={{ height: "200px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Leave */}
        {/* delete modal */}
        <DeleteModal />
        {/* /delete modal */}
      </>
    </div>
  );
};

export default LeavesAdmin;
