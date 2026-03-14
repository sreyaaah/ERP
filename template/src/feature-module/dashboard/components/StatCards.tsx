import React from "react";

interface StatCardsProps {
  summary: any;
}

const StatCards: React.FC<StatCardsProps> = ({ summary }) => {
  return (
    <div className="row">
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card flex-fill">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-md bg-soft-primary">
                <i className="ti ti-users fs-20" />
              </span>
              <div className="ms-2">
                <h4 className="mb-1">{summary?.customerCount || "0"}</h4>
                <p className="fs-13 mb-0">Total Customers</p>
              </div>
            </div>
            <div>
              <span className={`badge ${summary?.customerChange >= 0 ? "badge-soft-success" : "badge-soft-danger"}`}>
                <i className={`ti ${summary?.customerChange >= 0 ? "ti-arrow-up" : "ti-arrow-down"} me-1`} />
                {summary?.customerChange >= 0 ? "+" : ""}{summary?.customerChange}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card flex-fill">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-md bg-soft-secondary">
                <i className="ti ti-box fs-20" />
              </span>
              <div className="ms-2">
                <h4 className="mb-1">{summary?.productCount || "0"}</h4>
                <p className="fs-13 mb-0">Total Products</p>
              </div>
            </div>
            <div>
              <span className={`badge ${summary?.productChange >= 0 ? "badge-soft-success" : "badge-soft-danger"}`}>
                <i className={`ti ${summary?.productChange >= 0 ? "ti-arrow-up" : "ti-arrow-down"} me-1`} />
                {summary?.productChange >= 0 ? "+" : ""}{summary?.productChange}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card flex-fill">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-md bg-soft-danger">
                <i className="ti ti-file-invoice fs-20" />
              </span>
              <div className="ms-2">
                <h4 className="mb-1">{summary?.invoiceCount || "0"}</h4>
                <p className="fs-13 mb-0">Total Invoices</p>
              </div>
            </div>
            <div>
              <span className={`badge ${summary?.invoiceChange >= 0 ? "badge-soft-success" : "badge-soft-danger"}`}>
                <i className={`ti ${summary?.invoiceChange >= 0 ? "ti-arrow-up" : "ti-arrow-down"} me-1`} />
                {summary?.invoiceChange >= 0 ? "+" : ""}{summary?.invoiceChange}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 col-12 d-flex">
        <div className="card flex-fill">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-md bg-soft-info">
                <i className="ti ti-quotes fs-20" />
              </span>
              <div className="ms-2">
                <h4 className="mb-1">{summary?.quotationCount || "0"}</h4>
                <p className="fs-13 mb-0">Total Quotations</p>
              </div>
            </div>
            <div>
              <span className={`badge ${summary?.quotationChange >= 0 ? "badge-soft-success" : "badge-soft-danger"}`}>
                <i className={`ti ${summary?.quotationChange >= 0 ? "ti-arrow-up" : "ti-arrow-down"} me-1`} />
                {summary?.quotationChange >= 0 ? "+" : ""}{summary?.quotationChange}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCards;
