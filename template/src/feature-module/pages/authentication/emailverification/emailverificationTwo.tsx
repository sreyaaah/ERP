import { useState } from "react";
import { all_routes } from "../../../../routes/all_routes";
import { Link } from "react-router-dom";
import { authentication04, logoSvg, logoWhite } from "../../../../utils/imagepath";
import OTPInput from "react-otp-input";

const EmailverificationTwo = () => {
  const route = all_routes;
  const [otp, setOtp] = useState("");

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="row login-wrapper m-0">
            <div className="col-lg-6 p-0">
              <div className="login-content">
                <form className="digit-group">
                  <div className="login-userset">
                    <div className="login-logo logo-normal">
                      <img src={logoSvg} alt="img" />
                    </div>
                    <Link
                      to={route.dashboard}
                      className="login-logo logo-white"
                    >
                      <img src={logoWhite} alt="Img" />
                    </Link>
                    <div>
                      <div className="login-userheading">
                        <h3>Email OTP Verification</h3>
                        <h4>
                          OTP sent to your Email Address
                          ending&nbsp;******doe@example.com
                        </h4>
                      </div>
                      <div className="text-center otp-input">
                        <div className="d-flex align-items-center mb-3 otp-input-class-custom">
                          <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderInput={(props) => <input {...props} />}
                            inputType="tel"
                            containerStyle={{
                              display: "flex",
                              gap: "8px",
                              justifyContent: "center",
                            }}
                          />
                        </div>
                        <div>
                          <div className="badge bg-danger-transparent mb-3">
                            <p className="d-flex align-items-center ">
                              <i className="ti ti-clock me-1" />
                              09:59
                            </p>
                          </div>
                          <div className="mb-3 d-flex justify-content-center">
                            <p className="text-gray-9">
                              {`Didn't`} get the OTP?{" "}
                              <Link to="#" className="text-primary">
                                Resend OTP
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <Link
                          to={route.resetpasswordTwo}
                          className="btn btn-primary w-100"
                        >
                          Verify &amp; Proceed
                        </Link>
                      </div>
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
                <img src={authentication04} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default EmailverificationTwo;
