import { Link } from "react-router-dom";
import SettingsSideBar from "../settingssidebar";
import CommonFooter from "../../../components/footer/commonFooter";
import { appIcon07, appIcon08, appIcon09, appIcon10 } from "../../../utils/imagepath";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";

const SystemSettings = () => {
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
                  <div className="card-header">
                    <h4 className="fs-18 fw-bold">System Settings</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="system-app-icon">
                                  <img src={appIcon07} alt="Img" />
                                </span>
                                <div className="security-title">
                                  <h5 className="fs-16 fw-medium">
                                    Google Captcha
                                  </h5>
                                </div>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user1"
                                  className="check"
                                  defaultChecked
                                />
                                <label htmlFor="user1" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                            <p className="fs-14 mb-3">
                              Captcha helps protect you from spam and password
                              decryption
                            </p>
                            <div>
                              <Link
                                to="#"
                                className="btn btn-outline-secondary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#google-captcha"
                              >
                                <i className="ti ti-tool me-1" />
                                View Integration
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="system-app-icon">
                                  <img src={appIcon08} alt="Img" />
                                </span>
                                <div className="security-title">
                                  <h5 className="fs-16 fw-medium">
                                    Google Analytics
                                  </h5>
                                </div>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user2"
                                  className="check"
                                  defaultChecked
                                />
                                <label htmlFor="user2" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                            <p className="fs-14 mb-3">
                              Provides statistics and basic analytical tools for
                              SEO and marketing purposes.
                            </p>
                            <div>
                              <Link
                                to="#"
                                className="btn btn-outline-secondary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#google-analytics"
                              >
                                <i className="ti ti-tool me-1" />
                                View Integration
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="system-app-icon">
                                  <img src={appIcon09} alt="Img" />
                                </span>
                                <div className="security-title">
                                  <h5 className="fs-16 fw-medium">
                                    Google Adsense Code
                                  </h5>
                                </div>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user3"
                                  className="check"
                                  defaultChecked
                                />
                                <label htmlFor="user3" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                            <p className="fs-14 mb-3">
                              Provides a way for publishers to earn money from
                              their online content.
                            </p>
                            <div>
                              <Link
                                to="#"
                                className="btn btn-outline-secondary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#google-adsense"
                              >
                                <i className="ti ti-tool me-1" />
                                View Integration
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="system-app-icon">
                                  <img src={appIcon10} alt="Img" />
                                </span>
                                <div className="security-title">
                                  <h5 className="fs-16 fw-medium">
                                    Google Map
                                  </h5>
                                </div>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user4"
                                  className="check"
                                  defaultChecked
                                />
                                <label htmlFor="user4" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                            <p className="fs-14 mb-3">
                              Provides detailed information about geographical
                              regions and sites worldwide.
                            </p>
                            <div>
                              <Link
                                to="#"
                                className="btn btn-outline-secondary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#configure-google-map"
                              >
                                <i className="ti ti-tool me-1" />
                                View Integration
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
        <CommonFooter />
      </div>

      {/* Google Captcha */}
      <div className="modal fade" id="google-captcha">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4 className="fs-18 fw-bold">Configure Google Captcha</h4>
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
                            Google Rechaptcha Site Key <span> *</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-0">
                          <label className="form-label">
                            Google Rechaptcha Secret Key <span> *</span>
                          </label>
                          <input type="text" className="form-control" />
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
                    <Link
                      to="#"
                      className="btn btn-submit"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Google Captcha */}
      {/* Google Analytics */}
      <div className="modal fade" id="google-analytics">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4 className="fs-18 fw-bold">
                      Configure Google Analytics
                    </h4>
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
                        <div className="mb-0">
                          <label className="form-label">
                            Google Analytics <span> *</span>
                          </label>
                          <input type="text" className="form-control" />
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
                    <Link
                      to="#"
                      className="btn btn-submit"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Google Analytics */}
      {/* Google Adsense */}
      <div className="modal fade" id="google-adsense">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4 className="fs-18 fw-bold">
                      Configure Google Adsense Code
                    </h4>
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
                        <div className="mb-0">
                          <label className="form-label">
                            Google Adsense Code <span> *</span>
                          </label>
                          <input type="text" className="form-control" />
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
                    <Link
                      to="#"
                      className="btn btn-submit"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Google Adsense */}
      {/* Google Map */}
      <div className="modal fade" id="configure-google-map">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header">
                  <div className="page-title">
                    <h4 className="fs-18 fw-bold">Configure Google Map ID</h4>
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
                        <div className="mb-0">
                          <label className="form-label">
                            Enter Map ID <span> *</span>
                          </label>
                          <input type="text" className="form-control" />
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
                    <Link
                      to="#"
                      className="btn btn-submit"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Google Map */}
    </div>
  );
};

export default SystemSettings;
