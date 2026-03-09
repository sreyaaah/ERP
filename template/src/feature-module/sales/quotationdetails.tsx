import CommonFooter from "../../components/footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import { Link, useNavigate, useParams } from "react-router-dom";
import { pdf } from "../../utils/imagepath";
import { QuotationService } from "../services/quotation.service";
import { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";

const STATUS_BADGE: Record<string, string> = {
  Pending:   "badge-warning",
  Sent:      "badge-info",
  Ordered:   "badge-primary",
  Converted: "badge-success",
};

const QuotationDetails = () => {
  const route = all_routes;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [quotation, setQuotation] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    QuotationService.getById(id)
      .then((res) => setQuotation(res.data ?? res))
      .catch(() => setQuotation(null))
      .finally(() => setLoading(false));
  }, [id]);

  const handlePrint = () => window.print();

  const handleRefresh = () => window.location.reload();

  const handleDownloadPdf = () => {
    const element = document.getElementById("quotation-content");
    if (!element || !quotation) return;

    const opt = {
      margin: 10,
      filename: `${quotation.quotationNo}.pdf`,
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm" as const, format: "a4" as const, orientation: "portrait" as const },
    };

    html2pdf().set(opt).from(element).save();
  };

  // ── Loading state ──
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

  // ── Not found state ──
  if (!quotation) {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="text-center py-5">
            <h4>Quotation Not Found</h4>
            <p>The quotation you're looking for doesn't exist.</p>
            <Link to={route.quotationlist} className="btn btn-primary">
              Back to Quotations
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

          {/* ── Page Header ── */}
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Quotation Details</h4>
                <h6>{quotation.quotationNo}</h6>
              </div>
            </div>

            <ul className="table-top-head">
              <li>
                <Link
                  to="#"
                  onClick={handleDownloadPdf}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="PDF"
                >
                  <img src={pdf} alt="pdf" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRefresh();
                  }}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Refresh"
                >
                  <i className="feather icon-rotate-ccw" />
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
              <Link to={route.quotationlist} className="btn btn-primary">
                <i className="feather icon-arrow-left me-2" />
                Back to Quotations
              </Link>
            </div>
          </div>

          {/* ── Card Body ── */}
          <div className="card" id="quotation-content">
            <div className="card-body">

              {/* ── Section 1: Header info ── */}
              <div className="row justify-content-between align-items-start border-bottom mb-3 pb-3">
                <div className="col-md-6">
                  <h5 className="text-gray mb-1">
                    Quotation No&nbsp;
                    <span className="text-primary">{quotation.quotationNo}</span>
                  </h5>
                  <p className="mb-1 fw-medium">
                    Date:&nbsp;
                    <span className="text-dark">
                      {new Date(quotation.date).toLocaleDateString("en-IN")}
                    </span>
                  </p>
                  <p className="fw-medium mb-1">
                    Valid Until:&nbsp;
                    <span className="text-dark">
                      {quotation.validity
                        ? new Date(quotation.validity).toLocaleDateString("en-IN")
                        : "—"}
                    </span>
                  </p>
                  {quotation.reference && (
                    <p className="fw-medium mb-0">
                      Reference:&nbsp;
                      <span className="text-dark">{quotation.reference}</span>
                    </p>
                  )}
                </div>

                <div className="col-md-6 text-md-end">
                  <p className="text-dark mb-2 fw-semibold">Status</p>
                  <span
                    className={`badge ${STATUS_BADGE[quotation.status] || "badge-secondary"} text-white fs-10 px-2 rounded`}
                  >
                    <i className="ti ti-point-filled" />
                    {quotation.status}
                  </span>
                  <p className="mt-2 fw-medium mb-0">
                    Type:&nbsp;
                    <span className="text-dark">{quotation.quotationType || "—"}</span>
                  </p>
                </div>
              </div>

              {/* ── Section 2: From / To ── */}
              <div className="row border-bottom mb-3 pb-3">
                <div className="col-md-5">
                  <p className="text-dark mb-2 fw-semibold">From</p>
                  <h4 className="mb-1">Your Company</h4>
                </div>
                <div className="col-md-5">
                  <p className="text-dark mb-2 fw-semibold">To</p>
                  <h4 className="mb-1">{quotation.customerName || "—"}</h4>
                </div>
                <div className="col-md-2">
                  {quotation.description && (
                    <div className="mb-3">
                      <p className="text-title mb-2 fw-medium">Description</p>
                      <p className="mb-0">{quotation.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* ── Section 3: Quotation Type label ── */}
              <div>
                <p className="fw-medium mb-3">
                  Quotation Type:&nbsp;
                  <span className="text-dark fw-medium text-capitalize">
                    {quotation.quotationType}
                  </span>
                </p>

                {/* ── Items Table ── */}
                <div className="table-responsive mb-3">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>HSN/SAC</th>
                        <th className="text-end">Qty</th>
                        <th className="text-end">Rate (₹)</th>
                        <th className="text-end">Discount (%)</th>
                        <th className="text-end">Tax (%)</th>
                        <th className="text-end">Tax Amt (₹)</th>
                        <th className="text-end">Total (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(quotation.items || []).map((item: any, i: number) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>
                            <h6 className="mb-0">{item.productName || item.product || "—"}</h6>
                          </td>
                          <td>
                            <span className="text-gray-9">{item.hsnSac || "-"}</span>
                          </td>
                          <td className="text-gray-9 fw-medium text-end">{item.qty}</td>
                          <td className="text-gray-9 fw-medium text-end">
                            ₹{Number(item.rate).toFixed(2)}
                          </td>
                          <td className="text-gray-9 fw-medium text-end">
                            {item.discountPercent || 0}%
                          </td>
                          <td className="text-gray-9 fw-medium text-end">
                            {item.taxPercent || 0}%
                          </td>
                          <td className="text-gray-9 fw-medium text-end">
                            ₹{Number(item.taxAmount || 0).toFixed(2)}
                          </td>
                          <td className="text-gray-9 fw-medium text-end">
                            ₹{Number(item.totalCost || item.total || 0).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Section 4: Totals ── */}
              <div className="row border-bottom mb-3">
                <div className="col-md-5 ms-auto mb-3">
                  <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                    <p className="mb-0">Sub Total</p>
                    <p className="text-dark fw-medium mb-2">
                      ₹{Number(quotation.subtotal || 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                    <p className="mb-0">Tax</p>
                    <p className="text-dark fw-medium mb-2">
                      ₹{Number(quotation.totalTax || 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                    <h5>Total Amount</h5>
                    <h5>₹{Number(quotation.grandTotal || 0).toFixed(2)}</h5>
                  </div>
                  {quotation.amountInWords && (
                    <p className="fs-12">Amount in Words: {quotation.amountInWords}</p>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ── Footer Actions ── */}
          <div className="d-flex justify-content-center align-items-center mb-4">
            <Link
              to="#"
              onClick={handlePrint}
              className="btn btn-primary d-flex justify-content-center align-items-center me-2"
            >
              <i className="ti ti-printer me-2" />
              Print Quotation
            </Link>
            <Link
              to="#"
              onClick={handleDownloadPdf}
              className="btn btn-secondary d-flex justify-content-center align-items-center border me-2"
            >
              <i className="ti ti-download me-2" />
              Download PDF
            </Link>
            <button
              className="btn btn-outline-secondary d-flex justify-content-center align-items-center"
              onClick={() => navigate(route.quotationlist)}
            >
              <i className="ti ti-arrow-left me-2" />
              Back
            </button>
          </div>

        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default QuotationDetails;
