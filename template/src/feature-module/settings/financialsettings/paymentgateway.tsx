import { Link } from "react-router-dom";
import Paypal from "../../../core/modals/settings/paypal";
import SettingsSideBar from "../settingssidebar";
import CommonFooter from "../../../components/footer/commonFooter";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import {
  paymentIcon01,
  paymentIcon02,
  paymentIcon03,
  paymentIcon04,
  paymentIcon05,
  paymentIcon06,
  paymentIcon07,
  paymentIcon08,
  paymentIcon09,
  paymentIcon10,
  paymentIcon11,
  paymentIcon12,
  paymentIcon13,
  paymentIcon14,
  paymentIcon15,
} from "../../../utils/imagepath";

const PaymentGateway = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content settings-content">
          <div className="page-header settings-pg-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Settings</h4>
                <h6>Manage your settings on portal</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="settings-wrapper d-flex">
                <SettingsSideBar />
                <div className="card flex-fill mb-0">
                  <div className="card-header">
                    <h4>Payment Gateway</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon01} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge bg-outline-success">
                                  Connected
                                </span>
                              </div>
                              <p className="mb-3">
                                PayPal is the faster, safer way to send and
                                receive money{" "}
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#payment-connect"
                              >
                                <i className="ti ti-tool me-2" />
                                View Integration
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user1"
                                  className="check"
                                  defaultChecked
                                />
                                <label htmlFor="user1" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon02} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                APIs to accept cards, manage subscriptions, send
                                money.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user2"
                                  className="check"
                                />
                                <label htmlFor="user2" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon03} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Braintree offers more fraud protection and
                                security features.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user3"
                                  className="check"
                                />
                                <label htmlFor="user3" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon04} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Razorpay is an {`India's`} all in one payment
                                solution.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user4"
                                  className="check"
                                />
                                <label htmlFor="user4" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon05} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge bg-outline-success">
                                  Connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Works stably and reliably and features are
                                valuable{" "}
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#payment-connect"
                              >
                                <i className="ti ti-tool me-2" />
                                View Integration
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user5"
                                  className="check"
                                  defaultChecked
                                />
                                <label htmlFor="user5" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon06} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Allows send international money transfers and
                                payments quickly{" "}
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user6"
                                  className="check"
                                />
                                <label htmlFor="user6" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon07} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge bg-outline-success">
                                  Connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Provide payment solution to individuals to make
                                payments
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#payment-connect"
                              >
                                <i className="ti ti-tool me-2" />
                                View Integration
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user7"
                                  className="check"
                                  defaultChecked
                                />
                                <label htmlFor="user7" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon08} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Replaces your physical cards and cash with
                                private and secure{" "}
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user8"
                                  className="check"
                                />
                                <label htmlFor="user8" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon09} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Fast, Low-Cost Solution for your International
                                Business.{" "}
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user9"
                                  className="check"
                                />
                                <label htmlFor="user9" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon10} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Online payment platform that enables to send
                                &amp; receive money{" "}
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user10"
                                  className="check"
                                />
                                <label htmlFor="user10" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon11} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge bg-outline-success">
                                  Connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Paytm stands for Pay through mobile{" "}
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#payment-connect"
                              >
                                <i className="ti ti-tool me-2" />
                                View Integration
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user11"
                                  className="check"
                                  defaultChecked
                                />
                                <label htmlFor="user11" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon12} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Midtrans provides the maximum number of payment
                                methods
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user12"
                                  className="check"
                                />
                                <label htmlFor="user12" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon13} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                PyTorch, a network through which your customers
                                transfer funds
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user13"
                                  className="check"
                                />
                                <label htmlFor="user13" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon14} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge bg-outline-success">
                                  Connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Direct transfer of funds from one bank account
                                into another.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#payment-connect"
                              >
                                <i className="ti ti-tool me-2" />
                                View Integration
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user14"
                                  className="check"
                                  defaultChecked
                                />
                                <label htmlFor="user14" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
                        <div className="card flex-fill">
                          <div className="w-100 card-body">
                            <div className="d-flex flex-column align-items-start">
                              <div className="d-flex align-items-center justify-content-between w-100 mb-2">
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img src={paymentIcon15} alt="Payment" />
                                  </span>
                                </div>
                                <span className="badge border text-dark">
                                  Not connected
                                </span>
                              </div>
                              <p className="mb-3">
                                Indicating that goods must be paid for at the
                                time of delivery.{" "}
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                <i className="ti ti-tool me-2" />
                                Connect
                              </Link>
                              <div className="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                                <input
                                  type="checkbox"
                                  id="user15"
                                  className="check"
                                />
                                <label htmlFor="user15" className="checktoggle">
                                  {" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>

      <Paypal />
    </div>
  );
};

export default PaymentGateway;
