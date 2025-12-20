
import CommonFooter from "../../components/footer/commonFooter";

import { all_routes } from "../../routes/all_routes";
import { Link } from "react-router-dom";
import { user32 } from "../../utils/imagepath";

const Employeedetails = () => {
  const route = all_routes;

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div>
            <Link
              to={route.employeegrid}
              className="d-inline-flex align-items-center"
            >
              <i className="ti ti-chevron-left me-2" />
              Back to List
            </Link>
          </div>
          <ul className="table-top-head">
            <li className="me-2">
              <Link
                to={""}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Refresh"
              >
                <i className="feather icon-rotate-ccw feather-rotate-ccw" />
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={""}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Collapse"
                id="collapse-header"
              >
                <i  className="feather icon-chevron-up feather-chevron-up" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-xl-4 theiaStickySidebar">
            <div className="card rounded-0 border-0">
              <div className="card-header rounded-0 bg-primary d-flex align-items-center">
                <span className="avatar avatar-xl avatar-rounded flex-shrink-0 border border-white border-3 me-3">
                  <img src={user32} alt="Img" />
                </span>
                <div className="me-3">
                  <h6 className="text-white mb-1">Stephan Peralt</h6>
                  <span className="badge bg-purple-transparent text-purple">
                    Designer
                  </span>
                </div>
                <div>
                  <Link to="#" className="btn btn-white">
                    Edit Profile
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-id me-2" />
                    Employee ID
                  </span>
                  <p className="text-dark">EMP-0001</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-star me-2" />
                    Team
                  </span>
                  <p className="text-dark">UI/UX Design</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-calendar-check me-2" />
                    Date Of Join
                  </span>
                  <p className="text-dark">1st Jan 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card rounded-0 border-0">
              <div className="card-header border-0 rounded-0 bg-light d-flex align-items-center">
                <h6>Basic information</h6>
              </div>
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Phone</p>
                      <span className="text-gray-900 fs-13">
                        +1 458 7877 879
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Email</p>
                      <span className="text-gray-900 fs-13">
                        perralt12@example.com
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Gender</p>
                      <span className="text-gray-900 fs-13">Male</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Birdthday</p>
                      <span className="text-gray-900 fs-13">
                        24th July 1990
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Address</p>
                      <span className="text-gray-900 fs-13">
                        1861 Bayonne Ave, Manchester
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Nationality</p>
                      <span className="text-gray-900 fs-13">Indian</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Blood Group</p>
                      <span className="text-gray-900 fs-13">O+ve</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Shift</p>
                      <span className="text-gray-900 fs-13">Mid Shift</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card rounded-0 border-0">
              <div className="card-header border-0 rounded-0 bg-light d-flex align-items-center">
                <h6>About Employee</h6>
              </div>
              <div className="card-body pb-0">
                <p>
                  As an award winning designer, I deliver exceptional quality
                  work and bring value to your brand! With 10 years of
                  experience and 350+ projects completed worldwide with
                  satisfied customers, I developed the 360° brand approach,
                  which helped me to create numerous brands that are relevant,
                  meaningful and loved.Phone
                </p>
              </div>
            </div>
            <div className="card rounded-0 border-0">
              <div className="card-header border-0 rounded-0 bg-light d-flex align-items-center">
                <h6>Bank Information</h6>
              </div>
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Bank Name</p>
                      <span className="text-gray-900 fs-13">
                        Swizz International
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Bank account No</p>
                      <span className="text-gray-900 fs-13">350501501690</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">IFSC</p>
                      <span className="text-gray-900 fs-13">SW7994</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Branch</p>
                      <span className="text-gray-900 fs-13">Alabama USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card rounded-0 border-0">
              <div className="card-header border-0 rounded-0 bg-light d-flex align-items-center">
                <h6>Emergency Contact Number</h6>
              </div>
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Name</p>
                      <span className="text-gray-900 fs-13">
                        Andrea Jermiah
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Relation</p>
                      <span className="text-gray-900 fs-13">Mother</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-13 mb-2">Phone Number</p>
                      <span className="text-gray-900 fs-13">
                        +1 43566 67788
                      </span>
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
  );
};

export default Employeedetails;
