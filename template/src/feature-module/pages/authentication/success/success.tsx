import { all_routes } from "../../../../routes/all_routes";
import { Link } from "react-router-dom";
import { checkIcon, logoSvg, logoWhitePng } from "../../../../utils/imagepath";

const Success = () => {
  const route = all_routes;

  return (
    <div>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          <div className="account-content">
            <div className="login-wrapper register-wrap bg-img">
              <div className="login-content authent-content">
                <div className="login-userset">
                  <div className="login-userset">
                    <div className="login-logo logo-normal">
                      <img src={logoSvg} alt="img" />
                    </div>
                  </div>
                  <Link to={route.dashboard} className="login-logo logo-white">
                    <img src={logoWhitePng} alt="Img" />
                  </Link>
                  <div className="login-userheading text-center">
                    <img src={checkIcon} alt="Icon" />
                    <h3 className="text-center">Success</h3>
                    <h4 className="verfy-mail-content text-center">
                      Your Passwrod Reset Successfully!
                    </h4>
                  </div>
                  <div className="form-login">
                    <Link className="btn btn-login mt-0" to={route.signin}>
                      Back to Login
                    </Link>
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
    </div>
  );
};

export default Success;
