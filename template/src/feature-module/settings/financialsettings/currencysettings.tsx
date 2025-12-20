import { Link } from "react-router-dom";
import AddCurrency from "../../../core/modals/settings/addcurrency";
import EditCurrency from "../../../core/modals/editcurrency";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import DeleteModal from "../../../components/delete-modal";

const CurrencySettings = () => {
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
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h4>Currency</h4>
                    <div className="page-btn">
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add-currency"
                      >
                        <i className="ti ti-circle-plus me-1" />
                        Add New Currency
                      </Link>
                    </div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card table-list-card">
                          <div className="card-body p-0">
                            <div className="table-responsive no-pagination">
                              <table className="table datatable">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Currency Name</th>
                                    <th>Code </th>
                                    <th>Symbol</th>
                                    <th>Exchange Rate</th>
                                    <th>Created On</th>
                                    <th className="no-sort text-end">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Euro</td>
                                    <td>EUR</td>
                                    <td>€</td>
                                    <td>Default</td>
                                    <td>12 Jul 2025</td>
                                    <td className="action-table-data justify-content-end">
                                      <div className="edit-delete-action">
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-currency"
                                        >
                                          <i className="feather icon-edit"></i>
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
                                    <td>England Pound</td>
                                    <td>GBP</td>
                                    <td>£</td>
                                    <td>Default</td>
                                    <td>14 Jul 2025</td>
                                    <td className="action-table-data justify-content-end">
                                      <div className="edit-delete-action">
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-currency"
                                        >
                                          <i className="feather icon-edit"></i>
                                        </Link>
                                        <Link
                                          className="p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <i className="feather icon-trash-2"></i>
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>India Rupee</td>
                                    <td>INR</td>
                                    <td>₹</td>
                                    <td>76.154</td>
                                    <td>14 Mar 2025</td>
                                    <td className="action-table-data justify-content-end">
                                      <div className="edit-delete-action">
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-currency"
                                        >
                                          <i className="feather icon-edit"></i>
                                        </Link>
                                        <Link
                                          className="p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <i className="feather icon-trash-2"></i>
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>US Dollar</td>
                                    <td>USD</td>
                                    <td>$</td>
                                    <td>Default</td>
                                    <td>10 Jan 2025</td>
                                    <td className="action-table-data justify-content-end">
                                      <div className="edit-delete-action">
                                        <Link
                                          className="me-2 p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-currency"
                                        >
                                          <i className="feather icon-edit"></i>
                                        </Link>
                                        <Link
                                          className="p-2"
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <i className="feather icon-trash-2"></i>
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
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      <AddCurrency />
      <EditCurrency />
      <DeleteModal />
    </>
  );
};

export default CurrencySettings;
