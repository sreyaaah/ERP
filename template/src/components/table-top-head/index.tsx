import { excel, pdf } from "../../utils/imagepath";
import { Link } from "react-router";
import { Tooltip } from "primereact/tooltip";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToggleHeader } from "../../core/redux/sidebarSlice";

const TableTopHead = () => {
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
