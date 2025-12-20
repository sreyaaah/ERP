

const EditTaxRates = () => {
  return (
    <div>
      <>
        {/* Edit Tax Rates */}
        <div className="modal fade" id="edit-tax">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Edit Tax Rates</h4>
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
                              Name <span> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="VAT"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-0">
                            <label className="form-label">
                              Tax Rate % <span> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={16}
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
          </div>
        </div>
        {/* /Edit Tax Rates */}
      </>
    </div>
  );
};

export default EditTaxRates;
