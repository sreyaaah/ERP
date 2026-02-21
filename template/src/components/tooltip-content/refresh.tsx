import { Link } from "react-router-dom";
const RefreshIcon = () => {
  return (
    <li>
      <Link
        to="#"
        className="pr-tooltip"
        data-pr-tooltip="Refresh"
        data-pr-position="top"
      >
        <i className="ti ti-refresh" />
      </Link>
    </li>
  );
};

export default RefreshIcon;
