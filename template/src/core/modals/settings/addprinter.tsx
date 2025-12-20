import CommonSelect from "../../../components/select/common-select";
import { useState } from "react";

const AddPrinter = () => {
  const [selectedConnectionTyoe, setSelectedConnectionTyoe] = useState(null);

  const connectiontype = [
    { value: "choose", label: "Choose" },
    { value: "Network", label: "Network" },
    { value: "IP Address", label: "IP Address" },
    { value: "Port", label: "Port" },
    
  ];

  return (
    <>
      {/* Add Printer */}
      <div className="modal fade" id="add-printer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Add Printer</h4>
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
                      <input type="text" className="form-control" />
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
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-0">
                      <label className="form-label">
                        Port <span> *</span>
                      </label>
                      <input type="text" className="form-control" />
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Printer */}
    </>
  );
};

export default AddPrinter;
