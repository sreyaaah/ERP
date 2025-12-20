import { useState } from "react";
import CommonFooter from "../../components/footer/commonFooter";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";
import CommonSelect from "../../components/select/common-select";

const Annualreport = () => {
  const [selectedStore, setSelectedStore] = useState<string | null>(null);

  const Store = [
    { value: "All Stores", label: "All Stores" },
    { value: "Electro Mart", label: "Electro Mart" },
    { value: "Quantum Gadgets", label: "Quantum Gadgets" },
    { value: "Prime Bazaar", label: "Prime Bazaar" },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Annual Report</h4>
              <h6>View Reports of Annual Report</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <RefreshIcon />
            <CollapesIcon />
          </ul>
        </div>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row row-gap-2 align-items-end">
                <div className="col-md-3">
                  <div>
                    <label className="form-label">Date</label>
                    <div className="input-icon-start position-relative">
                      <span className="input-icon-addon fs-16 text-gray-9">
                        <i className="ti ti-calendar" />
                      </span>
                      <CommonDateRangePicker />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <label className="form-label">Store</label>
                    <CommonSelect
                      options={Store}
                      value={selectedStore}
                      onChange={(e) => setSelectedStore(e.value)}
                      placeholder="Choose"
                      filter={false}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-primary">Generate Report</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h4>2025 Reports</h4>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th></th>
                    <th>Jan 2025</th>
                    <th>Feb 2025</th>
                    <th>Mar 2025</th>
                    <th>Apr 2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>January</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                  </tr>
                  <tr>
                    <td>Febuary</td>
                    <td>$30,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                  </tr>
                  <tr>
                    <td>March</td>
                    <td>$7,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                  </tr>
                  <tr>
                    <td>April</td>
                    <td>$7,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                  </tr>
                  <tr>
                    <td>May</td>
                    <td>$7,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                    <td>$50,000</td>
                  </tr>
                  <tr>
                    <td>June</td>
                    <td>$7,000</td>
                    <td>$30,000</td>
                    <td>$30,000</td>
                    <td>$30,000</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>$7,000</td>
                    <td>$30,000</td>
                    <td>$30,000</td>
                    <td>$30,000</td>
                  </tr>
                  <tr>
                    <td>August</td>
                    <td>$7,000</td>
                    <td>$30,000</td>
                    <td>$30,000</td>
                    <td>$30,000</td>
                  </tr>
                  <tr>
                    <td>September</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                  </tr>
                  <tr>
                    <td>October</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                  </tr>
                  <tr>
                    <td>November</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                  </tr>
                  <tr>
                    <td>December</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                    <td>$7,000</td>
                  </tr>
                  <tr className="custom-table">
                    <td className="bg-light fw-bold p-3 fs-16">Total</td>
                    <td className="bg-light fw-bold p-3 fs-16">$8,000</td>
                    <td className="bg-light fw-bold p-3 fs-16">$8,000</td>
                    <td className="bg-light fw-bold p-3 fs-16">$8,000</td>
                    <td className="bg-light fw-bold p-3 fs-16">$8,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default Annualreport;
