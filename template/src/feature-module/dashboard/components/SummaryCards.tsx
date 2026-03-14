import React from "react";

interface SummaryCardsProps {
  summary: any;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ summary }) => {
  return (
    <div className="row">
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card bg-primary sale-widget flex-fill">
          <div className="card-body d-flex align-items-center">
            <span className="sale-icon bg-white text-primary">
              <i className="ti ti-file-text fs-24" />
            </span>
            <div className="ms-2">
              <div className="d-inline-flex align-items-center flex-wrap gap-2">
                <h4 className="text-white">
                  ₹{Math.round(summary?.totalSales || 0).toLocaleString()}
                </h4>
                <span className={`badge ${summary?.salesChange >= 0 ? "badge-soft-primary" : "badge-soft-danger"}`}>
                  <i className={`ti ${summary?.salesChange >= 0 ? "ti-arrow-up" : "ti-arrow-down"} me-1`} />
                  {summary?.salesChange >= 0 ? "+" : ""}{summary?.salesChange}%
                </span>
              </div>
              <p className="text-white fs-13 mb-0">Total Sales</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card bg-secondary sale-widget flex-fill">
          <div className="card-body d-flex align-items-center">
            <span className="sale-icon bg-white text-secondary">
              <i className="ti ti-repeat fs-24" />
            </span>
            <div className="ms-2">
              <div className="d-inline-flex align-items-center flex-wrap gap-2">
                <h4 className="text-white">
                  ₹{Math.round(summary?.totalSalesReturn || 0).toLocaleString()}
                </h4>
                <span className="badge badge-soft-secondary">
                  <i className="ti ti-arrow-down me-1" />
                  0%
                </span>
              </div>
              <p className="text-white fs-13 mb-0">Total Sales Return</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card bg-danger sale-widget flex-fill">
          <div className="card-body d-flex align-items-center">
            <span className="sale-icon bg-white text-danger">
              <i className="ti ti-box fs-24" />
            </span>
            <div className="ms-2">
              <div className="d-inline-flex align-items-center flex-wrap gap-2">
                <h4 className="text-white">
                  ₹{Math.round(summary?.totalPurchases || 0).toLocaleString()}
                </h4>
                <span className={`badge ${summary?.purchaseChange >= 0 ? "badge-soft-success" : "badge-soft-danger"}`}>
                  <i className={`ti ${summary?.purchaseChange >= 0 ? "ti-arrow-up" : "ti-arrow-down"} me-1`} />
                  {summary?.purchaseChange >= 0 ? "+" : ""}{summary?.purchaseChange}%
                </span>
              </div>
              <p className="text-white fs-13 mb-0">Total Purchase</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card bg-teal sale-widget flex-fill">
          <div className="card-body d-flex align-items-center">
            <span className="sale-icon bg-white text-teal">
              <i className="ti ti-repeat fs-24" />
            </span>
            <div className="ms-2">
              <div className="d-inline-flex align-items-center flex-wrap gap-2">
                <h4 className="text-white">
                  ₹{Math.round(summary?.totalPurchaseReturn || 0).toLocaleString()}
                </h4>
                <span className="badge badge-soft-teal">
                  <i className="ti ti-arrow-up me-1" />
                  0%
                </span>
              </div>
              <p className="text-white fs-13 mb-0">Total Purchase Return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
