import { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../../components/footer/commonFooter";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import SettingsSideBar from "../settingssidebar";

const SecuritySettings = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
    oldPassword: false,
    newPassword: false,
  });

  interface PasswordVisibility {
    password: boolean;
    confirmPassword: boolean;
    oldPassword: boolean;
    newPassword: boolean;
  }

  type PasswordField = keyof PasswordVisibility;

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState: PasswordVisibility) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const [value, setValue] = useState<any | undefined>(undefined);

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
                    <h4 className="fs-18 fw-bold">Security</h4>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg border bg-light fs-24 me-2">
                            <i className="ti ti-eye-off text-gray-900 fs-18" />
                          </span>
                          <div>
                            <h5 className="fs-16 fw-medium mb-1">Password</h5>
                            <p className="fs-16">
                              Last Changed 22 Dec 2024, 10:30 AM
                            </p>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#change-password"
                        >
                          Change Password
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg border bg-light fs-24 me-2">
                            <i className="ti ti-shield text-gray-900 fs-18" />
                          </span>
                          <div>
                            <h5 className="fs-16 fw-medium mb-1">
                              Two Factor Authentication
                            </h5>
                            <p className="fs-16">
                              Receive codes via SMS or email every time you
                              login
                            </p>
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
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg border bg-light fs-24 me-2">
                            <i className="ti ti-brand-google text-gray-900 fs-18" />
                          </span>
                          <div>
                            <h5 className="fs-16 fw-medium mb-1">
                              Google Authentication
                            </h5>
                            <p className="fs-16">Connect to Google</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="badge bg-outline-success">
                            Connected
                          </span>
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-3">
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
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg border bg-light fs-24 me-2">
                            <i className="ti ti-phone text-gray-900 fs-18" />
                          </span>
                          <div>
                            <h5 className="fs-16 fw-medium mb-1">
                              Phone Number Verification
                            </h5>
                            <p className="fs-16">
                              Verified Mobile Number : +81699799974
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="fs-20 text-success me-3">
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          <Link
                            to="#"
                            className="btn btn-primary mt-0"
                            data-bs-toggle="modal"
                            data-bs-target="#phone-verification"
                          >
                            Change
                          </Link>
                          <Link to="#" className="btn btn-secondary ms-3">
                            Remove
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg border bg-light fs-24 me-2">
                            <i className="ti ti-mail text-gray-900 fs-18" />
                          </span>
                          <div>
                            <h5 className="fs-16 fw-medium mb-1">
                              Email Verification
                            </h5>
                            <p className="fs-16">
                              Verified Email : info@example.com
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="fs-20 text-success me-3">
                            <i className="ti ti-circle-check-filled" />
                          </span>
                          <Link
                            to="#"
                            className="btn btn-primary mt-0"
                            data-bs-toggle="modal"
                            data-bs-target="#email-verification"
                          >
                            Change
                          </Link>
                          <Link to="#" className="btn btn-secondary ms-3">
                            Remove
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg border bg-light fs-24 me-2">
                            <i className="ti ti-tool text-gray-900 fs-18" />
                          </span>
                          <div>
                            <h5 className="fs-16 fw-medium mb-1">
                              Device Management
                            </h5>
                            <p className="fs-16">
                              Manage devices associated with the account
                            </p>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-primary mt-0"
                          data-bs-toggle="modal"
                          data-bs-target="#device-management"
                        >
                          Manage
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg border bg-light fs-24 me-2">
                            <i className="ti ti-activity text-gray-900 fs-18" />
                          </span>
                          <div>
                            <h5 className="fs-16 fw-medium mb-1">
                              Account Activity
                            </h5>
                            <p className="fs-16">
                              Manage activities associated with the account
                            </p>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-primary mt-0"
                          data-bs-toggle="modal"
                          data-bs-target="#account-activity"
                        >
                          View
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg border bg-light fs-24 me-2">
                            <i className="ti ti-ban text-gray-900 fs-18" />
                          </span>
                          <div>
                            <h5 className="fs-16 fw-medium mb-1">
                              Deactivate Account
                            </h5>
                            <p className="fs-16">
                              This will shutdown your account. Your account will
                              be reactive when you sign in again
                            </p>
                          </div>
                        </div>
                        <Link to="#" className="btn btn-primary mt-0">
                          Deactivate
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-lg border bg-light fs-24 me-2">
                            <i className="ti ti-trash text-gray-900 fs-18" />
                          </span>
                          <div>
                            <h5 className="fs-16 fw-medium mb-1">
                              Delete Account
                            </h5>
                            <p className="fs-16">
                              Your account will be permanently deleted
                            </p>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-account"
                        >
                          Delete
                        </Link>
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

      {/* Change Password */}
      <div className="modal fade" id="change-password">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Change Password</h4>
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
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-blocks">
                    <label className="fw-medium">
                      Current Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={
                          passwordVisibility.oldPassword ? "text" : "password"
                        }
                        className="pass-input form-control"
                      />
                      <span
                        className={`ti toggle-passwords text-gray-9 ${
                          passwordVisibility.oldPassword
                            ? "ti-eye"
                            : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("oldPassword")}
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-blocks">
                    <label className="fw-medium">
                      New Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={
                          passwordVisibility.newPassword ? "text" : "password"
                        }
                        className="pass-input form-control"
                      />
                      <span
                        className={`ti toggle-passwords text-gray-9 ${
                          passwordVisibility.newPassword
                            ? "ti-eye"
                            : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("newPassword")}
                      ></span>
                    </div>
                    <div className="password-strength" id="passwordStrength">
                      <span id="poor" />
                      <span id="weak" />
                      <span id="strong" />
                      <span id="heavy" />
                    </div>
                    <div id="passwordInfo" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-blocks mb-0">
                    <label className="fw-medium">
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={
                          passwordVisibility.confirmPassword
                            ? "text"
                            : "password"
                        }
                        className="pass-input form-control"
                      />
                      <span
                        className={`ti toggle-passwords text-gray-9 ${
                          passwordVisibility.confirmPassword
                            ? "ti-eye"
                            : "ti-eye-off"
                        }`}
                        onClick={() =>
                          togglePasswordVisibility("confirmPassword")
                        }
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link
                to="#"
                className="btn btn-secondary me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Change Password */}
      {/* Change Phone Number */}
      <div className="modal fade" id="phone-verification">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Change Phone Number</h4>
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
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-blocks">
                    <label className="fw-medium">
                      Current Phone Number{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      country="US"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-blocks">
                    <label className="fw-medium">
                      New Phone Number <span className="text-danger">*</span>
                    </label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      country="US"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-blocks">
                    <p className="fs-14">
                      <i className="ti ti-info-circle me-1" /> New phone number
                      only updated once you verified
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-blocks mb-0">
                    <label className="fw-medium">
                      Current Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={
                          passwordVisibility.oldPassword ? "text" : "password"
                        }
                        className="pass-input form-control"
                      />
                      <span
                        className={`ti toggle-passwords text-gray-9 ${
                          passwordVisibility.oldPassword
                            ? "ti-eye"
                            : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("oldPassword")}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link
                to="#"
                className="btn btn-secondary me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Change Phone Number */}
      {/* Change Email */}
      <div className="modal fade" id="email-verification">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Change Email</h4>
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
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-blocks">
                    <label className="fw-medium">
                      Current Email <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-blocks">
                    <label className="fw-medium">
                      New Email <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-blocks">
                    <p className="fs-14">
                      <i className="ti ti-info-circle me-1" /> New email address
                      only updated once you verified
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-blocks mb-0">
                    <label className="fw-medium">
                      Current Password <span className="text-danger">*</span>
                    </label>
                   <div className="pass-group">
                      <input
                        type={
                          passwordVisibility.oldPassword ? "text" : "password"
                        }
                        className="pass-input form-control"
                      />
                      <span
                        className={`ti toggle-passwords text-gray-9 ${
                          passwordVisibility.oldPassword
                            ? "ti-eye"
                            : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("oldPassword")}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link
                to="#"
                className="btn btn-secondary me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Change Email */}
      {/* Device Management */}
      <div
        className="modal device-management-modal fade"
        id="device-management"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Device Management</h4>
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
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="device-management-table">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Device</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>IP Address</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Chrome - Windows</td>
                            <td>15 May 2025, 10:30 AM</td>
                            <td>Newyork / USA</td>
                            <td>232.222.12.72</td>
                            <td>
                              <Link to="#" className="btn">
                                <i className="ti ti-trash" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>Safari Macos</td>
                            <td>10 Apr 2025, 05:15 PM</td>
                            <td>Newyork / USA</td>
                            <td>224.111.12.75</td>
                            <td>
                              <Link to="#" className="btn">
                                <i className="ti ti-trash" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>Firefox Windows</td>
                            <td>15 Mar 2025, 02:40 PM</td>
                            <td>Newyork / USA</td>
                            <td>111.222.13.28</td>
                            <td>
                              <Link to="#" className="btn">
                                <i className="ti ti-trash" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>Safari Macos</td>
                            <td>15 Jan 2025, 08:00 AM</td>
                            <td>Newyork / USA</td>
                            <td>333.555.10.54</td>
                            <td>
                              <Link to="#" className="btn">
                                <i className="ti ti-trash" />
                              </Link>
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
      {/* /Device Management */}
      {/* Account Activity */}
      <div className="modal device-management-modal fade" id="account-activity">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h4>Account Activity</h4>
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
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="device-management-table">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Device</th>
                            <th>Location</th>
                            <th>IP Address</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>15 May 2025, 10:30 AM</td>
                            <td>Chrome - Windows</td>
                            <td>Newyork / USA</td>
                            <td>232.222.12.72</td>
                            <td>
                              <Link to="#" className="btn">
                                <i className="ti ti-logout" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>10 Apr 2025, 05:15 PM</td>
                            <td>Safari Macos</td>
                            <td>Newyork / USA</td>
                            <td>224.111.12.75</td>
                            <td>
                              <Link to="#" className="btn">
                                <i className="ti ti-logout" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>15 Mar 2025, 02:40 PM</td>
                            <td>Firefox Windows</td>
                            <td>Newyork / USA</td>
                            <td>111.222.13.28</td>
                            <td>
                              <Link to="#" className="btn">
                                <i className="ti ti-logout" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>15 Jan 2025, 08:00 AM</td>
                            <td>Safari Macos</td>
                            <td>Newyork / USA</td>
                            <td>333.555.10.54</td>
                            <td>
                              <Link to="#" className="btn">
                                <i className="ti ti-logout" />
                              </Link>
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
      {/* /Account Activity */}
      {/* Delete Account */}
      <div className="modal delete-account-modal fade" id="delete-account">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header custom-modal-header">
              <div className="page-title">
                <h4>Delete Account</h4>
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
            <div className="modal-body">
              <div className="delete-header">
                <h4 className="fs-16 fw-medium mb-1">
                  Why Are You Deleting Your Account?
                </h4>
                <p className="fs-16">
                  We are sorry to see you go! To help us improve, please let us
                  know your reason for deleting your account
                </p>
              </div>
              <div className="form-check d-flex mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="delete"
                  id="del-acc1"
                />
                <label
                  className="form-check-label fs-14 ms-2"
                  htmlFor="del-acc1"
                >
                  <span className="text-gray-9 fw-medium">
                    No longer using the service
                  </span>
                  <span className="d-block text-default">
                    I no longer need this service and won’t be using it in the
                    future.
                  </span>
                </label>
              </div>
              <div className="form-check d-flex mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="delete"
                  id="del-acc2"
                />
                <label
                  className="form-check-label fs-14 ms-2"
                  htmlFor="del-acc2"
                >
                  <span className="text-gray-9 fw-medium">
                    Privacy concerns
                  </span>
                  <span className="d-block text-default">
                    I am concerned about how my data is handled and want to
                    remove my information.
                  </span>
                </label>
              </div>
              <div className="form-check d-flex mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="delete"
                  id="del-acc3"
                />
                <label
                  className="form-check-label fs-14 ms-2"
                  htmlFor="del-acc3"
                >
                  <span className="text-gray-9 fw-medium">
                    Too many notifications/emails
                  </span>
                  <span className="d-block text-default">
                    I’m overwhelmed by the volume of notifications or emails and
                    would like to reduce them.
                  </span>
                </label>
              </div>
              <div className="form-check d-flex mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="delete"
                  id="del-acc4"
                />
                <label
                  className="form-check-label fs-14 ms-2"
                  htmlFor="del-acc4"
                >
                  <span className="text-gray-9 fw-medium">
                    Poor user experience
                  </span>
                  <span className="d-block text-default">
                    I’ve had difficulty using the platform, and it didn’t meet
                    my expectations.
                  </span>
                </label>
              </div>
              <div className="form-check d-flex mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="delete"
                  id="del-acc5"
                  defaultChecked
                />
                <label
                  className="form-check-label fs-14 ms-2"
                  htmlFor="del-acc5"
                >
                  <span className="text-gray-9 fw-medium">
                    Other (Please specify)
                  </span>
                </label>
              </div>
              <div className="ms-4">
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div>
            </div>
            <div className="modal-footer">
              <Link
                to="#"
                className="btn btn-secondary me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                Delete Account
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Account */}
    </div>
  );
};

export default SecuritySettings;
