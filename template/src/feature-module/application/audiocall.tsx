

import { Link } from "react-router-dom";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import CommonFooter from "../../components/footer/commonFooter";
import { user05, user27 } from "../../utils/imagepath";

const Audiocall = () => {
  return (
    <div className="page-wrapper">
      <div className="content mb-3">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Calls</h4>
              <h6>Manage your calls</h6>
            </div>
          </div>
         <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>

          <div className="page-btn">
            <Link to="#" className="btn btn-primary">
              <i className="ti ti-circle-plus me-1"></i>
              Add People
            </Link>
          </div>
        </div>
        <div className="row">
          {/* Call */}
          <div className="col-xxl-12">
            <div className="card incoming-call mb-0">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg avatar-rounded me-2">
                      <img
                        src={user27}
                        className="img-fluid rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div>
                      <h5 className="mb-1">
                        <Link to="#">Anthony Lewis</Link>
                      </h5>
                      <span className="d-block">Online</span>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="avatar avatar-md rounded-circle bg-secondary-transparent text-dark"
                  >
                    <i className="ti ti-user-plus fs-20" />
                  </Link>
                </div>
              </div>
              <div className="card-body position-relative text-center d-flex flex-column justify-content-center">
                <div className="voice-call-img mb-3">
                  <img
                    src={user27}
                    className="img-fluid rounded-circle"
                    alt="img"
                  />
                </div>
                <h4>Anthony Lewis</h4>
                <p>00:24</p>
                <Link
                  to="#"
                  className="avatar avatar-xl position-absolute end-0 bottom-0 m-3"
                >
                  <img src={user05} alt="Img" />
                </Link>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-light call-item py-1 px-2 d-flex align-items-center justify-content-center rounded-circle me-3"
                  >
                    <i className="ti ti-video fs-20" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-danger call-item py-1 px-2 d-flex align-items-center justify-content-center rounded-circle me-3"
                  >
                    <i className="ti ti-phone fs-20" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-light call-item py-1 px-2 d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="ti ti-microphone fs-20" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Call */}
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default Audiocall;
