import CommonFooter from "../../../components/footer/commonFooter";
import { Link } from "react-router-dom";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import SettingsSideBar from "../settingssidebar";

const Smstemplate = () => {
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
                    <h4>SMS Templates</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div
                      className="accordion-card-one accordion mb-3"
                      id="accordionExample"
                    >
                      <div className="accordion-item pb-3">
                        <div className="accordion-header" id="headingOne">
                          <div
                            className="accordion-button p-3 pb-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-controls="collapseOne"
                          >
                            <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                  <input
                                    type="checkbox"
                                    id="user1"
                                    className="check"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="user1"
                                    className="checktoggle"
                                  >
                                    {" "}
                                  </label>
                                </div>
                                <h5>
                                  <span>Order Confirmation</span>
                                </h5>
                              </div>
                              <Link to="#" className="ms-auto">
                                <i className="chevron-down-add"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body border-0 pb-0">
                            <div className="row gy-4">
                              <div className="col-xl-7">
                                <div className="card mb-3">
                                  <div className="card-body">
                                    <textarea
                                      className="form-control"
                                      cols={5}
                                      style={{ height: 300 }}
                                      defaultValue={
                                        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHi <span className="text-orange">{Customer Name}</span>,<br> Welcome to <span className="text-orange">{Company Name}</span>!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWe’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAt <span className="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIf you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThank you again for trusting <span className="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBest, The <span className="text-orange">{Company Name}</span> Team\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                  <Link to="#" className="btn bg-cyan me-2">
                                    Save Template
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-secondary me-2"
                                  >
                                    Default Template
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#email-detail"
                                  >
                                    Preview Template
                                  </Link>
                                </div>
                              </div>
                              <div className="col-xl-5">
                                <div className="card mb-0">
                                  <div className="card-body">
                                    <h5 className="mb-2">Tags</h5>
                                    <div>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Customer Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Company Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Invoice ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Receipt ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Login Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Support Email{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Password Reset Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Product Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Total{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Delivery Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange">
                                        {"{"}Discount Code{"}"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-card-one accordion mb-3"
                      id="accordionExample2"
                    >
                      <div className="accordion-item pb-3">
                        <div className="accordion-header" id="heading2">
                          <div
                            className="accordion-button p-3 pb-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            aria-controls="collapse2"
                          >
                            <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                  <input
                                    type="checkbox"
                                    id="user2"
                                    className="check"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="user2"
                                    className="checktoggle"
                                  >
                                    {" "}
                                  </label>
                                </div>
                                <h5>
                                  <span>Order Confirmation</span>
                                </h5>
                              </div>
                              <Link to="#" className="ms-auto">
                                <i className="chevron-down-add"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading2"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body border-0 pb-0">
                            <div className="row gy-4">
                              <div className="col-xl-7">
                                <div className="card mb-3">
                                  <div className="card-body">
                                    <textarea
                                      className="form-control"
                                      cols={5}
                                      style={{ height: 300 }}
                                      defaultValue={
                                        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHi <span className="text-orange">{Customer Name}</span>,<br> Welcome to <span className="text-orange">{Company Name}</span>!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWe’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAt <span className="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIf you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThank you again for trusting <span className="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBest, The <span className="text-orange">{Company Name}</span> Team\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                  <Link to="#" className="btn bg-cyan me-2">
                                    Save Template
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-secondary me-2"
                                  >
                                    Default Template
                                  </Link>
                                  <Link to="#" className="btn btn-primary">
                                    Preview Template
                                  </Link>
                                </div>
                              </div>
                              <div className="col-xl-5">
                                <div className="card mb-0">
                                  <div className="card-body">
                                    <h5 className="mb-2">Tags</h5>
                                    <div>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Customer Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Company Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Invoice ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Receipt ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Login Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Support Email{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Password Reset Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Product Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Total{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Delivery Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange">
                                        {"{"}Discount Code{"}"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-card-one accordion mb-3"
                      id="accordionExample3"
                    >
                      <div className="accordion-item pb-3">
                        <div className="accordion-header" id="heading3">
                          <div
                            className="accordion-button p-3 pb-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            aria-controls="collapse3"
                          >
                            <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                  <input
                                    type="checkbox"
                                    id="user3"
                                    className="check"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="user3"
                                    className="checktoggle"
                                  >
                                    {" "}
                                  </label>
                                </div>
                                <h5>
                                  <span>Invoice Receipt</span>
                                </h5>
                              </div>
                              <Link to="#" className="ms-auto">
                                <i className="chevron-down-add"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapse3"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading3"
                          data-bs-parent="#accordionExample3"
                        >
                          <div className="accordion-body border-0 pb-0">
                            <div className="row gy-4">
                              <div className="col-xl-7">
                                <div className="card mb-3">
                                  <div className="card-body">
                                    <textarea
                                      className="form-control"
                                      cols={5}
                                      style={{ height: 300 }}
                                      defaultValue={
                                        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHi <span className="text-orange">{Customer Name}</span>,<br> Welcome to <span className="text-orange">{Company Name}</span>!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWe’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAt <span className="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIf you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThank you again for trusting <span className="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBest, The <span className="text-orange">{Company Name}</span> Team\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                  <Link to="#" className="btn bg-cyan me-2">
                                    Save Template
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-secondary me-2"
                                  >
                                    Default Template
                                  </Link>
                                  <Link to="#" className="btn btn-primary">
                                    Preview Template
                                  </Link>
                                </div>
                              </div>
                              <div className="col-xl-5">
                                <div className="card mb-0">
                                  <div className="card-body">
                                    <h5 className="mb-2">Tags</h5>
                                    <div>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Customer Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Company Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Invoice ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Receipt ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Login Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Support Email{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Password Reset Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Product Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Total{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Delivery Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange">
                                        {"{"}Discount Code{"}"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-card-one accordion mb-3"
                      id="accordionExample4"
                    >
                      <div className="accordion-item pb-3">
                        <div className="accordion-header" id="heading4">
                          <div
                            className="accordion-button p-3 pb-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-controls="collapse4"
                          >
                            <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                  <input
                                    type="checkbox"
                                    id="user4"
                                    className="check"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="user4"
                                    className="checktoggle"
                                  >
                                    {" "}
                                  </label>
                                </div>
                                <h5>
                                  <span>Subscription Renewal Reminder</span>
                                </h5>
                              </div>
                              <Link to="#" className="ms-auto">
                                <i className="chevron-down-add"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading4"
                          data-bs-parent="#accordionExample4"
                        >
                          <div className="accordion-body border-0 pb-0">
                            <div className="row gy-4">
                              <div className="col-xl-7">
                                <div className="card mb-3">
                                  <div className="card-body">
                                    <textarea
                                      className="form-control"
                                      cols={5}
                                      style={{ height: 300 }}
                                      defaultValue={
                                        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHi <span className="text-orange">{Customer Name}</span>,<br> Welcome to <span className="text-orange">{Company Name}</span>!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWe’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAt <span className="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIf you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThank you again for trusting <span className="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBest, The <span className="text-orange">{Company Name}</span> Team\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                  <Link to="#" className="btn bg-cyan me-2">
                                    Save Template
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-secondary me-2"
                                  >
                                    Default Template
                                  </Link>
                                  <Link to="#" className="btn btn-primary">
                                    Preview Template
                                  </Link>
                                </div>
                              </div>
                              <div className="col-xl-5">
                                <div className="card mb-0">
                                  <div className="card-body">
                                    <h5 className="mb-2">Tags</h5>
                                    <div>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Customer Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Company Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Invoice ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Receipt ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Login Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Support Email{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Password Reset Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Product Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Total{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Delivery Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange">
                                        {"{"}Discount Code{"}"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-card-one accordion mb-3"
                      id="accordionExample5"
                    >
                      <div className="accordion-item pb-3">
                        <div className="accordion-header" id="heading5">
                          <div
                            className="accordion-button p-3 pb-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-controls="collapse5"
                          >
                            <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                  <input
                                    type="checkbox"
                                    id="user5"
                                    className="check"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="user5"
                                    className="checktoggle"
                                  >
                                    {" "}
                                  </label>
                                </div>
                                <h5>
                                  <span>Seasonal Promotion</span>
                                </h5>
                              </div>
                              <Link to="#" className="ms-auto">
                                <i className="chevron-down-add"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading5"
                          data-bs-parent="#accordionExample5"
                        >
                          <div className="accordion-body border-0 pb-0">
                            <div className="row gy-4">
                              <div className="col-xl-7">
                                <div className="card mb-3">
                                  <div className="card-body">
                                    <textarea
                                      className="form-control"
                                      cols={5}
                                      style={{ height: 300 }}
                                      defaultValue={
                                        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHi <span className="text-orange">{Customer Name}</span>,<br> Welcome to <span className="text-orange">{Company Name}</span>!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWe’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAt <span className="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIf you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThank you again for trusting <span className="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBest, The <span className="text-orange">{Company Name}</span> Team\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                  <Link to="#" className="btn bg-cyan me-2">
                                    Save Template
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-secondary me-2"
                                  >
                                    Default Template
                                  </Link>
                                  <Link to="#" className="btn btn-primary">
                                    Preview Template
                                  </Link>
                                </div>
                              </div>
                              <div className="col-xl-5">
                                <div className="card mb-0">
                                  <div className="card-body">
                                    <h5 className="mb-2">Tags</h5>
                                    <div>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Customer Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Company Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Invoice ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Receipt ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Login Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Support Email{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Password Reset Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Product Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Total{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Delivery Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange">
                                        {"{"}Discount Code{"}"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-card-one accordion mb-3"
                      id="accordionExample6"
                    >
                      <div className="accordion-item pb-3">
                        <div className="accordion-header" id="heading6">
                          <div
                            className="accordion-button p-3 pb-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-controls="collapse6"
                          >
                            <div className="addproduct-icon d-flex align-items-center justify-content-between w-100">
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                  <input
                                    type="checkbox"
                                    id="user6"
                                    className="check"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="user6"
                                    className="checktoggle"
                                  >
                                    {" "}
                                  </label>
                                </div>
                                <h5>
                                  <span>System Update</span>
                                </h5>
                              </div>
                              <Link to="#" className="ms-auto">
                                <i className="chevron-down-add"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading6"
                          data-bs-parent="#accordionExample6"
                        >
                          <div className="accordion-body border-0 pb-0">
                            <div className="row gy-4">
                              <div className="col-xl-7">
                                <div className="card mb-3">
                                  <div className="card-body">
                                    <textarea
                                      className="form-control"
                                      cols={5}
                                      style={{ height: 300 }}
                                      defaultValue={
                                        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHi <span className="text-orange">{Customer Name}</span>,<br> Welcome to <span className="text-orange">{Company Name}</span>!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWe’re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us – we appreciate your trust and confidence.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAt <span className="text-orange">{Company Name}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we’re here to help you get the most out of our solutions.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIf you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime – we’re committed to ensuring your success.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThank you again for trusting <span className="text-orange">{Company Name}</span>. We’re excited to be part of your journey and look forward to supporting you every step of the way.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBest, The <span className="text-orange">{Company Name}</span> Team\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                  <Link to="#" className="btn bg-cyan me-2">
                                    Save Template
                                  </Link>
                                  <Link
                                    to="#"
                                    className="btn btn-secondary me-2"
                                  >
                                    Default Template
                                  </Link>
                                  <Link to="#" className="btn btn-primary">
                                    Preview Template
                                  </Link>
                                </div>
                              </div>
                              <div className="col-xl-5">
                                <div className="card mb-0">
                                  <div className="card-body">
                                    <h5 className="mb-2">Tags</h5>
                                    <div>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Customer Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Company Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Invoice ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Receipt ID{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Login Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Support Email{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Password Reset Link{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Product Name{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Total{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Order Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange mb-1">
                                        {"{"}Delivery Date{"}"}
                                      </p>
                                      <p className="fs-12 text-orange">
                                        {"{"}Discount Code{"}"}
                                      </p>
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
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default Smstemplate;
