import { useState } from "react";
import CommonFooter from "../../../components/footer/commonFooter";
import { Link } from "react-router-dom";
import TableTopHead from "../../../components/table-top-head";
import CommonDatePicker from "../../../components/date-picker/common-date-picker";

const Trailbalance = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Trial Balance</h4>
                <h6>View Your Balance Sheet</h6>
              </div>
            </div>
            <TableTopHead />
          </div>
          {/* /product list */}
          <div className="card table-list-card bg-transparent border-0">
            <div className="card-header border-0 bg-white rounded-1 p-4 px-3 mb-4">
              <div className="row row-gap-2 align-items-end">
                <div className="col-sm-4">
                  <div className="dropdown me-2">
                    <label className="form-label">Choose Your Date</label>
                    <div className="input-groupicon calender-input balance-sheet-date">
                      <i className="feather icon-calendar info-img" />
                      <CommonDatePicker
                        value={date}
                        onChange={setDate}
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="dropdown">
                    <label className="form-label">Store</label>
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white justify-content-between btn-md w-100"
                      data-bs-toggle="dropdown"
                    >
                      Select
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Zephyr Indira
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Quillon Elysia
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-3 col-md-2">
                  <button className="btn btn-primary shadow-none w-100">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table datanew">
                  <thead>
                    <tr>
                      <th>Account Name</th>
                      <th>Debit</th>
                      <th>Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border-1 fw-bold text-gray-9">
                        Assets
                      </td>
                      <td className="p-2 border-1" />
                      <td className="p-2 border-1" />
                    </tr>
                    <tr>
                      <td className="p-2 border-1">Cash in register</td>
                      <td className="p-2 border-1">$5,000</td>
                      <td className="p-2 border-1" />
                    </tr>
                    <tr>
                      <td className="p-2 border-1">Bank Accounts</td>
                      <td className="p-2 border-1">$12,000</td>
                      <td className="p-2 border-1" />
                    </tr>
                    <tr>
                      <td className="p-2 border-1">Accounts Receivable</td>
                      <td className="p-2 border-1">$3,000</td>
                      <td className="p-2 border-1" />
                    </tr>
                    <tr>
                      <td className="p-2 border-1">Inventory (POS stock)</td>
                      <td className="p-2 border-1">$10,000</td>
                      <td className="p-2 border-1" />
                    </tr>
                    <tr className="border-bottom">
                      <td className="p-2 border-1 fw-bold text-gray-9">
                        Total Assets
                      </td>
                      <td className="p-2 border-1 fw-bold text-gray-9">
                        $37,000
                      </td>
                      <td className="p-2 border-1" />
                    </tr>
                    <tr>
                      <td className="p-2 border-1 fw-bold text-gray-9">
                        Liabilities
                      </td>
                      <td className="p-2 border-1" />
                      <td className="p-2 border-1" />
                    </tr>
                    <tr>
                      <td className="p-2 border-1">Accounts Payable</td>
                      <td className="p-2 border-1" />
                      <td className="p-2 border-1">$2,000</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-1">Short-term Loans</td>
                      <td className="p-2 border-1" />
                      <td className="p-2 border-1">$4,000</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-1">Sales Tax Payable</td>
                      <td className="p-2 border-1" />
                      <td className="p-2 border-1">$500</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-1">Wages Payable</td>
                      <td className="p-2 border-1" />
                      <td className="p-2 border-1">$1,200</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-1 fw-bold text-gray-9">
                        Total Assets
                      </td>
                      <td className="p-2 border-1" />
                      <td className="p-2 border-1 fw-bold text-gray-9">
                        $20,700
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-secondary-transparent text-gray-9 fw-bold p-3">
                        Total
                      </td>
                      <td className="bg-secondary-transparent text-gray-9 fw-bold p-3">
                        $37,000
                      </td>
                      <td className="bg-secondary-transparent text-gray-9 fw-bold p-3">
                        $37,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default Trailbalance;
