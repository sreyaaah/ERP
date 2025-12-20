

const AddRole = () => {
  return (
    <>
      {/* Add Role */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Create Role</h4>
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
                <div className="mb-3">
                  <label className="form-label">Role Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <label className="form-label">Status</label>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round" />
                  </label>
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
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Create Role
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Role */}
    </>
  );
};

export default AddRole;
