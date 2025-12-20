import { Link } from "react-router";

const Blankpage = () => {
  return (
    <div className="page-wrapper pagehead">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Blank Page</h4>
            <h6>Sub Title</h6>
          </div>
          <ul className="table-top-head">
            <li>
              <Link to="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Refresh"
              >
                <i className="feather icon-rotate-ccw feather-rotate-ccw" />
              </Link>
            </li>
            <li>
              <Link to="#"
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
      </div>
    </div>
  );
};

export default Blankpage;
