import React from "react";

interface RevenueWidgetsProps {
  summary: any;
}

const RevenueWidgets: React.FC<RevenueWidgetsProps> = ({ summary }) => {
  return (
    <div className="row">
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card revenue-widget flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              <div>
                <h4 className="mb-1">₹{Math.round(summary?.profit || 0).toLocaleString()}</h4>
                <p>Profit</p>
              </div>
              <span className="revenue-icon bg-cyan-transparent text-cyan">
                <i className="fa-solid fa-layer-group fs-16" />
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0">
                <span className={`fs-13 fw-bold ${summary?.profitChange >= 0 ? "text-success" : "text-danger"}`}>
                  {summary?.profitChange >= 0 ? "+" : ""}{summary?.profitChange}%
                </span> vs Last Month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card revenue-widget flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              <div>
                <h4 className="mb-1">₹{Math.round(summary?.totalInvoicesDue || 0).toLocaleString()}</h4>
                <p>Invoice Due</p>
              </div>
              <span className="revenue-icon bg-teal-transparent text-teal">
                <i className="ti ti-chart-pie fs-16" />
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0">
                <span className="fs-13 fw-bold text-success">+0%</span> vs Last Month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card revenue-widget flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              <div>
                <h4 className="mb-1">₹{Math.round(summary?.totalExpenses || 0).toLocaleString()}</h4>
                <p>Total Expenses</p>
              </div>
              <span className="revenue-icon bg-orange-transparent text-orange">
                <i className="ti ti-lifebuoy fs-16" />
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0">
                <span className={`fs-13 fw-bold ${summary?.purchaseChange >= 0 ? "text-danger" : "text-success"}`}>
                  {summary?.purchaseChange >= 0 ? "+" : ""}{summary?.purchaseChange}%
                </span> vs Last Month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card revenue-widget flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              <div>
                <h4 className="mb-1">₹{Math.round(summary?.totalPaymentReturns || 0).toLocaleString()}</h4>
                <p>Total Payment Returns</p>
              </div>
              <span className="revenue-icon bg-indigo-transparent text-indigo">
                <i className="ti ti-hash fs-16" />
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0">
                <span className="fs-13 fw-bold text-danger">0%</span> vs Last Month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueWidgets;
