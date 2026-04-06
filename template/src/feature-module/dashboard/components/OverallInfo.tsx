import React from "react";
import {  } from "react-router-dom";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

interface OverallInfoProps {
  summary: any;
}

const OverallInfo: React.FC<OverallInfoProps> = ({ summary }) => {
  const customerChart: ApexOptions = {
    chart: {
      type: "radialBar",
      height: 130,
      width: "100%",
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      radialBar: {
        hollow: { margin: 10, size: "30%" },
        track: { background: "#E6EAED", strokeWidth: "100%", margin: 5 },
        dataLabels: {
          name: { offsetY: -5 },
          value: { offsetY: 5 },
        },
      },
    },
    grid: { padding: { top: 0, bottom: 0, left: 0, right: 0 } },
    stroke: { lineCap: "round" },
    colors: ["#E04F16", "#0E9384"],
    labels: ["First Time", "Return"],
  };

  const total = (summary?.firstTimeCount || 0) + (summary?.returningCount || 0);
  const firstTimePercent = total > 0 ? Math.round((summary?.firstTimeCount / total) * 100) : 0;
  const returningPercent = total > 0 ? Math.round((summary?.returningCount / total) * 100) : 0;
  const series = [firstTimePercent, returningPercent];

  return (
    <div className="card flex-fill">
      <div className="card-header">
        <div className="d-inline-flex align-items-center">
          <span className="title-icon bg-soft-info fs-16 me-2">
            <i className="ti ti-info-circle" />
          </span>
          <h5 className="card-title mb-0">Overall Information</h5>
        </div>
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="info-item border bg-light p-3 text-center rounded">
              <div className="mb-2 text-info fs-24"><i className="ti ti-user-check" /></div>
              <p className="mb-1 text-muted fs-13">Suppliers</p>
              <h5 className="mb-0 fw-bold">{summary?.supplierCount || 0}</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-item border bg-light p-3 text-center rounded">
              <div className="mb-2 text-orange fs-24"><i className="ti ti-users" /></div>
              <p className="mb-1 text-muted fs-13">Customer</p>
              <h5 className="mb-0 fw-bold">{summary?.customerCount || 0}</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-item border bg-light p-3 text-center rounded">
              <div className="mb-2 text-teal fs-24"><i className="ti ti-shopping-cart" /></div>
              <p className="mb-1 text-muted fs-13">Orders</p>
              <h5 className="mb-0 fw-bold">{summary?.totalOrders || 0}</h5>
            </div>
          </div>
        </div>

        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <div className="info-item border bg-soft-danger p-3 text-center rounded">
              <div className="mb-2 text-danger fs-24"><i className="ti ti-calendar-off" /></div>
              <p className="mb-1 text-muted fs-13">Expired</p>
              <h5 className="mb-0 fw-bold text-danger">{summary?.expiredCount || 0}</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-item border bg-soft-warning p-3 text-center rounded">
              <div className="mb-2 text-warning fs-24"><i className="ti ti-box" /></div>
              <p className="mb-1 text-muted fs-13">Low Stock</p>
              <h5 className="mb-0 fw-bold text-warning">{summary?.lowStockCount || 0}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer pb-sm-0">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <h6>Customers Overview</h6>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-5">
            <div id="customer-chart">
              <Chart options={customerChart} series={series} type="radialBar" height={130} />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="row gx-0">
              <div className="col-sm-6">
                <div className="text-center border-end">
                  <h2 className="mb-1">{summary?.firstTimeCount || 0}</h2>
                  <p className="text-orange mb-2">First Time</p>
                  <span className="badge badge-success badge-xs d-inline-flex align-items-center">
                    <i className="ti ti-arrow-up-left me-1" /> {firstTimePercent}%
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="text-center">
                  <h2 className="mb-1">{summary?.returningCount || 0}</h2>
                  <p className="text-teal mb-2">Return</p>
                  <span className="badge badge-success badge-xs d-inline-flex align-items-center">
                    <i className="ti ti-arrow-up-left me-1" /> {returningPercent}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallInfo;

