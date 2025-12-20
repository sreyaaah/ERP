import CommonDatePicker from "../../../components/date-picker/common-date-picker";

import { useState } from "react";

const EditHolidays = () => {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>(new Date());


  return (
    <div>
      {/* Edit Department */}
      <div className="modal fade" id="edit-department">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Edit Holiday</h4>
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
                          <label>Add Holiday</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Newyear"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Start Date</label>
                          <div className="input-addon-right position-relative">
                            <CommonDatePicker
                                value={date1}
                                onChange={setDate1}
                                className="w-100"
                              />
                            <span className="cus-icon">
                              <i className="feather icon-calendar feather-16" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>End Date</label>
                          <div className="input-addon-right position-relative">
                            <CommonDatePicker
                                value={date2}
                                onChange={setDate2}
                                className="w-100"
                              />
                            <span className="cus-icon">
                              <i className="feather icon-calendar feather-16" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user3"
                            className="check"
                          />
                          <label htmlFor="user3" className="checktoggle">
                            {" "}
                          </label>
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
                      <button type="submit" className="btn btn-submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Department */}
    </div>
  );
};

export default EditHolidays;
