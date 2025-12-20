import { Link } from "react-router-dom";
import EditIpAddress from "../../../core/modals/settings/editipaddress";
import AddIpAddress from "../../../core/modals/settings/addipaddress";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import DeleteModal from "../../../components/delete-modal";

const BanIpaddress = () => {
  return (
    <>
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
                  <div className="card-header d-flex align-items-center">
                    <h5 className="card-title flex-grow-1 mb-0">
                      Ban IP Address
                    </h5>
                    <div className="flex-shrink-0">
                      <button
                        className="btn btn-primary add-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#add-banip"
                      >
                        <i className="ti ti-circle-plus me-1" />
                        Add Ban IP Address
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="thead-light">
                          <tr>
                            <th>IP Address</th>
                            <th>Reason</th>
                            <th>Created On</th>
                            <th className="no-sort text-end" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-gray-9 fw-medium">
                              211.11.0.25
                            </td>
                            <td>
                              <p>Suspicious Activity</p>
                            </td>
                            <td>25 Apr 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-banip"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                  className="p-2"
                                  to="#;"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-gray-9 fw-medium">
                              211.03.0.11
                            </td>
                            <td>
                              <p>Spam or Abuse</p>
                            </td>
                            <td>18 Mar 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-banip"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                  className="p-2"
                                  to="#;"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-gray-9 fw-medium">
                              211.24.0.17
                            </td>
                            <td>
                              <p>Unauthorized Access</p>
                            </td>
                            <td>06 Feb 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-banip"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                  className="p-2"
                                  to="#;"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-gray-9 fw-medium">
                              211.12.0.34
                            </td>
                            <td>
                              <p>Violation of Terms</p>
                            </td>
                            <td>02 Jan 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-banip"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                  className="p-2"
                                  to="#;"
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
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      <AddIpAddress />
      <EditIpAddress />
      <DeleteModal />
    </>
  );
};

export default BanIpaddress;
