import { excel, pdf } from "../../utils/imagepath";
import { Link } from "react-router";
import { Tooltip } from "primereact/tooltip";
import { useSelector, useDispatch } from "react-redux";
import { setToggleHeader } from "../../core/redux/sidebarSlice";

interface TableTopHeadProps {
  onPdfExport?: () => void;
  onExcelExport?: () => void;
}

const TableTopHead = ({ onPdfExport, onExcelExport }: TableTopHeadProps) => {
  const dispatch = useDispatch();
  const { toggleHeader } = useSelector((state: any) => state.sidebar);
  
  const handleToggleHeader = () => {
    dispatch(setToggleHeader(!toggleHeader));
  };

  return (
    <>
      <Tooltip target=".pr-tooltip" />
      <ul className="table-top-head">

        <li>
          <Link
            to="#"
            className="pr-tooltip"
            data-pr-tooltip="Pdf"
            data-pr-position="top"
            onClick={(e) => { e.preventDefault(); onPdfExport && onPdfExport(); }}
          >
            <img src={pdf} alt="img" />
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="pr-tooltip"
            data-pr-tooltip="Excel"
            data-pr-position="top"
            onClick={(e) => { e.preventDefault(); onExcelExport && onExcelExport(); }}
          >
            <img src={excel} alt="img" />
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="pr-tooltip"
            data-pr-tooltip="Refresh"
            data-pr-position="top"
            onClick={(e) => { e.preventDefault(); window.location.reload(); }}
          >
            <i className="ti ti-refresh" />
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="pr-tooltip"
            data-pr-tooltip="Collapse"
            data-pr-position="top"
            id="collapse-header"
            onClick={handleToggleHeader}
          >
            <i
              className={`ti  ${toggleHeader ? "ti-chevron-down" : "ti-chevron-up"}`}
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default TableTopHead;
