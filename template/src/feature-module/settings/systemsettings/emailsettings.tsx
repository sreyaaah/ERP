import { Link } from "react-router-dom";
import SettingsSideBar from "../settingssidebar";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import RefreshIcon from "../../../components/tooltip-content/refresh";

const EmailSettings = () => {
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
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h4>Email Settings</h4>
                    <Link to="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test-mail">
                      Send test email
                    </Link>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card">
                          <div className="card-body">
                            <div className="flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                                <h5>PHP Mailer</h5>
                                <span className="badge bg-outline-success">
                                  Connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Used to send emails safely and easily via PHP
                                code from a web server.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <Link
                                  to="#"
                                  className="btn btn-outline-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#php-mail"
                                >
                                  <i className="ti ti-tool me-2" />
                                  View Integration
                                </Link>
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
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card">
                          <div className="card-body">
                            <div className="flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                                <h5>SMTP</h5>
                                <span className="badge bg-outline-success">
                                  Connected
                                </span>
                              </div>
                              <p className="mb-3">
                                SMTP is used to send, relay or forward messages
                                from a mail client.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <Link
                                  to="#"
                                  className="btn btn-outline-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#smtp-mail"
                                >
                                  <i className="ti ti-tool me-2" />
                                  View Integration
                                </Link>
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
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card">
                          <div className="card-body">
                            <div className="flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                                <h5>SendGrid</h5>
                                <span className="badge bg-outline-success">
                                  Connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Cloud-based email marketing tool that assists
                                marketers and developers .
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <Link
                                  to="#"
                                  className="btn btn-outline-secondary"
                                  data-bs-toggle="modal" data-bs-target="#test-mail"
                                >
                                  <i className="ti ti-tool me-2" />
                                  Connect
                                </Link>
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
      {/* Php Mail */}
      <div className="modal fade" id="php-mail">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>PHP Mailer</h4>
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
                        From Email Address <span> *</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Email Password <span> *</span>
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-0">
                      <label className="form-label">
                        {" "}
                        From Email Name <span> *</span>
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
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Php Mail */}
      {/* Smtp Mail */}
      <div className="modal fade" id="smtp-mail">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>SMTP</h4>
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
                        From Email Address <span> *</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Email Password <span> *</span>
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        {" "}
                        Email Host <span> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-0">
                      <label className="form-label">
                        {" "}
                        Port <span> *</span>
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
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Smtp Mail */}
      {/* Test Mail */}
      <div className="modal fade" id="test-mail">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Test Mail</h4>
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
                        Enter Email Address <span> *</span>
                      </label>
                      <input type="email" className="form-control" />
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Test Mail */}
    </div>
  );
};

export default EmailSettings;
