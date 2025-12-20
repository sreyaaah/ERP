
import { Link } from "react-router-dom";

import CommonFooter from "../../components/footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import CollapesIcon from "../../components/tooltip-content/collapes";
import RefreshIcon from "../../components/tooltip-content/refresh";
import { logo, pdf } from "../../utils/imagepath";

const Payslip = () => {
  const route = all_routes;

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Payslip</h4>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                <Link
                  to={""}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Pdf"
                >
                  <img src={pdf} alt="img" />
                </Link>
              </li>
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link to={route.payrollList} className="btn btn-secondary">
                <i className="feather icon-arrow-left me-2" />
                Back to Payroll
              </Link>
            </div>
          </div>
          {/* Invoices */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Payslip for the Month of Jan 2025</h4>
                <div className="d-flex align-items-center justify-content-end">
                  <button type="button" className="btn btn-primary me-2">
                    <i className="ti ti-mail me-2" />
                    Send Email
                  </button>
                  <button type="button" className="btn btn-secondary me-2">
                    <i className="ti ti-download me-2" />
                    Download
                  </button>
                  <button type="button" className="btn btn-danger">
                    <i className="ti ti-printer me-2" />
                    Print Barcode
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <p className="mb-1">
                      Employee Name :{" "}
                      <span className="text-gray-9">Carl Evans</span>
                    </p>
                    <p>
                      Employee ID : <span className="text-gray-9">EMP001</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div className="mb-3">
                    <p className="mb-1">
                      Location : <span className="text-gray-9">USA</span>
                    </p>
                    <p>
                      Pay Period : <span className="text-gray-9">Jan 2025</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="row p-3">
                    <div className="col-6">
                      <h4>Earnings</h4>
                    </div>
                    <div className="col-6">
                      <h4>Deductions</h4>
                    </div>
                  </div>
                  <div className="table-responsive mb-3">
                    <div></div>
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th>Pay Type</th>
                          <th>Amount</th>
                          <th>Pay Type</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Basic Salary</td>
                          <td>$32,000</td>
                          <td>PF</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>HRA Allowance</td>
                          <td>$0.00</td>
                          <td>Professional Tax</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Conveyance</td>
                          <td>$0.00</td>
                          <td>TDS</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Medical Allowance</td>
                          <td>$0.00</td>
                          <td>Loans &amp; Others</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>Bonus</td>
                          <td>$0.00</td>
                          <td>Bonus</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h6>Total Earnings</h6>
                          </td>
                          <td>
                            <h6>$32,000</h6>
                          </td>
                          <td>
                            <h6>Total Deductions</h6>
                          </td>
                          <td>
                            <h6>$0.00</h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center border-bottom mb-3">
                <div className="mb-3 me-3">
                  <h6 className="mb-2">Net Salary</h6>
                  <p>Inwords</p>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">$32,000</h6>
                  <p>Thirty Two Thousand Only</p>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-3">
                  <img src={logo} className="img-fluid" alt="logo" />
                </div>
                <p>
                  81, Randall Drive,Hornchurch <br />
                  RM126TA.
                </p>
              </div>
            </div>
          </div>
          {/* /Invoices */}
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default Payslip;
