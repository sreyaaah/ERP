import { Link } from "react-router-dom";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import { invoiceTemplate01, invoiceTemplate02 } from "../../../utils/imagepath";

const InvoiceTemplate = () => {
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
                <div className="card flex-fill mb-0">
                  <form>
                    <div className="card-header">
                      <h4>Invoice Templates</h4>
                    </div>
                    <div className="card-body pb-0">
                      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                        <ul
                          className="nav nav-pills low-stock-tab d-flex me-2 mb-0"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-home"
                              type="button"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              Invoices
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              Purchases
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-profile-tab2"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile2"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile2"
                              aria-selected="false"
                            >
                              Receipts
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="row gx-3">
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 1</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 2</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 3</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 4</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 5</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="row gx-3">
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 1</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 2</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 3</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 4</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate01}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">General Invoice 5</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile2"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab2"
                        >
                          <div className="row gx-3">
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate02}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Receipt Invoice 1</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate02}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Receipt Invoice 2</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate02}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Receipt Invoice 3</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-mg-6">
                              <div className="card bg-light invoice-card">
                                <div className="card-body p-2">
                                  <span className="d-block mb-2">
                                    <img
                                      src={invoiceTemplate02}
                                      className="w-100"
                                      alt="Img"
                                    />
                                  </span>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">Receipt Invoice 4</p>
                                    <Link
                                      to="#"
                                      className="avatar avatar-sm rounded-circle bg-secondary-transparent"
                                    >
                                      <i className="ti ti-star" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;
