import { Link } from "react-router-dom";

interface RefreshIconProps {
  onClick?: () => void;
}

const RefreshIcon: React.FC<RefreshIconProps> = ({ onClick }) => {
  return (
    <li>
      <Link
        to="#"
        className="pr-tooltip"
        data-pr-tooltip="Refresh"
        data-pr-position="top"
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
        }}
      >
        <i className="ti ti-refresh" />
      </Link>
    </li>
  );
};

export default RefreshIcon;