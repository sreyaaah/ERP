import { useState } from "react";

import { Link } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { logo, logoWhite } from "../../../../utils/imagepath";

const ResetpasswordThree = () => {
  const route = all_routes;

  const [passwordVisibility, setPasswordVisibility] = useState<any>({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: any) => {
    setPasswordVisibility((prevState: any) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper login-new">
            <div className="row w-100">
              <div className="col-lg-5 mx-auto">
                <div className="login-content user-login">
                  <div className="login-logo">
                    <img src={logo} alt="img" />
                    <Link
                      to={route.dashboard}
                      className="login-logo logo-white"
                    >
                      <img src={logoWhite} alt="Img" />
                    </Link>
                  </div>
                  <form>
                    <div className="card">
                      <div className="card-body p-5">
                        <div className="login-userheading">
                          <h3>Reset password?</h3>
                          <h4>
                            Enter New Password &amp; Confirm Password to get
                            inside
                          </h4>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            Old Password <span className="text-danger"> *</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type={
                                passwordVisibility.oldPassword
                                  ? "text"
                                  : "password"
                              }
                              className="pass-input form-control"
                            />
                            <span
                              className={`ti toggle-passwords text-gray-9 ${
                                passwordVisibility.oldPassword
                                  ? "ti-eye"
                                  : "ti-eye-off"
                              }`}
                              onClick={() =>
                                togglePasswordVisibility("oldPassword")
                              }
                            ></span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            New Password <span className="text-danger"> *</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type={
                                passwordVisibility.newPassword
                                  ? "text"
                                  : "password"
                              }
                              className="pass-input form-control"
                            />
                            <span
                              className={`ti toggle-passwords text-gray-9 ${
                                passwordVisibility.newPassword
                                  ? "ti-eye"
                                  : "ti-eye-off"
                              }`}
                              onClick={() =>
                                togglePasswordVisibility("newPassword")
                              }
                            ></span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            Confirm Password{" "}
                            <span className="text-danger"> *</span>
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
                        <div className="form-login">
                          <Link
                            to={route.successThree}
                            className="btn btn-login"
                          >
                            Change Password
                          </Link>
                        </div>
                        <div className="signinform text-center mb-0">
                          <h4>
                            Return to{" "}
                            <Link to={route.signinthree} className="hover-a">
                              {" "}
                              login{" "}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
              <p>Copyright © 2025 DreamsPOS</p>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default ResetpasswordThree;
