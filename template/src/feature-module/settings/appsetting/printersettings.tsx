import AddPrinter from "../../../core/modals/settings/addprinter";
import EditPrinter from "../../../core/modals/settings/editprinter";
import SettingsSideBar from "../settingssidebar";
import { Link } from "react-router-dom";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import DeleteModal from "../../../components/delete-modal";

const PrinterSettings = () => {
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
                    <h4>Printer</h4>
                    <Link
                      to="#"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#add-printer"
                    >
                      <i className="ti ti-circle-plus me-1" />
                      Add New Printer
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table border">
                        <thead className="thead-light">
                          <tr>
                            <th>Printer Name</th>
                            <th>Connection type</th>
                            <th>IP Address</th>
                            <th>Port</th>
                            <th className="no-sort" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>HP Printer</td>
                            <td>Network</td>
                            <td>151.00.1.22</td>
                            <td>$200</td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-printer"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Epson</td>
                            <td>Network</td>
                            <td>151.00.2.20</td>
                            <td>$50</td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-printer"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#"
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

      <AddPrinter />
      <EditPrinter />
     <DeleteModal />
    </div>
  );
};

export default PrinterSettings;
