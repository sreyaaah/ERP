import CommonFooter from "../../components/footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import { Link, useParams } from "react-router-dom";
import { logo, logoWhite, pdf, qrCodeImage, sign } from "../../utils/imagepath";
import { InvoiceService, type Invoice } from "../services/invoice.service";
import { useEffect, useState } from "react";

const Invoicedetails = () => {
  const route = all_routes;
  const { id } = useParams<{ id: string }>();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!id) return;

  const invoiceData = InvoiceService.getInvoiceById(parseInt(id));

  if (invoiceData) {
    const updatedInvoice = InvoiceService.updatePaymentStatus(invoiceData);

    setInvoice(updatedInvoice);               // UI update
    InvoiceService.updateInvoice(updatedInvoice); // ✅ persist change
  }

  setLoading(false);
}, [id]);


  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <h4>Invoice Not Found</h4>
            <p>The invoice you're looking for doesn't exist.</p>
            <Link to={route.invoicelist} className="btn btn-primary">
              Back to Invoice List
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
                  onClick={handlePrint}
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
                  <i className="feather icon-chevron-up feather-chevron-up" />
                </Link>
              </li>
            </ul>
            <div className="page-btn">
              <Link to={route.invoicelist} className="btn btn-primary">
                <i className="feather icon-arrow-left me-2" />
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
                    <Link className="logo logo-normal" to="#">
                      <img src={logo} width="130" className="img-fluid" alt="logo" />
                    </Link>
                    <Link className="logo logo-white" to="#">
                      <img src={logoWhite} width="130" className="img-fluid" alt="logo" />
                    </Link>
                  </div>
                  <p>3099 Kennedy Court Framingham, MA 01702</p>
                </div>
                <div className="col-md-6">
                  <div className="text-end mb-3">
                    <h5 className="text-gray mb-1">
                      Invoice No <span className="text-primary">{invoice.invoiceNumber}</span>
                    </h5>
                    <p className="mb-1 fw-medium">
                      Created Date: <span className="text-dark">{invoice.invoiceDate}</span>
                    </p>
                    <p className="fw-medium">
                      Due Date: <span className="text-dark">{invoice.dueDate}</span>
                    </p>
                    {invoice.quotationNumber && (
                      <p className="mb-0 fw-medium">
                        Quotation: <span className="text-primary">{invoice.quotationNumber}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="row border-bottom mb-3">
                <div className="col-md-5">
                  <p className="text-dark mb-2 fw-semibold">From</p>
                  <div>
                    <h4 className="mb-1">Your Company Name</h4>
                    <p className="mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                    <p className="mb-1">
                      Email: <span className="text-dark">company@example.com</span>
                    </p>
                    <p>
                      Phone: <span className="text-dark">+1 987 654 3210</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <p className="text-dark mb-2 fw-semibold">To</p>
                  <div>
                    <h4 className="mb-1">{invoice.customerName}</h4>
                    {invoice.customerAddress && <p className="mb-1">{invoice.customerAddress}</p>}
                    {invoice.customerEmail && (
                      <p className="mb-1">
                        Email: <span className="text-dark">{invoice.customerEmail}</span>
                      </p>
                    )}
                    {invoice.customerPhone && (
                      <p>
                        Phone: <span className="text-dark">{invoice.customerPhone}</span>
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="mb-3">
                    <p className="text-title mb-2 fw-medium">Payment Status</p>
                    <span
                      className={`badge ${
                        invoice.paymentStatus === "Paid"
                          ? "badge-success"
                          : invoice.paymentStatus === "Partially Paid"
                          ? "badge-warning"
                          : invoice.paymentStatus === "Overdue"
                          ? "badge-danger"
                          : "badge-secondary"
                      } text-white fs-10 px-2 rounded`}
                    >
                      <i className="ti ti-point-filled" />
                      {invoice.paymentStatus}
                    </span>
                    <div className="mt-3">
                      <img src={qrCodeImage} className="img-fluid" alt="QR" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="fw-medium mb-3">
                  Invoice Type: <span className="text-dark fw-medium text-capitalize">{invoice.invoiceType}</span>
                </p>
                <div className="table-responsive mb-3">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>Product</th>
                        <th className="text-end">Qty</th>
                        <th className="text-end">Rate</th>
                        <th className="text-end">Discount</th>
                        <th className="text-end">Tax (%)</th>
                        <th className="text-end">Tax Amount</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoice.items.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <h6>{item.productName}</h6>
                          </td>
                          <td className="text-gray-9 fw-medium text-end">{item.qty}</td>
                          <td className="text-gray-9 fw-medium text-end">
                            {invoice.invoiceType === 'international' ? '$' : '₹'}{item.rate.toFixed(2)}
                          </td>
                          <td className="text-gray-9 fw-medium text-end">
                            {invoice.invoiceType === 'international' ? '$' : '₹'}{item.discount.toFixed(2)}
                          </td>
                          <td className="text-gray-9 fw-medium text-end">{item.tax}%</td>
                          <td className="text-gray-9 fw-medium text-end">
                            {invoice.invoiceType === 'international' ? '$' : '₹'}{item.taxAmount.toFixed(2)}
                          </td>
                          <td className="text-gray-9 fw-medium text-end">
                            {invoice.invoiceType === 'international' ? '$' : '₹'}{item.total.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row border-bottom mb-3">
                <div className="col-md-5 ms-auto mb-3">
                  <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                    <p className="mb-0">Sub Total</p>
                    <p className="text-dark fw-medium mb-2">
                      {invoice.invoiceType === 'international' ? '$' : '₹'}{invoice.subTotal.toFixed(2)}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                    <p className="mb-0">Tax</p>
                    <p className="text-dark fw-medium mb-2">
                      {invoice.invoiceType === 'international' ? '$' : '₹'}{invoice.totalTax.toFixed(2)}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                    <h5>Total Amount</h5>
                    <h5>
                      {invoice.invoiceType === 'international' ? '$' : '₹'}{invoice.grandTotal.toFixed(2)}
                    </h5>
                  </div>
                  <p className="fs-12">Amount in Words: {invoice.amountInWords}</p>
                </div>
              </div>
              <div className="row align-items-center border-bottom mb-3">
                <div className="col-md-7">
                  <div>
                    <div className="mb-3">
                      <h6 className="mb-1">Terms and Conditions</h6>
                      <p>{invoice.termsAndConditions || 'Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.'}</p>
                    </div>
                    {invoice.notes && (
                      <div className="mb-3">
                        <h6 className="mb-1">Notes</h6>
                        <p>{invoice.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="text-end">
                    <img src={sign} className="img-fluid" alt="sign" />
                  </div>
                  <div className="text-end mb-3">
                    <h6 className="fs-14 fw-medium pe-3">Authorized Signatory</h6>
                    <p>Company Representative</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-3">
                  <div className="invoice-logo">
                    <Link className="logo logo-normal" to="#">
                      <img src={logo} width="130" className="img-fluid" alt="logo" />
                    </Link>
                    <Link className="logo logo-white" to="#">
                      <img src={logoWhite} width="130" className="img-fluid" alt="logo" />
                    </Link>
                  </div>
                </div>
                <p className="text-dark mb-1">
                  Payment Made Via bank transfer / Cheque
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <p className="fs-12 mb-0 me-3">
                    Bank Name: <span className="text-dark">HDFC Bank</span>
                  </p>
                  <p className="fs-12 mb-0 me-3">
                    Account Number: <span className="text-dark">45366287987</span>
                  </p>
                  <p className="fs-12">
                    IFSC: <span className="text-dark">HDFC0018159</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /Invoices */}
          <div className="d-flex justify-content-center align-items-center mb-4">
            <Link
              to="#"
              onClick={handlePrint}
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
