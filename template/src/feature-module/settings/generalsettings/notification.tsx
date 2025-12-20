import SettingsSideBar from "../settingssidebar";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import RefreshIcon from "../../../components/tooltip-content/refresh";

const Notification = () => {
 
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
                    <h4 className="fs-18 fw-bold">Notification</h4>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <h6 className="fw-medium">
                            Mobile Push Notifications
                          </h6>
                        </div>
                        <div className="status-toggle modal-status">
                          <input
                            type="checkbox"
                            id="user1"
                            className="check"
                            defaultChecked={false}
                          />
                          <label htmlFor="user1" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <h6 className="fw-medium">Desktop Notifications</h6>
                        </div>
                        <div className="status-toggle modal-status">
                          <input
                            type="checkbox"
                            id="user2"
                            className="check"
                            defaultChecked={false}
                          />
                          <label htmlFor="user2" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <h6 className="fw-medium">Email Notifications</h6>
                        </div>
                        <div className="status-toggle modal-status">
                          <input
                            type="checkbox"
                            id="user3"
                            className="check"
                            defaultChecked={false}
                          />
                          <label htmlFor="user3" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <h6 className="fw-medium">MSMS Notifications</h6>
                        </div>
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                          <input
                            type="checkbox"
                            id="user4"
                            className="check"
                            defaultChecked={false}
                          />
                          <label htmlFor="user4" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                      <div className="table-responsive notification-table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>General Notification</th>
                              <th>Push</th>
                              <th>SMS</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Payment</td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="users4"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="users4"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="users5"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="users5"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="users6"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="users6"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Transaction</td>
                              <td>
                                <div className="status-toggle modal-status">
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
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
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
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
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
                              </td>
                            </tr>
                            <tr>
                              <td>Email Verification</td>
                              <td>
                                <div className="status-toggle modal-status">
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
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
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
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
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
                              </td>
                            </tr>
                            <tr>
                              <td>OTP</td>
                              <td>
                                <div className="status-toggle modal-status">
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
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user12"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="user12"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user13"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="user13"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Activity</td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user14"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="user14"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user15"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="user15"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user16"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="user16"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Account</td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user17"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="user17"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user18"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="user18"
                                    className="checktoggle"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user19"
                                    className="check"
                                    defaultChecked={false}
                                  />
                                  <label
                                    htmlFor="user19"
                                    className="checktoggle"
                                  />
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
  );
};

export default Notification;
