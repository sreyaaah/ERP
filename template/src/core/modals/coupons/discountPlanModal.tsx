import CommonSelect from "../../../components/select/common-select";
import { useState } from "react";
import { Link } from "react-router-dom";

const DiscountPlanModal = () => {
  const options = [
    { value: "1", label: "All Customers" },
    { value: "2", label: "Members Only" },
  ];
  const [selectedCustomer, setSelectedCustomer] = useState(options[0]);

  return (
    <>
      {/* Add discount plan*/}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Add Discount Plan</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">
                        Plan Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3 add-product">
                      <div className="add-newplus">
                        <label className="form-label">
                          Customer<span className="text-danger ms-1">*</span>
                        </label>
                        <Link to="#">
                          <i className="feather icon-plus-circle plus-down-add" />
                          <span>Add New</span>
                        </Link>
                      </div>
                      <CommonSelect
                        options={options}
                        value={selectedCustomer}
                        onChange={(e) => setSelectedCustomer(e.value)}
                        placeholder="Choose"
                        filter={false}
                      />
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input type="checkbox" id="user2" className="check" />
                        <label htmlFor="user2" className="checktoggle" />
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
                    data-bs-dismiss="modal"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Add Discount Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add discount plan */}
      {/* Edit discount plan */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4>Edit Discount Plan</h4>
                  </div>
                  <button
                    type="button"
                    className="close bg-danger text-white fs-16"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">
                        Plan Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Standard Plan"
                      />
                    </div>
                    <div className="mb-3 add-product">
                      <div className="add-newplus">
                        <label className="form-label">
                          Customer<span className="text-danger ms-1">*</span>
                        </label>
                        <Link to="#">
                          <i className="feather icon-plus-circle plus-down-add" />
                          <span>Add New</span>
                        </Link>
                      </div>
                      <CommonSelect
                        options={options}
                        value={selectedCustomer}
                        onChange={(e) => setSelectedCustomer(e.value)}
                        placeholder="Choose"
                        filter={false}
                      />
                    </div>
                    <div className="mb-0">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input type="checkbox" id="user3" className="check" />
                        <label htmlFor="user3" className="checktoggle" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-1 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit discount plan */}
      {/* delete modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 fw-bold mb-2 mt-1">
                  Delete Discount Plan
                </h4>
                <p className="mb-0 fs-16">
                  Are you sure you want to delete discount plan?
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Yes Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountPlanModal;
