import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { product11 } from "../../../utils/imagepath";
import { dashboardService } from "../../services/dashboard.service";
import { getImageUrl } from "../../../utils/imageUtils";

interface RecentSalesListProps {
  sales: any[];
}

const RecentSalesList: React.FC<RecentSalesListProps> = ({ sales }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("Weekly");
  const [saleList, setSaleList] = useState<any[]>(sales || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sales && saleList.length === 0) {
      setSaleList(sales);
    }
  }, [sales]);

  const fetchRecentSales = async (period: string, label: string) => {
    try {
      setLoading(true);
      const res = await dashboardService.getRecentTransactions(period);
      if (res.status) {
        setSaleList(res.data.recentSales);
        setSelectedPeriod(label);
      }
    } catch (error) {
      console.error("Error fetching recent sales:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card flex-fill">
      <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-inline-flex align-items-center">
          <span className="title-icon bg-soft-pink fs-16 me-2">
            <i className="ti ti-box" />
          </span>
          <h5 className="card-title mb-0">Recent Sales</h5>
        </div>
        <div className="dropdown">
          <Link to="#" className="dropdown-toggle btn btn-sm btn-white" data-bs-toggle="dropdown">
            <i className="ti ti-calendar me-1" /> {selectedPeriod}
          </Link>
          <ul className="dropdown-menu p-3">
            <li><Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchRecentSales("today", "Today"); }}>Today</Link></li>
            <li><Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchRecentSales("weekly", "Weekly"); }}>Weekly</Link></li>
            <li><Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchRecentSales("monthly", "Monthly"); }}>Monthly</Link></li>
          </ul>
        </div>
      </div>
      <div className="card-body position-relative" style={{ minHeight: '200px' }}>
        {loading && (
          <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div style={{ opacity: loading ? 0.3 : 1 }}>
          {saleList?.map((item: any, idx: number) => (
            <div key={idx} className={`d-flex align-items-center justify-content-between ${idx < saleList.length - 1 ? 'mb-4' : 'mb-0'}`}>
              <div className="d-flex align-items-center overflow-hidden" style={{ minWidth: 0, flex: 1, paddingRight: '15px' }}>
                <Link to="#" className="avatar avatar-lg flex-shrink-0">
                  <img src={getImageUrl(item.items?.[0]?.productId?.images?.[0]?.url) || product11} alt="img" />
                </Link>
                <div className="ms-3 overflow-hidden" style={{ minWidth: 0, flex: 1 }}>
                  <h6 className="fw-bold mb-1 text-truncate" title={item.customerId?.firstName ? `${item.customerId.firstName} ${item.customerId.lastName || ''}` : item.customerName || 'Customer'}>
                    <Link to="#">{item.customerId?.firstName ? `${item.customerId.firstName} ${item.customerId.lastName || ''}` : item.customerName || 'Customer'}</Link>
                  </h6>
                  <div className="fs-13 overflow-hidden">
                    <p className="text-truncate mb-0 text-muted" title={item.invoiceNumber || item.saleNumber}>
                        {item.invoiceNumber || item.saleNumber}
                    </p>
                    <p className="text-gray-9 mb-0 text-truncate font-weight-bold" title={`₹${Math.round(item.grandTotal)?.toLocaleString()}`}>
                        ₹{Math.round(item.grandTotal)?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-end flex-shrink-0" style={{ minWidth: '95px' }}>
                <p className="fs-13 mb-1 text-muted text-end">{new Date(item.createdAt).toLocaleDateString()}</p>
                <span className={`badge ${item.paymentStatus === 'Paid' ? 'badge-success' : 'badge-warning'} badge-xs d-inline-flex align-items-center`}>
                  <i className="ti ti-circle-filled fs-5 me-1" />
                  {item.paymentStatus}
                </span>
              </div>
            </div>
          ))}
          {(!saleList || saleList.length === 0) && !loading && (
            <div className="text-center p-3">No recent sales found for this period</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentSalesList;
