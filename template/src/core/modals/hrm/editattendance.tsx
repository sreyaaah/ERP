import React, { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import CommonSelect from "../../../components/select/common-select";
import CommonTimePicker from "../../../components/time-picker";

dayjs.extend(customParseFormat);

const EditAttendance = () => {
  const [selectedEmployee, setSelectedEmployee] = React.useState(null);
  const [selectedTime1, setSelectedTime1] = useState<Date | null>(null);
  const [selectedTime2, setSelectedTime2] = useState<Date | null>(null);

  const employeename = [
    { value: "Choose", label: "Choose" },
    { value: "Mitchum Daniel", label: "Mitchum Daniel" },
    { value: "Janet Hembre", label: "Janet Hembre" },
    { value: "Russell Belle", label: "Russell Belle" },
  ];

  return (
    <div>
      {/* Edit Warehouse */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Edit Attendance</h4>
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
                <div className="modal-body custom-modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="input-blocks">
                          <label>Employee Name</label>
                          <CommonSelect
                            className="w-100"
                            options={employeename}
                            value={selectedEmployee}
                            onChange={(e) => setSelectedEmployee(e.value)}
                            placeholder="Newest"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Clock In</label>
                          <div className="form-icon">
                            <CommonTimePicker
                              selectedTime={selectedTime1}
                              onChange={setSelectedTime1}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Clock Out</label>
                          <div className="form-icon">
                            <CommonTimePicker
                              selectedTime={selectedTime2}
                              onChange={setSelectedTime2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer-btn">
                      <button
                        type="button"
                        className="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <Link to="#" className="btn btn-submit">
                        Save Changes
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Warehouse */}
    </div>
  );
};

export default EditAttendance;
