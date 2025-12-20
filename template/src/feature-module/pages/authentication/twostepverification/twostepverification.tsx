import { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import OTPInput from "react-otp-input";
import { logo, logoWhite } from "../../../../utils/imagepath";

const Twostepverification = () => {
  const route = all_routes;
  const [otp, setOtp] = useState("");

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper bg-img">
            <div className="login-content authent-content">
              <form className="digit-group">
                <div className="login-userset">
                  <div className="login-logo logo-normal">
                    <img src={logo} alt="img" />
                  </div>
                  <Link to={route.dashboard} className="login-logo logo-white">
                    <img src={logoWhite} alt="Img" />
                  </Link>
                  <div>
                    <div className="login-userheading">
                      <h3>2 Step Verification</h3>
                      <h4>
                        Please enter the OTP received to confirm your account
                        ownership. A code has been send to ******doe@example.com
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
                        to={route.resetpassword}
                        className="btn btn-primary w-100"
                      >
                        Submit
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
    </>
  );
};

export default Twostepverification;
