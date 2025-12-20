import  { useState } from "react";
import { Link } from "react-router-dom";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";
import CommonSelect from "../../../components/select/common-select";
import { Editor } from "primereact/editor";

const EditLeaveEmployee = () => {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [date3, setDate3] = useState<Date | null>(new Date());
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedLeaveType, setSelectedLeaveType] = useState(null);
  const [selectedLeaveType1, setSelectedLeaveType1] = useState(null);
  const [text, setText] = useState("");
  const leavetype = [
    { value: "Choose Status", label: "Choose Status" },
    { value: "Full Day", label: "Full Day" },
    { value: "Half Day", label: "Half Day" },
  ];
  const leavetype1 = [
    { value: "Choose Status", label: "Choose Status" },
    { value: "Full Day", label: "Full Day" },
    { value: "Half Day", label: "Half Day" },
  ];

  const Employee = [
    { value: "Choose", label: "Choose" },
    { value: "Carl Evans", label: "Carl Evans" },
    { value: "Minerva Rameriz", label: "Minerva Rameriz" },
    { value: "Robert Lamon", label: "Robert Lamon" },
  ];

  return (
    <div>
      {/* Add Leave */}
      <div className="modal fade" id="edit-leave">
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
                        options={Employee}
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
                            <i className="feather icon-calendar info-img" />
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
                            <i className="feather icon-calendar info-img" />
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
                            <i className="feather icon-calendar info-img" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <CommonSelect
                            className="w-100"
                            options={leavetype1}
                            value={selectedLeaveType1}
                            onChange={(e) => setSelectedLeaveType1(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="bg-light rounded p-3 pb-0">
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
    </div>
  );
};

export default EditLeaveEmployee;
