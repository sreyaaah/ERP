import { Link } from "react-router";
import { all_routes } from "../../routes/all_routes";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";
import CommonSelect from "../../components/select/common-select";
import { useState } from "react";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

const Salestax = () => {
  const route = all_routes;
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const Store = [
    { value: "All", label: "All" },
    { value: "Electro Mart", label: "Electro Mart" },
    { value: "Quantum Gadgets", label: "Quantum Gadgets" },
    { value: "Prime Bazaar", label: "Prime Bazaar" },
  ];
  const Customer = [
    { value: "All", label: "All" },
    { value: "Carl Evans", label: "Carl Evans" },
    { value: "Minerva Rameriz", label: "Minerva Rameriz" },
    { value: "Robert Lamon", label: "Robert Lamon" },
  ];
  const Payment_Method = [
    { value: "All", label: "All" },
    { value: "Stripe", label: "Stripe" },
    { value: "Paypal", label: "Paypal" },
    { value: "Cash", label: "Cash" },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="mb-4">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to={route.taxreport}>
                  Purchase tax
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={route.saletaxreport}>
                  Sales Tax
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="page-header">
              <div className="add-item d-flex">
                <div className="page-title">
                  <h4>Sales tax</h4>
                  <h6>View Reports of Sales tax</h6>
                </div>
              </div>
              <ul className="table-top-head">
                <RefreshIcon />
                <CollapesIcon />
              </ul>
            </div>
            <div className="card">
              <div className="card-body pb-1">
                <form>
                  <div className="row align-items-end">
                    <div className="col-lg-10">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="form-label">Choose Date</label>
                            <div className="input-icon-start position-relative">
                              <CommonDateRangePicker />
                              <span className="input-icon-left">
                                <i className="ti ti-calendar" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="form-label">Store</label>
                            <CommonSelect
                              className="w-100"
                              options={Store}
                              value={selectedStore}
                              onChange={(e) => setSelectedStore(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="form-label">Customer</label>
                            <CommonSelect
                              className="w-100"
                              options={Customer}
                              value={selectedCustomer}
                              onChange={(e) => setSelectedCustomer(e.value)}
                              placeholder="Choose"
                              filter={false}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label className="form-label">Payment Method</label>
                            <CommonSelect
                                className="w-100"
                                options={Payment_Method}
                                value={selectedPaymentMethod}
                                onChange={(e) => setSelectedPaymentMethod(e.value)}
                                placeholder="Choose"
                                filter={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="mb-3">
                        <button className="btn btn-primary w-100" type="submit">
                          Generate Report
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card no-search">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div>
                  <h4>Sales Tax Report</h4>
                </div>
                <ul className="table-top-head">
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Print"
                    >
                      <i className="ti ti-printer" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table datatable">
                    <thead className="thead-light">
                      <tr>
                        <th>Reference</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Store</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Discount</th>
                        <th>Tax Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link to="#">#4237300</Link>
                        </td>
                        <td>Carl Evans</td>
                        <td>24 Dec 2024</td>
                        <td>Electro Mart</td>
                        <td>$200</td>
                        <td>Stripe</td>
                        <td>$200</td>
                        <td>$200</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#">#7590325</Link>
                        </td>
                        <td>Minerva Rameriz</td>
                        <td>10 Dec 2024</td>
                        <td>Quantum Gadgets</td>
                        <td>$50</td>
                        <td>Paypal</td>
                        <td>$50</td>
                        <td>$50</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#">#9814521</Link>
                        </td>
                        <td>Robert Lamon</td>
                        <td>27 Nov 2024</td>
                        <td>Prime Bazaar</td>
                        <td>$800</td>
                        <td>Cash</td>
                        <td>$800</td>
                        <td>$800</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#">#8745225</Link>
                        </td>
                        <td>Patricia Lewis</td>
                        <td>18 Nov 2024</td>
                        <td>Gadget World</td>
                        <td>$100</td>
                        <td>Paypal</td>
                        <td>$100</td>
                        <td>$100</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#">#4237022</Link>
                        </td>
                        <td>Mark Joslyn</td>
                        <td>06 Nov 2024</td>
                        <td>Volt Vault</td>
                        <td>$700</td>
                        <td>Cash</td>
                        <td>$700</td>
                        <td>$700</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#">#8744439</Link>
                        </td>
                        <td>Marsha Betts</td>
                        <td>25 Oct 2024</td>
                        <td>Elite Retail</td>
                        <td>$1000</td>
                        <td>Cash</td>
                        <td>$1000</td>
                        <td>$1000</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#">#7590365</Link>
                        </td>
                        <td>Daniel Jude</td>
                        <td>14 Oct 2024</td>
                        <td>Prime Mart</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                        <td>$1200</td>
                        <td>$1200</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#">#8745478</Link>
                        </td>
                        <td>Emma Bates</td>
                        <td>03 Oct 2024</td>
                        <td>NeoTech Store</td>
                        <td>$750</td>
                        <td>Stripe</td>
                        <td>$750</td>
                        <td>$750</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#">#7590321</Link>
                        </td>
                        <td>Richard Fralick</td>
                        <td>20 Sep 2024</td>
                        <td>Urban Mart</td>
                        <td>$450</td>
                        <td>Stripe</td>
                        <td>$450</td>
                        <td>$450</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#">#8745245</Link>
                        </td>
                        <td>Michelle Robison</td>
                        <td>10 Sep 2024</td>
                        <td>Travel Mart</td>
                        <td>$300</td>
                        <td>Cash</td>
                        <td>$300</td>
                        <td>$300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /product list */}
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © DreamsPOS. All Right Reserved</p>
          <p>
            Designed &amp; Developed by{" "}
            <Link to="#" className="text-orange">
              Dreams
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Salestax;
