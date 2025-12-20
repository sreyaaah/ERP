import CommonFooter from "../../../components/footer/commonFooter";
import SettingsSideBar from "../settingssidebar";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import { Link } from "react-router-dom";
import { invoiceSignature01, signatureImage } from "../../../utils/imagepath";

const Signature = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content settings-content">
          <div className="page-header settings-pg-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Settings</h4>
                <h6>Manage your settings on portal</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="settings-wrapper d-flex">
                <SettingsSideBar />

                <div className="card flex-fill mb-0 w-50">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h4>Signatures</h4>
                    <div className="page-btn">
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add-custom-field"
                      >
                        <i className="ti ti-circle-plus me-1" />
                        Add Signature
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table border">
                        <thead className="thead-light">
                          <tr>
                            <th>Signature Name</th>
                            <th>Signature</th>
                            <th>Status</th>
                            <th className="no-sort" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h6>Allen</h6>
                            </td>
                            <td>
                              <div>
                                <img src={signatureImage} alt="Img" />
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i className="feather icon-star feather-edit" />
                                </Link>
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Raymond</h6>
                            </td>
                            <td>
                              <div>
                                <img src={signatureImage} alt="Img" />
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i className="feather icon-star feather-edit" />
                                </Link>
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Ralph</h6>
                            </td>
                            <td>
                              <div>
                                <img src={signatureImage} alt="Img" />
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i className="feather icon-star feather-edit" />
                                </Link>
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Steven</h6>
                            </td>
                            <td>
                              <div>
                                <img src={signatureImage} alt="Img" />
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i className="feather icon-star feather-edit" />
                                </Link>
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
      <>
        {/* Add Custom Field */}
        <div className="modal fade" id="add-custom-field">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Signature</h4>
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
                  <div className="row new-employee-field">
                    <div className="col-lg-12">
                      <div className="profile-pic-upload">
                        <div className="profile-pic me-3">
                          <span>
                            <i className="feather icon-plus-circle" />
                            Add Image
                          </span>
                        </div>
                        <div className="mb-0">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Upload Image</h4>
                            </div>
                          </div>
                          <p className="mt-2">
                            Image format should be png and jpg
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                          <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                            <input type="checkbox" className="form-control" />
                            <span className="checkmarks" />
                            Mark as Default
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Signature Name<span> *</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="user2"
                          className="check"
                          defaultChecked
                        />
                        <label htmlFor="user2" className="checktoggle" />
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
                    Add Signature
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Custom Field */}
        {/* Edit Custom Field */}
        <div className="modal fade" id="edit-custom-field">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Signature</h4>
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
                  <div className="row new-employee-field">
                    <div className="col-lg-12">
                      <div className="profile-pic-upload">
                        <div className="profile-pic me-3">
                          <span>
                            <img src={invoiceSignature01} alt="Img" />
                          </span>
                        </div>
                        <div className="mb-0">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Change Image</h4>
                            </div>
                          </div>
                          <p className="mt-2">
                            Image format should be png and jpg
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                          <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                            <input type="checkbox" className="form-control" />
                            <span className="checkmarks" />
                            Mark as Default
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Signature Name<span> *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Allen"
                        />
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
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Custom Field */}
       {/* delete modal */}
  <div className="modal fade" id="delete-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="page-wrapper-new p-0">
          <div className="content p-5 px-3 text-center">
            <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
              <i className="ti ti-trash fs-24 text-danger" />
            </span>
            <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
              Delete Signature
            </h4>
            <p className="text-gray-6 mb-0 fs-16">
              Are you sure you want to delete signature?
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
                type="submit"
                className="btn btn-submit fs-13 fw-medium p-2 px-3"
              >
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /delete modal */}
      </>
    </div>
  );
};

export default Signature;
