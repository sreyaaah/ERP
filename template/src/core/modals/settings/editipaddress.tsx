import { Editor } from "primereact/editor";
import  { useState } from "react";

const EditIpAddress = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <>
        {/* Edit BanIp */}
        <div className="modal fade" id="edit-banip">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Edit Ban IP Address</h4>
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
                              IP Address
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="211.11.0.25"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group summer-description-box transfer">
                            <label className="form-label">Description</label>
                            <Editor
                              value={text}
                              onTextChange={(e: any) => setText(e.htmlValue)}
                              style={{ height: "200px" }}
                            />
                            <p>Maximum 60 Characters</p>
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
                      className="btn btn-primary fs-13 fw-medium p-2 px-3"
                      data-bs-dismiss="modal"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit BanIp */}
      </>
    </div>
  );
};

export default EditIpAddress;
