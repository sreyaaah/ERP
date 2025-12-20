
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { all_routes } from "../../routes/all_routes";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import {
  expireProduct01,
  expireProduct02,
  expireProduct03,
  expireProduct04,
  HiIcon,
  purchasedEarningsIcon,
  stockImg01,
  stockImg02,
  stockImg03,
  stockImg04,
  stockImg05,
  stockImg06,
  totalSalesIcon,
  weeklyEarning,
} from "../../utils/imagepath";
import CommonDateRangePicker from "../../components/date-range-picker/common-date-range-picker";

const SalesDashbaord = () => {
  const route = all_routes;
  interface SeriesData {
    name: string;
    data: number[];
  }

  interface ChartOptions {
    series: SeriesData[];
    chart: {
      height: number;
      type: "area";
      zoom: {
        enabled: boolean;
      };
    };
    colors: string[];
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: "straight";
    };
    title: {
      text: string;
      align: "left";
    };
    xaxis: {
      categories: string[];
    };
    yaxis: {
      min: number;
      max: number;
      tickAmount: number;
      labels: {
        formatter: (val: number) => string;
      };
    };
    legend: {
      position: "top";
      horizontalAlign: "left";
    };
  }

  const options: ChartOptions = {
    series: [
      {
        name: "Sales Analysis",
        data: [25, 30, 18, 15, 22, 20, 30, 20, 22, 18, 15, 20],
      },
    ],
    chart: {
      height: 273,
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#FF9F43"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "",
      align: "left",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      min: 10,
      max: 60,
      tickAmount: 5,
      labels: {
        formatter: (val: number) => {
          return val / 1 + "K";
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  };
 
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="welcome d-lg-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center welcome-text">
              <h3 className="d-flex align-items-center">
                <img src={HiIcon} alt="img" />
                &nbsp;Hi John Smilga,
              </h3>
              &nbsp;
              <h6>here&apos;s what&apos;s happening with your store today.</h6>
            </div>
            <div className="d-flex align-items-center">
              <div className="input-icon-start position-relative me-2">
                <span className="input-icon-addon fs-16 text-gray-9">
                  <i className="ti ti-calendar" />
                </span>
                <CommonDateRangePicker/>
              </div>
              <ul className="table-top-head">
                <RefreshIcon />
                <CollapesIcon />
              </ul>
            </div>
          </div>
          <div className="row sales-cards">
            <div className="col-xl-6 col-sm-12 col-12 d-flex">
              <div className="card d-flex align-items-center justify-content-between flex-fill mb-4">
                <div>
                  <h6>Weekly Earning</h6>
                  <h3>
                    $
                    <span className="counters" data-count="95000.45">
                      95000.45
                    </span>
                  </h3>
                  <p className="sales-range">
                    <span className="text-success">
                      <i  className="feather icon-chevron-up feather-16" />
                      48%&nbsp;
                    </span>
                    increase compare to last week
                  </p>
                </div>
                <img src={weeklyEarning} alt="img" />
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card color-info bg-primary flex-fill mb-4">
                <div className="mb-2">
                  <img src={totalSalesIcon} alt="img" />
                </div>
                <h3 className="counters" data-count={10000.0}>
                  10,000+
                </h3>
                <p>No of Total Sales</p>
                <i
                  className="feather icon-rotate-ccw feather-16 pr-tooltip"
                  data-pr-tooltip="Refresh"
                  data-pr-position="top"
                  title="Refresh"
                />
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card color-info bg-secondary flex-fill mb-4">
                <div className="mb-2">
                  <img src={purchasedEarningsIcon} alt="img" />
                </div>
                <h3 className="counters" data-count={800.0}>
                  800+
                </h3>
                <p>No of Total Sales</p>
                <i
                  className="feather icon-rotate-ccw feather-16 pr-tooltip"
                  data-pr-tooltip="Refresh"
                  data-pr-position="top"
                  title="Refresh"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-xl-4 d-flex">
              <div className="card flex-fill w-100 mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h4 className="card-title mb-0">Best Seller</h4>
                  <Link to="#" className="btn btn-outline-light btn-sm">
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-borderless best-seller">
                      <tbody>
                        <tr>
                          <td className="pt-0 ps-0">
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={stockImg01} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-medium">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Lenovo 3rd Generation
                                  </Link>
                                </h6>
                                <p>$4420</p>
                              </div>
                            </div>
                          </td>
                          <td className="pt-0">
                            <p className="text-gray-9 mb-1">Sales</p>
                            <p className="text-gray-9 fw-medium">6547</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={stockImg02} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-medium">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Bold V3.2
                                  </Link>
                                </h6>
                                <p>$1474</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-gray-9 mb-1">Sales</p>
                            <p className="text-gray-9 fw-medium">3474</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={stockImg06} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-medium">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Nike Jordan
                                  </Link>
                                </h6>
                                <p>$8784</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-gray-9 mb-1">Sales</p>
                            <p className="text-gray-9 fw-medium">1478</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={stockImg03} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-medium">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Apple Series 5 Watch
                                  </Link>
                                </h6>
                                <p>$3240</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-gray-9 mb-1">Sales</p>
                            <p className="text-gray-9 fw-medium">987</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={stockImg04} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-medium">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Amazon Echo Dot
                                  </Link>
                                </h6>
                                <p>$597</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-gray-9 mb-1">Sales</p>
                            <p className="text-gray-9 fw-medium">784</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-xl-8 d-flex">
              <div className="card flex-fill w-100 mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h4 className="card-title mb-0">Recent Transactions</h4>
                  <Link
                    to={route.purchasetransaction}
                    className="btn btn-outline-light btn-sm"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-borderless recent-transactions">
                      <thead className="thead-light">
                        <tr>
                          <th>#</th>
                          <th>Order Details</th>
                          <th>Payment</th>
                          <th>Status</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={stockImg05} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-bold">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Lobar Handy
                                  </Link>
                                </h6>
                                <span className="d-flex align-items-center">
                                  <i className="feather icon-clock feather-14" />
                                  15 Mins
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="d-block head-text">Paypal</span>
                            <span className="text-blue">#416645453773</span>
                          </td>
                          <td>
                            <span className="badge badge-success badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Success
                            </span>
                          </td>
                          <td className="fs-16 fw-bold text-gray-9">
                            $1,099.00
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={expireProduct01} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-medium">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Red Premium Handy
                                  </Link>
                                </h6>
                                <span className="d-flex align-items-center">
                                  <i className="feather icon-clock feather-14" />
                                  15 Mins
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="d-block head-text">Apple Pay</span>
                            <span className="text-blue">#147784454554</span>
                          </td>
                          <td>
                            <span className="badge badge-danger badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Cancelled
                            </span>
                          </td>
                          <td className="fs-16 fw-bold text-gray-9">$600.55</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={expireProduct02} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-bold">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Iphone 14 Pro
                                  </Link>
                                </h6>
                                <span className="d-flex align-items-center">
                                  <i className="feather icon-clock feather-14" />
                                  15 Mins
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="d-block head-text">Stripe</span>
                            <span className="text-blue">#147784454554</span>
                          </td>
                          <td>
                            <span className="badge badge-cyan badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Completed
                            </span>
                          </td>
                          <td className="fs-16 fw-bold text-gray-9">
                            $1,099.00
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={expireProduct03} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-bold">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Black Slim 200
                                  </Link>
                                </h6>
                                <span className="d-flex align-items-center">
                                  <i className="feather icon-clock feather-14" />
                                  15 Mins
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="d-block head-text">PayU</span>
                            <span className="text-blue">#147784454554</span>
                          </td>
                          <td>
                            <span className="badge badge-success badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Success
                            </span>
                          </td>
                          <td className="fs-16 fw-bold text-gray-9">
                            $1,569.00
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={route.productlist}
                                className="avatar avatar-lg me-2"
                              >
                                <img src={expireProduct04} alt="img" />
                              </Link>
                              <div>
                                <h6 className="fw-bold">
                                  <Link
                                    to={route.productlist}
                                    className="fw-bold"
                                  >
                                    Woodcraft Sandal
                                  </Link>
                                </h6>
                                <span className="d-flex align-items-center">
                                  <i className="feather icon-clock feather-14" />
                                  15 Mins
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="d-block head-text">Paytm</span>
                            <span className="text-blue">#147784454554</span>
                          </td>
                          <td>
                            <span className="badge badge-success badge-xs d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Success
                            </span>
                          </td>
                          <td className="fs-16 fw-bold text-gray-9">
                            $1,478.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button trigger modal */}
          <div className="row sales-board">
            <div className="col-md-12 col-lg-7 col-sm-12 col-12 d-flex">
              <div className="card flex-fill flex-fill">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Sales Analytics</h5>
                  <div className="graph-sets">
                    <div className="dropdown dropdown-wraper">
                      <button
                        className="btn btn-white btn-sm dropdown-toggle d-flex align-items-center"
                        type="button"
                        id="dropdown-sales"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="feather icon-calendar feather-14" />
                        2023
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown-sales"
                      >
                        <li>
                          <Link to="#" className="dropdown-item">
                            2023
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            2022
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            2021
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-1 pb-0">
                  <Chart
                    options={options}
                    series={options.series}
                    type="area"
                    height={273}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 col-sm-12 col-12 d-flex">
              {/* World Map */}
              <div className="card flex-fill">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Sales by Countries</h5>
                  <div className="graph-sets">
                    <div className="dropdown dropdown-wraper">
                      <button
                        className="btn btn-white btn-sm dropdown-toggle d-flex align-items-center"
                        type="button"
                        id="dropdown-country-sales"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        This Week
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown-country-sales"
                      >
                        <li>
                          <Link to="#" className="dropdown-item">
                            This Month
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            This Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="sales_db_world_map" style={{ height: "265px" }}>
                    <iframe
                      src="https://www.google.com/maps/embed"
                      style={{ border: "0", height: "265px", width: "364px" }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="contact-map"
                    />
                  </div>
                  <p className="sales-range">
                    <span className="text-success">
                      <i className="feather icon-chevron-up feather-16" />
                      48%&nbsp;
                    </span>
                    increase compare to last week
                  </p>
                </div>
              </div>
              {/* /World Map */}
            </div>
          </div>
        </div>
        <div className="copyright-footer d-flex align-items-center justify-content-between border-top bg-white gap-3 flex-wrap">
          <p className="fs-13 text-gray-9 mb-0">
            2014-2025 © DreamsPOS. All Right Reserved
          </p>
          <p>
            Designed &amp; Developed By Dreams{" "}
            <Link to="#" className="link-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SalesDashbaord;
