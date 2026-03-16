import CommonFooter from "../../components/footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { logo } from "../../utils/imagepath";
import { InvoiceService } from "../services/invoice.service";
import { BankService } from "../services/bank.service";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Invoicedetails = () => {
  const route = all_routes;
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();

  const [invoice, setInvoice] = useState<any | null>(null);
  const [bankAccount, setBankAccount] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    Promise.all([
      InvoiceService.getInvoiceById(id),
      BankService.getAllBankAccounts({ status: true }).catch(() => ({
        data: [],
      })),
    ])
      .then(([invRes, bRes]) => {
        setInvoice(invRes.data ?? invRes);
        const defaultBank =
          bRes.data.find((b: any) => b.isDefault) || bRes.data[0];
        setBankAccount(defaultBank);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handlePrint = () => window.print();

  const handleDownloadPdf = async () => {
    if (!id || !invoice) return;
    try {
      Swal.fire({
        title: "Generating PDF...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await InvoiceService.downloadInvoicePdf(id, invoice.invoiceNumber);
      Swal.close();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Download Failed",
        text: "Could not download the invoice. Please try again.",
      });
    }
  };

  // Auto-trigger download when opened with ?download=true
  useEffect(() => {
    if (!invoice || loading) return;
    if (searchParams.get("download") === "true") {
      handleDownloadPdf().then(() => {
        if (searchParams.get("close") === "true") {
          setTimeout(() => {
            if (window.parent !== window) {
              console.log("Download complete inside iframe");
            } else {
              window.close();
            }
          }, 2000);
        }
      });
    }
  }, [invoice, loading, searchParams]);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!invoice)
    return <div className="text-center py-5">Invoice Not Found</div>;

  const quoteMatch = invoice.notes?.match(
    /Converted from Quotation: (.*?) \(Dated: (.*?)\)/,
  );
  const quoteRefNo = quoteMatch?.[1] || "—";
  const quoteDate = quoteMatch?.[2] || "—";

  return (
    <div>
      <style>{`

.invoice-doc{
max-width:950px;
margin:auto;
font-family:Arial, Helvetica, sans-serif;
color:#000;
}

.box-container{
border:1px solid #aaa;
margin-bottom:15px;
}

.invoice-table{
width:100%;
border-collapse:collapse;
font-size:11px;
}

.invoice-table th,
.invoice-table td{
border-left:1px solid #aaa;
border-right:1px solid #aaa;
border-top:none;
border-bottom:none;
padding:6px;
}

.invoice-table thead th{
border-top: 1px solid #aaa;
border-bottom: 1px solid #aaa;
}

.invoice-table tbody tr:last-child td{
/* prevent bottom gap */
}

.invoice-table th{
text-align:center;
font-weight:400;
background:#fff;
}

.invoice-table td{
vertical-align:middle;
}

.text-center{text-align:center}
.text-end{text-align:right}

.invoice-table td, 
.invoice-table th {
  white-space: normal;
  word-wrap: break-word;
}

/* Prevent wrapping for specific columns */
.invoice-table th:nth-child(1),
.invoice-table th:nth-child(3),
.invoice-table th:nth-child(4),
.invoice-table th:nth-child(5),
.invoice-table th:nth-child(6),
.invoice-table th:nth-child(7),
.invoice-table th:nth-child(8),
.invoice-table td:nth-child(1),
.invoice-table td:nth-child(3),
.invoice-table td:nth-child(4),
.invoice-table td:nth-child(5),
.invoice-table td:nth-child(6),
.invoice-table td:nth-child(7),
.invoice-table td:nth-child(8) {
  white-space: nowrap;
}

.bank-table td{
border:none;
padding:2px 0;
font-size:12px;
}

@media print{

.page-header,
.footer-actions,
.main-footer{
display:none !important;
}

.page-wrapper{
margin:0;
padding:0;
}

.invoice-doc{
width:100%;
}

}

`}</style>

      <div className="page-wrapper">
        <div className="content">
          <div className="page-header d-print-none mb-4">
            <div className="page-title">
              <h4>Invoice View</h4>
            </div>

            <Link to={route.invoicelist} className="btn btn-primary">
              Back
            </Link>
          </div>

          <div id="invoice-content" className="invoice-doc">
            <div
              className="text-center fw-bold mb-2"
              style={{ fontSize: "16px" }}
            >
              Tax Invoice
            </div>

            {/* HEADER */}
            <div className="box-container">
              <div className="d-flex">
                <div className="col-6 border-end p-3">
                  <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Invoice From:
                  </div>

                  <div style={{ fontWeight: "bold" }}>
                    WEBERFOX TECHNOLOGIES PVT LTD
                  </div>

                  <div style={{ fontSize: "12px" }}>
                    Building No:15/538, Koduvazhathu, Koivila P.O, Thevalakkara,
                    Karunagappally, Kollam, Kerala PIN:691590
                  </div>

                  <div style={{ fontSize: "12px" }}>
                    GSTIN : 32AADCW0489R1ZQ
                  </div>

                  <div style={{ fontSize: "12px" }}>State : Kerala (32)</div>

                  <div style={{ fontSize: "12px" }}>
                    Email : contact@weberfox.com
                  </div>

                  <div style={{ fontSize: "12px" }}>
                    Contact : +91 94962 69666
                  </div>

                  <hr />

                  <div style={{ fontWeight: "bold" }}>Buyer (Bill To)</div>

                  <div style={{ fontWeight: "bold" }}>
                    {invoice.customer?.name || invoice.customerName}
                  </div>

                  <div style={{ fontSize: "12px" }}>
                    {invoice.customerAddress}
                  </div>

                  <div style={{ fontSize: "12px" }}>
                    GSTIN : {invoice.customerGstin || "—"}
                  </div>
                </div>

                <div className="col-6">
                  <div className="text-center border-bottom p-2">
                    <img src={logo} style={{ height: "45px" }} />

                    <div style={{ fontSize: "10px", fontWeight: "bold" }}>
                      AHEAD BY A WAVELENGTH
                    </div>
                  </div>

                  <div className="d-flex border-bottom">
                    <div className="col-7 border-end p-2">
                      <div style={{ fontSize: "12px" }}>Invoice No</div>
                      <div style={{ fontWeight: "bold" }}>
                        {invoice.invoiceNumber}
                      </div>
                    </div>

                    <div className="col-5 text-center p-2">
                      <div style={{ fontSize: "12px" }}>Dated</div>
                      <div className="fw-bold">
                        {invoice.createdAt
                          ? new Date(invoice.createdAt).toLocaleDateString(
                              "en-GB",
                            )
                          : invoice.invoiceDate
                            ? new Date(invoice.invoiceDate).toLocaleDateString(
                                "en-GB",
                              )
                            : "—"}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex border-bottom">
                    <div className="col-7 border-end p-2">
                      <div style={{ fontSize: "12px" }}>Quote Ref</div>
                      <div style={{ fontWeight: "bold" }}>{quoteRefNo}</div>
                    </div>

                    <div className="col-5 text-center p-2">
                      <div style={{ fontSize: "12px" }}>Dated</div>
                      <div className="fw-bold">
                        {quoteDate !== "—"
                          ? new Date(quoteDate).toLocaleDateString("en-GB")
                          : "—"}
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div style={{ fontSize: "12px" }}>Place of Supply</div>
                    <div style={{ fontWeight: "bold" }}>
                      {invoice.placeOfSupply || "KARNATAKA (29)"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEMS */}
            <div className="box-container">
              <table className="invoice-table">
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl.No</th>
                    <th rowSpan={2}>Item & Description</th>
                    <th rowSpan={2}>HSN/SAC</th>
                    <th rowSpan={2}>Qty</th>
                    <th rowSpan={2}>Rate</th>
                    <th rowSpan={2}>Amount</th>
                    <th colSpan={2}>IGST</th>
                    <th rowSpan={2}>Total Amount (Inc GST)</th>
                  </tr>

                  <tr>
                    <th>%</th>
                    <th>Amt</th>
                  </tr>
                </thead>

                <tbody>
                  {invoice.items.map((item: any, idx: number) => {
                    const qty = Number(item.quantity || item.qty) || 0;
                    const rate = Number(item.rate) || 0;
                    const tax = Number(item.taxPercent) || 0;

                    const amount = qty * rate;
                    const taxAmt = (amount * tax) / 100;
                    const total = amount + taxAmt;

                    return (
                      <tr key={idx} style={{ height: "38px" }}>
                        <td className="text-center">{idx + 1}</td>

                        <td>{item.productName}</td>

                        <td className="text-center">{item.hsnSac || "—"}</td>

                        <td className="text-center">{qty}</td>

                        <td className="text-end">
                          {rate.toLocaleString("en-IN")}
                        </td>

                        <td className="text-end">
                          {amount.toLocaleString("en-IN")}
                        </td>

                        <td className="text-center">{tax}</td>

                        <td className="text-end">
                          {taxAmt.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                          })}
                        </td>

                        <td className="text-end">
                          {total.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                          })}
                        </td>
                      </tr>
                    );
                  })}

                  <tr
                    style={{
                      fontWeight: "bold",
                      borderTop: "1px solid #aaa",
                      borderBottom: "1px solid #aaa",
                    }}
                  >
                    <td></td>
                    <td className="text-center">TOTAL</td>
                    <td></td>

                    <td className="text-center">
                      {invoice.items.reduce(
                        (s: any, i: any) =>
                          s + (Number(i.quantity || i.qty) || 0),
                        0,
                      )}
                    </td>

                    <td></td>

                    <td className="text-end">
                      {invoice.subtotal.toLocaleString("en-IN")}
                    </td>

                    <td></td>

                    <td className="text-end">
                      {invoice.taxAmount.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </td>

                    <td className="text-end">
                      {invoice.grandTotal.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                style={{
                  borderTop: "1px solid #aaa",
                  padding: "10px",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                Total Invoice Amount (Rounded off) :
                <strong>
                  {" "}
                  ₹{Math.round(invoice.grandTotal).toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            {/* FOOTER */}

            <div className="box-container">
              <div className="p-2 border-bottom">
                <div style={{ fontSize: "12px" }}>
                  Amount Chargeable (in words)
                </div>

                <div style={{ fontWeight: "bold" }}>
                  INR{" "}
                  {InvoiceService.numberToWords(
                    invoice.grandTotal,
                    invoice.invoiceType,
                  ).toUpperCase()}
                </div>
              </div>

              <div className="d-flex">
                <div className="col-6 border-end p-3">
                  <div style={{ fontWeight: "bold" }}>Remarks</div>

                  <div style={{ fontSize: "12px" }}>
                    {invoice.notes || "Warranty: As per Manufacturer"}
                  </div>
                </div>

                <div className="col-6">
                  <div className="p-3 border-bottom">
                    <div style={{ fontWeight: "bold" }}>
                      Company's Bank Details
                    </div>

                    <table className="bank-table">
                      <tbody>
                        <tr>
                          <td width="150">A/c Holder</td>
                          <td>:</td>
                          <td>WEBERFOX TECHNOLOGIES PVT LTD</td>
                        </tr>

                        <tr>
                          <td>Bank Name</td>
                          <td>:</td>
                          <td>{bankAccount?.bankName}</td>
                        </tr>

                        <tr>
                          <td>A/c No</td>
                          <td>:</td>
                          <td>{bankAccount?.accountNumber}</td>
                        </tr>

                        <tr>
                          <td>Branch & IFSC</td>
                          <td>:</td>
                          <td>
                            {bankAccount?.branch} & {bankAccount?.ifsc}
                          </td>
                        </tr>

                        <tr>
                          <td>SWIFT</td>
                          <td>:</td>
                          <td>{bankAccount?.swiftCode}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-3 text-end">
                    for WEBERFOX TECHNOLOGIES PVT LTD
                    <br />
                    <br />
                    Authorized Signatory
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-actions text-center mt-4">
            <button onClick={handlePrint} className="btn btn-primary me-2">
              Print Invoice
            </button>

            <button
              onClick={handleDownloadPdf}
              className="btn btn-secondary me-2"
            >
              Download PDF
            </button>
          </div>
        </div>

        <CommonFooter />
      </div>
    </div>
  );
};

export default Invoicedetails;
