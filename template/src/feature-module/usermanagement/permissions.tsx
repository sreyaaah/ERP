import { type FC } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import TooltipIcons from "../../components/tooltip-content/tooltipIcons";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import CommonFooter from "../../components/footer/commonFooter";

const Permissions: FC = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Permission</h4>
              <h6>Manage your permissions</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <TooltipIcons />
            <RefreshIcon />
            <CollapesIcon />

            <li>
              <div className="page-btn">
                <Link
                  to={all_routes.rolespermission}
                  className="btn btn-primary"
                >
                  <i className="ti ti-arrow-left me-2"></i>
                  Back to Roles
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {/* /product list */}
        <div className="card">
          <div className="card-header">
            <div className="table-top p-0 mb-0">
              <div className="search-set">
                <div className="search-input">
                  <span className="btn-searchset">
                    <i className="ti ti-search fs-14 feather-search" />
                  </span>
                  <div
                    id="DataTables_Table_0_filter"
                    className="dataTables_filter"
                  >
                    <label>
                      {" "}
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder="Search"
                        aria-controls="DataTables_Table_0"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className="mb-0 fw-medium text-gray-9 me-1">Role:</p>
                <p>Admin</p>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table datatable">
                <thead className="thead-light">
                  <tr>
                    <th className="no-sort">Modules</th>
                    <th>Allow All</th>
                    <th>Read</th>
                    <th>Write</th>
                    <th>Create</th>
                    <th>Delete</th>
                    <th>Import</th>
                    <th>Export</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-9">Employee</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-9">Holidays</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-9">Leaves</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-9">Events</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-9">Sales</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-9">Training</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-9">Reports</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-9">Tickets</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-9">Holidays</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray-9">Payroll</td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* /product list */}
      </div>
     <CommonFooter/>
    </div>
  );
};

export default Permissions;
