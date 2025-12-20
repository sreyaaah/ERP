import { Link } from "react-router-dom";
import AwsSettings from "../../../core/modals/settings/awssettings";
import SettingsSideBar from "../settingssidebar";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";

import { storageIcon01, storageIcon02 } from "../../../utils/imagepath";

const StorageSettings = () => {
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
                    <h4>Storage</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <span className="system-app-icon">
                                  <img src={storageIcon01} alt="Img" />
                                </span>
                                <h6>Local Storage</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link to="#">
                                  <i className="feather icon-settings me-2" />
                                </Link>
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
                                  >
                                    {" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <span className="system-app-icon">
                                  <img src={storageIcon02} alt="Img" />
                                </span>
                                <h6>AWS</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#aws-config"
                                >
                                   <i className="feather icon-settings me-2" />
                                </Link>
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
                                  >
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

      <AwsSettings />
    </div>
  );
};

export default StorageSettings;
