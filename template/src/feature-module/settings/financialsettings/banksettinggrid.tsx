import { Link } from "react-router-dom";
import AddBankAccount from "../../../core/modals/settings/addbankaccount";
import EditBankAccount from "../../../core/modals/settings/editbankaccount";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import DeleteModal from "../../../components/delete-modal";

const BankSettingGrid = () => {
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
                    <h4>Bank Account</h4>
                    <div className="page-btn">
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add-account"
                      >
                        <i className="ti ti-circle-plus me-1" />
                        Add New Account
                      </Link>
                    </div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                        <div className="card bank-box active">
                          <div className="card-body">
                            <div className="mb-4">
                              <h5 className="mb-1">Karur vysya bank</h5>
                              <p>**** **** 1982</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span className="fs-13">Holder Name</span>
                                <h6>John Smith</h6>
                              </div>
                              <div className="hstack gap-2 fs-15">
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-info-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-account"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-danger-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                        <div className="card bank-box">
                          <div className="card-body">
                            <div className="mb-4">
                              <h5 className="mb-1">Swiss Bank</h5>
                              <p>**** **** 1796</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span>Holder Name</span>
                                <h6>Andrew</h6>
                              </div>
                              <div className="hstack gap-2 fs-15">
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-info-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-account"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-danger-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                        <div className="card bank-box">
                          <div className="card-body">
                            <div className="mb-4">
                              <h5 className="mb-1">HDFC</h5>
                              <p>**** **** 1832</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <span>Holder Name</span>
                                <h6>Mathew</h6>
                              </div>
                              <div className="hstack gap-2 fs-15">
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-info-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-account"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm btn-danger-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
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
        </div>
        <CommonFooter />
      </div>

      <AddBankAccount />
      <EditBankAccount />
   <DeleteModal />
    </div>
  );
};

export default BankSettingGrid;
