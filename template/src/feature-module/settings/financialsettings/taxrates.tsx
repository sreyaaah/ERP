import { Link } from "react-router-dom";
import AddTaxRates from "../../../core/modals/settings/addtaxrates";
import EditTaxRates from "../../../core/modals/settings/edittaxrates";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import DeleteModal from "../../../components/delete-modal";
const TaxRates = () => {
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
                    <h4>Tax Rates</h4>
                    <Link
                      to="#"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#add-tax"
                    >
                      <i className="ti ti-circle-plus me-1" />
                      Add New Tax Rate
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table border">
                        <thead className="thead-light">
                          <tr>
                            <th>Tax Name</th>
                            <th>Tax rates</th>
                            <th>Created On</th>
                            <th className="no-sort" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>VAT</td>
                            <td>10%</td>
                            <td>12 Jan 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-tax"
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
                            <td>CGST</td>
                            <td>08%</td>
                            <td>10 Jan 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-tax"
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
                            <td>SGST</td>
                            <td>10%</td>
                            <td>06 Jan 2025</td>
                            <td className="action-table-data justify-content-end">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-tax"
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

      <AddTaxRates />
      <EditTaxRates />
    <DeleteModal />
    </div>
  );
};

export default TaxRates;
