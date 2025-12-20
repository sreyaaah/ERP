import { Link } from "react-router-dom";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import CommonFooter from "../../../components/footer/commonFooter";
import {
  facebookIcon,
  googleIcon,
  linkdedinIcon,
  twitterIcon,
} from "../../../utils/imagepath";

const SocialAuthentication = () => {
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
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-light border me-2">
                                  <img
                                    src={facebookIcon}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h5>Facebook</h5>
                                </div>
                              </div>
                              <span className="badge bg-outline-success">
                                Connected
                              </span>
                            </div>
                            <p className="border-bottom pb-3 mb-3">
                              Connect with friends, family and share updates,
                              photos, moments with people you know.
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <Link
                                  to="#"
                                  className="btn btn-outline-secondary btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#fb-connect"
                                >
                                  <i className="ti ti-tool me-1" />
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
                      <div className="col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-light border me-2">
                                  <img
                                    src={twitterIcon}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h5>Twitter</h5>
                                </div>
                              </div>
                              <span className="badge bg-outline-light">
                                Not connected
                              </span>
                            </div>
                            <p className="border-bottom pb-3 mb-3">
                              Communicate and stay connected through the
                              exchange of quick, frequent messages
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <Link
                                  to="#"
                                  className="btn btn-outline-secondary btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#twitter-connect"
                                >
                                  <i className="ti ti-tool me-1" />
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
                      <div className="col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-light border me-2">
                                  <img
                                    src={linkdedinIcon}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h5>Linkedin</h5>
                                </div>
                              </div>
                              <span className="badge bg-outline-success">
                                Connected
                              </span>
                            </div>
                            <p className="border-bottom pb-3 mb-3">
                              Network with people and professional organizations
                              in your industry.
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <Link
                                  to="#"
                                  className="btn btn-outline-secondary btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#linkedin-connect"
                                >
                                  <i className="ti ti-tool me-1" />
                                  Connect Now
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
                      <div className="col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-light border me-2">
                                  <img
                                    src={googleIcon}
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <div>
                                  <h5>Google</h5>
                                </div>
                              </div>
                              <span className="badge bg-outline-success">
                                Connected
                              </span>
                            </div>
                            <p className="border-bottom pb-3 mb-3">
                              Google has many special features to help you find
                              exactly what you are looking for.
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <Link
                                  to="#"
                                  className="btn btn-outline-secondary btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#google-connect"
                                >
                                  <i className="ti ti-tool me-1" />
                                  View Integration
                                </Link>
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
      <>
        {/* Connect Facebook */}
        <div className="modal fade" id="fb-connect">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Facebook Login Settings</h4>
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
                            <label className="form-label fw-medium">
                              App ID <span> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label fw-medium">
                              App Secret <span> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-0">
                            <label className="form-label fw-medium">
                              Login Redirect URL <span> *</span>
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
        {/* /Connect Facebook */}
        {/* Connect Twitter */}
        <div className="modal fade" id="twitter-connect">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Twitter Login Settings</h4>
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
                            <label className="form-label fw-medium mb-1">
                              Consumer Key (API Key) <span> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="form-label fw-medium mb-1">
                              Consumer Secret (Secret Key) <span> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-0">
                            <label className="form-label fw-medium mb-1">
                              Login Redirect URL <span> *</span>
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
        {/* /Connect Twitter */}
        {/* Connect Google */}
        <div className="modal fade" id="google-connect">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>Google Login Settings</h4>
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
                            <label className="form-label fw-medium mb-1">
                              Client ID <span> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="form-label fw-medium mb-1">
                              Client Secret Key <span> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-0">
                            <label className="form-label fw-medium mb-1">
                              Login Redirect URL <span> *</span>
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
        {/* /Connect Google */}
        {/* Connect Linkedin */}
        <div className="modal fade" id="linkedin-connect">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="page-title">
                      <h4>LinkedIn Login Settings</h4>
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
                            <label className="form-label fw-medium mb-1">
                              Client ID <span> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-3">
                            <label className="form-label fw-medium mb-1">
                              Client Secret Key <span> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="mb-0">
                            <label className="form-label fw-medium mb-1">
                              Login Redirect URL <span> *</span>
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
        {/* /Connect Linkedin */}
      </>
    </div>
  );
};

export default SocialAuthentication;
