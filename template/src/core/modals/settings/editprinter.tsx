import CommonSelect from "../../../components/select/common-select";
import { useState } from "react";

const EditPrinter = () => {
  const [selectedConnectionTyoe, setSelectedConnectionTyoe] = useState(null);

  const connectiontype = [
    { value: "choose", label: "Choose" },
    { value: "Network", label: "Network" },
    { value: "IP Address", label: "IP Address" },
    { value: "Port", label: "Port" },
  ];
  return (
    <div>
      <>
        {/* Edit Printer */}
        <div className="modal fade" id="edit-printer">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Printer</h4>
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
                          Printer Name <span> *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="HP Printer"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Connection Type <span> *</span>
                        </label>
                        <CommonSelect
                          filter={false}
                          options={connectiontype}
                          placeholder="Choose"
                          value={selectedConnectionTyoe}
                          onChange={(e) => setSelectedConnectionTyoe(e.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          IP Address <span> *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="151.00.1.22"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-0">
                        <label className="form-label">
                          Port <span> *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={900}
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Printer */}
      </>
    </div>
  );
};

export default EditPrinter;
