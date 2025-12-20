import { Link } from "react-router-dom";
import { Tooltip } from "primereact/tooltip";
import { pdf, excel } from "../../utils/imagepath";

const TooltipIcons = () => {
  return (
    <>
      {/* Global Tooltip Instance */}
      <Tooltip target="[data-pr-tooltip]" />

      <li>
        <Link to="#" data-pr-tooltip="Pdf" data-pr-position="top">
          <img src={pdf} alt="img" />
        </Link>
      </li>

      <li>
        <Link to="#" data-pr-tooltip="Excel" data-pr-position="top">
          <img src={excel} alt="img" />
        </Link>
      </li>
    </>
  );
};

export default TooltipIcons;
