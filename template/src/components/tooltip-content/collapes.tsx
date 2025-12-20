
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToggleHeader } from "../../core/redux/sidebarSlice";
import { Tooltip } from "primereact/tooltip";

const CollapesIcon = () => {
  const dispatch = useDispatch();
  const { toggleHeader } = useSelector((state: any) => state.sidebar);
  const handleToggleHeader = () => {
    dispatch(setToggleHeader(!toggleHeader));
  };
  return (
    <li className="collapse-icons">
       <Tooltip target=".pr-tooltip" />
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
  );
};

export default CollapesIcon;
