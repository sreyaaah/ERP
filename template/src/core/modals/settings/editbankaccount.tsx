

const EditBankAccount = () => {
  return (
    <div>
      <>
        {/* Edit Bank Account */}
        <div className="modal fade" id="edit-account">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Edit Bank Account</h4>
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
                              Bank Name <span> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="HDFC"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Account Number <span> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="**** **** 1832"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Account Name <span> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Mathew"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Branch <span> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Bringham"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              IFSC <span> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={124547}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center mb-3">
                            <span className="status-label">Status</span>
                            <input
                              type="checkbox"
                              id="user5"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user5" className="checktoggle" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">
                              Make as default
                            </span>
                            <input
                              type="checkbox"
                              id="user6"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user6" className="checktoggle" />
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
          </div>
        </div>
        {/* /Edit Bank Account */}
      </>
    </div>
  );
};

export default EditBankAccount;
