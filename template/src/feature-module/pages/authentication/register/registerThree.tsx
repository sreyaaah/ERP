import { useState } from "react";

import { Link } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { appleLogo, facebookLogo, googleLogo, logo, logoWhite } from "../../../../utils/imagepath";

const RegisterThree = () => {
  const route = all_routes;
  const [passwordVisibility, setPasswordVisibility] = useState({
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
                          <h3>Register</h3>
                          <h4>Create New Dreamspos Account</h4>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            Name <span className="text-danger"> *</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control border-end-0"
                            />
                            <span className="input-group-text border-start-0">
                              <i className="ti ti-user" />
                            </span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            Email <span className="text-danger"> *</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control border-end-0"
                            />
                            <span className="input-group-text border-start-0">
                              <i className="ti ti-mail" />
                            </span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger"> *</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type={passwordVisibility.password ? "text" : "password"}
                              className="pass-input form-control"
                            />
                            <span
                              className={`ti toggle-password text-gray-9 ${
                                passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                              }`}
                              onClick={() =>
                                togglePasswordVisibility("password")
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
                        <div className="form-login authentication-check">
                          <div className="row">
                            <div className="col-sm-8">
                              <div className="custom-control custom-checkbox justify-content-start">
                                <div className="custom-control custom-checkbox">
                                  <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                                    <input type="checkbox" />
                                    <span className="checkmarks" />I agree to
                                    the{" "}
                                    <Link to="#" className="text-primary">
                                      Terms &amp; Privacy
                                    </Link>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-login">
                          <button type="submit" className="btn btn-login">
                            Sign Up
                          </button>
                        </div>
                        <div className="signinform">
                          <h4>
                            Already have an account ?{" "}
                            <Link to={route.signin} className="hover-a">
                              Sign In Instead
                            </Link>
                          </h4>
                        </div>
                        <div className="form-setlogin or-text">
                          <h4>OR</h4>
                        </div>
                        <div className="mt-2">
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <div className="text-center me-2 flex-fill">
                              <Link
                                to="#"
                                className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center"
                              >
                                <img
                                  className="img-fluid m-1"
                                  src={facebookLogo}
                                  alt="Facebook"
                                />
                              </Link>
                            </div>
                            <div className="text-center me-2 flex-fill">
                              <Link
                                to="#"
                                className="btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center"
                              >
                                <img
                                  className="img-fluid m-1"
                                  src={googleLogo}
                                  alt="Facebook"
                                />
                              </Link>
                            </div>
                            <div className="text-center flex-fill">
                              <Link
                                to="#"
                                className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                              >
                                <img
                                  className="img-fluid m-1"
                                  src={appleLogo}
                                  alt="Apple"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                  <p>Copyright © 2025 DreamsPOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default RegisterThree;
