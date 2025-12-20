
import { Link } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { logoSvg, logoWhitePng } from "../../../../utils/imagepath";

const ForgotpasswordThree = () => {
  const route = all_routes;
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
                    <img src={logoSvg} alt="img" />
                    <Link
                      to={route.dashboard}
                      className="login-logo logo-white"
                    >
                      <img src={logoWhitePng} alt="Img" />
                    </Link>
                  </div>
                  <form>
                    <div className="card">
                      <div className="card-body p-5">
                        <div className="login-userheading">
                          <h3>Forgot password?</h3>
                          <h4>
                            If you forgot your password, well, then we’ll email
                            you instructions to reset your password.
                          </h4>
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
                        <div className="form-login">
                          <Link
                            to={route.signinthree}
                            className="btn btn-login"
                          >
                            Sign Up
                          </Link>
                        </div>
                        <div className="signinform text-center">
                          <h4>
                            Return to
                            <Link to={route.signinthree} className="hover-a">
                              {" "}
                              login{" "}
                            </Link>
                          </h4>
                        </div>
                        <div className="form-setlogin or-text">
                          <h4>OR</h4>
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

export default ForgotpasswordThree;
