import { useState } from "react";

import { Link } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { authentication05, logo, logoWhite } from "../../../../utils/imagepath";

const ResetpasswordTwo = () => {
  const route = all_routes;

  const [passwordVisibility, setPasswordVisibility] = useState<any>({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field:any) => {
    setPasswordVisibility((prevState:any) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="row login-wrapper m-0">
            <div className="col-lg-6 p-0">
              <div className="login-content">
                <form>
                  <div className="login-userset">
                    <div className="login-logo logo-normal">
                      <img src={logo} alt="img" />
                    </div>
                    <Link
                      to={route.dashboard}
                      className="login-logo logo-white"
                    >
                      <img src={logoWhite} alt="Img" />
                    </Link>
                    <div className="login-userheading">
                      <h3>Reset password?</h3>
                      <h4>
                        Enter New Password &amp; Confirm Password to get inside
                      </h4>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Old Password <span className="text-danger"> *</span>
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
                          onClick={() =>
                            togglePasswordVisibility("newPassword")
                          }
                        ></span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Confirm Password <span className="text-danger"> *</span>
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
                      <Link to={all_routes.successTwo} className="btn btn-login">
                        Change Password
                      </Link>
                    </div>
                    <div className="signinform text-center">
                      <h4>
                        Return to{" "}
                        <Link to={route.signintwo} className="hover-a">
                          {" "}
                          login{" "}
                        </Link>
                      </h4>
                    </div>
                    <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                      <p>Copyright © 2025 DreamsPOS</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="login-img">
                <img src={authentication05} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default ResetpasswordTwo;
