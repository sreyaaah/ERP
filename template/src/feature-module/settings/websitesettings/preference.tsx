import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";

const Preference = () => {
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
                    <h4 className="fs-18 fw-bold">Preference</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">Maintenance Mode</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user1"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user1"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">Copoun</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user2"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user2"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">Offers</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user3"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user3"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">MultiLanguage</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user4"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user4"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">Multicurrency</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user5"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user5"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">SMS</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user6"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user6"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">Stores</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user7"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user7"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">Warehouses</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user8"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user8"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">Barcode</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user9"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user9"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">QR Code</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user10"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user10"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="fw-medium">HRMS</h5>
                              </div>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user11"
                                  className="check"
                                  defaultChecked={false}
                                />
                                <label
                                  htmlFor="user11"
                                  className="checktoggle"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-end settings-bottom-btn mt-0">
                      <button type="button" className="btn btn-secondary me-2">
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preference;
