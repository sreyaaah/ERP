import CommonSelect from "../../../components/select/common-select";
import React from "react";

const EditCustomFields = () => {
  const fields = [
    { value: "expense", label: "Expense" },
    { value: "transaction", label: "Transaction" },
  ];
  const textarea = [
    { value: "choose", label: "Choose" },
    { value: "text", label: "Text" },
    { value: "textarea", label: "Textarea" },
  ];
  const [selectedField, setSelectedField] = React.useState(fields[0]);
  const [selectedInputType, setSelectedInputType] = React.useState(textarea[0]);

  return (
    <div>
      <>
        {/* Edit Custom Field */}
        <div className="modal fade" id="edit-custom-field">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Custom Fields</h4>
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
                          Custom Fields For <span> *</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={fields}
                          value={selectedField}
                          onChange={(e) => setSelectedField(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Label <span> *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Default Value <span> *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="None"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Input Type <span> *</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={textarea}
                          value={selectedInputType}
                          onChange={(e) => setSelectedInputType(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="localization-select pos-payment-method mb-3 d-flex align-items-center mb-0 w-100">
                        <div className="custom-control custom-checkbox">
                          <label className="checkboxs mb-0 pb-0 line-height-1">
                            <input type="checkbox" checked />
                            <span className="checkmarks" />
                            Required
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <label className="checkboxs mb-0 pb-0 line-height-1">
                            <input type="checkbox" checked />
                            <span className="checkmarks" />
                            Disable
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="user3"
                          className="check"
                          defaultChecked
                        />
                        <label htmlFor="user3" className="checktoggle" />
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Custom Field */}
      </>
    </div>
  );
};

export default EditCustomFields;
