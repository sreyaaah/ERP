import React, { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import CommonSelect from "../../../components/select/common-select";
import { Editor } from "primereact/editor";
import CommonTimePicker from "../../../components/time-picker";

dayjs.extend(customParseFormat);

const EditShift = () => {
  const [selectedWeekoff, setSelectedWeekoff] = React.useState(null);
  const [selectedTime1, setSelectedTime1] = useState<Date | null>(null);
  const [selectedTime2, setSelectedTime2] = useState<Date | null>(null);
  const [selectedTime3, setSelectedTime3] = useState<Date | null>(null);
  const [selectedTime4, setSelectedTime4] = useState<Date | null>(null);
  const [selectedTime5, setSelectedTime5] = useState<Date | null>(null);
  const [selectedTime6, setSelectedTime6] = useState<Date | null>(null);
  const [selectedTime7, setSelectedTime7] = useState<Date | null>(null);
  const [selectedTime8, setSelectedTime8] = useState<Date | null>(null);
  const [text, setText] = useState("");
  const weekoff = [
    { value: "Choose", label: "Choose" },
    { value: "Sunday, Monday", label: "Sunday, Monday" },
    { value: "Saturday, Sunday", label: "Saturday, Sunday" },
    { value: "Tuesday, Saturday", label: "Tuesday, Saturday" },
  ];

  return (
    <div>
      {/* Edit Shift */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Edit Shift</h4>
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
                    <ul
                      className="nav nav-pills modal-table-tab"
                      id="pills-tab2"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-edit-shift-info-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-edit-shift-info"
                          type="button"
                          role="tab"
                          aria-controls="pills-edit-shift-info"
                          aria-selected="true"
                        >
                          Shift Info
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-edit-break-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-edit-break"
                          type="button"
                          role="tab"
                          aria-controls="pills-edit-break"
                          aria-selected="false"
                        >
                          Break Timings
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent2">
                      <div
                        className="tab-pane fade show active"
                        id="pills-edit-shift-info"
                        role="tabpanel"
                        aria-labelledby="pills-edit-shift-info-tab"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="input-blocks">
                              <label>Shift Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-blocks">
                              <label>From</label>
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
                              <label>To</label>
                              <div className="form-icon">
                                <CommonTimePicker
                                  selectedTime={selectedTime2}
                                  onChange={setSelectedTime2}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-blocks">
                              <label>Weekoff</label>
                              <CommonSelect
                                className="w-100"
                                options={weekoff}
                                value={selectedWeekoff}
                                onChange={(e) => setSelectedWeekoff(e.value)}
                                placeholder="Newest"
                                filter={false}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="modal-table-item">
                              <h4>Weekdays Defeniton</h4>
                              <div className="table-responsive no-pagination">
                                <table className="table  datanew">
                                  <thead>
                                    <tr>
                                      <th>Days</th>
                                      <th className="text-center">Weeks</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="status-toggle modal-status d-flex align-items-center">
                                          <input
                                            type="checkbox"
                                            id="days1"
                                            className="check"
                                            defaultChecked
                                          />
                                          <label
                                            htmlFor="days1"
                                            className="checktoggle"
                                          />
                                          <span className="status-label ms-2">
                                            Monday
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-end">
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            All
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            1st
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            2nd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            3rd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            4th
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            5th
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="status-toggle modal-status d-flex align-items-center">
                                          <input
                                            type="checkbox"
                                            id="days2"
                                            className="check"
                                            defaultChecked
                                          />
                                          <label
                                            htmlFor="days2"
                                            className="checktoggle"
                                          />
                                          <span className="status-label ms-2">
                                            Tuesday
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-end">
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            All
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            1st
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            2nd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            3rd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            4th
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            5th
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="status-toggle modal-status d-flex align-items-center">
                                          <input
                                            type="checkbox"
                                            id="days3"
                                            className="check"
                                            defaultChecked
                                          />
                                          <label
                                            htmlFor="days3"
                                            className="checktoggle"
                                          />
                                          <span className="status-label ms-2">
                                            Wednesday
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-end">
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            All
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            1st
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            2nd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            3rd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            4th
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            5th
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="status-toggle modal-status d-flex align-items-center">
                                          <input
                                            type="checkbox"
                                            id="days4"
                                            className="check"
                                            defaultChecked
                                          />
                                          <label
                                            htmlFor="days4"
                                            className="checktoggle"
                                          />
                                          <span className="status-label ms-2">
                                            Thursday
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-end">
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            All
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            1st
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            2nd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            3rd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            4th
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input
                                              type="checkbox"
                                              defaultChecked
                                            />
                                            <span className="checkmarks" />
                                            5th
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="status-toggle modal-status d-flex align-items-center">
                                          <input
                                            type="checkbox"
                                            id="days5"
                                            className="check"
                                          />
                                          <label
                                            htmlFor="days5"
                                            className="checktoggle"
                                          />
                                          <span className="status-label ms-2">
                                            Friday
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-end">
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            All
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            1st
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            2nd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            3rd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            4th
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            5th
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="status-toggle modal-status d-flex align-items-center">
                                          <input
                                            type="checkbox"
                                            id="days6"
                                            className="check"
                                          />
                                          <label
                                            htmlFor="days6"
                                            className="checktoggle"
                                          />
                                          <span className="status-label ms-2">
                                            Saturday
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-end">
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            All
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            1st
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            2nd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            3rd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            4th
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            5th
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="status-toggle modal-status d-flex align-items-center">
                                          <input
                                            type="checkbox"
                                            id="days7"
                                            className="check"
                                          />
                                          <label
                                            htmlFor="days7"
                                            className="checktoggle"
                                          />
                                          <span className="status-label ms-2">
                                            Sunday
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-end">
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            All
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            1st
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            2nd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            3rd
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            4th
                                          </label>
                                          <label className="checkboxs modal-table-check">
                                            <input type="checkbox" />
                                            <span className="checkmarks" />
                                            5th
                                          </label>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="input-blocks custom-form-check">
                                <label className="checkboxs modal-table-check">
                                  <input type="checkbox" checked />
                                  <span className="checkmarks" />
                                  Recurring Shift
                                </label>
                              </div>
                              <div className="input-blocks m-0">
                                <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                                  <span className="status-label">Status</span>
                                  <input
                                    type="checkbox"
                                    id="users6"
                                    className="check"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="users6"
                                    className="checktoggle mb-0"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-edit-break"
                        role="tabpanel"
                        aria-labelledby="pills-edit-break-tab"
                      >
                        <div className="break-title">
                          <h4>Morning Break</h4>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-blocks">
                              <label>From</label>
                              <div className="form-icon">
                                <CommonTimePicker
                                  selectedTime={selectedTime3}
                                  onChange={setSelectedTime3}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-blocks">
                              <label>To</label>
                              <div className="form-icon">
                                <CommonTimePicker
                                  selectedTime={selectedTime4}
                                  onChange={setSelectedTime4}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-title">
                          <h4>Lunch</h4>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-blocks">
                              <label>From</label>
                              <div className="form-icon">
                                <CommonTimePicker
                                  selectedTime={selectedTime5}
                                  onChange={setSelectedTime5}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-blocks">
                              <label>To</label>
                              <div className="form-icon">
                                <CommonTimePicker
                                  selectedTime={selectedTime6}
                                  onChange={setSelectedTime6}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="break-title">
                          <h4>Evening Break</h4>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-blocks">
                              <label>From</label>
                              <div className="form-icon">
                                <CommonTimePicker
                                  selectedTime={selectedTime7}
                                  onChange={setSelectedTime7}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-blocks">
                              <label>To</label>
                              <div className="form-icon">
                                <CommonTimePicker
                                  selectedTime={selectedTime8}
                                  onChange={setSelectedTime8}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="input-blocks summer-description-box">
                          <label>Description</label>
                          <div id="summernote2" />
                          <Editor
                            value={text}
                            onTextChange={(e: any) => setText(e.htmlValue)}
                            style={{ height: "200px" }}
                          />
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
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Shift */}
    </div>
  );
};

export default EditShift;
