import CommonFooter from "../../components/footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { logo } from "../../utils/imagepath";
import { QuotationService } from "../services/quotation.service";
import { BankService } from "../services/bank.service";
import { InvoiceService } from "../services/invoice.service";
import { useEffect, useState, useCallback } from "react";

const QuotationDetails = () => {
  const route = all_routes;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();

  const [quotation, setQuotation] = useState<any | null>(null);
  const [bankAccount, setBankAccount] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    Promise.all([
      QuotationService.getById(id),
      BankService.getAllBankAccounts({ status: true }).catch(() => ({
        data: [],
      })),
    ])
      .then(([qRes, bRes]) => {
        setQuotation(qRes.data ?? qRes);
        const defaultBank =
          bRes.data.find((b: any) => b.isDefault) || bRes.data[0];
        setBankAccount(defaultBank);
      })
      .catch(() => setQuotation(null))
      .finally(() => setLoading(false));
  }, [id]);

  const handlePrint = () => window.print();

  const handleDownloadPdf = useCallback(async () => {
    if (!quotation?.id) return;
    try {
      await QuotationService.downloadSinglePdf(
        quotation.id,
        quotation.quotationNo,
      );
    } catch (err) {
      console.error("Download failed:", err);
    }
  }, [quotation]);

  // Auto-trigger download when opened with ?download=true
  useEffect(() => {
    if (!quotation || loading) return;
    if (searchParams.get("download") === "true") {
      setTimeout(() => {
        handleDownloadPdf();
        // If close=true is passed, close the window/iframe after a delay
        if (searchParams.get("close") === "true") {
          setTimeout(() => {
            // For iframes, this doesn't do much on the parent side but prevents further execution
            if (window.parent !== window) {
              console.log("Download complete inside iframe");
            } else {
              window.close();
            }
          }, 3000);
        }
      }, 1000);
    }
  }, [quotation, loading, searchParams]);

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
      <style>{`
        @media print {
          .page-header, .footer-actions, .main-footer { display: none !important; }
          .page-wrapper { margin: 0 !important; padding: 0 !important; }
          .card { border: none !important; box-shadow: none !important; }
        }
        .quotation-container {
          font-family: 'Inter', sans-serif;
          color: #000;
          background: #fff;
          padding: 20px;
        }
        .quotation-table {
          width: 100%;
          border-collapse: collapse;
          border: 1.5px solid #000;
          margin-bottom: 0px;
        }
        .quotation-table th, .quotation-table td {
          border: 1px solid #000;
          padding: 8px;
          font-size: 13px;
        }
        .quotation-table thead th {
          background-color: #fff;
          text-align: center;
          font-weight: 700;
          vertical-align: middle;
        }
        .text-header-red { color: #800040; font-weight: 600; font-size: 18px; }
        .company-title { font-size: 22px; font-weight: 800; color: #000; margin-bottom: 5px; }
        .billed-to-section { margin-top: 20px; border-top: 1px solid #000; padding-top: 15px; }
        .total-box {
          border: 1.5px solid #000;
          border-top: none;
          padding: 10px;
        }
        .amount-in-words {
          border: 1.5px solid #000;
          border-top: none;
          padding: 12px;
          font-weight: 700;
          font-size: 15px;
        }
        .note-signature-section {
          display: flex;
          border: 1.5px solid #000;
          border-top: none;
        }
        .notes-area {
          flex: 1;
          border-right: 1.5px solid #000;
          padding: 10px;
          font-size: 12px;
        }
        .signature-area {
          width: 300px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          min-height: 100px;
        }
      `}</style>

      <div className="page-wrapper">
        <div className="content">
          {/* Page Header (Actions) */}
          <div className="page-header d-print-none">
            <div className="page-title">
              <h4>Quotation View</h4>
              <h6>View and Print Quotation</h6>
            </div>
            <div className="page-btn">
              <Link to={route.quotationlist} className="btn btn-primary">
                <i className="feather icon-arrow-left me-2" />
                Back to List
              </Link>
            </div>
          </div>

          <div className="card shadow-none border-0" id="quotation-content">
            <div className="card-body quotation-container">
              {/* Top Header Section */}
              <div className="row mb-2">
                <div className="col-6">
                  <div className="mb-3">
                    <img
                      src={logo}
                      alt="Logo"
                      style={{ maxHeight: "60px", marginBottom: "10px" }}
                    />
                    <h1
                      className="fw-bold m-0"
                      style={{ fontSize: "32px", letterSpacing: "1px" }}
                    >
                      QUOTATION
                    </h1>
                  </div>
                  <div className="mt-4" style={{ fontSize: "15px" }}>
                    <p className="mb-1">
                      <strong>Quote Ref No:</strong> {quotation.quotationNo}
                    </p>
                    <p className="mb-1">
                      <strong>Quote Date:</strong>{" "}
                      {new Date(quotation.date).toLocaleDateString("en-GB")}
                    </p>
                    <p className="mb-0">
                      <strong>Quote Validity:</strong>{" "}
                      {quotation.validity
                        ? new Date(quotation.validity).toLocaleDateString(
                            "en-GB",
                          )
                        : "—"}
                    </p>
                  </div>
                </div>

                <div className="col-6 text-end">
                  <p className="text-header-red mb-0">Quotation From</p>
                  <h2 className="company-title">
                    WEBERFOX TECHNOLOGIES PVT LTD.
                  </h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.4" }}>
                    <p className="mb-0">Building No :15/538, Koivila PO.</p>
                    <p className="mb-0">Thevalakkara , Kollam</p>
                    <p className="mb-0">PIN:691590</p>
                    <p className="mb-0">Ph: +91 9496269666</p>
                    <p className="mb-0">e-mail: contact@weberfox.com</p>
                    <p className="mb-0">
                      <strong>GSTIN: 32AADCW0489R1ZQ</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{ borderTop: "1.5px solid #000", margin: "10px 0" }}
              ></div>

              {/* Billing and Payment Section */}
              <div className="row mb-4">
                <div className="col-6">
                  <h5
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "18px",
                      borderBottom: "1px solid #ddd",
                      display: "inline-block",
                    }}
                  >
                    Billed to
                  </h5>
                  <div style={{ fontSize: "14px" }}>
                    <h6 className="fw-bold mb-1">{quotation.customerName}</h6>
                    {quotation.customerAddress ? (
                      <p className="mb-1" style={{ whiteSpace: "pre-wrap" }}>
                        {quotation.customerAddress}
                      </p>
                    ) : (
                      <p className="mb-1">Customer Address Not Provided</p>
                    )}
                    {quotation.customerGstin && (
                      <p className="mb-1">
                        <strong>GSTIN : {quotation.customerGstin}</strong>
                      </p>
                    )}
                    <p className="mb-0">
                      <strong>Place of Supply:</strong>{" "}
                      {quotation.placeOfSupply || "Kerala (32)"}
                    </p>
                  </div>
                </div>

                <div className="col-6 text-end">
                  <h5
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "18px",
                      borderBottom: "1px solid #ddd",
                      display: "inline-block",
                    }}
                  >
                    Payment Details
                  </h5>
                  <div style={{ fontSize: "14px" }}>
                    <p className="mb-1">
                      <strong>Bank Acc No:</strong>{" "}
                      {bankAccount?.accountNumber || "921020052009341"}
                    </p>
                    <p className="mb-1">
                      <strong>IFSC :</strong>{" "}
                      {bankAccount?.ifsc || "UTIB0000081"}
                    </p>
                    <p className="mb-0">
                      {bankAccount?.bankName || "Axis Bank"},{" "}
                      {bankAccount?.branch || "Kochi Branch"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quotation Subject */}
              <div className="mb-3">
                <h5
                  className="fw-bold text-decoration-underline"
                  style={{ fontSize: "17px" }}
                >
                  {quotation.description ||
                    `Quotation for ${quotation.items?.[0]?.productName || "Components"}`}
                </h5>
              </div>

              {/* Items Table */}
              <table className="quotation-table">
                <thead>
                  <tr>
                    <th rowSpan={2} style={{ width: "50px" }}>
                      Sl. No.
                    </th>
                    <th rowSpan={2}>Item & Description</th>
                    <th rowSpan={2} style={{ width: "100px" }}>
                      HSN/SAC
                    </th>
                    <th rowSpan={2} style={{ width: "60px" }}>
                      Qty.
                    </th>
                    <th rowSpan={2} style={{ width: "100px" }}>
                      Rate
                    </th>
                    <th rowSpan={2} style={{ width: "100px" }}>
                      Amt.
                    </th>
                    <th colSpan={2}>IGST</th>
                    <th rowSpan={2} style={{ width: "120px" }}>
                      Total Amount (Inc. IGST)
                    </th>
                  </tr>
                  <tr>
                    <th style={{ width: "60px" }}>%</th>
                    <th style={{ width: "100px" }}>Amt.</th>
                  </tr>
                </thead>
                <tbody>
                  {(quotation.items || []).map((item: any, index: number) => (
                    <tr key={index}>
                      <td className="text-center">{index + 1}</td>
                      <td>
                        <div className="fw-bold">
                          {item.productName || item.product}
                        </div>
                        {item.productDescription && (
                          <div className="small text-muted">
                            {item.productDescription}
                          </div>
                        )}
                      </td>
                      <td className="text-center">{item.hsnSac || "—"}</td>
                      <td className="text-center">{item.qty}</td>
                      <td className="text-end">
                        {(Number(item.rate) || 0).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-end">
                        {(item.qty * (Number(item.rate) || 0)).toLocaleString(
                          "en-IN",
                          { minimumFractionDigits: 2 },
                        )}
                      </td>
                      <td className="text-center">{item.taxPercent || 0}</td>
                      <td className="text-end">
                        {(Number(item.taxAmount) || 0).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="text-end fw-bold">
                        {(
                          Number(item.totalCost || item.total) || 0
                        ).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr
                    className="fw-bold"
                    style={{ backgroundColor: "#f9f9f9" }}
                  >
                    <td colSpan={3} className="text-center">
                      TOTAL
                    </td>
                    <td className="text-center">
                      {(quotation.items || []).reduce(
                        (acc: number, item: any) =>
                          acc + (Number(item.qty) || 0),
                        0,
                      )}
                    </td>
                    <td></td>
                    <td className="text-end">
                      {(Number(quotation.subtotal) || 0).toLocaleString(
                        "en-IN",
                        { minimumFractionDigits: 2 },
                      )}
                    </td>
                    <td></td>
                    <td className="text-end">
                      {(Number(quotation.totalTax) || 0).toLocaleString(
                        "en-IN",
                        { minimumFractionDigits: 2 },
                      )}
                    </td>
                    <td className="text-end">
                      {(Number(quotation.grandTotal) || 0).toLocaleString(
                        "en-IN",
                        { minimumFractionDigits: 2 },
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Amount Info */}
              <div className="total-box">
                <div className="row align-items-center">
                  <div className="col-12 text-center">
                    <h5 className="fw-bold mb-0" style={{ fontSize: "18px" }}>
                      Total Invoice Amount (Rounded off) : ₹
                      {Math.round(quotation.grandTotal).toLocaleString("en-IN")}
                    </h5>
                  </div>
                </div>
              </div>

              <div className="amount-in-words text-center">
                Total in Words:{" "}
                {quotation.amountInWords ||
                  InvoiceService.numberToWords(
                    quotation.grandTotal,
                    "Intrastate",
                  ).toUpperCase()}
              </div>

              {/* Notes and Signature */}
              <div className="note-signature-section">
                <div className="notes-area">
                  <p className="fw-bold mb-1 text-decoration-underline">
                    Notes:
                  </p>
                  <p className="mb-1">
                    <strong>Delivery:</strong> within 1 to 3 weeks from the date
                    of receipt of Purchase order
                  </p>
                  <p className="mb-1">
                    <strong>Warranty:</strong> As per Manufacturer
                  </p>
                  <p className="mb-0">
                    <strong>Mode of Despatch:</strong> Door Delivery
                  </p>
                </div>
                <div className="signature-area">
                  <p className="fw-bold mb-4">Authorized Signature</p>
                  <p className="small mb-0 mt-auto">
                    For WeberFox Technologies Pvt Ltd
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="d-flex justify-content-center align-items-center mt-4 mb-4 d-print-none footer-actions">
            <button
              onClick={handlePrint}
              className="btn btn-primary d-flex align-items-center me-2"
            >
              <i className="ti ti-printer me-2" /> Print Quotation
            </button>
            <button
              onClick={handleDownloadPdf}
              className="btn btn-secondary border d-flex align-items-center me-2"
            >
              <i className="ti ti-download me-2" /> Download PDF
            </button>
            <button
              onClick={() => navigate(route.quotationlist)}
              className="btn btn-outline-secondary d-flex align-items-center"
            >
              <i className="ti ti-arrow-left me-2" /> Back
            </button>
          </div>
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default QuotationDetails;
