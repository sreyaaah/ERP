import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const ProfitLoss = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Profit / Loss Report</h4>
              <h6>View Reports of Profit / Loss Report</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <RefreshIcon />
            <CollapesIcon />
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <div className="mb-3 me-3">
            <div className="input-icon-start position-relative">
              <CommonDateRangePicker />
              <span className="input-icon-left">
                <i className="ti ti-calendar" />
              </span>
            </div>
          </div>
          <div className="mb-3">
            <Link to="#" className="btn btn-primary">
              Generate Report
            </Link>
          </div>
        </div>
        <div className="table-responsive mb-4">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th></th>
                <th>Jan 2025</th>
                <th>Feb 2025</th>
                <th>Mar 2025</th>
                <th>Apr 2025</th>
                <th>May 2025</th>
                <th>Jun 2025</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-end">
                  <h6 className="fw-bold">Income</h6>
                </td>
                <td colSpan={6} />
              </tr>
              <tr>
                <td className="border-end">Sales</td>
                <td>$50,000</td>
                <td>$50,000</td>
                <td>$50,000</td>
                <td>$50,000</td>
                <td>$50,000</td>
                <td>$50,000</td>
              </tr>
              <tr>
                <td className="border-end">Service</td>
                <td>$30,000</td>
                <td>$30,000</td>
                <td>$30,000</td>
                <td>$30,000</td>
                <td>$30,000</td>
                <td>$30,000</td>
              </tr>
              <tr>
                <td className="border-end">Purchase Return</td>
                <td>$7,000</td>
                <td>$7,000</td>
                <td>$7,000</td>
                <td>$7,000</td>
                <td>$7,000</td>
                <td>$7,000</td>
              </tr>
              <tr>
                <td className="border-end">
                  <h6 className="fw0bold">Gross Profit</h6>
                </td>
                <td>
                  <h6 className="fw0bold">$8,000</h6>
                </td>
                <td>
                  <h6 className="fw0bold">$8,000</h6>
                </td>
                <td>
                  <h6 className="fw0bold">$8,000</h6>
                </td>
                <td>
                  <h6 className="fw0bold">$8,000</h6>
                </td>
                <td>
                  <h6 className="fw0bold">$8,000</h6>
                </td>
                <td>
                  <h6 className="fw0bold">$8,000</h6>
                </td>
              </tr>
              <tr>
                <td className="border-end">
                  <h6 className="fw-bold">Expenses</h6>
                </td>
                <td colSpan={6} />
              </tr>
              <tr>
                <td className="border-end">Sales</td>
                <td>$50,000</td>
                <td>$50,000</td>
                <td>$50,000</td>
                <td>$50,000</td>
                <td>$50,000</td>
                <td>$50,000</td>
              </tr>
              <tr>
                <td className="border-end">Purrchase</td>
                <td>$30,000</td>
                <td>$30,000</td>
                <td>$30,000</td>
                <td>$30,000</td>
                <td>$30,000</td>
                <td>$30,000</td>
              </tr>
              <tr>
                <td className="border-end">
                  <h6 className="fw-bold">Sales Return</h6>
                </td>
                <td>$7,000</td>
                <td>$7,000</td>
                <td>$7,000</td>
                <td>$7,000</td>
                <td>$7,000</td>
                <td>$7,000</td>
              </tr>
              <tr>
                <td className="border-end">
                  <h6 className="fw-bold">Total Expense</h6>
                </td>
                <td>$8,000</td>
                <td>$8,000</td>
                <td>$8,000</td>
                <td>$8,000</td>
                <td>$8,000</td>
                <td>$8,000</td>
              </tr>
              <tr>
                <td className="border-end">
                  <h6 className="fw-bold">Net Profit</h6>
                </td>
                <td>$8,000</td>
                <td>$8,000</td>
                <td>$8,000</td>
                <td>$8,000</td>
                <td>$8,000</td>
                <td>$8,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default ProfitLoss;
