import { Link } from "react-router-dom";
import { all_routes } from "../../../routes/all_routes";
import { error404 } from "../../../utils/imagepath";

const Error404 = () => {
  const route = all_routes;
  return (
    <div className="main-wrapper">
      <div className="error-box">
        <div className="error-img">
          <img src={error404} className="img-fluid" />
        </div>
        <h3 className="h2 mb-3">Oops, something went wrong</h3>
        <p>
          Error 404 Page not found. Sorry the page you looking for doesn’t exist
          or has been moved
        </p>
        <Link to={route.dashboard} className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Error404;
