import { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { logoSvg, logoWhitePng } from "../../../../utils/imagepath";
import OtpInput from "react-otp-input";

const EmailVerification = () => {
  const route = all_routes;
  const [otp, setOtp] = useState("");

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper email-veri-wrap bg-img">
            <div className="login-content authent-content">
              <form className="digit-group">
                <div className="login-userset">
                  <div className="login-logo logo-normal">
                    <img src={logoSvg} alt="img" />
                  </div>
                  <Link to={route.dashboard} className="login-logo logo-white">
                    <img src={logoWhitePng} alt="Img" />
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
                        <OtpInput
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
                        to={route.resetpassword}
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
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default EmailVerification;
