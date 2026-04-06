import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { customer11 } from "../../../utils/imagepath";
import { all_routes } from "../../../routes/all_routes";
import { dashboardService } from "../../services/dashboard.service";
import { getImageUrl } from "../../../utils/imageUtils";

interface TopCustomersProps {
  customers: any[];
}

const TopCustomers: React.FC<TopCustomersProps> = ({ customers }) => {
  const route = all_routes;
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
  const [customerList, setCustomerList] = useState<any[]>(customers || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (customers) {
      setCustomerList(customers);
    }
  }, [customers]);

  const fetchTopCustomers = async (period: string, label: string) => {
    try {
      setLoading(true);
      const res = await dashboardService.getTopCustomers(period);
      if (res.status) {
        setCustomerList(res.data);
        setSelectedPeriod(label);
      }
    } catch (error) {
      console.error("Error fetching top customers:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card flex-fill">
      <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-inline-flex align-items-center">
          <span className="title-icon bg-soft-orange fs-16 me-2">
            <i className="ti ti-users" />
          </span>
          <h5 className="card-title mb-0">Top Customers</h5>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="dropdown">
            <Link to="#" className="dropdown-toggle btn btn-sm btn-white d-flex align-items-center" data-bs-toggle="dropdown">
              <i className="ti ti-calendar me-1" /> {selectedPeriod}
            </Link>
            <ul className="dropdown-menu p-3">
              <li>
                <Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchTopCustomers("today", "Today"); }}>
                  Today
                </Link>
              </li>
              <li>
                <Link to="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); fetchTopCustomers("monthly", "Monthly"); }}>
                  Monthly
                </Link>
              </li>
            </ul>
          </div>
          <Link to={route.customers} className="fs-13 fw-medium text-decoration-underline text-nowrap">
            View All
          </Link>
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
          {customerList?.map((item: any, idx: number) => (
            <div key={idx} className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3 flex-wrap gap-2">
              <div className="d-flex align-items-center">
                <Link to="#" className="avatar avatar-lg flex-shrink-0">
                  <img src={getImageUrl(item.customerInfo?.avatar) || customer11} alt="img" />
                </Link>
                <div className="ms-2">
                  <h6 className="fs-14 fw-bold mb-1">
                    <Link to="#">{item.customerInfo?.firstName || 'Unknown'} {item.customerInfo?.lastName || ''}</Link>
                  </h6>
                  <div className="d-flex align-items-center item-list">
                    <p className="d-inline-flex align-items-center">
                      <i className="ti ti-map-pin me-1" />
                      {item.customerInfo?.country || "N/A"}
                    </p>
                    <p>{item.orderCount} Orders</p>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <h5 className="mb-0">₹{Math.round(item.totalSpend)?.toLocaleString()}</h5>
              </div>
            </div>
          ))}
          {(!customerList || customerList.length === 0) && !loading && (
            <div className="text-center py-4 text-muted">No top customers found for this period</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCustomers;
