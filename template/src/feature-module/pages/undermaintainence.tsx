import { all_routes } from "../../routes/all_routes";
import { Link } from "react-router-dom";
import { underMaintenance } from "../../utils/imagepath";

const Undermaintainence = () => {
  const route = all_routes;
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="error-box">
          <div className="error-img">
            <img src={underMaintenance} className="img-fluid" alt="Img" />
          </div>
          <h3 className="h2 mb-3">We are Under Maintenance</h3>
          <p>
            Sorry for any inconvenience caused, we have almost done Will get
            back soon!
          </p>
          <Link to={route.dashboard} className="btn btn-primary">
            Back to Dashboard
          </Link>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Undermaintainence;
