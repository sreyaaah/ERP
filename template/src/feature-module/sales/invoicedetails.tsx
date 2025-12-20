import CommonFooter from "../../components/footer/commonFooter";

import { all_routes } from "../../routes/all_routes";
import { Link } from "react-router-dom";
import { logo, logoWhite, pdf, qrCodeImage, sign } from "../../utils/imagepath";

const Invoicedetails = () => {
  const route = all_routes;

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Invoice Details</h4>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                <Link
                  to="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Pdf"
                >
                  <img src={pdf} alt="img" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Print"
                >
                  <i className="feather icon-printer feather-rotate-ccw" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Collapse"
                  id="collapse-header"
                >
                  <i  className="feather icon-chevron-up feather-chevron-up" />
                </Link>
              </li>
            </ul>
            <div className="page-btn">
              <Link to={route.invoice} className="btn btn-primary">
                <i  className="feather icon-arrow-left me-2" />
                Back to Invoices
              </Link>
            </div>
          </div>
          {/* Invoices */}
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between align-items-center border-bottom mb-3">
                <div className="col-md-6">
                  <div className="invoice-logo mb-2">
                    <Link
                      className="logo logo-normal"
                      to="#"
                    >
                      <img src={logo} width="130" className="img-fluid" alt="logo" />
                    </Link>
                    <Link
                      className="logo logo-white"
                      to="#"
                    >
                      <img src={logoWhite} width="130" className="img-fluid" alt="logo" />
                    </Link>
                  </div>
                  <p>3099 Kennedy Court Framingham, MA 01702</p>
                </div>
                <div className="col-md-6">
                  <div className=" text-end mb-3">
                    <h5 className="text-gray mb-1">
                      Invoice No <span className="text-primary">#INV0001</span>
                    </h5>
                    <p className="mb-1 fw-medium">
                      Created Date :{" "}
                      <span className="text-dark">Sep 24, 2024</span>{" "}
                    </p>
                    <p className="fw-medium">
                      Due Date :{" "}
                      <span className="text-dark">Sep 30, 2024</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row border-bottom mb-3">
                <div className="col-md-5">
                  <p className="text-dark mb-2 fw-semibold">From</p>
                  <div>
                    <h4 className="mb-1">Thomas Lawler</h4>
                    <p className="mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                    <p className="mb-1">
                      Email :{" "}
                      <span className="text-dark">Tarala2445@example.com</span>
                    </p>
                    <p>
                      Phone : <span className="text-dark">+1 987 654 3210</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <p className="text-dark mb-2 fw-semibold">To</p>
                  <div>
                    <h4 className="mb-1">Carl Evans</h4>
                    <p className="mb-1">3103 Trainer Avenue Peoria, IL 61602</p>
                    <p className="mb-1">
                      Email :{" "}
                      <span className="text-dark">Sara_inc34@example.com</span>
                    </p>
                    <p>
                      Phone : <span className="text-dark">+1 987 471 6589</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="mb-3">
                    <p className="text-title mb-2 fw-medium">Payment Status </p>
                    <span className="bg-success text-white fs-10 px-1 rounded">
                      <i className="ti ti-point-filled " />
                      Paid
                    </span>
                    <div className="mt-3">
                      <img
                        src={qrCodeImage}
                        className="img-fluid"
                        alt="QR"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="fw-medium">
                  Invoice For :{" "}
                  <span className="text-dark fw-medium">
                    Design &amp; development of Website
                  </span>
                </p>
                <div className="table-responsive mb-3">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>Job Description</th>
                        <th className="text-end">Qty</th>
                        <th className="text-end">Cost</th>
                        <th className="text-end">Discount</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h6>UX Strategy</h6>
                        </td>
                        <td className="text-gray-9 fw-medium text-end">1</td>
                        <td className="text-gray-9 fw-medium text-end">$500</td>
                        <td className="text-gray-9 fw-medium text-end">$100</td>
                        <td className="text-gray-9 fw-medium text-end">$500</td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Design System</h6>
                        </td>
                        <td className="text-gray-9 fw-medium text-end">1</td>
                        <td className="text-gray-9 fw-medium text-end">
                          $5000
                        </td>
                        <td className="text-gray-9 fw-medium text-end">$100</td>
                        <td className="text-gray-9 fw-medium text-end">
                          $5000
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Brand Guidellines</h6>
                        </td>
                        <td className="text-gray-9 fw-medium text-end">1</td>
                        <td className="text-gray-9 fw-medium text-end">
                          $5000
                        </td>
                        <td className="text-gray-9 fw-medium text-end">$100</td>
                        <td className="text-gray-9 fw-medium text-end">
                          $5000
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Social Media Template</h6>
                        </td>
                        <td className="text-gray-9 fw-medium text-end">1</td>
                        <td className="text-gray-9 fw-medium text-end">
                          $5000
                        </td>
                        <td className="text-gray-9 fw-medium text-end">$100</td>
                        <td className="text-gray-9 fw-medium text-end">
                          $5000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row border-bottom mb-3">
                <div className="col-md-5 ms-auto mb-3">
                  <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                    <p className="mb-0">Sub Total</p>
                    <p className="text-dark fw-medium mb-2">$5500</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                    <p className="mb-0">Discount(0%)</p>
                    <p className="text-dark fw-medium mb-2">$400</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                    <p className="mb-0">VAT(5%)</p>
                    <p className="text-dark fw-medium mb-2">$54</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                    <h5>Total Amount</h5>
                    <h5>$5775</h5>
                  </div>
                  <p className="fs-12">
                    Amount in Words : Dollar Five thousand Seven Seventy Five
                  </p>
                </div>
              </div>
              <div className="row align-items-center border-bottom mb-3">
                <div className="col-md-7">
                  <div>
                    <div className="mb-3">
                      <h6 className="mb-1">Terms and Conditions</h6>
                      <p>
                        Please pay within 15 days from the date of invoice,
                        overdue interest @ 14% will be charged on delayed
                        payments.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h6 className="mb-1">Notes</h6>
                      <p>Please quote invoice number when remitting funds.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="text-end">
                    <img
                      src={sign}
                      className="img-fluid"
                      alt="sign"
                    />
                  </div>
                  <div className="text-end mb-3">
                    <h6 className="fs-14 fw-medium pe-3">Ted M. Davis</h6>
                    <p>Assistant Manager</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-3">
                  <div className="invoice-logo">
                    <Link
                      className="logo logo-normal"
                      to="#"
                    >
                      <img src={logo} width="130" className="img-fluid" alt="logo" />
                    </Link>
                    <Link
                      className="logo logo-white"
                      to="#"
                    >
                      <img src={logoWhite} width="130" className="img-fluid" alt="logo" />
                    </Link>
                  </div>
                </div>
                <p className="text-dark mb-1">
                  Payment Made Via bank transfer / Cheque in the name of Thomas
                  Lawler
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <p className="fs-12 mb-0 me-3">
                    Bank Name : <span className="text-dark">HDFC Bank</span>
                  </p>
                  <p className="fs-12 mb-0 me-3">
                    Account Number :{" "}
                    <span className="text-dark">45366287987</span>
                  </p>
                  <p className="fs-12">
                    IFSC : <span className="text-dark">HDFC0018159</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /Invoices */}
          <div className="d-flex justify-content-center align-items-center mb-4">
            <Link
              to="#"
              className="btn btn-primary d-flex justify-content-center align-items-center me-2"
            >
              <i className="ti ti-printer me-2" />
              Print Invoice
            </Link>
            <Link
              to="#"
              className="btn btn-secondary d-flex justify-content-center align-items-center border"
            >
              <i className="ti ti-copy me-2" />
              Clone Invoice
            </Link>
          </div>
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default Invoicedetails;
