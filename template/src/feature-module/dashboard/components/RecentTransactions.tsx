import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { customer16 } from "../../../utils/imagepath";
import { dashboardService } from "../../services/dashboard.service";
import { getImageUrl } from "../../../utils/imageUtils";

interface RecentTransactionsProps {
  transactions: any;
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const [internalData, setInternalData] = useState<any>(transactions);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (transactions) {
      setInternalData(transactions);
    }
  }, [transactions]);

  const fetchRecent = async (period: string, label: string) => {
    try {
      setLoading(true);
      const res = await dashboardService.getRecentTransactions(period);
      if (res.status) {
        setInternalData(res.data);
        setSelectedPeriod(label);
      }
    } catch (error) {
      console.error("Error fetching recent transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card flex-fill">
      <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
        <div className="d-inline-flex align-items-center">
          <span className="title-icon bg-soft-orange fs-16 me-2">
            <i className="ti ti-flag" />
          </span>
          <h5 className="card-title mb-0">Recent Transactions</h5>
        </div>
        <div className="dropdown">
          <Link
            to="#"
            className="dropdown-toggle btn btn-sm btn-white d-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            {selectedPeriod}
          </Link>
          <ul className="dropdown-menu p-3">
            <li>
              <Link 
                to="#" 
                className="dropdown-item" 
                onClick={(e) => { e.preventDefault(); fetchRecent("today", "Today"); }}
              >
                Today
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="dropdown-item" 
                onClick={(e) => { e.preventDefault(); fetchRecent("monthly", "Monthly"); }}
              >
                Monthly
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body p-0 position-relative" style={{ minHeight: '300px' }}>
        {loading && (
          <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div style={{ opacity: loading ? 0.3 : 1 }}>
          <ul className="nav nav-tabs nav-justified transaction-tab">
            <li className="nav-item">
              <Link className="nav-link active" to="#sale" data-bs-toggle="tab">Sale</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#purchase-transaction" data-bs-toggle="tab">Purchase</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#quotation" data-bs-toggle="tab">Quotation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#invoices" data-bs-toggle="tab">Invoices</Link>
            </li>
          </ul>
          <div className="tab-content">
            {/* Sale Tab */}
            <div className="tab-pane show active" id="sale">
              <div className="table-responsive">
                <table className="table table-borderless custom-table">
                  <thead className="thead-light">
                    <tr>
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internalData?.recentSales?.map((item: any, idx: number) => (
                      <tr key={idx}>
                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to="#" className="avatar avatar-md"><img src={getImageUrl(item.customerId?.avatar) || customer16} className="img-fluid" alt="img" /></Link>
                            <div className="ms-2">
                              <h6 className="fw-medium">
                                <Link to="#">{item.customerId?.firstName ? `${item.customerId.firstName} ${item.customerId.lastName || ''}` : item.customerName || 'Customer'}</Link>
                              </h6>
                              <span className="fs-13 text-orange">#{item.invoiceNumber || item.saleNumber}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`badge ${item.paymentStatus === "Paid" ? 'badge-success' : 'badge-warning'} badge-xs d-inline-flex align-items-center`}>
                            <i className="ti ti-circle-filled fs-5 me-1" /> {item.paymentStatus}
                          </span>
                        </td>
                        <td className="text-gray-9">₹{Math.round(item.grandTotal)?.toLocaleString()}</td>
                      </tr>
                    ))}
                    {(!internalData?.recentSales || internalData.recentSales.length === 0) && (
                      <tr key="no-sale"><td colSpan={4} className="text-center">No recent sales found</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Purchase Tab */}
            <div className="tab-pane" id="purchase-transaction">
              <div className="table-responsive">
                <table className="table table-borderless custom-table">
                  <thead className="thead-light">
                    <tr>
                      <th>Date</th>
                      <th>Supplier</th>
                      <th>Status</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internalData?.recentPurchases?.map((item: any, idx: number) => (
                      <tr key={idx}>
                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to="#" className="avatar avatar-md"><img src={getImageUrl(item.customerId?.avatar) || customer16} className="img-fluid" alt="img" /></Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to="#">{item.supplierName || "Supplier"}</Link></h6>
                              <span className="fs-13 text-orange">#{item.purchaseNo}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`badge ${item.status === "received" || item.status === "Paid" ? 'badge-success' : 'badge-warning'} badge-xs d-inline-flex align-items-center text-capitalize`}>
                            <i className="ti ti-circle-filled fs-5 me-1" /> {item.status}
                          </span>
                        </td>
                        <td className="text-gray-9">₹{Math.round(item.grandTotal)?.toLocaleString()}</td>
                      </tr>
                    ))}
                    {(!internalData?.recentPurchases || internalData.recentPurchases.length === 0) && (
                      <tr key="no-purchase"><td colSpan={4} className="text-center">No recent purchases found</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quotation Tab */}
            <div className="tab-pane" id="quotation">
              <div className="table-responsive">
                <table className="table table-borderless custom-table">
                  <thead className="thead-light">
                    <tr>
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internalData?.recentQuotations?.map((item: any, idx: number) => (
                      <tr key={idx}>
                        <td>{new Date(item.date || item.createdAt).toLocaleDateString()}</td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to="#" className="avatar avatar-md"><img src={getImageUrl(item.customerId?.avatar) || customer16} className="img-fluid" alt="img" /></Link>
                            <div className="ms-2">
                              <h6 className="fw-medium">
                                <Link to="#">{item.customerId?.firstName ? `${item.customerId.firstName} ${item.customerId.lastName || ''}` : item.customerName || 'Customer'}</Link>
                              </h6>
                              <span className="fs-13 text-orange">#{item.quotationNo}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`badge ${item.status === "Sent" || item.status === "Converted" ? 'badge-success' : 'badge-warning'} badge-xs d-inline-flex align-items-center`}>
                            <i className="ti ti-circle-filled fs-5 me-1" /> {item.status}
                          </span>
                        </td>
                        <td className="text-gray-9">₹{Math.round(item.grandTotal)?.toLocaleString()}</td>
                      </tr>
                    ))}
                    {(!internalData?.recentQuotations || internalData.recentQuotations.length === 0) && (
                      <tr key="no-quotation"><td colSpan={4} className="text-center">No recent quotations found</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Invoices Tab */}
            <div className="tab-pane" id="invoices">
              <div className="table-responsive">
                <table className="table table-borderless custom-table">
                  <thead className="thead-light">
                    <tr>
                      <th>Invoice ID</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internalData?.invoices?.map((item: any, idx: number) => (
                      <tr key={idx}>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to="#" className="avatar avatar-md"><img src={getImageUrl(item.customerId?.avatar) || customer16} className="img-fluid" alt="img" /></Link>
                            <div className="ms-2">
                              <h6 className="fw-medium">
                                <Link to="#">{item.customerId?.firstName ? `${item.customerId.firstName} ${item.customerId.lastName || ''}` : item.customerName || 'Customer'}</Link>
                              </h6>
                              <span className="fs-13 text-orange">#{item.invoiceNumber}</span>
                            </div>
                          </div>
                        </td>
                        <td>{new Date(item.dueDate).toLocaleDateString()}</td>
                        <td>
                          <span className={`badge ${item.paymentStatus === "Paid" ? 'badge-success' : (item.paymentStatus === "Overdue" ? "badge-danger" : "badge-warning")} badge-xs d-inline-flex align-items-center`}>
                            <i className="ti ti-circle-filled fs-5 me-1" /> {item.paymentStatus}
                          </span>
                        </td>
                        <td className="text-gray-9">₹{Math.round(item.grandTotal)?.toLocaleString()}</td>
                      </tr>
                    ))}
                    {(!internalData?.invoices || internalData.invoices.length === 0) && (
                      <tr key="no-invoice"><td colSpan={4} className="text-center">No recent invoices found</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
